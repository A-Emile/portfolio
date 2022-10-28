import { useServerMount$, useStore } from "@builder.io/qwik";
import fs from "fs"
import matter from "gray-matter";
import { BlogPostProps } from "~/types/Types";

// Retruns all blog posts from directory
export const useBlogs = () => {
    const store: { posts: BlogPostProps[] } = useStore({
        posts: [],
    });

    useServerMount$(() => {
        const folders = fs.readdirSync(`${process.cwd()}/src/routes/blog/posts/`, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)

        const posts = folders.map((filename) => {
            const markdownWithMetadata = fs
                .readFileSync(`src/routes/blog/posts/${filename}/index.md`)
                .toString();

            const { data } = matter(markdownWithMetadata);
            const post: BlogPostProps = {
                ...data,
                slug: filename,
                title: data.title ?? filename
            };

            return post;

        });
        store.posts = posts
    })
    return { posts: store.posts }
}