export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "DevBlog",
        url: "https://blog.saneesh.shop",
        description: "Web development tutorials and guides",
        author: {
            "@type": "Person",
            name: "Saneesh",
        },
        potentialAction: {
            "@type": "SearchAction",
            target: "https://blog.saneesh.shop/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
