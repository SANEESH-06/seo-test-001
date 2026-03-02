'use client';

import { motion } from 'framer-motion';
import { BlogPost } from '@/lib/localStorage';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { useState } from 'react';
import Image from 'next/image';

type BlogCardProps = {
    post: BlogPost;
    index: number;
    onOpenModal: (post: BlogPost) => void;
};

export default function BlogCard({ post, index, onOpenModal }: BlogCardProps) {
    const { deletePost } = useBlogPosts();
    const [deleting, setDeleting] = useState(false);

    const handleDelete = async (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent modal from opening
        if (!confirm('Are you sure you want to delete this post?')) return;

        setDeleting(true);
        const result = await deletePost(post.id);

        if (!result.success) {
            alert('Failed to delete post: ' + result.error);
            setDeleting(false);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return '1 day ago';
        if (diffDays < 7) return `${diffDays} days ago`;
        return date.toLocaleDateString();
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -8 }}
            onClick={() => onOpenModal(post)}
            className="bg-white rounded-xl overflow-hidden border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all cursor-pointer group"
        >
            <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100">
                {post.image_url ? (
                    <Image
                        src={post.image_url}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-6xl">
                        📝
                    </div>
                )}
                <div className="absolute top-3 right-3">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleDelete}
                        disabled={deleting}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg disabled:opacity-50"
                    >
                        {deleting ? '⏳' : '🗑️'}
                    </motion.button>
                </div>
            </div>

            <div className="p-5">
                <span className="text-xs font-semibold text-purple-600 uppercase">
                    {post.category}
                </span>
                <h4 className="font-bold text-gray-900 mt-2 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {post.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.content}
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs">
                            {post.author.charAt(0).toUpperCase()}
                        </div>
                        <span>{post.author}</span>
                    </div>
                    <span>• {formatDate(post.created_at)}</span>
                </div>
            </div>
        </motion.article>
    );
}
