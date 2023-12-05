export interface Page {
	id: number;
	isVisible?: boolean;
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

export const data: Page[] = [
	{
		id: 1,
		name: 'landing',
		htmlTarget: 'landing',
		content: {
			title: 'hey there!',
			firstSubtitle: 'I`m Felix, a web developer from Germany.',
			firstText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			secondSubtitle: 'Second subtitle',
			secondText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			thirdSubtitle: 'Third subtitle',
			thirdText: 'Third text'
		}
	},
	{
		id: 2,
		name: 'about',
		htmlTarget: 'about',
		content: {
			title: 'About',
			firstSubtitle: 'web developer from Germany.',
			firstText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			secondSubtitle: 'Second subtitle',
			secondText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			thirdSubtitle: 'Third subtitle',
			thirdText: 'Third text'
		}
	},
	{
		id: 3,
		name: 'services',
		htmlTarget: 'services',
		content: {
			title: 'Services',
			firstSubtitle: 'I`m Felix, a web developer from Germany.',
			firstText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			secondSubtitle: 'Second subtitle',
			secondText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			thirdSubtitle: 'Third subtitle',
			thirdText: 'Third text'
		}
	},
	{
		id: 4,
		name: 'contact',
		htmlTarget: 'contact',
		content: {
			title: 'Contact',
			firstSubtitle: 'I`m Felix, a web developer from Germany.',
			firstText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			secondSubtitle: 'Second subtitle',
			secondText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			thirdSubtitle: 'Third subtitle',
			thirdText: 'Third text'
		}
	},
	{
		id: 5,
		name: 'imprint',
		htmlTarget: 'imprint',
		content: {
			title: 'Imprint',
			firstSubtitle: 'I`m Felix, a web developer from Germany.',
			firstText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			secondSubtitle: 'Second subtitle',
			secondText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			thirdSubtitle: 'Third subtitle',
			thirdText: 'Third text'
		}
	}
];
