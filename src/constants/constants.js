const topHeaderIcons = [
  {
    id: 1,
    src: '/compare.svg',
    alt: 'Compare',
  },
  {
    id: 2,
    src: '/icon-wishlist-empty.svg',
    alt: 'Wishlist',
  },
  {
    id: 3,
    src: '/icon-store-locator.svg',
    alt: 'Store location',
  },
  {
    id: 4,
    src: '/icon-contact-info.svg',
    alt: 'Contact',
  },
  {
    id: 5,
    src: '/lenovo rewards.svg',
    alt: 'Lenovo rewards',
  },
  {
    id: 6,
    src: '/icon-user-profile.svg',
    alt: 'Profile',
  },
];

const middleHeaderOptions = [{
  id: 1,
  text: 'PCS & TABLETS',
},
{
  id: 2,
  text: 'PHONES & SMART DEVICES',
},
{
  id: 3,
  text: 'DATA CENTER',
},
{
  id: 4,
  text: 'SERVICES & SOLUTIONS',
},
{
  id: 5,
  text: 'SUPPORT',
}];

const bottomHeaderOptions = [
  {
    id: 1,
    text: 'Laptops',
  },
  {
    id: 2,
    text: 'Desktops',
  },
  {
    id: 3,
    text: 'Workstations',
  },
  {
    id: 4,
    text: 'Tablets',
  },
  {
    id: 5,
    text: 'Accessories & Software',
  },
  {
    id: 6,
    text: 'Monitors',
  },
  {
    id: 7,
    text: 'Smart Home',
  },
  {
    id: 8,
    text: 'Home & Office Furniture',
  },
  {
    id: 9,
    text: 'Gaming',
  },
  {
    id: 10,
    text: 'Bussiness',
  },
  {
    id: 11,
    text: 'Students',
  },
  {
    id: 12,
    text: 'Sale',
  },
];

const sections = [
  {
    id: 1,
    text: 'Models',
  },
  {
    id: 2,
    text: 'Tech Specs',
  },
  {
    id: 3,
    text: 'Features',
  },
  {
    id: 4,
    text: 'Reviews',
  },
  {
    id: 5,
    text: 'Compatible Accessories',
  },
  {
    id: 6,
    text: 'Services & Support',
  },
];

const orderFilters = [
  {
    id: 1,
    label: 'Price Low to High',
    value: 'asc',
  },
  {
    id: 2,
    label: 'Price High to Low',
    value: 'desc',
  },
  {
    id: 3,
    label: 'Best selling',
    value: 'top',
  },
  {
    id: 4,
    label: 'Newest',
    value: 'newest',
  },
];

const priceFilters = [
  {
    id: 1,
    label: '$800-$999.99',
    value: '800/999',
    remaining: 2,
  },
  {
    id: 2,
    label: '$1,000-$1,499.99',
    value: '1000/1499',
    remaining: 4,
  },
  {
    id: 3,
    label: '$1,400-$1,999.99',
    value: '1500/2000',
    remaining: 3,
  },
];

const products = [
  {
    id: 1,
    name: 'ThinkPad X1 Carbon Gen 8',
    price: '$1,299.99',
    coupon: 'YOGAPRESALE8',
    img: './notebook1.png',
    isDoorbuster: true,
  },
  {
    id: 2,
    name: 'ThinkPad X1 Carbon Gen 8',
    price: '$1,299.99',
    coupon: 'YOGAPRESALE8',
    img: './notebook2.png',
    isDoorbuster: false,
  },
  {
    id: 3,
    name: 'ThinkPad X1 Carbon Gen 8',
    price: '$1,299.99',
    coupon: 'YOGAPRESALE8',
    img: './notebook1.png',
    isDoorbuster: false,
  },
  {
    id: 4,
    name: 'ThinkPad X1 Carbon Gen 8',
    price: '$1,299.99',
    coupon: 'YOGAPRESALE8',
    img: './notebook2.png',
    isDoorbuster: true,
  },
];

export {
  topHeaderIcons, bottomHeaderOptions, sections, middleHeaderOptions, orderFilters, priceFilters, products,
};
