import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { BOOK_PURCHASE_URL } from '@/data/book';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`book-container ${className}`}>{children}</div>;
}
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7 }}>{children}</motion.div>;
}
export function DecorativeDivider({ className = '' }: { className?: string }) {
  return <div className={`ornament ${className}`} aria-hidden="true"><span />◇<span /></div>;
}
export function SectionHeading({ label, children }: { label: string; children?: ReactNode }) {
  return <><p className="eyebrow">{label}</p>{children && <h2 className="section-title">{children}</h2>}</>;
}
export function CTAButton({ outline = false, compact = false }: { outline?: boolean; compact?: boolean }) {
  const className = `book-button ${outline ? 'book-button-outline' : ''} ${compact ? 'book-button-compact' : ''}`;
  if (BOOK_PURCHASE_URL) return <Button asChild className={className}><a href={BOOK_PURCHASE_URL} target="_blank" rel="noopener noreferrer">Buy the book <ArrowUpRight size={16} /></a></Button>;
  return <Dialog><DialogTrigger asChild><Button className={className}>Buy the book <ArrowUpRight size={16} /></Button></DialogTrigger><DialogContent className="purchase-dialog"><DialogTitle className="font-display text-3xl">Your next chapter awaits.</DialogTitle><DialogDescription className="text-base leading-relaxed">The official purchase link has not been added yet. Please check back for availability from Parker Publishers.</DialogDescription><DecorativeDivider /></DialogContent></Dialog>;
}
export function StoryLink({ children = 'Discover the story' }: { children?: ReactNode }) {
  return <Button asChild variant="ghost" className="story-link"><a href="#story">{children}<span aria-hidden="true">↗</span></a></Button>;
}