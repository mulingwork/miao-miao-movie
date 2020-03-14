export default {
    path: '/cinema',
    redirect: '/cinema/wholeCity',
    component: () => import('@/views/cinema/Cinema'),
    children: [
        {
            name: 'WholeCity',
            path: 'wholeCity',
            component: () => import('@/views/cinema/WholeCity')
        },
        {
            name: 'Feature',
            path: 'feature',
            component: () => import('@/views/cinema/Feature')
        },
        {
            name: 'Brand',
            path: 'brand',
            component: () => import('@/views/cinema/Brand')
        }
    ]
}