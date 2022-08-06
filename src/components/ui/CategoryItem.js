import React from 'react'

export default function CategoryItem({ category }) {
    return (
        <a
            href="/"
            className="flex group justify-center items-center rounded transition-colors hover:bg-purple-50 flex-col p-4"
        >
            <img
                src={category.image}
                alt={category.title}
                className="w-12 h-12 rounded-lg border border-gray-200 object-cover my-2"
            />
            <span
                className="font-semibold transition-colors group-hover:text-purple-700 text-center md:whitespace-nowrap block mt-2 text-sm"
            >
                {category.title}
            </span>
        </a>
    )
}
