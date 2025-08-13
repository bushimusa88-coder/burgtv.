// ===== Scroll reveal =====
const io = new IntersectionObserver((entries)=>{
  for(const e of entries){ if(e.isIntersecting) e.target.classList.add('in'); }
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// ===== Language switch (IT/EN) =====
const translations={
  it:{ "nav.features":"Funzioni","nav.devices":"Dispositivi","nav.faq":"FAQ",
       "hero.title":"Il player IPTV <span>semplice</span> e <span>veloce</span>",
       "hero.subtitle":"Carica la tua playlist <strong>M3U</strong> o collega il <strong>MAC Address</strong> dal portale. <strong>Prova gratuita di 7 giorni</strong>.",
       "cta.portal":"Apri Portale","cta.firetv":"Scarica per Fire TV (presto)",
       "hero.note":"Senza liste incluse. Solo il player, punto.",
       "features.title":"Funzioni principali","devices.title":"Compatibile con i tuoi dispositivi","faq.title":"Domande frequenti" },
  en:{ "nav.features":"Features","nav.devices":"Devices","nav.faq":"FAQ",
       "hero.title":"The IPTV player that’s <span>simple</span> and <span>fast</span>",
       "hero.subtitle":"Upload your <strong>M3U</strong> playlist or link your <strong>MAC Address</strong> from the portal. <strong>7-day free trial</strong>.",
       "cta.portal":"Open Portal","cta.firetv":"Download for Fire TV (soon)",
       "hero.note":"No playlists included. Just the player — period.",
       "features.title":"Main Features","devices.title":"Compatible with your devices","faq.title":"Frequently Asked Questions" }
};
function applyI18n(lang){
  const dict=translations[lang]||translations.it;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n'); if(dict[k]) el.innerHTML=dict[k];
  });
  document.documentElement.lang=lang; localStorage.setItem('lang',lang);
  document.querySelectorAll('.lang-switch button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
}
document.addEventListener('click',(e)=>{
  const btn=e.target.closest('.lang-switch button'); if(!btn) return; applyI18n(btn.dataset.lang);
});
applyI18n(localStorage.getItem('lang')||'it');
