'use strict';

/**
 * server-provider service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::server-provider.server-provider');
