"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Photo } from './Shared';
const Scene = dynamic(()=>import('../3d/IngredientExplodedScene').then(module=>module.IngredientExplodedScene), { ssr:false, loading:()=> <Photo src="/images/menu/master-reference.jpg" alt="Burger layers" /> });
export function LayerExplorer() {
  const [explore,setExplore] = useState(false);
  return <div className="ad-layer-explorer"><div className="ad-layer-media">{explore ? <Scene /> : <Photo className="ad-ingredient-closeup" src="/images/menu/master-reference.jpg" alt="A closer look at the brioche, cheese and patty layers" />}</div><button className="ad-layer-control" aria-pressed={explore} onClick={()=>setExplore(!explore)}>{explore ? 'Back to the close-up' : 'Explore the burger layers'} <span aria-hidden="true">{explore?'−':'+'}</span></button></div>;
}
