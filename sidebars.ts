import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  helpSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/create-account',
        'getting-started/set-password',
        'getting-started/first-session',
      ],
    },
    {
      type: 'category',
      label: 'AI Notes & Documentation',
      items: [
        'documentation/ai-notes-overview',
        'documentation/recording-session',
        'documentation/note-templates',
        'documentation/magic-edit',
        'documentation/treatment-plans',
      ],
    },
    {
      type: 'category',
      label: 'Scheduling',
      items: [
        'scheduling/calendar-overview',
        'scheduling/recurring-appointments',
        'scheduling/online-booking',
        'scheduling/google-calendar-sync',
      ],
    },
    {
      type: 'category',
      label: 'Clients',
      items: [
        'clients/add-client',
        'clients/couples-family',
        'clients/intake-forms',
        'clients/client-portal',
        'clients/contacts-guardians',
      ],
    },
    {
      type: 'category',
      label: 'Billing & Payments',
      items: [
        'billing/invoices',
        'billing/superbills',
        'billing/autopay',
        'billing/payment-collection',
        'billing/subscription-plans',
      ],
    },
    {
      type: 'category',
      label: 'Telehealth',
      items: [
        'telehealth/video-sessions',
        'telehealth/group-telehealth',
      ],
    },
    {
      type: 'category',
      label: 'Team & Practice',
      items: [
        'team/invite-team-member',
        'team/roles-permissions',
        'team/supervision',
      ],
    },
    {
      type: 'category',
      label: 'Data',
      items: [
        'data/ehr-import',
        'data/data-export',
      ],
    },
    {
      type: 'category',
      label: 'Account & Settings',
      items: [
        'account/profile-settings',
        'account/practice-settings',
        'account/security',
      ],
    },
  ],
};

export default sidebars;
