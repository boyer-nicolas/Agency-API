'use strict';

/**
 * credit-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::credit-card.credit-card');
