import { createClient } from 'pexels';

const KEY = import.meta.env.VITE_PEXELS_API_KEY;
export const pexelsClient = createClient(KEY);

// All requests made with the client will be authenticated
//client.photos.search({ query, per_page: 1 }).then(photos => {...});
