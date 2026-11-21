// Project content and page references transcribed from assets/portfolio.pdf.
// Agency work is credited as collaboration, not as direct client commissions.
const agency = 'Conception en collaboration avec la Team Créa ANY.';
const categories = {event:'Scénographie',retail:'Retail',personal:'Projet personnel',graphic:'Création graphique'};
const projects = [
 {id:'hublot',title:'Hublot',category:'event',subtitle:'Watches & Wonders 2025 · Genève',page:5,end:7,description:'Un stand immersif pour célébrer les 20 ans de la Big Bang. Une scénographie claire et lumineuse, trois vitrines XXL à l’esprit « lab-tech » et une pièce immersive où chaque visiteur crée son propre univers.',role:'Designer junior, dessin 3D, dossier déco et UI design.',credit:agency+' Designer : Svetlana Maslova.'},
 {id:'creed',title:'Creed',category:'event',subtitle:'265 ans de la Maison · Vaux-de-Cernay',page:8,end:11,description:'Un parcours olfactif dans une serre pensée comme un cabinet de curiosités, prolongé par un atelier de parfum. Dîner, cocktail, salons et photocall composent une expérience en continuité avec l’élégance et le savoir-faire de la Maison.',role:'Designer junior, dessin 3D, dossier déco et graphisme.',credit:agency},
 {id:'bleu-chanel',title:'Bleu de Chanel',category:'event',subtitle:'Guidelines & expérience événementielle',page:15,end:19,description:'Un cinéma modulable qui se transforme au cours de la soirée. Après la projection, les rideaux bleu nuit s’ouvrent sur un espace cocktail, un bureau olfactif et des installations interactives.',role:'Design, dessin 3D et dossier déco.',credit:agency},
 {id:'cartier-heritage',title:'Cartier Héritage',category:'event',subtitle:'Institut de Joaillerie · Paris',page:20,end:23,description:'Trois espaces consacrés aux archives, au travail des designers et aux créations de la Maison. Un parcours entre documents, atelier de design et vitrines « Wild Fauna », où le bestiaire Cartier rencontre des compositions végétales.',role:'Design, dessin 3D, dossier déco et graphisme.',credit:agency},
 {id:'rochas',title:'Rochas Audace',category:'event',subtitle:'Lancement de parfum · Paris',page:12,end:14,description:'Une scénographie inspirée de la course automobile, imaginée pour le lancement du parfum Audace. Un parcours ludique et sensoriel mêlant expérience olfactive, simulation, cinéma, catering et photocall.',role:'Designer junior, dessin 3D, dossier déco et graphisme.',credit:agency},
 {id:'st-germain',title:'St-Germain Spritz',category:'event',subtitle:'Bar éphémère · Galeries Lafayette',page:24,end:25,description:'La Douce Heure, un bar éphémère sur le rooftop des Galeries Lafayette Paris Haussmann. Un comptoir en demi-ovale et une terrasse ouverte sur la ville traduisent l’identité de la marque en un lieu de dégustation et de rencontre.',role:'Design et dessin 3D.',credit:'Conception en collaboration avec la Team Créa Utopik Design.'},
 {id:'pomellato',title:'Pomellato',category:'retail',subtitle:'Vitrines · Collection Nudo',page:37,end:39,description:'Une interprétation contemporaine de l’art du vitrail, inspirée des formes et des nuances de la collection Nudo. Le bijou devient le point de départ d’un langage de couleurs et de fragments.',role:'Designer junior, dessin 3D, dossier déco et graphisme.',credit:agency},
 {id:'cartier',title:'Cartier',category:'retail',subtitle:'Vitrines & showcases · Guidelines 2025',page:33,end:36,description:'Autour du thème « Cartier Magicien », matières, formes et objets se transforment. Des vitrines et éléments de décor déclinent ce langage pour assurer la cohérence visuelle et scénographique de l’ensemble.',role:'Designer junior, dessin 3D et dossier déco.',credit:agency},
 {id:'village-infini',title:'Le Village Infini',category:'personal',subtitle:'Personnages, paysages & maquettes',page:48,end:50,description:'Donner forme à l’identité de chacun à travers son lieu sûr. Village Infini et Le Pays des Merveilles mêlent design de personnage, maquillage et décors miniatures fabriqués à la main.',role:'Design de personnage fantastique et fabrication de maquettes.',credit:'Projet personnel, en collaboration avec la make-up artist Ghazaleh Ghofrani.'},
 {id:'fantome',title:'Le Fantôme de l’Opéra',category:'personal',subtitle:'Décor miniature · Stop motion',page:44,end:47,description:'Deux univers opposés : une salle d’opéra baroque et lumineuse, et une cachette souterraine inspirée du gothique. Un décor modulable et démontable, entièrement fabriqué à la main à l’échelle 1:10 pour le stop motion.',role:'Scénographie et fabrication de maquette.',credit:'Projet personnel.'},
 {id:'curvatura',title:'Curvatura',category:'retail',subtitle:'Architecture intérieure · Magasin-atelier',page:40,end:42,description:'Un magasin-atelier de chaussures dont les lignes courbes dessinent étagères, vitrines et assises. Au centre, un escalier de pierre noire se déploie comme une sculpture et invite à découvrir l’atelier à l’étage.',role:'Design intérieur et retail.',credit:'Projet de fin de semestre, Beaux-Arts, Université de Téhéran.'},
 {id:'odyssee',title:'Odyssée Marine',category:'event',subtitle:'Expérience immersive · La Maison des Canaux',page:26,end:27,description:'Une plongée dans la transformation durable des matériaux marins. La lumière progressive et les formes ondulantes accompagnent le passage de la matière première au produit final, puis à un atelier collectif de réemploi.',role:'Scénographie événementielle.',credit:'Projet de fin de semestre, École de Condé.'},
 {id:'outscale',title:'Outscale',category:'event',subtitle:'Exposition immersive · Vancouver',page:28,end:31,description:'Explorer la ville à travers l’imaginaire des comics, des mangas et de la bande dessinée. Miroirs, jeux d’échelle et parcours suspendu brouillent les frontières entre architecture réelle et paysage dessiné.',role:'Scénographie d’exposition.',credit:'Projet de fin de semestre, École de Condé.'},
 {id:'trahison',title:'Trahison à Pinter',category:'personal',subtitle:'Scénographie théâtrale · Téhéran',page:51,end:52,description:'Un carré blanc au centre d’une boîte noire. Ce décor minimaliste évoque une salle de bain et révèle les personnages dans leurs moments les plus vulnérables, pour le 22e Festival International de Théâtre Étudiant.',role:'Scénographie et production du décor.',credit:'Conception en collaboration avec Sarah Azamdanah. Mise en scène : Reza Elahi.'},
 {id:'richard-mille',title:'Richard Mille × Ferrari',category:'graphic',subtitle:'Invitation digitale',page:54,end:54,description:'Une invitation digitale pour Richard Mille × Ferrari, présentée dans la sélection de créations graphiques du portfolio.',role:'Création graphique.',credit:'Visuel et présentation issus du portfolio.'},
 {id:'montblanc',title:'Montblanc',category:'graphic',subtitle:'Menus, city guide & photocall',page:55,end:57,description:'Une déclinaison de supports imprimés et digitaux : menus, city guide et photocall, autour d’un vocabulaire floral et doré.',role:'Création graphique.',credit:'Visuels et présentations issus du portfolio.'},
 {id:'lacoste',title:'Lacoste Lightclub',category:'graphic',subtitle:'Pins de collection',page:58,end:58,description:'Une collection de pins déclinant les codes de Lacoste Lightclub : crocodile, sneaker et raquette, sur une trame graphique.',role:'Création graphique.',credit:'Visuels et présentation issus du portfolio.'},
 {id:'rochas-graphic',title:'Rochas Audace',category:'graphic',subtitle:'Invitation & catering',page:60,end:61,description:'L’univers de la course se prolonge dans une invitation digitale et des éléments de catering, entre rouge, jaune et damiers.',role:'Création graphique.',credit:'Images fixes et présentations issues du portfolio.'},
 {id:'creed-graphic',title:'Creed',category:'graphic',subtitle:'Menus & accessoires événementiels',page:62,end:63,description:'Des menus et accessoires événementiels déclinés autour d’un motif végétal doré, du papier aux détails de table et aux textiles.',role:'Création graphique.',credit:'Visuels et présentations issus du portfolio.'}
];
const asset = (page,cover=false) => `assets/projects/${cover?'cover':'page'}-${String(page).padStart(2,'0')}.jpg`;
const escapeHTML = text => text.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const spatialProjects = projects.filter(p => p.category !== 'graphic');
const graphicWorks = projects.filter(p => p.category === 'graphic');
const grid = document.querySelector('#project-grid');
grid.innerHTML = spatialProjects.map(p => `<article class="project-card ${p.category}" data-category="${p.category}"><a href="#${p.id}" aria-label="Découvrir ${escapeHTML(p.title)} — ${escapeHTML(p.subtitle)}"><div class="card-image"><img src="${asset(p.page,p.category!=='graphic')}" alt="${escapeHTML(p.title+' — '+p.subtitle)}" loading="lazy" decoding="async" width="${p.category==='graphic'?1200:744}" height="${p.category==='graphic'?600:418}"><span class="card-arrow" aria-hidden="true">↗</span></div><div class="card-caption"><h3>${escapeHTML(p.title)}</h3><span>${categories[p.category]}</span></div><p class="card-subtitle">${escapeHTML(p.subtitle)}</p></a></article>`).join('');
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b===button)));
 let count=0;
 document.querySelectorAll('.project-card').forEach(card => {card.hidden=button.dataset.filter!=='all' && card.dataset.category!==button.dataset.filter;if(!card.hidden)count++;});
 setFeatured(0);
}));
// Graphic work grouped by project; each opens its complete gallery.
document.querySelector('#graphic-gallery').innerHTML = graphicWorks.map(work => '<a class="graphic-project" href="#'+work.id+'" aria-label="Découvrir '+escapeHTML(work.title)+'"><figure><img src="'+asset(work.page)+'" alt="'+escapeHTML(work.title)+'" width="1200" height="600" loading="lazy" decoding="async"><figcaption><h3>'+escapeHTML(work.title)+'</h3><span>'+escapeHTML(work.subtitle)+'</span></figcaption></figure></a>').join('');
const dialog=document.querySelector('#project-dialog');
let previousHash='#projets';
let trigger=null;
function openProject(project){
 document.querySelector('#dialog-content').innerHTML=`<div class="dialog-intro gallery-heading"><h2 id="dialog-title">${escapeHTML(project.title)}</h2></div><div class="project-pages">${Array.from({length:project.end-project.page+1},(_,i)=>`<img src="${asset(project.page+i).replace('.jpg','-large.jpg')}" alt="${escapeHTML(project.title)} — planche ${i+1}, page ${project.page+i} du portfolio" width="3000" height="1500" loading="lazy">`).join('')}</div>`;
 if(!dialog.open)dialog.showModal();
 dialog.scrollTop=0;
 document.body.classList.add('modal-open');
}
function syncHash(){const project=projects.find(p=>'#'+p.id===location.hash);if(project)openProject(project);else if(dialog.open)dialog.close();}
document.addEventListener('click',event=>{const link=event.target.closest('a[href^="#"]');if(!link)return;const project=projects.find(p=>'#'+p.id===link.getAttribute('href'));if(!project)return;event.preventDefault();trigger=link;previousHash=location.hash;history.pushState({project:true},'',`#${project.id}`);openProject(project);});
function closeProject(){if(dialog.open)dialog.close();}
document.querySelector('.close-dialog').addEventListener('click',closeProject);
dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)closeProject();});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');if(projects.some(p=>'#'+p.id===location.hash))history.replaceState(null,'',location.pathname+location.search+previousHash);if(trigger?.isConnected)trigger.focus({preventScroll:true});});
window.addEventListener('hashchange',syncHash);
window.addEventListener('popstate',syncHash);
document.querySelector('#year').textContent=new Date().getFullYear();
syncHash();

