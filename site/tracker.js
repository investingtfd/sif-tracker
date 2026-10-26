
(function(){
if(window.__tfdV19)return;window.__tfdV19=1;
var RAW='https://raw.githubusercontent.com/investingtfd/sif-tracker/main/site/';
var LG=null,FACTS=null,NF=null,PD=null,lbIdx=0,fND=false,timer=0;
var OLD={'quant-clean-mark.png':'Quant','aditya-birla-sun-life-clean-mark.png':'Aditya Birla Sun Life','tata.svg':'Tata','edelweiss-clean-mark.png':'Edelweiss','sbi-symbol.svg':'SBI','360-one.svg':'360 ONE','bandhan-mark.png':'Bandhan','franklin-templeton-clean-mark.png':'Franklin Templeton','icici-prudential-mark.png':'ICICI Prudential','iti-clean-mark.png':'ITI','kotak.svg':'Kotak','mirae-asset-clean-mark.png':'Mirae Asset','wealth-company-mark.svg':'The Wealth Company','union-clean-mark.png':'Union'};
function esc(t){return String(t==null?'':t).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function jget(f){return fetch(RAW+f+'?t='+Date.now(),{cache:'no-store'}).then(function(r){return r.ok?r.json():null}).catch(function(){return null})}
function fd(iso){if(!iso)return'';var d=new Date(iso+'T00:00:00Z');return d.toLocaleDateString('en-GB',{day:'numeric',month:'short',timeZone:'UTC'})}
function logoUrl(key){if(!LG||!key)return'';var f=LG.amcs[key];if(!f)return'';return /^https?:/.test(f)?f:LG.base+f}
function amcKey(txt){if(!LG)return'';var t=String(txt||'').toLowerCase();var ks=Object.keys(LG.aliases).sort(function(a,b){return b.length-a.length});for(var i=0;i<ks.length;i++){var k=ks[i].replace(/[.*+?^$()|[\]\\]/g,function(c){return'\\'+c});if(new RegExp('(^|[^a-z0-9])'+k).test(t))return LG.aliases[ks[i]]}return''}
function tile(key,fb){var ini=(key||fb||'').split(/\s+/).map(function(w){return w.charAt(0)}).join('').slice(0,2).toUpperCase();var u=logoUrl(key);return '<span class="logotile" data-i="'+esc(ini)+'">'+(u?'<img decoding="async" src="'+esc(u)+'" alt="'+esc(key)+' logo" loading="lazy" onerror="this.remove()">':'')+'</span>'}
function shortName(n){return String(n||'').replace(/\s+Long[\s-]*Short(\s+Fund)?$/i,'').replace(/\s+Fund$/i,'')}
function css(){if(document.getElementById('tfdV19css'))return;var s=document.createElement('style');s.id='tfdV19css';s.textContent=
'#tfdNfo{background:#fff;border:none;border-radius:28px;padding:10px 0 18px}'
+'#tfdNfo .tn-h{padding:22px 34px 0;display:flex;justify-content:space-between;align-items:baseline;gap:10px;flex-wrap:wrap}'
+'#tfdNfo .tn-chk{font-size:13px;color:#6E6E73;opacity:1}'
+'#tfdNfo .tn-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0;margin-top:8px}'
+'#tfdNfo .tn2{padding:26px 22px;text-align:center;min-width:0}#tfdNfo .tn2+.tn2{border-left:1px solid #E8E8ED}'
+'#tfdNfo .tn2 .k{font:600 12px Manrope,system-ui,sans-serif;letter-spacing:.09em;text-transform:uppercase;color:#6E6E73}'
+'#tfdNfo .tn2 .v{font:700 28px/1.15 Manrope,system-ui,sans-serif;letter-spacing:-.03em;margin:8px 0 10px;color:var(--ink)}'
+'#tfdNfo .tn2 .v.o{color:var(--good,#1A7F4B)}#tfdNfo .tn2 .v.s{color:#1c5fb0}'
+'#tfdNfo .tn2 .kl{display:flex;align-items:center;justify-content:center;gap:14px;min-width:0;margin-top:6px;text-align:left}'
+'#tfdNfo .tn2 .kl .logotile{width:52px;height:52px;flex:0 0 52px;border-radius:12px}'
+'#tfdNfo .tn2 .kl .kt{min-width:0}#tfdNfo .tn2 .kl b{display:block;font-size:17px;line-height:1.25;color:var(--ink)}'
+'#tfdNfo .tn2 .kl .am{font:500 15px/1.25 var(--font-body);color:var(--ink-soft);margin-top:3px}'
+'#tfdNfo .tn2 .nt{font-size:13px;color:var(--ink-soft);margin-top:12px}'
+'#tfdNfo .tn-f{font-size:12.5px;color:#6E6E73;opacity:1;padding:6px 34px 0}'
+'@media(max-width:900px){#tfdNfo .tn-grid{grid-template-columns:1fr}#tfdNfo .tn2+.tn2{border-left:none;border-top:1px solid #E8E8ED}}'
+'#tfdSearch{margin:6px 0 14px}#tfdSearch .fxq-w{display:block!important;position:relative;width:100%!important;max-width:760px;margin:0 auto}'
+'#tfdSearch input#fxQ{display:block;width:100%!important;max-width:none!important;box-sizing:border-box;font-size:17px;padding:15px 46px 15px 50px!important;border:1.5px solid #0D6B54;border-radius:999px;background:#fff url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%230D6B54%27 stroke-width=%272.2%27 stroke-linecap=%27round%27%3E%3Ccircle cx=%2711%27 cy=%2711%27 r=%277%27/%3E%3Cpath d=%27M20 20l-3.5-3.5%27/%3E%3C/svg%3E") no-repeat 18px center/22px;box-shadow:0 2px 10px rgba(13,107,84,.10)}'
+'#tfdSearch input#fxQ:focus{outline:none;box-shadow:0 0 0 3px rgba(13,107,84,.22)}#tfdSearch .fxq-x{right:16px}'
+'#tfdLbTabs{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:16px 0 18px}#tfdLbTabs .pill{cursor:pointer}'
+'#lbGrid.tfd-tg{display:block!important;max-width:760px;margin:0 auto}#lbGrid.tfd-tg>div{display:none!important}#lbGrid.tfd-tg>div.on{display:block!important}'
+'.tfd-nd{display:inline-block;margin-left:8px;font:600 11px/1 Manrope,system-ui,sans-serif;letter-spacing:.02em;color:#0a6b4a;background:rgba(13,107,84,.12);border-radius:999px;padding:4px 8px;white-space:nowrap;vertical-align:middle}'+'#tfdNav{display:flex;align-items:stretch;justify-content:space-between;gap:10px;margin:2px 0 14px}#tfdNav .nv{display:flex;flex-direction:column;justify-content:center;min-width:0;max-width:34%;padding:9px 16px;border:1px solid var(--border,#E3DFD3);border-radius:14px;background:#fff;color:var(--ink,#1c1c1c);text-decoration:none;font-size:14px}#tfdNav .nv small{font-weight:700;color:#0D6B54;font-size:12.5px;letter-spacing:.02em}#tfdNav .nv span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--ink-soft,#6E6E73);margin-top:2px}#tfdNav .next{text-align:right}#tfdNav .nv:hover{border-color:#0D6B54}#tfdNav .nv.off{opacity:.35;pointer-events:none}#tfdNav .home{flex:0 0 auto;align-items:center;justify-content:center;font-weight:700;color:#fff;background:#0D6B54;border-color:#0D6B54}@media(max-width:700px){#tfdNav .nv span{display:none}#tfdNav .nv{max-width:none;flex:1;padding:10px}}'
+'tr.tfd-hide2{display:none!important}';
document.head.appendChild(s)}
function nfo(){var d=document.getElementById('tfdNfo');if(!d||!NF||!LG||!NF.items)return;var sig='v19:'+(NF.checked_at||'');if(d.getAttribute('data-v19')===sig)return;
var today=new Date().toISOString().slice(0,10);var items=NF.items.filter(function(n){return!n.close||n.close>=today});if(!items.length)return;
d.setAttribute('data-v19',sig);
d.innerHTML='<div class="tn-h"><h2>Open and upcoming launches</h2><span class="tn-chk">Checked '+esc(NF.checked_at||'')+'</span></div><div class="tn-grid">'+items.map(function(n){
 var open=n.open&&n.open<=today;
 var k=open?'Open · closes '+fd(n.close):(n.open?'Opens '+fd(n.open):'Coming soon');
 var v=n.open&&n.close?fd(n.open)+' – '+fd(n.close):'Dates to be announced';
 var key=amcKey((n.amc||'')+' '+(n.name||''));var amc=String(n.amc||'AMC to verify');
 var chk=n.amfi===true?'Listed on AMFI':n.amfi===false?'Not on AMFI yet':'';
 var nt=[n.note,chk].filter(Boolean).join(' · ');
 return '<div class="tn2"><div class="k">'+esc(k)+'</div><div class="v '+(open?'o':'s')+'">'+esc(v)+'</div><div class="kl">'+tile(key,amc.replace(/\s*Mutual Fund\s*$/i,''))+'<div class="kt"><b>'+esc(shortName(n.name))+'</b><div class="am">'+esc(amc)+(n.strategy?' · '+esc(n.strategy):'')+'</div></div></div>'+(nt?'<div class="nt">'+esc(nt)+'</div>':'')+'</div>'}).join('')
 +'</div><div class="tn-f">Minimum investment is ₹10 lakh per PAN for SIFs unless a fund states otherwise. Launch dates are checked daily against AMFI and AMC websites. Confirm in the offer document before investing.</div>'}
function logos(){if(!LG)return;[].forEach.call(document.querySelectorAll('img[src*="sifprime.com/amc-logos/"]'),function(im){var f=im.getAttribute('src').split('/').pop();var key=OLD[f];var u=key&&logoUrl(key);if(u)im.src=u})}
function fill(){if(!LG)return;[].forEach.call(document.querySelectorAll('.logotile'),function(tl){if(tl.querySelector('img')||tl.getAttribute('data-tf'))return;var c=tl.closest('.fundcell')||tl.parentElement;var tx=c?c.innerText:'';if(c&&c.parentElement&&tx.length<12)tx=c.parentElement.innerText;var key=amcKey((tx||'').slice(0,200));var u=logoUrl(key);if(!u)return;tl.setAttribute('data-tf','1');var im=document.createElement('img');im.decoding='async';im.alt=key+' logo';im.onerror=function(){im.remove()};im.src=u;tl.appendChild(im)})}
function css2(){if(document.getElementById('tfdCss2'))return;var s=document.createElement('style');s.id='tfdCss2';s.textContent='.table-mini tbody tr td:first-child{position:relative}.table-mini tbody tr .fn::after{position:absolute;right:10px;top:14px;margin:0}.table-mini tbody tr .fn{padding-right:0}';document.head.appendChild(s)}
function search(){var q=document.getElementById('fxQ');var pills=document.getElementById('catPillsBar');if(!q||!pills)return;var bar=document.getElementById('tfdSearch');if(bar&&bar.contains(q))return;if(!bar){bar=document.createElement('div');bar.id='tfdSearch';pills.parentNode.insertBefore(bar,pills)}var w=q.closest('.fxq-w')||q.parentNode;bar.appendChild(w);q.placeholder='Search all SIFs by name, AMC or category'}
function lb(){var g=document.getElementById('lbGrid');if(!g||g.children.length<2)return;var kids=[].slice.call(g.children);
 var labels=kids.map(function(k){var m=k.querySelector('.meta');var t=m?m.textContent.split('·')[0].trim():'';return /^all/i.test(t)?'All SIFs':t.toLowerCase().replace(/\b\w/g,function(c){return c.toUpperCase()}).replace('Ex-top','Ex-Top')});
 var sig=labels.join('|');var bar=document.getElementById('tfdLbTabs');
 if(!bar){bar=document.createElement('div');bar.id='tfdLbTabs';bar.className='pills';g.parentNode.insertBefore(bar,g);bar.addEventListener('click',function(e){var p=e.target.closest('.pill');if(!p)return;lbIdx=+p.getAttribute('data-i');lb()})}
 if(bar.getAttribute('data-sig')!==sig){bar.setAttribute('data-sig',sig);bar.innerHTML=labels.map(function(l,i){return '<span class="pill" data-i="'+i+'">'+esc(l)+'</span>'}).join('');if(lbIdx>=kids.length)lbIdx=0}
 g.classList.add('tfd-tg');[].forEach.call(bar.children,function(p,i){p.classList.toggle('active',i===lbIdx)});kids.forEach(function(k,i){k.classList.toggle('on',i===lbIdx)})}
function noDeriv(f){return!!f&&!f.unhedged_pending&&!(f.unhedged_count>0)&&!((f.unhedged||[]).length>0)}
function nd(){if(!FACTS||!FACTS.funds)return;var t=document.querySelector('#browsePanel table.table-mini tbody');if(!t)return;
 [].forEach.call(t.querySelectorAll('tr[data-code]'),function(tr){var f=FACTS.funds[tr.getAttribute('data-code')];var yes=noDeriv(f);
  var td=tr.querySelector('td');if(td&&yes&&!tr.querySelector('.tfd-nd')){var s=document.createElement('span');s.className='tfd-nd';s.textContent='No unhedged derivatives';s.title='As on '+(f.as_of||'')+' this fund has no unhedged derivative positions (any futures or options it holds are matched by shares)';td.appendChild(s)}
  tr.classList.toggle('tfd-hide2',fND&&!yes)});
 var w=document.querySelector('#cxCols .tfd-flt');if(w&&!document.getElementById('tfdND')){var l=document.createElement('label');l.innerHTML='<input type="checkbox" id="tfdND"> No unhedged derivatives';w.appendChild(l);l.querySelector('input').onchange=function(e){fND=e.target.checked;nd()}}
 var n=document.getElementById('tfdUnote');if(n&&n.textContent.indexOf('No unhedged')<0)n.textContent+=' A green "No unhedged derivatives" tag means every futures or options position is matched by a share position, or the fund holds none.'}
function pend(){var t=document.querySelector('#browsePanel table.table-mini tbody');if(!t||!LG||!PD||!PD.items||!PD.items.length)return;
 PD.items.forEach(function(n){var id='tfdP'+String(n.name).replace(/[^a-z0-9]/gi,'').toLowerCase();if(document.getElementById(id))return;
  var amc=String(n.amc||'AMC to verify');var key=amcKey(amc+' '+n.name);var tr=document.createElement('tr');tr.id=id;tr.className='tfd-pend';
  tr.innerHTML='<td class="fund"><div class="fundcell">'+tile(key,amc.replace(/\s*Mutual Fund\s*$/i,''))+'<div><div class="fn">'+esc(shortName(n.name))+'</div><div class="am">'+esc(amc)+'</div></div></div></td><td class="num" colspan="14" style="text-align:left;color:#6E6E73"><span class="tfd-nd" style="background:rgba(42,120,214,.12);color:#1c5fb0">NAV awaited</span> '+esc(n.status||'NFO closed, awaiting first NAV')+(n.close?' (closed '+fd(n.close)+')':'')+'. NAV and returns appear here once the fund is in the AMFI NAV file.</td>';
  t.appendChild(tr)})}
function tick(){try{css();css2();nfo();pend();logos();fill();search();lb();nd();navbar()}catch(e){}}

function navbar(){var m=location.hash.match(/^#fund\/([^/?]+)/);var old=document.getElementById('tfdNav');var back=document.getElementById('detBack');
 if(!m||!back){if(old)old.remove();return}
 var code=decodeURIComponent(m[1]);var rows=[].slice.call(document.querySelectorAll('#browsePanel table.table-mini tbody tr[data-code]'));
 var vis=rows.filter(function(r){return!/tfd-hide/.test(r.className)&&r.style.display!=='none'});var list=vis.some(function(r){return r.getAttribute('data-code')===code})?vis:rows;
 var i=list.findIndex(function(r){return r.getAttribute('data-code')===code});
 function nm(r){var e=r&&r.querySelector('.fn');return e?e.textContent.trim():''}
 var p=i>0?list[i-1]:null,n=i>=0&&i<list.length-1?list[i+1]:null;
 var sig=code+'|'+(p?p.getAttribute('data-code'):'')+'|'+(n?n.getAttribute('data-code'):'');
 if(old&&old.getAttribute('data-sig')===sig){back.style.display='none';return}
 if(old)old.remove();back.style.display='none';
 var d=document.createElement('div');d.id='tfdNav';d.setAttribute('data-sig',sig);
 d.innerHTML='<a class="nv prev'+(p?'':' off')+'" href="'+(p?'#fund/'+esc(p.getAttribute('data-code')):'#')+'"><small>← Previous fund</small><span>'+esc(nm(p))+'</span></a><a class="nv home" href="/sif-tracker/">SIF Tracker home</a><a class="nv next'+(n?'':' off')+'" href="'+(n?'#fund/'+esc(n.getAttribute('data-code')):'#')+'"><small>Next fund →</small><span>'+esc(nm(n))+'</span></a>';
 back.parentNode.insertBefore(d,back);
 d.addEventListener('click',function(e){var a=e.target.closest('a');if(!a)return;if(a.classList.contains('off')){e.preventDefault();return}if(a.classList.contains('home')){e.preventDefault();location.href='/sif-tracker/';return}window.scrollTo(0,0)})}
function sched(){clearTimeout(timer);timer=setTimeout(tick,150)}
Promise.all([jget('logos.json'),jget('facts.json'),jget('nfos.json'),jget('pending.json')]).then(function(r){LG=r[0];FACTS=r[1];NF=r[2];PD=r[3];tick();new MutationObserver(sched).observe(document.body,{childList:true,subtree:true});setInterval(tick,3000)});
})();

;(function(){
function fixAlt(){document.querySelectorAll('img').forEach(function(i){if(i.hasAttribute('alt')&&i.alt.trim()!=='')return;if(i.closest('.logotile'))return;if(i.classList.contains('neve-site-logo'))i.alt='Investing TFD';else if(i.classList.contains('site-icon'))i.alt='Investing TFD site icon'})}
function fixCount(){fetch('https://raw.githubusercontent.com/investingtfd/sif-tracker/main/site/data.json?t='+Date.now(),{cache:'no-store'}).then(function(r){return r.json()}).then(function(j){var n=j&&j.schemes&&j.schemes.length;var el=document.getElementById('hxCount');if(n&&el&&el.textContent!==String(n))el.textContent=n}).catch(function(){})}
fixAlt();setTimeout(fixAlt,1500);setTimeout(fixAlt,4000);fixCount();
})();

;(function(){
var SLUG={};
function sl(n){return String(n).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')}
function link(){document.querySelectorAll('tr[data-code]').forEach(function(tr){var fn=tr.querySelector('.fn');if(!fn||fn.querySelector('a.fl'))return;var s=SLUG[tr.getAttribute('data-code')];if(!s)return;var a=document.createElement('a');a.className='fl';a.href='/sif-tracker/'+s+'/';a.style.cssText='color:inherit;text-decoration:none';a.textContent=fn.textContent;a.addEventListener('click',function(e){if(e.ctrlKey||e.metaKey||e.shiftKey||e.button)return;e.preventDefault()});fn.textContent='';fn.appendChild(a)})}
fetch('https://raw.githubusercontent.com/investingtfd/sif-tracker/main/site/facts.json?t='+Date.now(),{cache:'no-store'}).then(function(r){return r.json()}).then(function(j){var F=(j&&j.funds)||j||{};Object.keys(F).forEach(function(c){if(F[c]&&F[c].name)SLUG[c]=sl(F[c].name)});link();setInterval(link,3000)}).catch(function(){})
})();
