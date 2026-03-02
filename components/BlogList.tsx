'use client';

import { motion } from 'framer-motion';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';
import { useState } from 'react';
import { BlogPost } from '@/lib/localStorage';

export default function BlogList() {
    const { posts, loading, error } = useBlogPosts();
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (post: BlogPost) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedPost(null), 300); // Wait for animation
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full"
                />
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <p className="text-red-800 font-semibold">Error loading posts</p>
                <p className="text-red-600 text-sm mt-2">{error}</p>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center"
            >
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No posts yet</h3>
                <p className="text-gray-600 mb-6">Create your first blog post to get started!</p>
                <a href="/create">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                        Create First Post
                    </motion.button>
                </a>
            </motion.div>
        );
    }

    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                    <BlogCard
                        key={post.id}
                        post={post}
                        index={index}
                        onOpenModal={handleOpenModal}
                    />
                ))}
            </div>

            <BlogModal
                post={selectedPost}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
}
