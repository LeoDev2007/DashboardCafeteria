export const ROUTES = {
    REGISTER: '/',
    LOGIN: '/login',
    GOALDEFINITION: '/goal_definition',
    DASHBOARD: '/dashboard',
    STOCK: '/stock',
    ORDERS: '/orders',
    WINDOW: '/window'
} as const

export type RoutePath = typeof ROUTES[keyof typeof ROUTES];