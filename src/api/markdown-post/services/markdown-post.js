'use strict';

/**
 * markdown-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::markdown-post.markdown-post');
