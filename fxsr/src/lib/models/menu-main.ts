import { Pages } from './pages';

export interface MenuItem {
	label?: string;
	target?: string;
	icon?: string;
	disable?: boolean;
}

export interface Menu {
	mainMenu: MenuItem[];
	footerMenu?: MenuItem[];
}

export const menu: Menu = {
	mainMenu: [
		{
			label: 'Home',
			target: Pages.home,
			icon: 'material-symbols-light:flight-land'
		},
		{
			label: 'About',
			target: 'about',
			icon: 'material-symbols-light:frame-person'
		},
		{
			label: 'Leistungen',
			target: Pages.services,
			disable: true,
			icon: 'material-symbols-light:design-services'
		},
		{
			label: 'Contact',
			target: Pages.contact,
			icon: 'material-symbols:connect-without-contact-rounded'
		}
	],
	footerMenu: [
		{
			label: 'github',
			target: 'https://github.com/FelixSauer',
			icon: 'line-md:github'
		},
		{
			label: 'linkedin',
			target: 'https://www.linkedin.com/in/felix-sauer/',
			icon: 'line-md:linkedin'
		},
		{
			label: 'patreon',
			target: 'patreon.com/fxsr',
			icon: 'line-md:patreon'
		},
		{
			label: 'twitter',
			target: 'https://twitter.com/FelixSauer82',
			icon: 'line-md:twitter-x',
			disable: true
		},
		{
			label: 'Imprint',
			target: Pages.imprint,
			icon: 'imprint'
		}
	]
};
