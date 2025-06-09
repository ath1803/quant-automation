import { BrowserContext, Page, Browser } from '@playwright/test';

class ContextManager {
    private static instance: ContextManager;
    private contexts: Map<string, BrowserContext> = new Map();
    private pages: Map<string, Page> = new Map();
    private activePageKey: string | null = null;

    constructor(private browser: Browser) { }

    static getInstance(): ContextManager {
        if (!ContextManager.instance) {
            throw new Error('ContextManager not initialized.');
        }
        return ContextManager.instance;
    }

    static createInstance(browser: Browser): ContextManager {
        if (!ContextManager.instance) {
            ContextManager.instance = new ContextManager(browser);
        }
        return ContextManager.instance;
    }

    /**
     * Creates a new browser context and stores it with a key.
     * @param key A unique identifier for the context.
     */
    public async createContext(key: string): Promise<BrowserContext> {
        const context = await this.browser.newContext();
        this.setContext(key, context);
        return context;
    }

    /**
     * Gets a browser context by its key.
     * @param key The unique identifier for the context.
     */
    public getContext(key: string): BrowserContext {
        const context = this.contexts.get(key);
        if (!context) {
            throw new Error(`No context found for key: ${key}`);
        }
        return context;
    }

    /**
     * Creates a new page within a specific context.
     * @param contextKey The key of the context to create the page in.
     * @param pageKey A unique identifier for the page.
     */
    public async createPage(contextKey: string, pageKey: string): Promise<Page> {
        const context = this.getContext(contextKey);
        const page = await context.newPage();
        this.setPage(pageKey, page);
        return page;
    }

    /**
    * set a page
    * @param pageKey A unique key for the page.
    * @param page page object
    */
    public setPage(pageKey: string, page: Page) {
        this.pages.set(pageKey, page);
    }

    /**
    * set a context
    * @param contextKey A unique key for the context.
    * @param context context object
    */
    public setContext(contextKey: string, context: BrowserContext) {
        this.contexts.set(contextKey, context);
    }

    /**
     * Sets the active page by its unique key.
     * @param pageKey The unique identifier for the page.
     */
    public setActivePage(pageKey: string) {
        if (!this.pages.has(pageKey)) {
            throw new Error(`No page found for key: ${pageKey}`);
        }
        this.activePageKey = pageKey;
    }

    /**
     * Gets the currently active page.
     */
    public getActivePage(): Page {
        if (!this.activePageKey) {
            throw new Error(`No active page is set.`);
        }
        const page = this.pages.get(this.activePageKey);
        if (!page) {
            throw new Error(`No page found for active key: ${this.activePageKey}`);
        }
        return page;
    }

    public setCurrentContextAndPage(context: BrowserContext, page: Page, role: string) {
        // Create a new context for this login session
        const contextKey = `${role}-context`;
        const pageKey = `${role}-page`;

        this.setContext(contextKey, context);
        this.setPage(pageKey, page);

        // Set the active page
        this.setActivePage(pageKey);
    }

    public async createNewContextAndPage(role: string) {
        const contextKey = `${role}-context`;
        const pageKey = `${role}-page`;
    
        // Create a new context for the new login session
        await this.createContext(contextKey);
    
        // Create a new page in the new context
        const newPage = await this.createPage(contextKey, pageKey);

        // Set the new page as the active page
        this.setActivePage(pageKey);

        return newPage;
    }

    async closePages() {
        for (const page of this.pages.values()) {
            await page.close();
        }
    }

    async closeContexts() {
        for (const context of this.contexts.values()) {
            await context.close();
        }
    }
}

export default ContextManager;
