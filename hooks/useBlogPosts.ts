import { useState, useEffect } from 'react';
import {
    getPosts,
    createPost as createPostLS,
    updatePost as updatePostLS,
    deletePost as deletePostLS,
    imageToBase64,
    initializeSampleData,
    type BlogPost
} from '@/lib/localStorage';

export function useBlogPosts() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPosts = () => {
        try {
            setLoading(true);
            const allPosts = getPosts();
            setPosts(allPosts);
            setError(null);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const createPost = async (post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) => {
        try {
            const newPost = createPostLS(post);
            setPosts([newPost, ...posts]);
            return { success: true, data: newPost };
        } catch (err: any) {
            return { success: false, error: err.message };
        }
    };

    const updatePost = async (id: string, updates: Partial<BlogPost>) => {
        try {
            const updatedPost = updatePostLS(id, updates);
            if (!updatedPost) {
                throw new Error('Post not found');
            }
            setPosts(posts.map(p => p.id === id ? updatedPost : p));
            return { success: true, data: updatedPost };
        } catch (err: any) {
            return { success: false, error: err.message };
        }
    };

    const deletePost = async (id: string) => {
        try {
            const success = deletePostLS(id);
            if (!success) {
                throw new Error('Post not found');
            }
            setPosts(posts.filter(p => p.id !== id));
            return { success: true };
        } catch (err: any) {
            return { success: false, error: err.message };
        }
    };

    const uploadImage = async (file: File) => {
        try {
            const base64 = await imageToBase64(file);
            return { success: true, url: base64 };
        } catch (err: any) {
            return { success: false, error: err.message };
        }
    };

    useEffect(() => {
        // Initialize sample data on first load
        initializeSampleData();
        fetchPosts();
    }, []);

    return {
        posts,
        loading,
        error,
        createPost,
        updatePost,
        deletePost,
        uploadImage,
        refetch: fetchPosts
    };
}
