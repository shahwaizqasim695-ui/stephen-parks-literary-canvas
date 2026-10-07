import coverAsset from '@/assets/front-cover.webp.asset.json';
import artworkAsset from '@/assets/couple-art.webp.asset.json';
import textureAsset from '@/assets/ink-texture.webp.asset.json';

// Replace with the official retailer URL when it is available.
export const BOOK_PURCHASE_URL = '';
export const book = {
  title: 'Lust and Love and the Difference Of',
  author: 'Stephen Parks',
  publisher: 'Parker Publishers',
  isbn: '978-1-963452-08-7',
  genre: 'Contemporary Fiction / Romance',
  setting: 'Blissview University',
  cover: coverAsset.url,
  artwork: artworkAsset.url,
  texture: textureAsset.url,
  description: 'Discover Lust and Love and the Difference Of by Stephen Parks, a sweeping novel about found family, friendship, love, impossible choices, heartbreak and hope.',
};
export const navigation = [
  { label: 'The Story', href: '#story' },
  { label: 'Themes', href: '#themes' },
  { label: 'About the Author', href: '#author' },
  { label: 'Book Details', href: '#details' },
];
export const storyCards = [
  { title: 'Found family', text: 'Friendship, loyalty, mentors, and the unexpected people who become home.' },
  { title: 'An impossible bond', text: 'Sophia and Jonathan discover that some relationships refuse to remain simple.' },
  { title: 'Every choice has a cost', text: 'The closer they become, the greater the risk of losing what they have built.' },
];
export const themes = ['Found family', 'Friendship', 'Love', 'Loyalty', 'Duty', 'Choice', 'Consequence', 'Hope'];