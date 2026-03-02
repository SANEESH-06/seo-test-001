'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost } from '@/lib/localStorage';
import Image from 'next/image';

type BlogModalProps = {
    post: BlogPost | null;
    isOpen: boolean;
    onClose: () => void;
};

export default function BlogModal({ post, isOpen, onClose }: BlogModalProps) {
    if (!post) return null;

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop with blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal with 3D flip animation (left to right) */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none" style={{ perspective: '1000px' }}>
                        <motion.div
                            initial={{
                                opacity: 0,
                                rotateY: -90,
                                scale: 0.8
                            }}
                            animate={{
                                opacity: 1,
                                rotateY: 0,
                                scale: 1
                            }}
                            exit={{
                                opacity: 0,
                                rotateY: 90,
                                scale: 0.8
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 200,
                                damping: 20,
                                duration: 0.6
                            }}
                            style={{
                                transformStyle: 'preserve-3d',
                            }}
                            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden pointer-events-auto"
                        >
                            {/* Close button */}
                            <div className="sticky top-0 right-0 z-10 flex justify-end p-4 bg-gradient-to-b from-black/20 to-transparent">
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onClose}
                                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                                >
                                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </motion.button>
                            </div>

                            {/* Content */}
                            <div className="overflow-y-auto max-h-[calc(90vh-4rem)] px-8 pb-8">
                                {/* Image */}
                                {post.image_url && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="relative w-full h-96 mb-8 rounded-xl overflow-hidden"
                                    >
                                        <Image
                                            src={post.image_url}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                )}

                                {/* Category badge */}
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4"
                                >
                                    {post.category}
                                </motion.span>

                                {/* Title */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-4xl font-bold text-gray-900 mb-4"
                                >
                                    {post.title}
                                </motion.h2>

                                {/* Author and date */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        {post.author.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{post.author}</p>
                                        <p className="text-sm text-gray-500">{formatDate(post.created_at)}</p>
                                    </div>
                                </motion.div>

                                {/* Content */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="prose prose-lg max-w-none"
                                >
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                        {post.content}
                                    </p>
                                </motion.div>

                                {/* Footer actions */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="mt-8 pt-6 border-t border-gray-200 flex gap-4"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                                    >
                                        👍 Like
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                                    >
                                        💬 Comment
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                                    >
                                        🔗 Share
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
