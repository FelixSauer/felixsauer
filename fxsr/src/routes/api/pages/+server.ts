import { pages } from '$lib/models/pages';
import { json } from '@sveltejs/kit';

export function GET() {
	return json(pages);
}
