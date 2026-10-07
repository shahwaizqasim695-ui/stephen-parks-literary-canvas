import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '@/components/book/Navbar';
import { Hero } from '@/components/book/Hero';
import { AboutBook, StoryCards, Themes, Characters, QuoteSection, BookDetails, AuthorSection, PurchaseCTA, Footer } from '@/components/book/Sections';
import { book } from '@/data/book';

export const Route = createFileRoute('/')({
  component: Index,
  head: () => ({
    meta: [
      { title: `${book.title} | ${book.author}` },
      { name: 'description', content: book.description },
      { property: 'og:title', content: `${book.title} | ${book.author}` },
      { property: 'og:description', content: book.description },
      { property: 'og:type', content: 'book' },
      { property: 'og:url', content: '/' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `${book.title} | ${book.author}` },
      { name: 'twitter:description', content: book.description },
    ],
    links: [{ rel: 'canonical', href: '/' }],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Book', name: book.title, author: { '@type': 'Person', name: book.author }, publisher: { '@type': 'Organization', name: book.publisher }, isbn: book.isbn, genre: book.genre, inLanguage: 'en', description: book.description }) }],
  }),
});
function Index() {
  return <div className="book-site"><a href="#novel" className="skip-link">Skip to content</a><Navbar /><Hero /><AboutBook /><StoryCards /><Themes /><Characters /><QuoteSection /><BookDetails /><AuthorSection /><PurchaseCTA /><Footer /></div>;
}
