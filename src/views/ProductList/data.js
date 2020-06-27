import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    rating: 5,
    title: 'Dropbox',
    time: 3,
    description:
      'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    imageUrl: '/images/products/product_1.png',
    totalDownloads: '594',
    updatedAt: '27/03/2019'
  },
  {
    id: uuid(),
    rating: 5,
    title: 'Medium Corporation',
    time: 8,
    description:
      'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    imageUrl: '/images/products/product_2.png',
    totalDownloads: '625',
    createdAt: '31/03/2019'
  },
  {
    id: uuid(),
    rating: 5,
    title: 'Slack',
    time: 9,
    description:
      'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
    imageUrl: '/images/products/product_3.png',
    totalDownloads: '857',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    rating: 5,
    title: 'Lyft',
    time: 3,
    description:
      'Lyft is an on-demand transportation company based in San Francisco, California.',
    imageUrl: '/images/products/product_4.png',
    totalDownloads: '406',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    rating: 5,
    title: 'GitHub',
    time: 8,
    description:
      'GitHub is a web-based hosting service for version control of code using Git.',
    imageUrl: '/images/products/product_5.png',
    totalDownloads: '835',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    rating: 5,
    title: 'Squarespace',
    time: 3,
    description:
      'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
    imageUrl: '/images/products/product_6.png',
    totalDownloads: '835',
    createdAt: '04/04/2019'
  }
];
