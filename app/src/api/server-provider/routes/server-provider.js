'use strict';

/**
 * server-provider router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::server-provider.server-provider');
