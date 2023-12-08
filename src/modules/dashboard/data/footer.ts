import { FooterItem, FooterMenu } from '@modules/dashboard/domain/models/footer.model'

const FOOTER_COMPANY_ITEMS: FooterItem[] = [
  {
    id: 'about',
    text: 'About',
    url: 'https://www.spotify.com/pe/about-us/contact/',
  },
  {
    id: 'jobs',
    text: 'Jobs',
    url: 'https://www.lifeatspotify.com/',
  },
  {
    id: 'for-the-record',
    text: 'For the Record',
    url: 'https://newsroom.spotify.com/',
  },
]

const FOOTER_COMMUNITIES_ITEMS: FooterItem[] = [
  {
    id: 'for-artists',
    text: 'For Artists',
    url: 'https://artists.spotify.com/',
  },
  {
    id: 'developers',
    text: 'Developers',
    url: 'https://developer.spotify.com/',
  },
  {
    id: 'advertisers',
    text: 'Advertising',
    url: 'https://ads.spotify.com/',
  },
  {
    id: 'investors',
    text: 'Investors',
    url: 'https://investors.spotify.com/home/default.aspx',
  },
  {
    id: 'vendors',
    text: 'Vendors',
    url: 'https://spotifyforvendors.com/',
  },
]

const FOOTER_USEFUL_ITEMS: FooterItem[] = [
  {
    id: 'support',
    text: 'Support',
    url: 'https://support.spotify.com/',
  },
  {
    id: 'free-mobile-app',
    text: 'Free Mobile App',
    url: 'https://www.spotify.com/pe/download/',
  },
]

export const FOOTER_MENUS: FooterMenu[] = [
  {
    id: 'company',
    title: 'Company',
    items: FOOTER_COMPANY_ITEMS,
  },
  {
    id: 'communities',
    title: 'Communities',
    items: FOOTER_COMMUNITIES_ITEMS,
  },
  {
    id: 'useful-links',
    title: 'Useful links',
    items: FOOTER_USEFUL_ITEMS,
  },
]
