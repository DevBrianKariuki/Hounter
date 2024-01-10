import { seller1, seller2, seller3, seller4, House1, House2, House3, House4,
    Testimonial1, Testimonial2, Testimonial3, blog1, blog2, blog3, blog4
} from "../assets"

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

export const Testimonies = [
    {
        id: 'testimony1',
        picture: Testimonial1,
        title: 'My house sold out fast!',
        desc: 'I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!',
        buyer_picture: seller2,
        buyer_name: 'Courtney Henry',
        buyer_title: 'CEO Andarafish',
        rating: 4.6

    },
    {
        id: 'testimony2',
        picture: Testimonial2,
        title: 'Best! I got the house I wanted through Hounter',
        desc: 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
        buyer_picture: seller4,
        buyer_name: 'Dianne Russell',
        buyer_title: 'Managing Director',
        rating: 4.3

    },
    {
        id: 'testimony3',
        picture: Testimonial3,
        title: 'Through the Hounter, I can get a house for my self',
        desc: 'By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!',
        buyer_picture: seller1,
        buyer_name: 'Esther Howard',
        buyer_title: 'Head of Marketing',
        rating: 4.2

    },
]

export const blogs =[
    {
        id:"blog-1",
        picture: blog1,
        writer_pic: seller2,
        writer: 'Dianne Russel',
        title: 'The things we need to check when we want to buy a house',
        date:'4 min read | 05 July 2023'
    },
    {
        id:"blog-2",
        picture: blog2,
        writer_pic: seller3,
        writer: 'Courtney Henry',
        title: '7 Ways to distinguish the quality of the house we want to buy',
        date:'6 min read | 24 Apr 2023'
    },
    {
        id:"blog-3",
        picture: blog3,
        writer_pic: seller1,
        writer: 'Darlene Robertson',
        title: 'The best way to know the quality of the house we want to buy',
        date:'2 min read | 30 Sep 2024'
    },
    // {
    //     id:"blog-4",
    //     picture: blog4,
    //     writer_pic: seller4,
    //     writer: 'Cameron Williamson',
    //     title: '12 Things to know before buying a house',
    //     desc: 'Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house',
    //     date:'4 min read | 05 July 2023'
    // },
]

export const FooterLinks = [
    {
        id: 'link1',
        title: 'Property',
        sublinks: [
            {
                id: 'sublink1',
                title: 'House'
            },
            {
                id: 'sublink2',
                title: 'Villa'
            },
            {
                id: 'sublink3',
                title: 'Apartment'
            },
        ]
    },
    {
        id: 'link2',
        title: 'Articles',
        sublinks: [
            {
                id: 'sublink1',
                title: 'New Article'
            },
            {
                id: 'sublink2',
                title: 'Popular Article'
            },
            {
                id: 'sublink3',
                title: 'Most Read'
            },
            {
                id: 'sublink4',
                title: 'Tips & Tricks'
            },
        ]
    },
    {
        id: 'link3',
        title: 'Contact',
        sublinks: [
            {
                id: 'sublink1',
                title: '2464 Royal Ln. Mesa, New Jersey 45463'
            },
            {
                id: 'sublink2',
                title: '(+254) 703 814228'
            },
            {
                id: 'sublink3',
                title: 'devbriankariuki@gmail.com'
            }
        ]
    },
]