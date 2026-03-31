"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oauthConfig = void 0;
// OAuth configuration placeholder
exports.oauthConfig = {
    google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        redirectUrl: process.env.GOOGLE_REDIRECT_URL,
    },
    github: {
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        redirectUrl: process.env.GITHUB_REDIRECT_URL,
    },
};
