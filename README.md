# Blog Website with localStorage

A modern, full-featured blog platform built with Next.js, Tailwind CSS, and Framer Motion. All data is stored locally in your browser using localStorage - no backend required!

## 🚀 Features

- ✅ Create, read, and delete blog posts
- ✅ Image upload (stored as base64)
- ✅ Offline-first - works without internet
- ✅ Responsive design with Tailwind CSS
- ✅ Smooth animations with Framer Motion
- ✅ Custom React hooks for data management
- ✅ Component-based architecture
- ✅ TypeScript support
- ✅ Sample blog posts included

## 📁 Project Structure

```
├── app/
│   ├── page.tsx              # Home page with blog list
│   ├── create/page.tsx       # Create new post page
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── BlogForm.tsx          # Form component for creating posts
│   ├── BlogCard.tsx          # Card component for displaying posts
│   └── BlogList.tsx          # List component for all posts
├── hooks/
│   └── useBlogPosts.ts       # Custom hook for localStorage operations
└── lib/
    └── localStorage.ts       # localStorage utility functions
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

That's it! No database setup, no API keys, no configuration needed.

## 📦 How It Works

### Data Storage

All blog posts are stored in your browser's localStorage:
- Posts are saved as JSON
- Images are converted to base64 strings
- Data persists across browser sessions
- Each post has a unique UUID

### Sample Data

On first load, the app creates 3 sample blog posts to demonstrate the functionality. You can delete these and create your own.

## 🎨 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Storage**: Browser localStorage
- **Language**: TypeScript

## 📝 Usage

### Creating a Post

1. Click "Write" button in the header
2. Fill in the form:
   - Title
   - Author name
   - Category
   - Content
   - Upload image (optional)
3. Click "Publish Post"

### Viewing Posts

- All posts are displayed on the home page
- Featured post shows in the hero section
- Posts are sorted by creation date (newest first)

### Deleting a Post

1. Hover over a blog card
2. Click the delete (🗑️) button
3. Confirm deletion

## 🎯 Features Breakdown

### BlogForm Component
- Form validation
- Image upload with preview
- Base64 image encoding
- Success/error messaging

### BlogCard Component
- Displays individual blog post
- Delete functionality
- Hover animations
- Responsive image display
- Date formatting

### BlogList Component
- Fetches and displays all posts
- Loading states
- Error handling
- Empty state with call-to-action

### useBlogPosts Hook
Provides all blog operations:
- `posts` - Array of blog posts
- `loading` - Loading state
- `error` - Error state
- `createPost()` - Create new post
- `updatePost()` - Update existing post
- `deletePost()` - Delete post
- `uploadImage()` - Convert image to base64
- `refetch()` - Refresh posts list

## 🌟 Design Features

- Modern, clean blog layout inspired by Medium
- Featured article hero section
- Responsive grid for posts
- Newsletter subscription section
- Professional footer with social links
- Smooth page transitions
- Purple accent theme
- Glassmorphism effects

## 💾 localStorage API

The app uses these localStorage functions:

```typescript
// Get all posts
getPosts(): BlogPost[]

// Create a post
createPost(post): BlogPost

// Update a post
updatePost(id, updates): BlogPost | null

// Delete a post
deletePost(id): boolean

// Convert image to base64
imageToBase64(file): Promise<string>
```

## 🔒 Data Persistence

- Data is stored in browser localStorage
- Survives page refreshes
- Persists until browser cache is cleared
- Each browser/device has its own data
- No server or database required

## 📱 Browser Compatibility

Works in all modern browsers that support:
- localStorage API
- ES6+ JavaScript
- CSS Grid and Flexbox

## 🚀 Deployment

Deploy to any static hosting service:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Cloudflare Pages

No environment variables or backend configuration needed!

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## 📄 License

MIT License - feel free to use this project for learning and development.

## 🎉 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Your blog is ready to use! No setup, no configuration, just start writing! ✨
