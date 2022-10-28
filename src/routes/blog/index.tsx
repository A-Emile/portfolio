import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { BlogList } from '~/components/blog/BlogList';
import { useBlogs } from '~/hooks/useBlogs';
export default component$(() => {
    const { posts } = useBlogs()
    return (
        <>
            <h1 className='text-3xl mb-5'>Blog</h1>
            <BlogList posts={posts} />
        </>
    );
});

export const head: DocumentHead = {
    title: 'Blog',
};
