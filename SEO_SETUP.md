# SEO Setup Guide for DevBlog

## ✅ Completed Setup

### 1. Global SEO Metadata (app/layout.tsx)
- ✅ Title with template
- ✅ Description
- ✅ Keywords
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Robots configuration
- ✅ Structured Data (JSON-LD)

### 2. Technical SEO Files
- ✅ `app/robots.ts` - Robots.txt configuration
- ✅ `app/sitemap.ts` - Dynamic sitemap generation
- ✅ `components/StructuredData.tsx` - Schema.org markup

### 3. Page-Level SEO
- ✅ Home page metadata
- ✅ Create page metadata

---

## 🚀 Next Steps (After Deployment)

### Step 1: Add OG Image
Create an Open Graph image (1200x630px) and save as:
```
public/og-image.png
```

Use tools like:
- Canva: https://www.canva.com/create/open-graph/
- Figma
- Online generators

### Step 2: Google Search Console Setup

1. Go to: https://search.google.com/search-console
2. Add property: `https://blog.saneesh.shop`
3. Choose verification method: **HTML tag**
4. Copy the verification code
5. Add to `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  // ... existing metadata
  verification: {
    google: "YOUR_VERIFICATION_CODE_HERE",
  },
};
```

6. Deploy and verify

### Step 3: Submit Sitemap to Google

1. In Google Search Console → Sitemaps
2. Enter: `sitemap.xml`
3. Click Submit
4. Wait 1-7 days for indexing

### Step 4: Test SEO Performance

Run these tests:

1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Test: https://blog.saneesh.shop
   - Target: 90+ score

2. **Mobile-Friendly Test**
   - URL: https://search.google.com/test/mobile-friendly
   - Test your site

3. **Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test structured data

### Step 5: Check Indexing

After 1-7 days, search Google:
```
site:blog.saneesh.shop
```

---

## 📊 SEO Checklist

### Essential (Must Have)
- ✅ Metadata title
- ✅ Metadata description
- ✅ sitemap.xml
- ✅ robots.txt
- ✅ SSL enabled (Vercel automatic)
- ✅ Fast loading (Next.js optimized)
- ⏳ OG image (create and add)
- ⏳ Google Search Console verification
- ⏳ Sitemap submission

### Recommended
- ✅ Structured data (JSON-LD)
- ✅ Twitter cards
- ✅ Semantic HTML
- ⏳ Google Analytics (optional)
- ⏳ Favicon (add to public/)

### Advanced (Optional)
- Blog post individual pages with metadata
- Dynamic sitemap with all blog posts
- Breadcrumb structured data
- Article structured data for blog posts
- RSS feed

---

## 🔧 Configuration Details

### Current Domain
```
https://blog.saneesh.shop
```

### Sitemap URL
```
https://blog.saneesh.shop/sitemap.xml
```

### Robots.txt URL
```
https://blog.saneesh.shop/robots.txt
```

---

## 📈 Expected Results

### Timeline
- **Day 1-3**: Google discovers your site
- **Day 3-7**: Initial indexing begins
- **Week 2-4**: Full site indexed
- **Month 1-3**: Rankings improve

### What to Monitor
1. Google Search Console
   - Impressions
   - Clicks
   - Average position
   - Coverage issues

2. PageSpeed Insights
   - Performance score
   - Core Web Vitals
   - Accessibility

---

## 🎯 SEO Best Practices for Blog Posts

When creating blog posts, ensure:

1. **Title**: 50-60 characters
2. **Description**: 150-160 characters
3. **Headings**: Use H1, H2, H3 hierarchy
4. **Images**: Use Next.js Image component with alt text
5. **Internal links**: Link between related posts
6. **URL structure**: Clean, descriptive URLs
7. **Content**: 500+ words minimum
8. **Keywords**: Natural placement, no stuffing

---

## 🛠️ Troubleshooting

### Site not indexed?
- Check Google Search Console for errors
- Verify sitemap is accessible
- Ensure robots.txt allows crawling
- Check for noindex tags

### Low performance score?
- Optimize images (use Next.js Image)
- Enable caching
- Minimize JavaScript
- Use CDN (Vercel automatic)

### OG image not showing?
- Verify image is 1200x630px
- Check file path is correct
- Clear social media cache:
  - Facebook: https://developers.facebook.com/tools/debug/
  - Twitter: https://cards-dev.twitter.com/validator

---

## 📞 Support

For SEO issues:
1. Check Google Search Console
2. Review Next.js SEO docs: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
3. Test with SEO tools listed above

---

**Last Updated**: February 2026
**Next.js Version**: 15+
**Deployment**: Vercel
