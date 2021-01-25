import {
    Home,
    Circle,
    Headphones
} from 'react-feather';

export const MENUITEMS = [
    {
        title: 'Inbox', icon: Home, type: 'sub', badgeType: 'primary', active: false, children: [
            { path: '/dashboard/default', title: 'All Channels', type: 'link' },
            { path: '/dashboard/ecommerce', title: 'Your Conversations', type: 'link' },
            { path: '/dashboard/university', title: 'Groups', type: 'link' },
            { path: '/dashboard/crypto', title: '', type: 'link' },
            { path: '/dashboard/project', title: '', type: 'link' }
        ]
    },
  //  {
  //      path: 'http://support.pixelstrap.com/help-center', title: 'Raise Support', icon: Headphones, type: 'exteral_link', active: false
  //  },
    {
        title: 'Dashboard', icon: Circle, type: 'link', path: '/dashboard/inbox', active: false
    },
    {
        title: 'Reviews', icon: Circle, type: 'link', path: '/dashboard/inbox', active: false
    },
    {
        title: 'Leads', icon: Circle, type: 'link', path: '/dashboard/inbox', active: false
    },
    {
        title: 'Appointments', icon: Circle, type: 'link', path: '/appointments/appointments', active: false
    },
    
]

// Calendar
export const BasicCalendars =  "Basic Calendar"

