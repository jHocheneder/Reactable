import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Statistic',
    icon: 'pie-chart-outline',
    link: '/pages/statistic',
    home: true,
  },
  {
    title: 'Options',
    icon: 'options-2-outline',
    link: '/pages/options',
    home: true,
  },
  {
    title: 'Help',
    icon: 'question-mark-outline',
    link: '/pages/help',
    home: true,
  },
  {
    title: 'About',
    icon: 'people-outline',
    link: '/pages/about',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      
    ],
  },
];
