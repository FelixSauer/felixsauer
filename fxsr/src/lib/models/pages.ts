export enum Pages {
	home = 'home',
	about = 'about',
	services = 'services',
	contact = 'contact',
	imprint = 'imprint',
	privacy = 'privacy'
}

export interface Page {
	id: number;
	htmlTarget: string;
	name: string;
	title: string;
	content: string;
}

export const pages: Page[] = [
	{
		id: 1,
		name: 'home',
		htmlTarget: Pages.home,
		title: 'Home',
		content: 'Welcome to the home page!'
	},
	{
		id: 2,
		name: 'about',
		htmlTarget: Pages.about,
		title: 'About',
		content: 'Welcome to the about page!'
	},
	{
		id: 3,
		name: 'services',
		htmlTarget: Pages.services,
		title: 'Services',
		content: 'Welcome to the services page!'
	},
	{
		id: 4,
		name: 'contact',
		htmlTarget: Pages.contact,
		title: 'Contact',
		content: 'Welcome to the contact page!'
	},
	{
		id: 5,
		name: 'imprint',
		htmlTarget: Pages.imprint,
		title: 'Imprint',
		content: 'Welcome to the imprint page!'
	},
	{
		id: 6,
		name: 'privacy',
		htmlTarget: Pages.privacy,
		title: 'Privacy',
		content: 'Welcome to the privacy page!'
	}
];
