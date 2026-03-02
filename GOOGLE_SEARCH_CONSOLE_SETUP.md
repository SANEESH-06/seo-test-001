# Google Search Console Setup

## Quick Setup Guide

### Step 1: Add Your Site
1. Go to: https://search.google.com/search-console
2. Click "Add Property"
3. Enter: `https://blog.saneesh.shop`
4. Click "Continue"

### Step 2: Verify Ownership
Choose **HTML tag** method:

1. Google will give you code like:
```html
<meta name="google-site-verification" content="abc123xyz..." />
```

2. Copy the content value (abc123xyz...)

3. Open `app/layout.tsx`

4. Add to metadata:
```typescript
export const metadata: Metadata = {
  // ... existing metadata
  verification: {
    google: "abc123xyz...", // Paste your code here
  },
};
```

5. Save, commit, and push to GitHub
6. Wait for Vercel to deploy (2-3 minutes)
7. Go back to Search Console and click "Verify"

### Step 3: Submit Sitemap
1. In Search Console, go to "Sitemaps" (left sidebar)
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Status should show "Success"

### Step 4: Monitor
Check these sections daily:
- **Overview**: Traffic summary
- **Performance**: Clicks, impressions, position
- **Coverage**: Indexed pages
- **Enhancements**: Mobile usability, Core Web Vitals

### Expected Timeline
- **Day 1**: Verification complete
- **Day 2-3**: Sitemap processed
- **Day 3-7**: First pages indexed
- **Week 2+**: Full indexing and data

### Verify Indexing
Search Google:
```
site:blog.saneesh.shop
```

You should see your pages listed.

---

## Troubleshooting

**"Verification failed"**
- Make sure code is in layout.tsx
- Deploy is complete
- No typos in verification code

**"Sitemap couldn't be read"**
- Check: https://blog.saneesh.shop/sitemap.xml
- Should show XML content
- If 404, redeploy

**"No data yet"**
- Normal for new sites
- Wait 3-7 days
- Keep creating content

---

## Additional Tools

### Bing Webmaster Tools
https://www.bing.com/webmasters
- Import from Google Search Console
- Covers Bing, Yahoo, DuckDuckGo

### Yandex Webmaster
https://webmaster.yandex.com
- For Russian search traffic

---

**Ready to verify?** Follow Step 1 above!
