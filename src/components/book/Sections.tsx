import { book, navigation, storyCards, themes } from '@/data/book';
import { Container, CTAButton, DecorativeDivider, Reveal, SectionHeading, StoryLink } from './shared';

export function AboutBook() {
  return <section id="novel" className="section about-section"><Container><Reveal className="about-grid"><div><SectionHeading label="The novel" /><h2 className="about-heading">Some places<br />become memories.<br /><em>Blissview University<br />becomes home.</em></h2><DecorativeDivider /></div><div className="body-copy about-copy"><p>For Sophia, being at Blissview is more than a college education. Surrounded by loyal friends, inspiring mentors, and a campus unlike any other, she discovers that family isn't always something you're born into. Sometimes it's something you find.</p><p>But as Sophia's bond with Jonathan Thomas grows into something neither of them can ignore, they find themselves walking a path where love and duty collide.</p><p className="small-caption">A place to belong. A love to reckon with.</p></div></Reveal></Container></section>;
}
export function StoryCards() {
  return <section id="story" className="section story-section"><Container><Reveal><div className="section-heading-row"><SectionHeading label="At the heart of the story">Love. Duty. <em>Choice.</em></SectionHeading><span className="section-side-note">Three threads.<br />One unforgettable story.</span></div><div className="story-grid">{storyCards.map((card, i) => <article className="story-card" key={card.title}><span className="story-number">0{i + 1}</span><div className="card-rule" /><h3>{card.title}</h3><p>{card.text}</p><span className="card-ornament" aria-hidden="true">◇</span></article>)}</div></Reveal></Container></section>;
}
export function Themes() {
  return <section id="themes" className="section themes-section"><Container><Reveal><SectionHeading label="The things that bind us">A story about<br />more than <em>love.</em></SectionHeading><ul className="themes-list">{themes.map((theme, i) => <li key={theme}><span className={i === 2 || i === 7 ? 'theme-emphasis' : ''}>{theme}</span><span className="theme-star" aria-hidden="true">✧</span></li>)}</ul></Reveal></Container></section>;
}
export function Characters() {
  return <section className="characters-section"><Container className="characters-grid"><div className="character-art"><img src={book.artwork} alt="Original ink illustration from the cover of Sophia and Jonathan standing together" width="317" height="474" loading="lazy" /><span className="art-caption">SOPHIA & JONATHAN</span></div><Reveal className="character-copy"><SectionHeading label="Sophia & Jonathan">Some connections<br />change the course<br />of <em>everything.</em></SectionHeading><DecorativeDivider /><div className="body-copy"><p>Sophia came to Blissview looking for an education.<br />What she found was belonging.</p><p>Jonathan represents something far more complicated—a relationship caught between affection, responsibility, and choices neither can avoid forever.</p></div></Reveal></Container></section>;
}
export function QuoteSection() {
  return <section className="quote-section"><Container><Reveal><DecorativeDivider /><blockquote>“Family isn't always something<br className="desktop-break" /> you're born into.<br /><em>Sometimes it's something you find.</em>”</blockquote><p className="eyebrow">Lust and Love and the Difference Of</p><DecorativeDivider /></Reveal></Container></section>;
}
export function BookDetails() {
  const details = [['Title', book.title], ['Author', book.author], ['Genre', book.genre], ['Setting', book.setting], ['ISBN', book.isbn], ['Publisher', book.publisher]];
  return <section id="details" className="section details-section"><Container><Reveal className="details-grid"><div><SectionHeading label="Between the covers">The book,<br /><em>at a glance.</em></SectionHeading><DecorativeDivider /><img className="details-cover" src={book.cover} alt="Front cover of the novel" width="494" height="769" loading="lazy" /></div><dl className="details-index">{details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></Reveal></Container></section>;
}
export function AuthorSection() {
  return <section id="author" className="section author-section"><Container><Reveal className="author-grid"><div className="author-placeholder" aria-label="Author portrait not yet provided"><span className="author-monogram" aria-hidden="true">SP</span><DecorativeDivider /><span className="small-caption">Stephen Parks</span></div><div className="author-copy"><SectionHeading label="About the author">Stephen <em>Parks</em></SectionHeading><DecorativeDivider /><p className="body-copy">Author biography will be added here.</p><p className="small-caption">Lust and Love and the Difference Of</p></div></Reveal></Container></section>;
}
export function PurchaseCTA() {
  return <section id="purchase" className="purchase-section"><Container><Reveal><p className="eyebrow">The story is waiting</p><h2>Every choice<br />carries <em>consequences.</em></h2><DecorativeDivider /><p>Discover a story of friendship, family, impossible choices,<br className="desktop-break" /> heartbreak, humor, and hope.</p><div className="purchase-actions"><CTAButton /><StoryLink>Read the story</StoryLink></div></Reveal></Container></section>;
}
export function Footer() {
  return <footer className="site-footer"><Container><div className="footer-top"><div className="footer-book">Lust and Love<br /><em>and the Difference Of</em><span>Stephen Parks</span></div><nav aria-label="Footer navigation">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><div className="publisher">PARKER<span>PUBLISHERS</span></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Stephen Parks. All rights reserved.</p><a href="#top">Back to the beginning ↑</a></div></Container></footer>;
}