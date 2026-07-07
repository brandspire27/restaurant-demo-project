import { dishImage } from '../assets/images'

export const menuCategories = ['Starters', 'Main Course', 'Desserts']

export const menu = [
  {
    id: 1,
    name: 'Truffle Mushroom Soup',
    description:
      'Silky wild mushroom velouté infused with black truffle oil and a drizzle of herb cream.',
    price: 18,
    category: 'Starters',
    tag: 'Signature',
    image: dishImage('truffle-mushroom-soup'),
  },
  {
    id: 2,
    name: 'Crispy Lotus Stem',
    description:
      'Golden-fried lotus stem tossed in a sweet & spicy honey-chilli glaze, finished with sesame.',
    price: 16,
    category: 'Starters',
    tag: 'Popular',
    image: dishImage('crispy-lotus-stem'),
  },
  {
    id: 3,
    name: 'Saffron Biryani',
    description:
      'Aromatic basmati rice layered with saffron, slow-cooked vegetables and fried onions.',
    price: 28,
    category: 'Main Course',
    tag: 'Chef Special',
    image: dishImage('saffron-biryani'),
  },
  {
    id: 4,
    name: 'Royal Paneer',
    description:
      'Cottage cheese simmered in a rich cashew-tomato gravy with a hint of royal garam masala.',
    price: 24,
    category: 'Main Course',
    tag: 'Popular',
    image: dishImage('royal-paneer'),
  },
  {
    id: 5,
    name: 'Chocolate Fondant',
    description:
      'Warm molten chocolate cake with a gooey centre, served with vanilla bean gelato.',
    price: 14,
    category: 'Desserts',
    tag: 'Signature',
    image: dishImage('chocolate-fondant'),
  },
  {
    id: 6,
    name: 'Signature Kulfi',
    description:
      'Slow-churned saffron-pistachio kulfi on a stick, garnished with rose petals and silver leaf.',
    price: 12,
    category: 'Desserts',
    tag: 'Chef Special',
    image: dishImage('signature-kulfi'),
  },
]
