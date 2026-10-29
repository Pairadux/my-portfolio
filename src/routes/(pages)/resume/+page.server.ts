import { getResume } from "#lib/server/content.js";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
    return {
        resume: getResume(),
    };
};
