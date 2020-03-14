export default {
    path: '/home',
    redirect: '/home/nowPlaying',
    component: () => import('@/views/home/Home'),
    children: [
        {
            name: 'NowPlaying',
            path: 'nowPlaying',
            component: () => import('@/views/home/NowPlaying')
        },
        {
            name: 'ComingSoon',
            path: 'comingSoon',
            component: () => import('@/views/home/ComingSoon')
        },
        {
            name: 'cities',
            path: 'cities',
            component: () => import('@/views/home/Cities')
        },
        {
            name: 'search',
            path: 'search',
            component: () => import('@/views/home/Search')
        }
    ]
}