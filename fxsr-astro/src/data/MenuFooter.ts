import type { MenuItem } from '@interfaces/menu'

export const FooterMenu: MenuItem[] = [
	{
		label: 'github',
		target: 'https://github.com/FelixSauer',
		icon: 'icon-[line-md--github-loop]'
	},
	{
		label: 'linkedin',
		target: 'https://www.linkedin.com/in/felix-sauer/',
		icon: 'icon-[line-md--linkedin]'
	},

	{
		label: 'patreon',
		target: 'patreon.com/fxsr',
		icon: 'icon-[line-md--patreon]',
		disable: true
	},

	{
		label: 'buymeacoffee',
		target: 'https://www.buymeacoffee.com/felixsauer',
		icon: 'icon-[line-md--buy-me-a-coffee-filled]',
		disable: true
	},
	{
		label: 'twitter',
		target: 'https://twitter.com/FelixSauer82',
		icon: 'icon-[line-md--twitter-x-alt]',
		disable: true
	},
	{
		label: 'discord',
		target: 'https://www.linkedin.com/in/felix-sauer/',
		icon: 'icon-[line-md--discord]'
	},

	{
		label: 'Imprint',
		target: 'imprint'
	}
]
