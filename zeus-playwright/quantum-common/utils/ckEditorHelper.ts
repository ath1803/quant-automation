import { Locator, expect } from "@playwright/test";

export class CKEditorHelper {
    // Method to fill CKEditor content
    static async fillContent(container: Locator, content: any) {
      if (container != null && content != null) {
        await expect(container).toBeVisible();
        let ckIFrame: any = container.locator("[name='ckEditorRef']").frameLocator('iframe');
        await ckIFrame.locator('html').click();
        await ckIFrame.locator('body').fill(content);
      }
    }
    // Method to clear content
    static async clearContent(container: Locator) {
      if (container != null) {
        await expect(container).toBeVisible();
        let ckIFrame: any = container.locator("[name='ckEditorRef']").frameLocator('iframe');
        await ckIFrame.locator('html').click();
        await ckIFrame.locator('body').clear();
      }
    }
    // Method to validate contenta
    static async validateContent(container: Locator, content: any) {
      if (container != null && content != null) {
        await expect(container).toBeVisible();
        let ckIFrame: any = container.locator("[name='ckEditorRef']").frameLocator('iframe');
        await expect(ckIFrame.locator('body').locator('p')).toBeVisible();
        await ckIFrame.locator('html').click();
        await expect(ckIFrame.locator('body').locator('p')).toHaveText(content);
      }
    }
}