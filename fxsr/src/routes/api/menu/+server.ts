import { menu } from '$lib/models/menu';
import { json } from '@sveltejs/kit';

export function GET() {
	return json(menu);
}
