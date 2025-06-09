import env from '../env';

const urls: Record<string, string> = {
    LMS_AUTH_LOGIN: `https://${env.LMS_DOMAIN}/auth/login`,
    CMS_AUTH_LOGIN: `https://${env.CMS_DOMAIN}/auth/login`,
    CMS_HOST: `https://${env.CMS_DOMAIN}`,
    LMS_HOST: `https://${env.LMS_DOMAIN}/login`,
    LMS_ADMIN_LOGIN: `https://${env.LMS_DOMAIN}/login/admin`,
    CMS_DOMAIN: `${env.CMS_DOMAIN}`,
    LMS_DOMAIN: `${env.LMS_DOMAIN}`
}
export default urls;

