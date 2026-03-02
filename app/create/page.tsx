'use client';

import BlogForm from '@/components/BlogForm';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CreatePage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-5">
                    <Link href="/">
                        <h1 className="text-2xl font-bold text-gray-900 cursor-pointer">
                            xan<span className="text-purple-600">.blog</span>
                        </h1>
                    </Link>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12">
                <BlogForm onSuccess={() => router.push('/')} />
            </main>
        </div>
    );
}
