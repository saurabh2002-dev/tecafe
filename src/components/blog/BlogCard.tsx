'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

interface BlogCardProps {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    variant?: string;
    tags?: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({
    id,
    title,
    excerpt,
    category,
    date,
    readTime,
    image,
}) => {
    return (
        <Link href={`/blog/${id}`} className="blog-card-v2">
            <div className="blog-card-image-v2">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: 'cover' }}
                />
                <span className="blog-category-v2">{category}</span>
            </div>

            <div className="blog-card-body">
                <div className="blog-meta-v2">
                    <span>{date}</span>
                    <span>•</span>
                    <span>{readTime}</span>
                </div>
                <h3>{title}</h3>
                <p>{excerpt}</p>
                <span className="blog-read-more">
                    Read More <FaArrowRight />
                </span>
            </div>
        </Link>
    );
};

export default BlogCard;
