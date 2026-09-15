"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { MENU_CATEGORIES, menuData } from '@/src/data/menu';
import { FoodDrawing } from './Shared';

export function MenuExperience() {
  const shouldReduceMotion = useReducedMotion();
  const [picks, setPicks] = useState<Record<string, number>>({});
  const [activeCategory, setActiveCategory] = useState<string>(MENU_CATEGORIES[0].id);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navTrackRef = useRef<HTMLDivElement>(null);

  const totalItems = Object.values(picks).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = menuData.reduce(
    (sum, item) => sum + (picks[item.id] || 0) * item.price,
    0
  );

  const addPick = (id: string) => {
    setPicks((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removePick = (id: string) => {
    setPicks((prev) => {
      const current = prev[id] || 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: current - 1 };
    });
  };

  const clearPicks = () => {
    setPicks({});
    setIsDrawerOpen(false);
  };

  // Scroll listener / IntersectionObserver for active sticky category
  useEffect(() => {
    const ids = MENU_CATEGORIES.map((c) => c.id);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveCategory(visible[0].target.id);
        }
      },
      {
        rootMargin: '-120px 0px -60% 0px',
        threshold: [0, 0.2, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -128;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
      });
    }
  };

  // Segmented items by category
  const signatureBurgers = menuData.filter((item) => item.category === 'signature-burgers');
  const loadedFries = menuData.filter((item) => item.category === 'loaded-fries');
  const deals = menuData.filter((item) => item.category === 'deals');
  const drinks = menuData.filter((item) => item.category === 'drinks');
  const desserts = menuData.filter((item) => item.category === 'desserts');

  const theCheezish = signatureBurgers.find((i) => i.id === 'the-cheezish') || signatureBurgers[0];
  const doubleMelt = signatureBurgers.find((i) => i.id === 'double-melt');
  const inferno = signatureBurgers.find((i) => i.id === 'inferno');
  const plantCheezish = signatureBurgers.find((i) => i.id === 'plant-cheezish');

  return (
    <div className="menu-experience">
      {/* ============================================================ */}
      {/* 1. CINEMATIC EDITORIAL MENU HERO                             */}
      {/* ============================================================ */}
      <section className="menu-hero ad-wrap">
        <div className="menu-hero-copy">
          <div className="menu-hero-eyebrow">
            <span className="menu-eyebrow-dot" aria-hidden="true" />
            <span>PICK YOUR CRAVING</span>
          </div>

          <h1 className="menu-hero-title">
            THE<br />
            <span className="menu-hero-highlight">GOOD STUFF.</span>
          </h1>

          <p className="menu-hero-lead">
            Burgers first. Decisions second.<br />
            Big flavour, golden melts, no boring choices.
          </p>

          <div className="menu-hero-specs">
            <div className="menu-spec-item">
              <span className="menu-spec-num">100%</span>
              <span className="menu-spec-label">Aged British Beef</span>
            </div>
            <div className="menu-spec-sep" aria-hidden="true" />
            <div className="menu-spec-item">
              <span className="menu-spec-num">BRIOCHE</span>
              <span className="menu-spec-label">Toasted Daily</span>
            </div>
            <div className="menu-spec-sep" aria-hidden="true" />
            <div className="menu-spec-item">
              <span className="menu-spec-num">MELT</span>
              <span className="menu-spec-label">Cheezish Blend</span>
            </div>
          </div>

          <div className="menu-hero-action-row">
            <button
              onClick={() => scrollToCategory('signature-burgers')}
              className="menu-hero-cta"
            >
              EXPLORE BURGERS <span aria-hidden="true">↓</span>
            </button>
            <span className="menu-hero-footnote">
              Demo menu · GBP prices · Tap + to preview
            </span>
          </div>
        </div>

        <div className="menu-hero-media">
          <div className="menu-hero-art-frame">
            <Image
              src="/images/menu/master-reference.jpg"
              alt="Close-up of the Cheezish signature smash burger with golden melting cheddar on toasted brioche"
              fill
              priority
              sizes="(min-width: 1024px) 580px, 90vw"
              className="menu-hero-img"
            />
            <div className="menu-hero-art-overlay" aria-hidden="true" />
            <div className="menu-hero-art-badge">
              <span className="menu-badge-sub">CHEEZISH / AFTER DARK</span>
              <span className="menu-badge-main">COLLECTION 01</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. PREMIUM STICKY CATEGORY NAVIGATION                         */}
      {/* ============================================================ */}
      <nav className="menu-sticky-nav" aria-label="Menu categories">
        <div className="ad-wrap menu-sticky-nav-inner">
          <div className="menu-nav-track" ref={navTrackRef}>
            {MENU_CATEGORIES.map((cat, idx) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={`menu-nav-pill ${isActive ? 'is-active' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span className="menu-nav-idx">0{idx + 1}</span>
                  <span className="menu-nav-label">{cat.label.toUpperCase()}</span>
                  {isActive && (
                    <motion.span
                      layoutId="active-category-indicator"
                      className="menu-nav-indicator"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 32,
                      }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {totalItems > 0 && (
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="menu-nav-cart-shortcut"
              aria-label={`Open demo order with ${totalItems} items`}
            >
              <span className="menu-cart-dot" />
              <span>{totalItems} PICKS</span>
              <strong className="menu-cart-price">£{totalPrice.toFixed(2)}</strong>
            </button>
          )}
        </div>
      </nav>

      {/* ============================================================ */}
      {/* 3. MENU CONTENT CONTAINER                                     */}
      {/* ============================================================ */}
      <div className="ad-wrap menu-content-container">

        {/* ------------------------------------------------------------ */}
        {/* SECTION 1: SIGNATURE BURGERS (HERO CATEGORY)                 */}
        {/* ------------------------------------------------------------ */}
        <section id="signature-burgers" className="menu-section">
          <header className="menu-section-header">
            <div className="menu-section-heading-left">
              <span className="menu-section-kicker">01 / SIGNATURE</span>
              <h2 className="menu-section-title">SIGNATURE BURGERS</h2>
            </div>
            <p className="menu-section-desc">
              Four house-crafted smash burgers built on soft brioche, toasted edges and serious cheese melts.
            </p>
          </header>

          {/* Asymmetric Editorial Composition */}
          <div className="signature-editorial-grid">
            {/* 1.1 The Cheezish - Featured Hero Card (~58% desktop width) */}
            {theCheezish && (
              <article className="signature-card-featured">
                <div className="signature-featured-media">
                  {theCheezish.image && (
                    <Image
                      src={theCheezish.image}
                      alt={theCheezish.name}
                      fill
                      sizes="(min-width: 1024px) 680px, 95vw"
                      className="signature-featured-img"
                    />
                  )}
                  <div className="signature-badge-gold">HOUSE FAVOURITE</div>
                  <span className="signature-card-idx">01 / SIGNATURE</span>
                </div>

                <div className="signature-featured-body">
                  <div className="signature-featured-meta">
                    <h3 className="signature-featured-name">{theCheezish.name}</h3>
                    <span className="signature-featured-price">£{theCheezish.price.toFixed(2)}</span>
                  </div>

                  <p className="signature-featured-desc">{theCheezish.description}</p>

                  <div className="signature-featured-footer">
                    <div className="signature-tags">
                      <span className="signature-tag-chip">AGED CHEDDAR</span>
                      <span className="signature-tag-chip">HOUSE SAUCE</span>
                      <span className="signature-tag-chip">BRIOCHE</span>
                    </div>

                    <button
                      onClick={() => addPick(theCheezish.id)}
                      className={`menu-add-btn ${picks[theCheezish.id] ? 'is-picked' : ''}`}
                      aria-label={`Add ${theCheezish.name} to demo order`}
                    >
                      {picks[theCheezish.id] ? (
                        <>ADDED ({picks[theCheezish.id]}) <span aria-hidden="true">+</span></>
                      ) : (
                        <>+ ADD TO PICKS</>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            )}

            {/* 1.2 Complementary Stack Column: Double Melt & Inferno */}
            <div className="signature-editorial-stack">
              {doubleMelt && (
                <article className="signature-card-compact">
                  <div className="signature-compact-media">
                    {doubleMelt.image && (
                      <Image
                        src={doubleMelt.image}
                        alt={doubleMelt.name}
                        fill
                        sizes="(min-width: 1024px) 480px, 95vw"
                        className="signature-compact-img"
                      />
                    )}
                    <span className="signature-compact-badge">DOUBLE PATTY</span>
                  </div>

                  <div className="signature-compact-body">
                    <div className="signature-compact-top">
                      <span className="signature-card-idx">02 / COMPACT</span>
                      <span className="signature-compact-price">£{doubleMelt.price.toFixed(2)}</span>
                    </div>
                    <h3 className="signature-compact-name">{doubleMelt.name}</h3>
                    <p className="signature-compact-desc">{doubleMelt.description}</p>

                    <div className="signature-compact-footer">
                      <span className="signature-tag-text">2× SMASH · CARAMELIZED ONIONS</span>
                      <button
                        onClick={() => addPick(doubleMelt.id)}
                        className={`menu-add-btn-sm ${picks[doubleMelt.id] ? 'is-picked' : ''}`}
                        aria-label={`Add ${doubleMelt.name} to demo order`}
                      >
                        {picks[doubleMelt.id] ? `ADDED (${picks[doubleMelt.id]}) +` : '+ ADD'}
                      </button>
                    </div>
                  </div>
                </article>
              )}

              {inferno && (
                <article className="signature-card-compact is-spicy">
                  <div className="signature-compact-media">
                    {inferno.image && (
                      <Image
                        src={inferno.image}
                        alt={inferno.name}
                        fill
                        sizes="(min-width: 1024px) 480px, 95vw"
                        className="signature-compact-img"
                      />
                    )}
                    <span className="signature-compact-badge badge-spicy">
                      <span className="spice-dot" /> A LITTLE HEAT
                    </span>
                  </div>

                  <div className="signature-compact-body">
                    <div className="signature-compact-top">
                      <span className="signature-card-idx">03 / FIERY</span>
                      <span className="signature-compact-price">£{inferno.price.toFixed(2)}</span>
                    </div>
                    <h3 className="signature-compact-name">{inferno.name}</h3>
                    <p className="signature-compact-desc">{inferno.description}</p>

                    <div className="signature-compact-footer">
                      <span className="signature-tag-text">PEPPER JACK · JALAPEÑOS · HOT SAUCE</span>
                      <button
                        onClick={() => addPick(inferno.id)}
                        className={`menu-add-btn-sm ${picks[inferno.id] ? 'is-picked' : ''}`}
                        aria-label={`Add ${inferno.name} to demo order`}
                      >
                        {picks[inferno.id] ? `ADDED (${picks[inferno.id]}) +` : '+ ADD'}
                      </button>
                    </div>
                  </div>
                </article>
              )}
            </div>

            {/* 1.3 Plant Cheezish - Full Width Editorial Card Below */}
            {plantCheezish && (
              <article className="signature-card-plant">
                <div className="plant-card-visual">
                  <div className="plant-visual-inner">
                    <FoodDrawing className="plant-svg-drawing" />
                    <span className="plant-visual-tag">PLANT-BASED CRAVING</span>
                  </div>
                </div>

                <div className="plant-card-content">
                  <div className="plant-card-header">
                    <div>
                      <span className="signature-card-idx">04 / PLANT</span>
                      <h3 className="plant-card-name">{plantCheezish.name}</h3>
                    </div>
                    <span className="plant-card-price">£{plantCheezish.price.toFixed(2)}</span>
                  </div>

                  <p className="plant-card-desc">{plantCheezish.description}</p>

                  <div className="plant-card-footer">
                    <div className="signature-tags">
                      <span className="signature-tag-chip chip-vegan">VEGAN PATTY</span>
                      <span className="signature-tag-chip chip-vegan">DAIRY-FREE MELT</span>
                      <span className="signature-tag-chip chip-vegan">CRISP GREENS</span>
                    </div>

                    <button
                      onClick={() => addPick(plantCheezish.id)}
                      className={`menu-add-btn ${picks[plantCheezish.id] ? 'is-picked' : ''}`}
                      aria-label={`Add ${plantCheezish.name} to demo order`}
                    >
                      {picks[plantCheezish.id] ? `ADDED (${picks[plantCheezish.id]}) +` : '+ ADD TO PICKS'}
                    </button>
                  </div>
                </div>
              </article>
            )}
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/* SECTION 2: LOADED FRIES (HORIZONTAL EDITORIAL ROWS)          */}
        {/* ------------------------------------------------------------ */}
        <section id="loaded-fries" className="menu-section">
          <header className="menu-section-header">
            <div className="menu-section-heading-left">
              <span className="menu-section-kicker">02 / SIDES</span>
              <h2 className="menu-section-title">LOADED FRIES</h2>
            </div>
            <p className="menu-section-desc">
              Crispy golden skin-on fries tossed in house demo seasoning and smothered in warm melts.
            </p>
          </header>

          <div className="fries-editorial-container">
            {/* Feature Banner */}
            <div className="fries-feature-banner">
              <span className="fries-banner-sub">THE CRISP SECRET</span>
              <h3 className="fries-banner-title">TRIPLE-COOKED.<br />WARM MELTS.</h3>
              <p className="fries-banner-text">
                Skin-on russet potatoes, seasoned hot right from the oil, topped with aged cheddar sauce.
              </p>
            </div>

            {/* Horizontal Rows */}
            <div className="fries-rows-list">
              {loadedFries.map((item, index) => (
                <article key={item.id} className="fries-row-item">
                  <div className="fries-row-left">
                    <span className="fries-row-idx">0{index + 1}</span>
                    <div className="fries-row-info">
                      <h3 className="fries-row-name">{item.name}</h3>
                      <p className="fries-row-desc">{item.description}</p>
                      <div className="fries-row-badges">
                        {item.vegetarian && <span className="tag-veg">VEGETARIAN</span>}
                        {item.spicy && (
                          <span className="tag-spicy">
                            <span className="spice-dot" /> SPICY
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="fries-row-right">
                    <strong className="fries-row-price">£{item.price.toFixed(2)}</strong>
                    <button
                      onClick={() => addPick(item.id)}
                      className={`menu-add-btn-sm ${picks[item.id] ? 'is-picked' : ''}`}
                      aria-label={`Add ${item.name} to demo order`}
                    >
                      {picks[item.id] ? `ADDED (${picks[item.id]}) +` : '+ ADD'}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/* SECTION 3: DEALS (PROMOTIONAL CAMPAIGN CARDS)                */}
        {/* ------------------------------------------------------------ */}
        <section id="deals" className="menu-section">
          <header className="menu-section-header">
            <div className="menu-section-heading-left">
              <span className="menu-section-kicker">03 / BUNDLES</span>
              <h2 className="menu-section-title">DEALS &amp; FEASTS</h2>
            </div>
            <p className="menu-section-desc">
              Full cravings at bundle pricing. Smashed patties, crispy sides and cold drinks.
            </p>
          </header>

          <div className="deals-editorial-grid">
            {deals.map((deal) => {
              const isDuo = deal.id === 'duo-feast';
              return (
                <article
                  key={deal.id}
                  className={`deal-campaign-card ${isDuo ? 'is-featured-deal' : ''}`}
                >
                  <div className="deal-card-glow" aria-hidden="true" />
                  <div className="deal-card-top">
                    <span className={`deal-card-badge ${isDuo ? 'badge-duo' : 'badge-solo'}`}>
                      {isDuo ? 'FOR TWO · BEST VALUE' : 'SOLO · FOR ONE'}
                    </span>
                    <span className="deal-card-idx">{isDuo ? 'BUNDLE / 02' : 'BUNDLE / 01'}</span>
                  </div>

                  <h3 className="deal-card-title">{deal.name.toUpperCase()}</h3>
                  <div className="deal-price-row">
                    <span className="deal-price-currency">£</span>
                    <span className="deal-price-val">{deal.price.toFixed(2)}</span>
                    <span className="deal-price-note">ALL INCLUSIVE</span>
                  </div>

                  <p className="deal-card-desc">{deal.description}</p>

                  <div className="deal-checklist">
                    <span className="deal-check-header">WHAT’S INSIDE:</span>
                    {isDuo ? (
                      <ul>
                        <li><span className="check-icon">✓</span> 2× Signature Smash Burgers of choice</li>
                        <li><span className="check-icon">✓</span> 2× Portions of Warm Loaded Fries</li>
                        <li><span className="check-icon">✓</span> 2× Cold Beverages or Hand-Spun Shakes</li>
                      </ul>
                    ) : (
                      <ul>
                        <li><span className="check-icon">✓</span> 1× Any Signature Smash Burger</li>
                        <li><span className="check-icon">✓</span> 1× Portion of Classic Seasoned Fries</li>
                        <li><span className="check-icon">✓</span> 1× Standard Drink or Cold Refresher</li>
                      </ul>
                    )}
                  </div>

                  <button
                    onClick={() => addPick(deal.id)}
                    className={`deal-action-btn ${picks[deal.id] ? 'is-picked' : ''}`}
                    aria-label={`Add ${deal.name} to demo order`}
                  >
                    {picks[deal.id] ? (
                      <>BUNDLE ADDED ({picks[deal.id]}) <span aria-hidden="true">+</span></>
                    ) : (
                      <>+ ADD {deal.name.toUpperCase()} (£{deal.price.toFixed(2)})</>
                    )}
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/* SECTION 4: DRINKS (REFINED COMPACT GRID)                     */}
        {/* ------------------------------------------------------------ */}
        <section id="drinks" className="menu-section">
          <header className="menu-section-header">
            <div className="menu-section-heading-left">
              <span className="menu-section-kicker">04 / REFRESH</span>
              <h2 className="menu-section-title">DRINKS &amp; SHAKES</h2>
            </div>
            <p className="menu-section-desc">
              Ice cold sodas, fresh cloudy lemonade, and thick hand-spun vanilla milkshakes.
            </p>
          </header>

          <div className="drinks-compact-grid">
            {drinks.map((item, idx) => (
              <article key={item.id} className="drink-card">
                <div className="drink-card-header">
                  <span className="drink-card-idx">0{idx + 1}</span>
                  <span className="drink-type-badge">
                    {item.id === 'milkshake-vanilla'
                      ? 'HAND-SPUN'
                      : item.id === 'lemonade'
                      ? 'HOUSE-MADE'
                      : 'SPARKLING'}
                  </span>
                </div>

                <div className="drink-card-body">
                  <h3 className="drink-card-name">{item.name}</h3>
                  <p className="drink-card-desc">{item.description}</p>
                </div>

                <div className="drink-card-footer">
                  <strong className="drink-card-price">£{item.price.toFixed(2)}</strong>
                  <button
                    onClick={() => addPick(item.id)}
                    className={`menu-add-btn-sm ${picks[item.id] ? 'is-picked' : ''}`}
                    aria-label={`Add ${item.name} to demo order`}
                  >
                    {picks[item.id] ? `ADDED (${picks[item.id]}) +` : '+ ADD'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/* SECTION 5: DESSERTS (WARM INDULGENT FINISH)                  */}
        {/* ------------------------------------------------------------ */}
        <section id="desserts" className="menu-section">
          <header className="menu-section-header">
            <div className="menu-section-heading-left">
              <span className="menu-section-kicker">05 / SWEET FINISH</span>
              <h2 className="menu-section-title">DESSERTS</h2>
            </div>
            <p className="menu-section-desc">
              Save room for the finish. Fresh baked chocolate and velvety New York cheesecake.
            </p>
          </header>

          <div className="desserts-editorial-grid">
            {desserts.map((item, idx) => (
              <article key={item.id} className="dessert-card">
                <div className="dessert-card-pattern" aria-hidden="true" />
                <div className="dessert-card-top">
                  <span className="dessert-card-idx">0{idx + 1} / DESSERT</span>
                  <span className="dessert-badge">INDULGENT</span>
                </div>

                <h3 className="dessert-card-name">{item.name}</h3>
                <p className="dessert-card-desc">{item.description}</p>

                <div className="dessert-card-footer">
                  <div>
                    <span className="dessert-price-label">PRICE</span>
                    <strong className="dessert-card-price">£{item.price.toFixed(2)}</strong>
                  </div>

                  <button
                    onClick={() => addPick(item.id)}
                    className={`menu-add-btn ${picks[item.id] ? 'is-picked' : ''}`}
                    aria-label={`Add ${item.name} to demo order`}
                  >
                    {picks[item.id] ? `ADDED (${picks[item.id]}) +` : '+ ADD DESSERT'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>

      {/* ============================================================ */}
      {/* 4. LUXURY FLOATING DEMO ORDER BAR & EXPANDABLE DRAWER        */}
      {/* ============================================================ */}
      {totalItems > 0 && (
        <aside className="menu-order-floating-bar" aria-label="Demo order preview">
          {/* Collapsed Bar */}
          <div className="order-bar-content">
            <div className="order-bar-info">
              <div className="order-pill-badge">
                <span className="order-pulse-dot" />
                <span>{totalItems} {totalItems === 1 ? 'ITEM' : 'ITEMS'}</span>
              </div>
              <div className="order-price-group">
                <strong className="order-total-price">£{totalPrice.toFixed(2)}</strong>
                <span className="order-total-sub">GBP · DEMO PREVIEW</span>
              </div>
            </div>

            <div className="order-bar-actions">
              <button
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className="order-view-btn"
                aria-expanded={isDrawerOpen}
              >
                {isDrawerOpen ? 'HIDE PICKS ▲' : 'VIEW PICKS ▼'}
              </button>

              <button
                onClick={clearPicks}
                className="order-clear-btn"
                aria-label="Clear all items from demo order"
              >
                CLEAR
              </button>
            </div>
          </div>

          {/* Expanded Drawer Tray */}
          {isDrawerOpen && (
            <div className="order-drawer-tray">
              <div className="order-drawer-header">
                <h4 className="order-drawer-title">YOUR DEMO PICKS</h4>
                <span className="order-drawer-note">
                  Interactive preview only — no payment or real order
                </span>
              </div>

              <ul className="order-items-list">
                {menuData
                  .filter((item) => picks[item.id])
                  .map((item) => {
                    const qty = picks[item.id];
                    const itemTotal = item.price * qty;
                    return (
                      <li key={item.id} className="order-item-row">
                        <div className="order-item-main">
                          <strong className="order-item-name">{item.name}</strong>
                          <span className="order-item-calc">
                            {qty} × £{item.price.toFixed(2)} = £{itemTotal.toFixed(2)}
                          </span>
                        </div>

                        <div className="order-qty-controls">
                          <button
                            onClick={() => removePick(item.id)}
                            className="order-qty-btn"
                            aria-label={`Remove one ${item.name}`}
                          >
                            −
                          </button>
                          <span className="order-qty-val">{qty}</span>
                          <button
                            onClick={() => addPick(item.id)}
                            className="order-qty-btn"
                            aria-label={`Add one more ${item.name}`}
                          >
                            +
                          </button>
                        </div>
                      </li>
                    );
                  })}
              </ul>

              <div className="order-drawer-footer">
                <div className="order-drawer-subtotal">
                  <span>ESTIMATED SUBTOTAL</span>
                  <strong>£{totalPrice.toFixed(2)}</strong>
                </div>
                <p className="order-demo-disclaimer">
                  CHEEZISH is a restaurant brand experience. No real payments, carts or orders exist.
                </p>
              </div>
            </div>
          )}
        </aside>
      )}
    </div>
  );
}
