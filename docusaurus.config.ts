import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Brand detection: DOCS_BRAND=harbor → Practice Harbor, default → Progress Notes
const brand = process.env.DOCS_BRAND === 'harbor' ? 'harbor' : 'progressnotes';

const brands = {
  progressnotes: {
    title: 'Progress Notes Help Center',
    tagline: 'Learn how to get the most out of Progress Notes',
    url: 'https://help.progressnotes.app',
    navTitle: 'Progress Notes',
    appUrl: 'https://progressnotes.app',
    supportEmail: 'support@progressnotes.app',
    privacyUrl: 'https://progressnotes.app/privacy-policy',
    termsUrl: 'https://progressnotes.app/terms-of-service',
    baaUrl: 'https://progressnotes.app/baa',
    copyright: 'Progress Notes',
    primaryColor: '#2b8a8a',
    primaryDark: '#267c7c',
    primaryDarker: '#237575',
    primaryDarkest: '#1d6060',
    primaryLight: '#309898',
    primaryLighter: '#339f9f',
    primaryLightest: '#3bb4b4',
    darkPrimary: '#3bb4b4',
    darkPrimaryDark: '#33a3a3',
    darkPrimaryDarker: '#2f9a9a',
    darkPrimaryDarkest: '#277f7f',
    darkPrimaryLight: '#45bfbf',
    darkPrimaryLighter: '#4ec4c4',
    darkPrimaryLightest: '#6cd0d0',
  },
  harbor: {
    title: 'Practice Harbor Help Center',
    tagline: 'Learn how to get the most out of Practice Harbor',
    url: 'https://help.practiceharbor.com',
    navTitle: 'Practice Harbor',
    appUrl: 'https://www.practiceharbor.com',
    supportEmail: 'support@practiceharbor.com',
    privacyUrl: 'https://www.practiceharbor.com/privacy-policy',
    termsUrl: 'https://www.practiceharbor.com/terms-of-service',
    baaUrl: 'https://www.practiceharbor.com/baa',
    copyright: 'Practice Harbor',
    primaryColor: '#1a5276',
    primaryDark: '#174a6a',
    primaryDarker: '#154564',
    primaryDarkest: '#113952',
    primaryLight: '#1d5c82',
    primaryLighter: '#1f6188',
    primaryLightest: '#246f9a',
    darkPrimary: '#3498db',
    darkPrimaryDark: '#2e86c1',
    darkPrimaryDarker: '#2b7db8',
    darkPrimaryDarkest: '#236899',
    darkPrimaryLight: '#4ba3df',
    darkPrimaryLighter: '#53a8e1',
    darkPrimaryLightest: '#72b8e7',
  },
};

const b = brands[brand];

const config: Config = {
  title: b.title,
  tagline: b.tagline,
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: b.url,
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Pass brand to client-side via custom fields
  customFields: {
    brand,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/ajwwong/progress/edit/main/progress2-base/docs-site/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: b.navTitle,
      logo: {
        alt: b.navTitle,
        src: brand === 'harbor' ? 'img/logo-harbor.png' : 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'helpSidebar',
          position: 'left',
          label: 'Help Articles',
        },
        {
          href: b.appUrl,
          label: 'Back to App',
          position: 'right',
        },
        {
          href: `mailto:${b.supportEmail}`,
          label: 'Contact Support',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Help',
          items: [
            { label: 'Getting Started', to: '/getting-started/create-account' },
            { label: 'AI Notes', to: '/documentation/ai-notes-overview' },
            { label: 'Billing', to: '/billing/invoices' },
          ],
        },
        {
          title: 'Product',
          items: [
            { label: b.navTitle, href: b.appUrl },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Privacy Policy', href: b.privacyUrl },
            { label: 'Terms of Service', href: b.termsUrl },
            { label: 'BAA', href: b.baaUrl },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${b.copyright}. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
