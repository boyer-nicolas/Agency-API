module.exports = ({
  env
}) => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: 'smtp.niwee.email',
      port: 465,
      secure: true,
      auth: {
        user: 'no-reply@niwee.fr',
        pass: env('SMTP_PASSWORD'),
      },
      rejectUnauthorized: true,
      requireTLS: true,
      connectionTimeout: 500,
    },
    settings: {
      defaultFrom: 'no-reply@niwee.fr',
      defaultReplyTo: 'support@niwee.fr',
    },
  },
  menus: {
    config: {
      layouts: {
        menuItem: { // This is the menu item edit panel.
          link: [ // This is the "link" tab in the menu item edit panel.
            {
              input: {
                label: 'Short description',
                name: 'description',
                type: 'text',
              },
              grid: {
                col: 12,
              },
            },
            {
              input: {
                label: 'Icon',
                name: 'icon',
                type: 'text',
                description: 'The icon displayed either for the mega menu or mobile item',
                placeholder: 'bi bi-'
              },
              grid: {
                col: 6,
              },
            }
          ],
          responsive: [{
              input: {
                label: 'Hide on mobile ?',
                name: 'mobileOnly',
                type: 'bool',
              },
              grid: {
                col: 12,
              },
            },
            {
              input: {
                label: 'Hide on desktop ?',
                name: 'desktopOnly',
                type: 'bool',
              },
              grid: {
                col: 12,
              },
            }
          ],
          megaMenu: [{
              input: {
                label: 'Enable ?',
                name: 'megamenu',
                type: 'bool',
              },
              grid: {
                col: 12,
              },
            },
            {
              input: {
                label: 'Title',
                name: 'megamenuTitle',
                type: 'text',
              },
              grid: {
                col: 12,
              },
            },
            {
              input: {
                label: 'CTA Title',
                name: 'megamenuCtaTitle',
                type: 'text',
              },
              grid: {
                col: 12,
              },
            },
            {
              input: {
                label: 'CTA Description',
                name: 'megamenuCtaDescription',
                type: 'text',
              },
              grid: {
                col: 12,
              },
            },
            {
              input: {
                label: 'CTA Button Text',
                name: 'megamenuCtaButtonText',
                type: 'text',
              },
              grid: {
                col: 12,
              },
            },
          ]
        },
      },
    },
  },
})
