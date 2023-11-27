import type { MenuItem } from './MenuItem';
import { PagesEnum } from './Pages';

export const MainMenu: MenuItem[] = [
	{
		label: 'Home',
		target: PagesEnum.home,
		icon: 'material-symbols-light:flight-land',
		internal: true,
		alignRight: true
	},
	{
		label: 'About',
		target: PagesEnum.about,
		icon: 'material-symbols-light:frame-person',
		internal: true,
		alignRight: true
	},
	{
		label: 'Leistungen',
		target: PagesEnum.services,
		disable: true,
		icon: 'material-symbols-light:design-services',
		internal: true,
		alignRight: true
	},
	{
		label: 'Contact',
		target: PagesEnum.contact,
		icon: 'material-symbols:connect-without-contact-rounded',
		internal: true,
		alignRight: true
	}
];
