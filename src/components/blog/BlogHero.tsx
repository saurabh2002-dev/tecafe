'use client';

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface BlogHeroProps {
    onSearch?: (query: string) => void;
}

const BlogHero: React.FC<BlogHeroProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSearch) onSearch(searchQuery);
    };

    return (
        <section className="blog-hero-v2">
            <div className="container">
                <span className="hero-tag">Blog</span>
                <h1>Insights & <span className="text-gradient-cyan">Innovation</span></h1>
                <p>Latest articles on AI, technology, and digital transformation.</p>

                <form onSubmit={handleSearch} className="blog-search-v2">
                    <FaSearch />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </form>
            </div>
        </section>
    );
};

export default BlogHero;
