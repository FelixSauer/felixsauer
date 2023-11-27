export enum PagesEnum {
	home = 'home',
	about = 'about',
	services = 'services',
	contact = 'contact',
	imprint = 'imprint',
	privacy = 'privacy'
}

export interface Section {
	id: Page['id'];
	name: Page['name'];
	isVisible: boolean;
}

export interface Page {
	id: number;
	htmlTarget: string;
	name: string;
	content: PageContent;
}

export interface PageContent {
	title: string;
	firstSubtitle?: string;
	firstText?: string;
	secondSubtitle?: string;
	secondText?: string;
	thirdSubtitle?: string;
	thirdText?: string;
}

export const pages: Page[] = [
	{
		id: 1,
		name: 'home',
		htmlTarget: PagesEnum.home,
		content: {
			title: 'hello there!',
			firstSubtitle: 'First subtitle',
			firstText: 'First text',
			secondSubtitle: 'Second subtitle',
			secondText: 'Second text',
			thirdSubtitle: 'Third subtitle',
			thirdText: 'Third text'
		}
	},
	{
		id: 2,
		name: 'about',
		htmlTarget: PagesEnum.about,
		content: {
			title: 'Welcome to the about page!',
			firstSubtitle: 'First subtitle',
			firstText: 'First text',
			secondSubtitle: 'Second subtitle',
			secondText: 'Second text',
			thirdSubtitle: 'Third subtitle',
			thirdText: 'Third text'
		}
	},
	{
		id: 3,
		name: 'services',
		htmlTarget: PagesEnum.services,
		content: {
			title: 'Welcome to the services page!',
			firstSubtitle: 'First subtitle',
			firstText: 'First text',
			secondSubtitle: 'Second subtitle',
			secondText: 'Second text',
			thirdSubtitle: 'Third subtitle',
			thirdText: 'Third text'
		}
	},
	{
		id: 4,
		name: 'contact',
		htmlTarget: PagesEnum.contact,
		content: {
			title: 'Welcome to the contact page!',
			firstSubtitle: 'First subtitle',
			firstText: 'First text',
			secondSubtitle: 'Second subtitle',
			secondText: 'Second text',
			thirdSubtitle: 'Third subtitle',
			thirdText: 'Third text'
		}
	},
	{
		id: 5,
		name: 'imprint',
		htmlTarget: PagesEnum.imprint,
		content: {
			title: 'Welcome to the imprint page!',
			firstSubtitle: 'First subtitle',
			firstText: 'First text',
			secondSubtitle: 'Second subtitle',
			secondText: 'Second text',
			thirdSubtitle: 'Third subtitle',
			thirdText: 'Third text'
		}
	}
];
