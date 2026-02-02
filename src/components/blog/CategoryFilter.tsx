'use client';

import React from 'react';

interface Category {
    id: string;
    name: string;
}

interface CategoryFilterProps {
    categories: Category[];
    activeCategory: string;
    onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
    categories,
    activeCategory,
    onCategoryChange
}) => {
    return (
        <div className="blog-filters-v2">
            <button
                className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => onCategoryChange('all')}
            >
                All
            </button>
            {categories.map((category) => (
                <button
                    key={category.id}
                    className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => onCategoryChange(category.id)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
