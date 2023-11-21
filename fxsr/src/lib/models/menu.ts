import { Pages } from './pages';

export interface MenuItem {
	label?: string;
	target?: string;
	icon?: string;
	state?: string | 'disabled' | 'active' | 'hidden';
	internal?: boolean;
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
			icon: 'material-symbols-light:flight-land',
			internal: true
		},
		{
			label: 'About',
			target: 'about',
			icon: 'material-symbols-light:frame-person',
			internal: true
		},
		{
			label: 'Leistungen',
			target: Pages.services,
			state: 'disabled',
			icon: 'material-symbols-light:design-services',
			internal: true
		},
		{
			label: 'Contact',
			target: Pages.contact,
			icon: 'material-symbols:connect-without-contact-rounded',
			internal: true
		}
	],
	footerMenu: [
		{
			label: 'github',
			target: 'https://github.com/FelixSauer',
			icon: 'line-md:github',
			internal: false
		},
		{
			label: 'linkedin',
			target: 'https://www.linkedin.com/in/felix-sauer/',
			icon: 'line-md:linkedin',
			internal: false
		},
		{
			label: 'patreon',
			target: 'patreon.com/fxsr',
			icon: 'line-md:patreon',
			internal: false
		},
		{
			label: 'twitter',
			target: 'https://twitter.com/FelixSauer82',
			icon: 'line-md:twitter-x',
			state: 'disabled',
			internal: false
		},
		{
			label: 'Imprint',
			target: Pages.imprint,
			icon: 'imprint',
			internal: true
		}
	]
};
