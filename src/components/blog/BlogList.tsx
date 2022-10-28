import { component$ } from "@builder.io/qwik";
import { BlogPostProps } from "~/types/Types";
import { BlogCard } from "./BlogCard";
export const BlogList = component$(({ posts }: { posts: BlogPostProps[] }) => (
    <ul className='flex flex-col gap-3'>
        {posts && posts.map((post) => (
            <BlogCard href={"/blog/posts/" + post.slug} title={post.title} img={post.cover} desc={post.description} />
        ))}
    </ul>
))