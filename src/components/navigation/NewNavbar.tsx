"use client";
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FoodDrawing } from '../after-dark/Shared';
import { trapDialogFocus } from '../after-dark/dialog';
import { NavbarDoodles } from './NavbarDoodles';
import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['Menu', '/menu'],
  ['Our Story', '/about'],
  ['Gallery', '/gallery'],
  ['Contact', '/contact'],
] as const;

export function Navbar() {
  return <NewNavbar />;
}

export function NewNavbar() {
  const pathname = usePathname();
  const activePath = pathname;

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  function closeMenu() {
    dialog.current?.close();
    setOpen(false);
    toggle.current?.focus();
  }

  function openMenu() {
    setOpen(true);
    dialog.current?.showModal();
  }

  return (
    <header className={`ad-header ${scrolled ? 'ad-header-scrolled' : ''}`}>
      {/* 1. Decorative Random Food Doodle Background */}
      <NavbarDoodles />

      <div className="ad-header-inner">
        {/* LOGO */}
        <Link href="/" className="ad-logo" aria-label="Cheezish home">
          <FoodDrawing />
          <span>CHEEZISH<span className="ad-logo-dot">.</span></span>
        </Link>

        {/* 2. DESKTOP LINKS WITH SHARED ANIMATED ACTIVE OVAL */}
        <nav aria-label="Primary navigation" className="ad-desktop-links">
          {links.map(([name, href]) => {
            const isActive = activePath === href || (href !== '/' && activePath.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`ad-nav-link ${isActive ? 'is-active' : ''}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="ad-active-pill"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                    aria-hidden="true"
                  />
                )}
                <span className="ad-nav-text">{name}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA BUTTON */}
        <Link href="/menu" className="ad-header-order">
          ORDER NOW <span aria-hidden="true">↗</span>
        </Link>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          ref={toggle}
          className="ad-mobile-toggle"
          aria-label="Open navigation menu"
          aria-haspopup="dialog"
          aria-controls="ad-mobile-menu"
          onClick={openMenu}
        >
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE DIALOG MENU */}
      <dialog
        ref={dialog}
        id="ad-mobile-menu"
        className="ad-mobile-dialog"
        aria-label="Navigation menu"
        onKeyDown={trapDialogFocus}
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="ad-mobile-dialog-top">
          <span className="ad-logo">CHEEZISH.</span>
          <button className="ad-close" onClick={closeMenu} aria-label="Close navigation menu">×</button>
        </div>
        <p className="ad-eyebrow">Good taste starts here</p>
        <nav aria-label="Mobile navigation">
          {links.map(([name, href], i) => {
            const isActive = activePath === href || (href !== '/' && activePath.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                aria-current={isActive ? 'page' : undefined}
                className={isActive ? 'is-active' : ''}
              >
                <small>0{i + 1}</small>
                <span>{name}</span>
                {isActive && <span className="ad-mobile-active-tag" aria-hidden="true">Active</span>}
                <span aria-hidden="true">↗</span>
              </Link>
            );
          })}
        </nav>
        <Link className="ad-button" href="/menu" onClick={closeMenu}>
          Explore the demo menu <span aria-hidden="true">↗</span>
        </Link>
        <p className="ad-note">Big flavour. No boring burgers.</p>
      </dialog>
    </header>
  );
}
