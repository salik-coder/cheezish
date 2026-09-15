"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Photo } from './Shared';
import { trapDialogFocus } from './dialog';
const photos = [
  {src:'/images/menu/the-cheezish.jpg',title:'The original craving',detail:'The Cheezish / Signature collection'},
  {src:'/images/menu/inferno.jpg',title:'Turn up the heat',detail:'Inferno / Pepper jack & jalapeños'},
  {src:'/images/menu/double-melt.jpg',title:'Twice the temptation',detail:'Double Melt / Two patties, all the cheese'},
  {src:'/images/menu/master-reference.jpg',title:'Built from the inside out',detail:'The layers / Concept study'}
];
export function GalleryExperience(){
  const [index,setIndex]=useState(0);
  const dialog=useRef<HTMLDialogElement>(null);
  const trigger=useRef<HTMLButtonElement|null>(null);
  const [opened,setOpened]=useState(false);
  useEffect(()=>{
    if(!opened)return;
    const previous=document.body.style.overflow;
    document.body.style.overflow='hidden';
    return ()=>{document.body.style.overflow=previous;};
  },[opened]);
  function open(i:number,button:HTMLButtonElement){setIndex(i);trigger.current=button;setOpened(true);dialog.current?.showModal();}
  function close(){dialog.current?.close();setOpened(false);trigger.current?.focus();}
  function move(direction:number){setIndex(current=>(current+direction+photos.length)%photos.length);}
  return <><div className="ad-editorial-gallery">{photos.map((photo,i)=><figure key={photo.src}><button onClick={event=>open(i,event.currentTarget)} aria-label={'Enlarge '+photo.title}><Photo src={photo.src} alt={photo.detail} sizes="(min-width: 1024px) 700px, 100vw" /><span className="ad-gallery-enlarge" aria-hidden="true">↗</span></button><figcaption><div><h2>{photo.title}</h2><p>{photo.detail}</p></div><span>0{i+1}</span></figcaption></figure>)}</div>
  <dialog className="ad-lightbox" ref={dialog} aria-label="Food photography viewer" onCancel={event=>{event.preventDefault();close();}} onKeyDown={event=>{trapDialogFocus(event);if(event.key==='ArrowRight')move(1);if(event.key==='ArrowLeft')move(-1);}} onClick={event=>{if(event.target===event.currentTarget)close();}}><button className="ad-close" onClick={close} aria-label="Close image">×</button><div className="ad-lightbox-photo"><Image src={photos[index].src} alt={photos[index].detail} fill sizes="(min-width: 800px) 750px, 95vw" className="object-contain" /></div><div className="ad-lightbox-controls"><button onClick={()=>move(-1)} aria-label="Previous image">←</button><p aria-live="polite">{photos[index].title}<small>{index+1} / {photos.length}</small></p><button onClick={()=>move(1)} aria-label="Next image">→</button></div></dialog></>;
}
