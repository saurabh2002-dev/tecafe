'use client';

import React, { useState } from 'react';
import BlogHero from '@/components/blog/BlogHero';
import CategoryFilter from '@/components/blog/CategoryFilter';
import BlogCard from '@/components/blog/BlogCard';
import Newsletter from '@/components/blog/Newsletter';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const blogPosts = [
    {
        id: '1',
        title: 'The Future of AI: Generative Models Transforming Industries',
        excerpt: 'Explore how generative AI is revolutionizing content creation and business processes.',
        category: 'AI & ML',
        categoryId: 'ai-ml',
        date: 'Dec 8, 2025',
        readTime: '8 min',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    },
    {
        id: '2',
        title: 'Building Scalable RAG Systems: Best Practices',
        excerpt: 'Learn essential patterns for production-ready Retrieval-Augmented Generation systems.',
        category: 'AI & ML',
        categoryId: 'ai-ml',
        date: 'Dec 7, 2025',
        readTime: '12 min',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
    },
    {
        id: '3',
        title: 'Migrating to AEM as a Cloud Service: Lessons Learned',
        excerpt: 'A comprehensive guide to successfully migrating websites to AEMaaCS.',
        category: 'AEM',
        categoryId: 'aem',
        date: 'Dec 6, 2025',
        readTime: '10 min',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    },
    {
        id: '4',
        title: 'Modern Web Development with Next.js 15',
        excerpt: 'Master the latest features including Server Components and streaming.',
        category: 'Web Dev',
        categoryId: 'web-dev',
        date: 'Dec 5, 2025',
        readTime: '13 min',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800',
    },
    {
        id: '5',
        title: 'Mobile App Development with AI Integration',
        excerpt: 'How to seamlessly integrate AI capabilities into your mobile applications.',
        category: 'Mobile',
        categoryId: 'mobile',
        date: 'Dec 4, 2025',
        readTime: '9 min',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    },
    {
        id: '6',
        title: 'UI/UX Trends 2025: Designing for the AI Era',
        excerpt: 'Stay ahead with the latest design trends shaping AI-powered applications.',
        category: 'Design',
        categoryId: 'design',
        date: 'Dec 3, 2025',
        readTime: '10 min',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    },
];

const categories = [
    { id: 'ai-ml', name: 'AI & ML' },
    { id: 'aem', name: 'AEM' },
    { id: 'web-dev', name: 'Web Dev' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'design', name: 'Design' },
];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === 'all' || post.categoryId === activeCategory;
        const matchesSearch = searchQuery === '' ||
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    const handleCategoryChange = (categoryId: string) => {
        setActiveCategory(categoryId);
        setCurrentPage(1);
    };

    return (
        <main className="blog-page-v2">
            <BlogHero onSearch={handleSearch} />

            <section className="blog-content-section">
                <div className="container">
                    <CategoryFilter
                        categories={categories}
                        activeCategory={activeCategory}
                        onCategoryChange={handleCategoryChange}
                    />

                    {currentPosts.length > 0 ? (
                        <div className="blog-grid-v2">
                            {currentPosts.map((post) => (
                                <BlogCard key={post.id} {...post} />
                            ))}
                        </div>
                    ) : (
                        <div className="blog-empty">
                            <p>No articles found. Try a different search or category.</p>
                        </div>
                    )}

                    {totalPages > 1 && (
                        <div className="blog-pagination-v2">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                            >
                                <FaChevronLeft />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    className={currentPage === page ? 'active' : ''}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Newsletter />
        </main>
    );
}
