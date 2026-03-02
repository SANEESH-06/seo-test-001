#!/bin/bash

echo "Adding all changes..."
git add .

echo "Committing SEO files..."
git commit -m "Add sitemap.xml and robots.txt for SEO"

echo "Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Deployment complete!"
echo ""
echo "After Vercel deploys (2-3 minutes), test these URLs:"
echo "1. https://blog.saneesh.shop/sitemap.xml"
echo "2. https://blog.saneesh.shop/robots.txt"
echo ""
echo "Then submit sitemap to Google Search Console:"
echo "https://search.google.com/search-console"
