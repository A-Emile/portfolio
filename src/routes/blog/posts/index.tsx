import { component$ } from '@builder.io/qwik';
import { RequestHandler } from '@builder.io/qwik-city';

// Redirect ro blog page
export const onGet: RequestHandler = async ({ response }) => {    
    throw response.redirect('/blog');
};
export default component$(() => {
    return (<></>);
});