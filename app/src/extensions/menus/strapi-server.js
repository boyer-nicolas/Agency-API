'use strict';

module.exports = plugin => {
  // Get current `MenuItem` attributes.
  const defaultAttrs = plugin.contentTypes['menu-item'].schema.attributes;

  // Define custom attributes for `MenuItem` the same way they would be defined
  // on any other schema.
  const customAttrs = {
    description: {
      type: 'string',
    },
    icon: {
      type: 'string',
    },
    megamenu: {
      type: 'boolean'
    },
    megamenuTitle: {
      type: 'string'
    },
    megamenuCtaTitle: {
      type: 'string'
    },
    megamenuCtaDescription: {
      type: 'string'
    },
    megamenuCtaButtonText: {
      type: 'string'
    },
    mobileOnly: {
      type: 'boolean'
    },
    desktopOnly: {
      type: 'boolean'
    }
  };

  // Extend the `MenuItem` content type with custom attributes.
  plugin.contentTypes['menu-item'].schema.attributes = {
    ...defaultAttrs,
    ...customAttrs,
  };

  return plugin;
};
