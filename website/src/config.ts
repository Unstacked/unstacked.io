import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    media: {
        path: '/media',
        title: 'media'
    },
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'Unstacked',
    title: 'Unstacked.io',
    description: 'Unstacking the complexity of cloud.',
    url: 'https://unstacked.io',
    githubUrl: 'https://github.com/Unstacked',
    listDrafts: true
    // description ?
}

export const PAGE_SIZE = 8
