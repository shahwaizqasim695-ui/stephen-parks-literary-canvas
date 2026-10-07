import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { navigation } from '@/data/book';
import { CTAButton, Container } from './shared';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 30); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update); }, []);
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}><Container className="nav-inner"><a className="wordmark" href="#top" aria-label="Stephen Parks, home">Stephen Parks<span>AUTHOR & STORYTELLER</span></a><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><div className="desktop-buy"><CTAButton outline compact /></div><Sheet open={open} onOpenChange={setOpen}><SheetTrigger asChild><Button variant="ghost" size="icon" className="mobile-menu min-h-11 min-w-11" aria-label="Open navigation"><Menu /></Button></SheetTrigger><SheetContent className="book-menu"><SheetTitle className="font-display text-3xl">Stephen Parks</SheetTitle><SheetDescription>A novel of love, duty, and choice.</SheetDescription><nav aria-label="Mobile navigation">{navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</nav><CTAButton /></SheetContent></Sheet></Container></header>;
}