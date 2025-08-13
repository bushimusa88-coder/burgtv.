BurgTV – Upgrade package
-------------------------
Contenuto:
- index.html  (con lang switch IT/EN, animazioni e TV con video)
- styles.extra.css  (solo aggiunte/override; non cambia i tuoi colori di base)
- scripts.js  (reveal on scroll + gestione lingue)
- assets/hero-tv.mp4  (placeholder vuoto: sostituisci con un tuo video breve, senza audio)

Uso:
1) Carica TUTTI i file nella root della tua repo (dove c'è già styles.css).
2) Mantieni il tuo styles.css esistente e aggiungi questo nuovo LINK nel tuo index.html:
     <link rel="stylesheet" href="styles.extra.css?v=1">
   (È già incluso nell'index.html di questo pacchetto.)
3) Assicurati di avere il logo come 'burgtv-logo-exact.png' e la favicon 'favicon.ico' in root.
4) Per cambiare lingua clicca IT/EN in navbar (persistenza in localStorage).
