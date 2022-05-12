

import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon
} from '@heroicons/react/outline'


export const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon, current: true },
    { name: 'Categories', count: 5, href: '/admin/categories', icon: FolderIcon, current: false },
    { name: 'Products', href: '/admin/products', icon: CalendarIcon, current: false },
    { name: 'Reports', href: '/admin/reports', icon: ChartBarIcon, current: false },
    { name: 'Users', count: 2, href: '/admin/users', icon: UsersIcon, current: false }
]