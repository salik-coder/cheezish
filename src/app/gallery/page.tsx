import { pageMetadata } from '@/src/data/site';
import { GalleryExperience } from '@/src/components/after-dark/GalleryExperience';
import { OrderFinish } from '@/src/components/after-dark/Shared';
export const metadata=pageMetadata('Gallery | Cheezish','Texture, crust and glorious cheese. Explore the Cheezish signature collection up close.','/gallery');
export default function GalleryPage(){return <main><section className="ad-wrap ad-page-intro"><div><p className="ad-eyebrow">The visual menu</p><h1>LOOKS GOOD.<br /><em>GET CLOSER.</em></h1></div><p>The crust. The cheese. The details.<br />A few things worth a second look.</p></section><div className="ad-wrap"><GalleryExperience /></div><OrderFinish /></main>;}
