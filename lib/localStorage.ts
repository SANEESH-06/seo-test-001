export type BlogPost = {
    id: string;
    title: string;
    content: string;
    image_url?: string;
    author: string;
    category: string;
    created_at: string;
    updated_at: string;
};

const STORAGE_KEY = 'blog_posts';

// Get all posts from localStorage
export const getPosts = (): BlogPost[] => {
    if (typeof window === 'undefined') return [];

    try {
        const posts = localStorage.getItem(STORAGE_KEY);
        return posts ? JSON.parse(posts) : [];
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return [];
    }
};

// Save posts to localStorage
const savePosts = (posts: BlogPost[]): void => {
    if (typeof window === 'undefined') return;

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
};

// Create a new post
export const createPost = (post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>): BlogPost => {
    const newPost: BlogPost = {
        ...post,
        id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    };

    const posts = getPosts();
    posts.unshift(newPost); // Add to beginning
    savePosts(posts);

    return newPost;
};

// Update a post
export const updatePost = (id: string, updates: Partial<BlogPost>): BlogPost | null => {
    const posts = getPosts();
    const index = posts.findIndex(p => p.id === id);

    if (index === -1) return null;

    posts[index] = {
        ...posts[index],
        ...updates,
        updated_at: new Date().toISOString(),
    };

    savePosts(posts);
    return posts[index];
};

// Delete a post
export const deletePost = (id: string): boolean => {
    const posts = getPosts();
    const filteredPosts = posts.filter(p => p.id !== id);

    if (filteredPosts.length === posts.length) return false;

    savePosts(filteredPosts);
    return true;
};

// Convert image file to base64 for localStorage
export const imageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

// Initialize with sample data if empty
export const initializeSampleData = (): void => {
    const posts = getPosts();

    if (posts.length === 0) {
        const samplePosts: BlogPost[] = [
            {
                id: crypto.randomUUID(),
                title: 'Getting Started with React',
                content: 'React is a powerful JavaScript library for building user interfaces. In this article, we will explore the fundamentals of React and how to get started with your first React application.',
                author: 'John Doe',
                category: 'React',
                image_url: '',
                created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
                updated_at: new Date(Date.now() - 86400000 * 2).toISOString(),
            },
            {
                id: crypto.randomUUID(),
                title: 'Mastering Tailwind CSS',
                content: 'Tailwind CSS is a utility-first CSS framework that makes styling your applications faster and more efficient. Learn how to use Tailwind CSS to create beautiful, responsive designs.',
                author: 'Jane Smith',
                category: 'CSS',
                image_url: '',
                created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
                updated_at: new Date(Date.now() - 86400000 * 5).toISOString(),
            },
            {
                id: crypto.randomUUID(),
                title: 'Next.js 14 Features',
                content: 'Next.js 14 brings exciting new features including improved performance, better developer experience, and enhanced server components. Discover what is new in this latest release.',
                author: 'Mike Johnson',
                category: 'Javascript',
                image_url: '',
                created_at: new Date(Date.now() - 86400000 * 7).toISOString(),
                updated_at: new Date(Date.now() - 86400000 * 7).toISOString(),
            },
        ];

        savePosts(samplePosts);
    }
};