// A centered, rotated project reel. Every project remains reachable by button or swipe.
let featuredIndex=0;
const visibleCards=()=>[...grid.querySelectorAll('.project-card')].filter(card=>!card.hidden);
function updateFeatured(){
 const cards=visibleCards();
 cards.forEach((card,i)=>{card.classList.toggle('is-current',i===featuredIndex);card.style.setProperty('--card-rotation',i===featuredIndex?'0deg':(i<featuredIndex?'-11deg':'11deg'));});
 document.querySelector('.featured-prev').disabled=featuredIndex===0;
 document.querySelector('.featured-next').disabled=featuredIndex>=cards.length-1;
}
function setFeatured(index){
 const cards=visibleCards();featuredIndex=Math.max(0,Math.min(index,cards.length-1));updateFeatured();
 const card=cards[featuredIndex];if(card)grid.scrollTo({left:card.offsetLeft-grid.offsetLeft-(grid.clientWidth-card.offsetWidth)/2,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
}
document.querySelector('.featured-prev').addEventListener('click',()=>setFeatured(featuredIndex-1));
document.querySelector('.featured-next').addEventListener('click',()=>setFeatured(featuredIndex+1));
let reelFrame;
grid.addEventListener('scroll',()=>{cancelAnimationFrame(reelFrame);reelFrame=requestAnimationFrame(()=>{const center=grid.getBoundingClientRect().left+grid.clientWidth/2;let nearest=Infinity;visibleCards().forEach((card,i)=>{const r=card.getBoundingClientRect();const distance=Math.abs(r.left+r.width/2-center);if(distance<nearest){nearest=distance;featuredIndex=i;}});updateFeatured();});},{passive:true});
updateFeatured();

// Pointer repulsion, with a spring return; intro images are deliberately not links.
const heroDeck=document.querySelector('.hero-deck');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
const heroCards=[...heroDeck.querySelectorAll('.hero-card')].map(el=>({el,x:0,y:0,vx:0,vy:0}));
let pointer=null,heroFrame=0,lastFrame=0;
function animateHero(time){
 const step=Math.min((time-lastFrame)/16.67||1,2);lastFrame=time;
 const bounds=heroDeck.getBoundingClientRect();let moving=false;
 for(const c of heroCards){
  let tx=0,ty=0;
  if(pointer){const cx=bounds.left+c.el.offsetLeft+c.el.offsetWidth/2;const cy=bounds.top+c.el.offsetTop+c.el.offsetHeight/2;const dx=cx-pointer.x,dy=cy-pointer.y;const distance=Math.hypot(dx,dy);const reach=c.el.offsetWidth*1.1;const force=Math.max(0,1-distance/reach);tx=(dx/(distance||1))*force*125;ty=(dy/(distance||1))*force*90;}
  c.vx=(c.vx+(tx-c.x)*.075*step)*.8;c.vy=(c.vy+(ty-c.y)*.075*step)*.8;c.x+=c.vx*step;c.y+=c.vy*step;
  c.el.style.setProperty('--escape-x',c.x.toFixed(2)+'px');c.el.style.setProperty('--escape-y',c.y.toFixed(2)+'px');c.el.style.setProperty('--escape-rotation',(c.x*.09).toFixed(2)+'deg');
  if(Math.abs(c.vx)+Math.abs(c.vy)+Math.abs(tx-c.x)+Math.abs(ty-c.y)>.1)moving=true;
 }
 heroFrame=moving?requestAnimationFrame(animateHero):0;
}
function startHero(){if(!heroFrame){lastFrame=0;heroFrame=requestAnimationFrame(animateHero);}}
heroDeck.addEventListener('pointermove',event=>{if(event.pointerType==='touch'||reducedMotion.matches||document.body.classList.contains('animations-paused'))return;pointer={x:event.clientX,y:event.clientY};startHero();});
heroDeck.addEventListener('pointerleave',()=>{pointer=null;startHero();});
function resetHero(){pointer=null;cancelAnimationFrame(heroFrame);heroFrame=0;heroCards.forEach(c=>{c.x=c.y=c.vx=c.vy=0;c.el.style.setProperty('--escape-x','0px');c.el.style.setProperty('--escape-y','0px');c.el.style.setProperty('--escape-rotation','0deg');});}
reducedMotion.addEventListener('change',resetHero);

// Motion previews play on hover, with keyboard and touch support.
document.querySelectorAll('.motion-media video').forEach(video=>{
 const start=()=>video.play().catch(()=>{});
 video.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')start()});
 video.addEventListener('pointerleave',e=>{if(e.pointerType!=='touch')video.pause()});
 video.addEventListener('focus',start);video.addEventListener('blur',()=>video.pause());
 // Touch users can toggle playback directly without a player toolbar.
 video.addEventListener('pointerup',event=>{if(event.pointerType==='touch'){if(video.paused)start();else video.pause();}});
 video.addEventListener('keydown',event=>{if(event.key===' '||event.key==='Enter'){event.preventDefault();if(video.paused)start();else video.pause();}});
});
document.querySelectorAll('.motion-gif').forEach(button=>{
 const img=button.querySelector('img');
 const setPlaying=playing=>{img.src=playing?img.dataset.animation:img.dataset.poster;button.setAttribute('aria-pressed',String(playing));button.setAttribute('aria-label',playing?'Arrêter l’animation Pomellato':'Lire l’animation Pomellato')};
 button.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')setPlaying(true)});
 button.addEventListener('pointerleave',e=>{if(e.pointerType!=='touch')setPlaying(false)});
 button.addEventListener('click',()=>setPlaying(button.getAttribute('aria-pressed')!=='true'));
 button.addEventListener('blur',()=>setPlaying(false));
});
