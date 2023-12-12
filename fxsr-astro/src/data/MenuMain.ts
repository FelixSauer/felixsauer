import type { MenuItem } from '@interfaces/menu'

export const MainMenu: MenuItem[] = [
	{
		label: 'hey there!',
		target: '/',
		icon: 'material-symbols-light--flight-land'
	},
	{
		label: 'Who I am',
		target: '/whoiam',
		icon: 'material-symbols-light--frame-person'
	},
	{
		label: 'Leistungen',
		target: '/services',
		disable: true,
		icon: 'material-symbols-light--design-services'
	},
	{
		label: 'Contact',
		target: '/contact',
		icon: 'material-symbols--connect-without-contact-rounded'
	}
]
