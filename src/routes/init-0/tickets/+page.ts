import { redirect } from '@sveltejs/kit';
import { isLoggedIn } from '../helpers.js';

export const load = async () => {
    if (await isLoggedIn()) {
        redirect(307, '/init-0/tickets/customize');
    }
};
