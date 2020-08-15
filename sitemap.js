const sitemap = require('nextjs-sitemap-generator');  

import client from './src/functions/contentful-client';

module.exports = async () => {
    const getBlogLinks = async () => {
        const posts = await client.getAllPosts();
        return await posts.items.map(({fields: {slug}}) => `/blog/${slug}`)
    }
    const blogLinks = await getBlogLinks();
    const sitemapConfig = {
        baseUrl: 'https://arounda.agency',
        ignoreIndexFiles: true,
        pagesDirectory: __dirname + "/pages",
        ignoredPaths: ['/blog/[slug]'],
        extraPaths: [...blogLinks],
        targetDirectory: __dirname + '/public/',
        nextConfigPath: __dirname + "/next.config.js",
        ignoredExtensions: [
            'png',
            'jpg'
        ],
    };
    
    sitemap(sitemapConfig);
    return true;
}