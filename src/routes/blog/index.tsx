import { component$, useServerMount$, useStore } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import path from 'path';
import { BlogCard } from '~/components/Cards/BlogCard';
import fs from "fs"
import matter from "gray-matter";
export default component$(() => {
    return (
        <div className={`pt-10 max-w-6xl p-5 m-auto`}>
            <h1 className='text-3xl mb-5'>Blog</h1>
            <BlogList />
        </div>
    );
});

export const BlogList = component$(() => {
    const store: any = useStore({
        posts: [],
    });

    useServerMount$(() => {
        const files = fs.readdirSync(`${process.cwd()}/src/routes/blog/posts/`);

        const posts = files.map((filename) => {
            const markdownWithMetadata = fs
                .readFileSync(`src/routes/blog/posts/${filename}/index.md`)
                .toString();

            const { data } = matter(markdownWithMetadata);

            const frontmatter = {
                ...data,
            };

            return {
                slug: `${filename}/index.md`.replace(".md", ""),
                frontmatter,
            };
        });
        store.posts = posts
    })

    return (
        <ul className='flex flex-col gap-3'>
           {store.posts.map(({ frontmatter: { title, description, cover } }: any) => (
                <BlogCard name={title} img={cover} desc={description} />
            ))}
        </ul>
    )
})

export const head: DocumentHead = {
    title: 'Portfolio - A-Emile',
};
