import { seller1, seller2, seller3, seller4, House1, House2, House3, House4 } from "../assets"
import { BsFire } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";

export const menuLinks = [
    {
        id: 1,
        title: 'About Us',
        path: '/about'
    },
    {
        id: 2,
        title: 'Article',
        path: '/article'
    },
    {
        id: 3,
        title: 'Property',
        path: '/property',
        links: [
            {
                id: 'link1',
                title: 'Villa',
            },
            {
                id: 'link2',
                title: 'Apartments',
            },
            {
                id: 'link3',
                title: 'Bungalow',
            },
        ]
    },
]

export const FeatureHouses = [
    {
        id: 'house1',
        photo: House1,
        title: 'Roselands House',
        price: '$ 35,000.00',
        sellerpic: seller1,
        seller: 'Dianne Russell',
        location: 'Manchester, Kentucky',
        category: 'Popular',
        icon: seller1
    },
    {
        id: 'house2',
        photo: House2,
        title: 'Woodlandside',
        price: '$ 20,000.00',
        sellerpic: seller2,
        seller: 'Robert Fox',
        location: 'Dr. San Jose, South Dakota',
        category: 'New House',
        icon: seller2
    },
    {
        id: 'house3',
        photo: House3,
        title: 'The Old Lighthouse',
        price: '$ 44,000.00',
        sellerpic: seller3,
        seller: 'Ronald Richards',
        location: 'Santa Ana, Illinois',
        category: 'Best Deals'
    },
    {
        id: 'house4',
        photo: House4,
        title: `Cosmo's House`,
        price: '$ 22,000.00',
        sellerpic: seller4,
        seller: 'Jenny Wilson',
        location: 'Preston Rd. Inglewood, Maine 98380',
        category: 'Popular'
    },
]