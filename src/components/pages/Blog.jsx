import React, { useEffect } from "react";
import { BlogContainer, PostList, PostCard, Title, BlogButton } from "./styles"; // Importe seus estilos

import img1 from "./../../assets/img/blog1.jpeg";

// animações
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const posts = [
        { title: "Postagem 1", excerpt: "Resumo da postagem 1...", imageUrl: img1 },
        { title: "Postagem 2", excerpt: "Resumo da postagem 2...", imageUrl: img1 },
        { title: "Postagem 3", excerpt: "Resumo da postagem 3...", imageUrl: img1 },
        { title: "Postagem 4", excerpt: "Resumo da postagem 4...", imageUrl: img1 },
    ];

    return (
        <BlogContainer>
            <Title data-aos="fade-right" data-aos-duration="2000">Blog</Title>
            <PostList data-aos="zoom-in" data-aos-duration="2000">
                {posts.map((post, index) => (
                    <PostCard key={index} imageUrl={post.imageUrl}>
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <BlogButton>Leia mais</BlogButton>
                    </PostCard>
                ))}
            </PostList>
        </BlogContainer>
    );
};

export default Blog;
