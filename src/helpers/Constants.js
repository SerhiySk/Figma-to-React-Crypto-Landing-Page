import chart1 from '../assets/images/stock-line.svg';
import chart2 from '../assets/images/stock-line1.svg';
import chart3 from '../assets/images/stock-line-red.svg';
import chart4 from '../assets/images/stock-line2.svg';
import chart5 from '../assets/images/stock-line-red1.svg';
import chart6 from '../assets/images/stock-line3.svg';
import companyImg1 from '../assets/images/company1.png';
import companyImg2 from '../assets/images/company2.png';
import companyImg3 from '../assets/images/company3.png';
import companyImg4 from '../assets/images/company4.png';
import companyImg5 from '../assets/images/company5.png';
import companyImg6 from '../assets/images/company6.png';

import featureImg1 from '../assets/images/feature1.svg';
import featureImg2 from '../assets/images/feature2.svg';
import featureImg3 from '../assets/images/feature3.svg';

import learnMoreImg1 from '../assets/images/learn-item.png';
import learnMoreImg2 from '../assets/images/learn-item-1.png';
import learnMoreImg3 from '../assets/images/learn-item-2.png';

export const statistics = [
  {
    price: '55,206.61',
    companyImg: companyImg1,
    name: 'bitcoin',
    nameShort: 'BTC',
    differenceDay: 0.92,
    differenceWeek: 15.86,
    marketCap: '1,046,899,935,348',
    volumeInDay: '1,046,899,935,348',
    volumeInDayConverted: '653,452',
    chart: chart1,
  },
  {
    price: '55,206.61',
    companyImg: companyImg2,
    name: 'ethereum',
    nameShort: 'ETH',
    differenceDay: -0.92,
    differenceWeek: 15.86,
    marketCap: '1,046,899,935,348',
    volumeInDay: '1,046,899,935,348',
    volumeInDayConverted: '653,452',
    chart: chart2,
  },
  {
    price: '55,206.61',
    companyImg: companyImg3,
    name: 'cardano',
    nameShort: 'ADA',
    differenceDay: -0.92,
    differenceWeek: -15.86,
    marketCap: '1,046,899,935,348',
    volumeInDay: '1,046,899,935,348',
    volumeInDayConverted: '653,452',
    chart: chart3,
  },
  {
    price: '55,206.61',
    companyImg: companyImg4,
    name: 'tether',
    nameShort: 'USDT',
    differenceDay: 0.92,
    differenceWeek: 15.86,
    marketCap: '1,046,899,935,348',
    volumeInDay: '1,046,899,935,348',
    volumeInDayConverted: '653,452',
    chart: chart4,
  },
  {
    price: '55,206.61',
    companyImg: companyImg5,
    name: 'avalanche',
    nameShort: 'AVAX',
    differenceDay: -0.92,
    differenceWeek: -15.86,
    marketCap: '1,046,899,935,348',
    volumeInDay: '1,046,899,935,348',
    volumeInDayConverted: '653,452',
    chart: chart5,
  },
  {
    price: '55,206.61',
    companyImg: companyImg6,
    name: 'algorand',
    nameShort: 'ALGO',
    differenceDay: 0.92,
    differenceWeek: 15.86,
    marketCap: '1,046,899,935,348',
    volumeInDay: '1,046,899,935,348',
    volumeInDayConverted: '653,452',
    chart: chart6,
  },
];

export const features = [
  {
    icon: featureImg1,
    title: 'Ease of Trading',
    text: [
      'Intuitive interface',
      'Instant deposit options',
      'Cash out directly to your bank account',
    ],
  },
  {
    icon: featureImg2,
    title: 'Institutional-grade Security',
    text: [
      '98% of assets stored safely offline',
      'Highly encrypted personal data',
      'Whitelisting and transaction confirmations',
    ],
  },
  {
    icon: featureImg3,
    title: 'Proven Reliability',
    text: [
      'Exchanging bitcoin since 2011',
      'Industry-leading uptime',
      '24/7 dedicated support',
    ],
  },
];
export const learnMoreContent = [
  {
    img: learnMoreImg1,
    title:
      'New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange',
    text: 'We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...',
    author: 'Jennia Peris',
    date: '15/07/2021',
    minsToRead: 5,
  },
  {
    img: learnMoreImg2,
    title:
      'New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange',
    text: 'We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...',
    author: 'Jennia Peris',
    date: '15/07/2021',
    minsToRead: 5,
  },
  {
    img: learnMoreImg3,
    title:
      'New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange',
    text: 'We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...',
    author: 'Jennia Peris',
    date: '15/07/2021',
    minsToRead: 5,
  },
];
export const footerColumns = [
  {
    title: 'Company',
    links: ['About us', 'Terms of use', 'Privacy Policy', 'Disclaimer'],
  },
  {
    title: 'Businesses',
    links: ['Prime', 'Custody', 'Asset Hub', 'Commerce'],
  },
  {
    title: 'Exchange',
    links: [
      'Exchange Home',
      'Margin Trading',
      'Derivatives Trading',
      'Trading Arena',
    ],
  },
  {
    title: 'Blockchain',
    links: ['Chain Explorer', 'The Syndicate', 'Security', 'Cryptous Credit'],
  },
  {
    title: 'Resources',
    links: ['Prices', 'Site Widgets', 'Tax', 'Blog', 'Research'],
  },
];
