window.TU=(function TUfactory(){
const TU={version:'2026-10-08d'};
const r2=x=>Math.round(x*100)/100;
const STOP=new Set('limited ltd co company the and india of corporation corp limted'.split(' '));
const clean=s=>String(s==null?'':s).replace(/\s+/g,' ').trim();
const MON='(january|february|march|april|may|june|july|august|september|october|november|december)';
const strip=s=>clean(s).replace(/\s*\$\$/g,'').replace(/\*+$/,'').replace(/\s*\((put|call) option\)/i,'').replace(/-(FUT|OPT)-.*$/i,'').replace(new RegExp('\\s+\\d[\\d.]*\\s+(call|put)\\s+'+MON+'\\s+20\\d\\d\\s+option$','i'),'').replace(new RegExp('\\s+'+MON+'\\s+20\\d\\d\\s+future$','i'),'').replace(/\s+\d\d-[A-Za-z]{3}-\d\d\s+FUT$/i,'').replace(/\s+\d\d\/\d\d\/\d{2,4}.*$/,'').replace(/\(erstwhile.*$/i,'').trim();
const key=s=>strip(s).toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(t=>t&&!STOP.has(t)).sort().join(' ');
const txt=(r,c)=>clean(r&&r[c]); const num=v=>typeof v==='number'&&isFinite(v)?v:null;
const isEq=s=>{s=String(s||'');return s.length===12&&/^IN/.test(s)&&s.slice(7,9)==='01'};
const find=(D,re,col,from)=>{for(let i=from||0;i<D.length;i++){if(re.test(txt(D[i],col)))return i}return -1};
TU.dense=rows=>rows.map(r=>{if(!r||!r.length)return null;if(r.every(c=>Array.isArray(c)&&c.length===2&&typeof c[0]==='number')){const a=[];r.forEach(c=>a[c[0]]=c[1]);for(let i=0;i<a.length;i++)if(a[i]===undefined)a[i]=null;return a}return r.slice()}).filter(r=>r&&r.some(c=>c!=null&&c!==''));
const NE='Futures and options the fund is not using to hedge a holding, as % of net assets. Options are shown at exposure value, as this AMC reports them.';
const NP='Futures and options the fund is not using to hedge a holding, as % of net assets. Options are shown at premium value, as this AMC reports them, so their market exposure is larger.';
const NF='Futures the fund is not using to hedge a holding (long futures, or shorts on stocks it does not hold), as % of net assets.';
const rule=(p,st,amc)=>amc==='other'?p:p>0?p:!st?p:(st.p+p<-0.05?st.p+p:0);
const finish=(U,basis)=>{U=U.filter(u=>u&&u[2]!==0).map(u=>[u[0],u[1]||'',u[2]]);const L=U.filter(u=>u[2]>0).reduce((a,u)=>a+u[2],0),S=-U.filter(u=>u[2]<0).reduce((a,u)=>a+u[2],0);const hasOpt=U.some(u=>/options\)$/.test(u[0]));const top=U.slice().sort((a,b)=>Math.abs(b[2])-Math.abs(a[2])).slice(0,5).map(u=>[u[0],u[1],Math.abs(u[2])<0.01?Math.round(u[2]*1000)/1000:r2(u[2])]);const o={unhedged:top,unhedged_long:r2(L),unhedged_short:r2(S),unhedged_count:U.length};if(U.length)o.unhedged_note=hasOpt?(basis==='exposure'?NE:NP):NF;return o};
TU._={r2,clean,strip,key,txt,num,isEq,find,rule,finish};

TU.altiva=D=>{const iDer=find(D,/^Derivatives$/i,1);if(iDer<0)return finish([]);const iF=find(D,/^\(a\)\s*Index\/Stock Future/i,1,iDer),iO=find(D,/^\(b\)\s*Index \/ Stock Option/i,1,iDer);
 const stock={};for(let i=0;i<iDer;i++){const x=D[i];if(isEq(x[2])&&num(x[6])!=null)stock[key(x[1])]={ind:clean(x[3]),p:x[6]*100}}
 const ls=from=>{const a=[];if(from<0)return a;for(let i=from+1;i<D.length;i++){const x=D[i];if(/^Sub Total/i.test(txt(x,1)))break;if(/^(long|short)$/i.test(txt(x,2))&&num(x[6])!=null)a.push({n:clean(x[1]),k:key(x[1]),ind:clean(x[3]),p:x[6]*100,side:txt(x,2).toLowerCase()})}return a};
 const futs=ls(iF),opts=ls(iO);
 const note=(re,nc,sc,withSide)=>{const s=find(D,re,1);const set=new Set();if(s<0)return{set,found:false,nil:false};const nil=/nil\s*$/i.test(txt(D[s],1));for(let i=s+1;i<D.length;i++){const x=D[i];if(x[0]!=null&&/^[a-z]\.$/i.test(clean(x[0])))break;if(/^Total %/i.test(txt(x,1)))break;const sd=txt(x,sc).toLowerCase();if(/^(long|short|call|put)$/.test(sd))set.add(key(x[nc])+(withSide?'|'+sd:''))}return{set,found:true,nil}};
 const oF=note(/^Other than hedging positions through futures/i,2,3,true),hF=note(/^Hedging positions through futures/i,2,3,true),oO=note(/^Other than hedging positions through options/i,1,2,false);
 const U=[];futs.forEach(f=>{const amc=oF.set.has(f.k+'|'+f.side)?'other':hF.set.has(f.k+'|'+f.side)?'hedge':'?';const v=oF.found?(amc==='other'?f.p:0):rule(f.p,stock[f.k],amc);if(Math.abs(v)>=0.005)U.push([f.n+' (futures)',f.ind,v])});
 if(oO.found&&!oO.nil)opts.forEach(o=>{if(oO.set.has(o.k)&&o.p!==0)U.push([o.n+(o.side==='short'?' (written options)':' (options)'),(stock[o.k]||{}).ind||'',o.p])});
 return finish(U,'premium')};

TU.icici=(M,V,sh)=>{const stock={},opts=[],futs=[];let inFut=false;for(let i=3;i<M.length;i++){const x=M[i];const n=clean(x[1]);if(/Stock \/ Index Futures|Details of Stock Future/i.test(n)){inFut=true;continue}const p=num(x[7]);if(p==null)continue;if(/\((Put|Call) Option\)/i.test(n))opts.push({n:strip(n),k:key(n),type:/Put/i.test(n)?'put':'call',ind:clean(x[4]),p:p*100});else if(inFut&&/\$\$/.test(n))futs.push({n:strip(n),k:key(n),ind:clean(x[4]),p:p*100});else if(!inFut&&isEq(x[2]))stock[key(n)]={ind:clean(x[4]),p:p*100}}
 const sec=n=>{const s=V.findIndex(x=>clean(x[0])===String(n));if(s<0)return[];let e=V.findIndex((x,i)=>i>s&&x[0]!=null&&/^\d/.test(clean(x[0])));if(e<0)e=V.length;return V.slice(s+1,e).filter(x=>clean(x[1]).replace(/\*+$/,'')===sh)};
 const s1=sec(1).map(x=>key(x[2])),s2=sec(2).map(x=>({k:key(x[2]),long:/long/i.test(txt(x,3))})),s5=new Set(sec(5).map(x=>key(x[2])+'|'+txt(x,3).toLowerCase()));
 const U=[];const com={};futs.forEach(f=>{const m=f.n.match(/^(\w+) Future .*Commodity (\w+ 20\d\d)/i);if(m){const c=m[1];com[c]=com[c]||{p:0,legs:[]};com[c].p+=f.p;com[c].legs.push(m[2]);return}const amc=s2.some(s=>s.k===f.k&&s.long===(f.p>0))?'other':s1.includes(f.k)?'hedge':'?';const v=rule(f.p,stock[f.k],amc);if(Math.abs(v)>=0.005)U.push([f.n+' (futures)',f.ind,v])});
 Object.entries(com).forEach(([c,v])=>{if(Math.abs(v.p)>=0.005)U.push([c+' (commodity futures, net of '+v.legs.join(' and ')+')','Commodity',v.p])});
 const left={};Object.keys(stock).forEach(k=>left[k]=stock[k].p);futs.forEach(f=>{if(f.p<0&&left[f.k]!=null)left[f.k]=Math.max(0,left[f.k]+f.p)});
 const om={};opts.forEach(o=>{if(!s5.has(o.k+'|'+o.type))return;let v=o.p;if(o.type==='put'&&o.p>0){const cover=Math.min(o.p,left[o.k]||0);left[o.k]=(left[o.k]||0)-cover;v=o.p-cover}if(Math.abs(v)<0.005)return;const nm=o.n+' ('+(o.type==='put'?'bought put':'call')+' options)';om[nm]=om[nm]||{ind:o.ind,p:0};om[nm].p+=(o.type==='put'?-1:1)*v});Object.entries(om).forEach(([n,v])=>U.push([n,v.ind,v.p]));
 const r=finish(U,'exposure');if(r.unhedged_note)r.unhedged_note='Futures and options the fund is not using to hedge a holding, as % of net assets. Bought puts on stocks the fund holds are treated as protection and left out; puts on stocks it does not hold are shown at exposure value, though the most the fund can lose on them is the premium paid.';return r};

TU.tata=D=>{const iF=find(D,/^\(a\)\s*Index\/Stock Future/i,1),iO=find(D,/^\(b\)\s*Index \/ Stock Option/i,1),iNA=find(D,/^NET ASSETS/i,1);if(iF<0&&iO<0)return finish([]);const stop=iF>=0?iF:iO;
 const stock={};for(let i=0;i<stop;i++){const x=D[i];if(isEq(x[4])&&num(x[7])!=null)stock[key(x[1])]={ind:clean(x[3]),p:x[7]}}
 const ls=(from,to)=>{const a=[];if(from<0)return a;for(let i=from+1;i<to;i++){const x=D[i];const sd=txt(x,4).toLowerCase();if(!/^(long|short)$/.test(sd)){if(a.length&&num(x[7])==null&&txt(x,1))break;continue}if(num(x[7])!=null)a.push({n:clean(x[1]),k:key(x[1]),ind:clean(x[3]),p:x[7],side:sd})}return a};
 const futs=ls(iF,iO>=0?iO:iNA).map(f=>({n:f.n,k:f.k,ind:f.ind,p:Math.abs(f.p)*(f.side==='short'?-1:1)})),opts=ls(iO,iNA);
 const note=re=>{const s=find(D,re,1);const a=[];if(s<0)return a;for(let i=s+2;i<D.length;i++){const t=txt(D[i],1);if(!t||/^Total/i.test(t)||/^NIL$/i.test(t))break;a.push({k:key(t),type:txt(D[i],2).toLowerCase()})}return a};
 const hF=note(/^\^?\s*Hedging positions through futures/i),oF=note(/^Other than Hedging positions through futures/i),oO=note(/^Other than Hedging Positions through Options/i);
 const U=[];futs.forEach(f=>{const amc=oF.some(s=>s.k===f.k)?'other':hF.some(s=>s.k===f.k)?'hedge':'?';const v=rule(f.p,stock[f.k],amc);if(Math.abs(v)>=0.005)U.push([f.n+' (futures)',f.ind,v])});
 oO.forEach(s=>{const o=opts.find(o=>o.k===s.k);if(!o)return;if(/nifty|sensex|index/i.test(o.n))return;const mag=Math.abs(o.p)||0.01;const dir=(s.type==='put'?-1:1)*(o.side==='short'?-1:1);U.push([o.n+' ('+(s.type==='put'?'put':'call')+' options)',o.ind,dir*mag])});
 return finish(U,'premium')};

TU.wsif=D=>{const iD=find(D,/^DERIVATIVES$/i,1);const stock={};for(let i=0;i<(iD<0?D.length:iD);i++){const x=D[i];if(isEq(x[0])&&num(x[5])!=null)stock[key(x[1])]={ind:clean(x[2]),p:x[5]*(x[5]<=1.0001&&x[5]>-1?100:1)}}
 const U=[];const tab=re=>{const s=find(D,re,1);const a=[];if(s<0)return a;for(let i=s+1;i<Math.min(D.length,s+60);i++){const x=D[i];const sd=txt(x,2).toLowerCase();if(/^(long|short)$/.test(sd)&&num(x[5])!=null)a.push({n:strip(x[1]),k:key(x[1]),p:x[5]});else if(a.length||/^(Total|Non Hedging|Hedging|For the)/i.test(txt(x,1))&&i>s+1)break}return a};
 const seen=new Set();[['other',/^Non Hedging Positions through futures/i],['hedge',/^Hedging Positions through futures/i]].forEach(([amc,re])=>tab(re).forEach(f=>{if(seen.has(f.k+f.p))return;seen.add(f.k+f.p);const st=stock[f.k];const v=rule(f.p,st,amc);if(Math.abs(v)>=0.005)U.push([f.n+' (futures)',st?st.ind:'',v])}));
 if(iD>=0){const SYM={NIFTY:'Nifty 50',MIDCPNIFTY:'Nifty Midcap Select',BANKNIFTY:'Bank Nifty',FINNIFTY:'Nifty Financial Services'};for(let i=iD+1;i<D.length;i++){const x=D[i];const t=txt(x,1);if(/^Total/i.test(t)||/^DEBT INSTRUMENTS/i.test(t))break;const m=t.match(/^([A-Z0-9&-]+?)ONNSE[A-Z]{3}20\d\dOPT\s+([PC])\s/);if(!m||num(x[5])==null)continue;const qty=num(x[3])||0;if(qty<=0)continue;const type=m[2]==='P'?'put':'call';if(type==='put'&&/NIFTY/.test(m[1]))continue;const st=Object.entries(stock).find(([k])=>k.replace(/ /g,'').startsWith(m[1].toLowerCase().slice(0,5)));if(type==='put'&&st)continue;U.push([(SYM[m[1]]||m[1])+' (bought '+type+' options)',st?st[1].ind:'',(type==='put'?-1:1)*Math.abs(x[5])])}}
 return finish(U,'premium')};

TU.prism=D=>{const gt=find(D,/^Grand Total/i,1);const stock={};for(let i=0;i<gt;i++){const x=D[i];if(isEq(x[2])&&num(x[6])!=null)stock[key(x[1])]={ind:clean(x[3]),p:x[6]}}
 const iD=find(D,/^Derivatives$/i,1,gt);const futs=[];if(iD>=0)for(let i=iD+1;i<D.length;i++){const x=D[i];if(/^Total$/i.test(txt(x,1)))break;const sd=txt(x,2).toLowerCase();if(/^(long|short)$/.test(sd)&&num(x[6])!=null)futs.push({n:clean(x[1]).replace(/\s+\d\d-[A-Za-z]{3}-\d\d\s+FUT$/i,'').replace(/^BANKNIFTY$/,'Bank Nifty').replace(/^NIFTY$/,'Nifty 50'),k:key(x[1]),ind:clean(x[3]),p:x[6]})}
 const list=re=>{const s=find(D,re,1,gt);const set=new Set();if(s<0)return set;for(let i=s+2;i<D.length;i++){const x=D[i];if(!/^(long|short)$/i.test(txt(x,2)))break;set.add(key(x[1]))}return set};
 const hF=list(/^\s*a\)\s*Hedging Positions through Futures/i),oF=list(/^\s*b\)\s*Other than Hedging Positions through Futures/i);
 const io=find(D,/Other than hedging positions through options/i,1,gt);let optPending=false;if(io>=0){const nx=txt(D[io+1],1)+' '+txt(D[io+2],1)+' '+txt(D[io],1);if(!/nil/i.test(nx))optPending=true}
 const U=[];futs.forEach(f=>{const amc=oF.has(f.k)?'other':hF.has(f.k)?'hedge':'?';const v=rule(f.p,stock[f.k],amc);if(Math.abs(v)>=0.005)U.push([f.n+' (futures)',f.ind,v])});const o=finish(U,'premium');if(optPending)o.pending='AMC lists non-hedging options; adapter does not read them yet';return o};

TU.dyna=D=>{const gt=find(D,/^GRAND TOTAL/i,1);const stock={},futs=[],opts=[],com=[];const phys={};let mode='';for(let i=0;i<gt;i++){const x=D[i];const n=clean(x[1]);if(/^Index \/ Stock Futures/i.test(n)){mode='f';continue}if(/^Index \/ Stock Options/i.test(n)){mode='o';continue}if(/^Commodity Future/i.test(n)){mode='c';continue}if(/^(Gold|Silver)$/i.test(n)&&num(x[6])==null){mode='m';continue}if(/^(TREPS|Net Receivables|Debt Instruments|Money Market|Treasury Bill|INVIT)/i.test(n)&&num(x[6])==null){mode='';continue}const p=num(x[6]);if(p==null||/total/i.test(n))continue;
  if(/^FUTCOM_/i.test(n))com.push({n,p:p*100});else if(/ Option$/i.test(n))opts.push({n:strip(n),k:key(n),type:/ put /i.test(n)?'put':'call',p:p*100});else if(/ Future$/i.test(n))futs.push({n:strip(n),k:key(n),p:p*100});else if(/^(gold|silver)$/i.test(n)){const m=n.toLowerCase();phys[m]=(phys[m]||0)+p*100}else if(isEq(x[2]))stock[key(n)]={ind:clean(x[3]),p:p*100}}
 const sec=re=>{const s=find(D,re,1,gt);const a=[];if(s<0)return a;for(let i=s+1;i<Math.min(D.length,s+80);i++){const x=D[i];const t=txt(x,1);if(/^Total /i.test(t)||/^(Hedging|Other than)/i.test(t))break;if(/^Investment Strategy$/i.test(t)||!txt(x,2))continue;a.push({k:key(x[2]),side:txt(x,3).toLowerCase()})}return a};
 const hF=sec(/^Hedging Positions through Futures/i),oF=sec(/^Other than Hedging Positions through Futures/i),oO=sec(/^Other than Hedging Positions through Options/i);
 const U=[];futs.forEach(f=>{const st=stock[f.k];const amc=oF.some(s=>s.k===f.k)?'other':hF.some(s=>s.k===f.k)?'hedge':'?';const v=rule(f.p,st,amc);if(Math.abs(v)>=0.005)U.push([f.n.replace(/^NIFTY$/,'Nifty 50')+' (futures)',st?st.ind:'',v])});
 oO.forEach(s=>{const type=/put/.test(s.side)?'put':'call';opts.filter(o=>o.k===s.k&&o.type===type).forEach(o=>{if(o.p!==0)U.push([o.n.replace(/^NIFTY$/,'Nifty 50')+' ('+type+' options)','',(type==='put'?-1:1)*o.p])})});
 const MN=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];com.slice().sort((a,b)=>b.p-a.p).forEach(c=>{const m=c.n.match(/FUTCOM_([A-Z]+?)M?_(\d\d)\/(\d\d)\/(\d{4})/);const metal=m?m[1].toLowerCase():c.n;const nm=(m?(metal.charAt(0).toUpperCase()+metal.slice(1)).replace('Crudeoil','Crude oil')+' '+MN[+m[3]-1]+' '+m[4]:c.n)+' (commodity futures)';if(c.p>0)U.push([nm,'Commodity',c.p]);else{const h=phys[metal]||0;if(h+c.p<-0.05)U.push([nm,'Commodity',h+c.p]);phys[metal]=Math.max(0,h+c.p)}});
 const o=finish(U,'premium');if(com.some(c=>c.p<0)&&o.unhedged_note)o.unhedged_note+=' Short gold and silver futures are matched against the physical gold and silver the fund holds.';return o};

TU.sbi=D=>{const f=find(D,/^Other than Hedging Positions through Futures/i,2),o=find(D,/Other than Hedging Positions through Options/i,2);const nilF=f>=0&&(/nil/i.test(txt(D[f+2],2))||/nil/i.test(txt(D[f],2))),nilO=o>=0&&/nil/i.test(txt(D[o],2)+' '+txt(D[o+1],2));const hf=find(D,/^Hedging Positions through Futures/i,2);const nilH=hf>=0&&/nil/i.test(txt(D[hf+2],2));const r=finish([]);if(!(nilF&&nilO&&nilH))r.pending='AMC lists futures or non-hedging options; adapter cannot read them yet';return r};

TU.byCode={'SIF-11':['altiva','AEHYLS'],'SIF-122':['altiva','AEXTLS'],'SIF-102':['tata','TELSFSIF'],'SIF-29':['tata','THLSFSIF'],'SIF-105':['wsif','WSXT'],'SIF-111':['wsif','WSLS'],'SIF-138':['prism','PRISMHLS'],'SIF-55':['dyna','DS01'],'SIF-87':['dyna','DS02'],'SIF-143':['dyna','DS03'],'SIF-13':['sbi','SIFMHLSF'],'SIF-34':['icici','SIFEX100'],'SIF-126':['icici','SIFEQTLS'],'SIF-124':['icici','SIFACTLS'],'SIF-35':['icici','SIFHYBID']};
TU.unhedged=(code,sheets)=>{const a=TU.byCode[code];if(!a)return null;const get=n=>{const s=sheets.find(s=>s.name===n);return s?TU.dense(s.rows):null};try{if(a[0]==='icici'){const M=get(a[1]),V=get('Derivative');if(!M||!V)return{error:'sheet missing'};return TU.icici(M,V,a[1])}const D=get(a[1]);if(!D)return{error:'sheet '+a[1]+' missing'};return TU[a[0]](D)}catch(e){return{error:String(e)}}};
return TU})();;(function(){const {clean,num,key,strip}=TU._;TU.trusts=D=>{let pc=-1,hi=-1;for(let i=0;i<Math.min(D.length,12);i++){const j=D[i].findIndex(c=>/(%|percentage)\s*to\s*(net|nav|aum)/i.test(String(c||'')));if(j>=0){pc=j;hi=i;break}}if(pc<0)return{err:'no pct col'};const gt=D.find(r=>r.some(c=>/^grand total|^net assets$/i.test(clean(c))));const gv=gt?num(gt[pc]):null;const sc=gv!=null&&gv>1.5?1:100;const out=[];for(let i=hi+1;i<D.length;i++){const r=D[i];const isin=r.find(c=>/^IN[A-Z0-9]{10}$/.test(String(c||'')));if(!isin)continue;const t=String(isin).slice(7,9);const nm=clean(r.find(c=>typeof c==='string'&&c.trim().length>3&&c!==isin&&/[A-Za-z]{3}/.test(c)&&!/^\d+$/.test(c.trim())));const isT=t==='25'||t==='23'||/\bREIT\b|Realty Trust|Real Estate Trust|Infra(structure)? (Investment )?Trust|Highways Trust|InvIT/i.test(nm);if(!isT)continue;const p=num(r[pc]);if(p==null)continue;const kind=t==='25'||/REIT|Realty Trust|Real Estate Trust/i.test(nm)?'REIT':'InvIT';out.push([nm.replace(/\s*[*#^~]+$/,''),kind,Math.round(p*sc*100)/100])}return{list:out.sort((a,b)=>b[2]-a[2]),sc,pc}};
TU.mergeTop=(top,tr)=>{const m=new Map();(top||[]).forEach(r=>m.set(key(r[0]),r));(tr||[]).forEach(r=>{if(!m.has(key(r[0])))m.set(key(r[0]),r)});return [...m.values()].sort((a,b)=>b[2]-a[2]).slice(0,10)}})();
;(function(){const {r2,clean,strip,key,txt,num,isEq,find,rule,finish}=TU._;
const km=(m,k)=>{if(m[k])return m[k];const p=k.slice(0,12);for(const q in m)if(q.slice(0,12)===p)return m[q];return null};
TU.toPairs=D=>D.map(r=>{const a=[];r.forEach((v,i)=>{if(v!=null)a.push([i,v])});return a});
TU.arudha=D=>{const iDer=find(D,/^Derivatives$/i,1);const stock={};
 for(let i=0;i<(iDer<0?D.length:iDer);i++){const x=D[i];if(isEq(x[2])&&num(x[6])!=null)stock[key(x[1])]={ind:clean(x[3]),p:x[6]*100,n:clean(x[1])}}
 const list=(re,sc)=>{const s=find(D,re,1);const a=[];if(s<0)return{a,found:false};for(let i=s+2;i<D.length;i++){const t=txt(D[i],1);if(!t||/^(Total|For the period)/i.test(t))break;if(/^nil$/i.test(t))continue;a.push({k:key(t),side:txt(D[i],sc).toLowerCase()})}return{a,found:true}};
 const oF=list(/^Other than Hedging Positions through Futures/i,2),oO=list(/^Other than Hedging Positions through Options/i,2);
 const fut={},opts=[];if(iDer>=0)for(let i=iDer+1;i<D.length;i++){const x=D[i];const n=txt(x,1);if(/^Total$/i.test(n))break;if(!n||num(x[6])==null||/^Sub ?Total/i.test(n))continue;const p=x[6]*100;if(/^(CALL|PUT)\b/i.test(n)){opts.push({n:strip(n.replace(/^(CALL|PUT)\s+/i,'')),k:key(n.replace(/^(CALL|PUT)\s+/i,'')),type:/^PUT/i.test(n)?'put':'call',p})}else if(/\d\d\/\d\d\/\d{2,4}/.test(n)){const k=key(n);fut[k]=fut[k]||{n:strip(n),k,p:0};fut[k].p+=p}}
 const U=[];Object.values(fut).forEach(f=>{const st=km(stock,f.k);const amc=oF.a.some(s=>s.k===f.k||s.k.slice(0,12)===f.k.slice(0,12))?'other':'hedge';const v=rule(f.p,st,amc);if(Math.abs(v)>=0.005)U.push([f.n+' (futures)',st?st.ind:'',v])});
 oO.a.forEach(s=>{opts.filter(o=>o.k===s.k||o.k.slice(0,12)===s.k.slice(0,12)).forEach(o=>{const st=km(stock,o.k);if(Math.abs(o.p)>=0.005)U.push([o.n+(o.p<0?' (written options)':' (options)'),st?st.ind:'',o.p])})});
 let arb=0;Object.entries(stock).forEach(([k,s])=>{const f=km(fut,k);if(f&&f.p<0)arb+=Math.min(s.p,-f.p)});
 const o=finish(U,'premium');o.arb=r2(arb);return o};
TU.fixSplit=(split,arb)=>{const g=n=>{const r=split.find(x=>x[0]===n);return r?r[1]:0};const eq=g('Equity')+g('Equity (unhedged)')+g('Arbitrage (hedged equity)');const rest=split.filter(x=>!/^(Equity|Arbitrage)/.test(x[0]));const out=arb>=1?[['Arbitrage (hedged equity)',r2(arb)],['Equity (unhedged)',r2(eq-arb)]]:[['Equity',r2(eq)]];return out.concat(rest).filter(x=>Math.abs(x[1])>=0.01).sort((a,b)=>b[1]-a[1])};
TU.loadArudha=async()=>{const A=[...new Set([...document.querySelectorAll('a[href]')].map(a=>a.href).filter(u=>/\.xlsx?$/i.test(u)&&/monthly|portfolio\/month/i.test(u)))];const MON=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
 const dt=u=>{const f=decodeURIComponent(u.split('/').pop());let m=f.match(/(\d\d)-(\d\d)-(20\d\d)/);if(m)return m[3]+'-'+m[2]+'-'+m[1];m=f.match(/(\d{1,2})-([A-Za-z]+)-(20\d\d)/);if(m){const i=MON.indexOf(m[2].toLowerCase().slice(0,3));if(i>=0)return m[3]+'-'+String(i+1).padStart(2,'0')+'-'+String(m[1]).padStart(2,'0')}m=f.match(/([A-Za-z]+)-(20\d\d)/);if(m){const i=MON.indexOf(m[1].toLowerCase().slice(0,3));if(i>=0){const e=new Date(Date.UTC(+m[2],i+1,0)).getUTCDate();return m[2]+'-'+String(i+1).padStart(2,'0')+'-'+e}}return ''};
 const fund=u=>/ASIF01|Hybrid/i.test(u.split('/').pop())?'SIF-40':/ASIF02|Equity/i.test(u.split('/').pop())?'SIF-62':null;
 const best={};A.forEach(u=>{const c=fund(decodeURIComponent(u)),d=dt(u);if(!c||!d)return;if(!best[c]||d>best[c].d)best[c]={u,d}});
 const NM={'SIF-40':'Arudha Hybrid Long-Short Fund','SIF-62':'Arudha Equity Long-Short Fund'};const out={};
 for(const c of Object.keys(best)){try{const S=await T.readXlsx(best[c].u);const sh=S[0];const D=TU.dense(sh.rows);const p=T.parse(TU.toPairs(D),c==='SIF-40');if(p.err){out[c]={error:'parse '+p.err};continue}const f=p.f;const U=TU.arudha(D);const tr=TU.trusts(D);f.split=TU.fixSplit(f.split,U.arb);Object.assign(f,{unhedged:U.unhedged,unhedged_long:U.unhedged_long,unhedged_short:U.unhedged_short,unhedged_count:U.unhedged_count});if(U.unhedged_note)f.unhedged_note=U.unhedged_note;else delete f.unhedged_note;if(tr&&tr.list)f.top_equity=TU.mergeTop(f.top_equity,tr.list);f.name=NM[c];f.as_of=best[c].d;f.source='Bandhan Mutual Fund monthly portfolio disclosure';f.source_url='https://arudhasif.com/downloads/';out[c]={f,file:best[c].u}}catch(e){out[c]={error:String(e)}}}
 return out}})();
;(function(){const {r2,clean,strip,key,txt,num,isEq,find,rule,finish}=TU._;
TU.unzip=async buf=>{const u=new Uint8Array(buf),dv=new DataView(u.buffer,u.byteOffset);let e=u.length-22;while(e>0&&dv.getUint32(e,true)!==0x06054b50)e--;const n=dv.getUint16(e+10,true);let p=dv.getUint32(e+16,true);const out={};for(let i=0;i<n;i++){const comp=dv.getUint16(p+10,true),cs=dv.getUint32(p+20,true),nl=dv.getUint16(p+28,true),el=dv.getUint16(p+30,true),cl=dv.getUint16(p+32,true),off=dv.getUint32(p+42,true);const name=new TextDecoder().decode(u.slice(p+46,p+46+nl));const lnl=dv.getUint16(off+26,true),lel=dv.getUint16(off+28,true);const d=u.slice(off+30+lnl+lel,off+30+lnl+lel+cs);out[name]=comp===0?d:new Uint8Array(await new Response(new Blob([d]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).arrayBuffer());p+=46+nl+el+cl}return out};
TU.sheetjs=async()=>{if(window.XLSX)return window.XLSX;await new Promise((ok,no)=>{const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';s.onload=ok;s.onerror=()=>no('sheetjs blocked');document.head.appendChild(s)});return window.XLSX};
TU.xlsDense=(X,ws)=>{const r=X.utils.decode_range(ws['!ref']);r.s.r=0;r.s.c=0;return X.utils.sheet_to_json(ws,{header:1,range:r,defval:null,raw:true,blankrows:true})};
})();;(function(){const {r2,clean,strip,key,txt,num,isEq,find,rule,finish}=TU._;
const NF2='Futures the fund is not using to hedge a holding, as % of net assets: long futures, and shorts on stocks it does not hold. The AMC classes these shorts as hedges for the portfolio; they are shown because the fund does not own the stocks.';
TU.parseDate=s=>{const MON=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];s=String(s||'');let m=s.match(/([A-Za-z]{3})[a-z]*\.?\s+(\d{1,2}),?\s*(20\d\d)/);if(m){const i=MON.indexOf(m[1].toLowerCase());if(i>=0)return m[3]+'-'+String(i+1).padStart(2,'0')+'-'+String(m[2]).padStart(2,'0')}m=s.match(/(\d{1,2})\s+([A-Za-z]{3})[a-z]*,?\s+(20\d\d)/);if(m){const i=MON.indexOf(m[2].toLowerCase());if(i>=0)return m[3]+'-'+String(i+1).padStart(2,'0')+'-'+String(m[1]).padStart(2,'0')}return null};
TU.apex=D=>{const iDebt=find(D,/^Debt Instruments$/i,2);const stock={};for(let i=0;i<(iDebt<0?D.length:iDebt);i++){const x=D[i];if(isEq(x[3])&&num(x[7])!=null)stock[key(x[2])]={ind:clean(x[4]),p:x[7]*100}}
 const sec=(re,pc)=>{const s=find(D,re,2);const a=[];if(s<0)return a;for(let i=s+2;i<D.length;i++){const t=txt(D[i],2);if(!t||/^(Total|For the month|\([a-e]\))/i.test(t))break;const sd=txt(D[i],3).toLowerCase();if(!/^(long|short)$/.test(sd))continue;const p=num(D[i][pc]);if(p==null)continue;a.push({n:clean(D[i][2]),k:key(D[i][2]),side:sd,p:(sd==='short'?-1:1)*Math.abs(p)*100})}return a};
 const hF=sec(/^\(a\)\s*Hedging Positions? through Futures/i,7),oF=sec(/^\(b\)\s*Other than Hedging Positions? through Futures/i,7),hO=sec(/^\(c\)\s*Hedging Positions? through Options/i,6),oO=sec(/^\(d\)\s*Other than Hedging Positions? through Options/i,6);
 const fut={};hF.forEach(f=>{fut[f.k]=fut[f.k]||{n:f.n,k:f.k,p:0};fut[f.k].p+=f.p});let unheld=false;const U=[];
 Object.values(fut).forEach(f=>{const st=stock[f.k];const v=rule(f.p,st,'hedge');if(Math.abs(v)>=0.005){U.push([f.n+' (futures)',st?st.ind:'',v]);if(!st&&v<0)unheld=true}});
 oF.forEach(f=>U.push([f.n+' (futures)',(stock[f.k]||{}).ind||'',f.p]));
 const om={};oO.forEach(o=>{om[o.k]=om[o.k]||{n:o.n,k:o.k,p:0};om[o.k].p+=o.p});Object.values(om).forEach(o=>{if(Math.abs(o.p)>=0.0005)U.push([o.n+(o.p<0?' (written options)':' (options)'),(stock[o.k]||{}).ind||'',o.p])});
 let arb=0;Object.values(fut).forEach(f=>{const st=stock[f.k];if(f.p<0&&st)arb+=Math.min(st.p,-f.p)});
 const sum=a=>a.reduce((s,x)=>s+x.p,0);const o=finish(U,'premium');if(unheld&&o.unhedged_note&&!/options\)/.test(JSON.stringify(o.unhedged)))o.unhedged_note=NF2;
 o.arb=r2(arb);o.futAbs=r2(hF.concat(oF).reduce((q,x)=>q+Math.abs(x.p),0));o.futNet=r2(sum(hF)+sum(oF));o.optNet=r2(sum(hO)+sum(oO));return o};
TU.fixTrusts=(split,list)=>{const t=r2((list||[]).reduce((s,x)=>s+x[2],0));const o=split.filter(x=>x[0]!=='REITs and InvITs');if(t>=0.01)o.push(['REITs and InvITs',t]);return o.sort((a,b)=>b[1]-a[1])};
TU.loadApex=async()=>{const h=document.documentElement.innerHTML;const L=[...h.matchAll(/Title\\*":\\*"(Monthly Portfolios as on [^"\\]+)\\*"[\s\S]{0,400}?"url\\*":\\*"([^"\\]+)/g)].map(x=>({d:TU.parseDate(x[1]),u:x[2]})).filter(x=>x.d).sort((a,b)=>a.d<b.d?1:-1);if(!L.length)return{error:'no Monthly Portfolios link found'};
 const X=await TU.sheetjs();const buf=await (await fetch(new URL(L[0].u,location.origin).href)).arrayBuffer();let bytes=new Uint8Array(buf);if(bytes[0]===0x50&&bytes[1]===0x4b){const z=await TU.unzip(buf);const k=Object.keys(z).find(k=>/\.xlsx?$/i.test(k));bytes=z[k]}
 const wb=X.read(bytes,{type:'array'});const MAP={SIFAHLS:'SIF-80',SIFAE100:'SIF-156',SIFAELS:'SIF-154'};const out={};
 for(const sn of wb.SheetNames){const c=MAP[sn];if(!c)continue;try{const D=TU.xlsDense(X,wb.Sheets[sn]);const gt=D.findIndex(r=>/^GRAND TOTAL/i.test(txt(r,2)));const p=T.parse(TU.toPairs(D.slice(0,gt+1)),sn==='SIFAHLS');if(p.err){out[c]={error:'parse '+p.err};continue}const f=p.f;const A=TU.apex(D);const tr=TU.trusts(D);const al=k=>{const x=f.allocation.find(y=>y[0]===k);return x?x[1]:0};const tl=(tr&&tr.list)||[];const reit=r2(tl.filter(x=>x[1]==='REIT').reduce((q,x)=>q+x[2],0)),invit=r2(tl.filter(x=>x[1]==='InvIT').reduce((q,x)=>q+x[2],0));const eqFix=r2(al('eq')+al('reit')+al('invit')-reit-invit);f.split=f.split.filter(x=>!/^(Equity|Arbitrage|REITs)/.test(x[0]));if(A.arb>=1){f.split.push(['Arbitrage (hedged equity)',A.arb]);f.split.push(['Equity (unhedged)',r2(eqFix-A.arb)])}else f.split.push(['Equity',eqFix]);if(reit+invit>=0.01)f.split.push(['REITs and InvITs',r2(reit+invit)]);f.split=f.split.filter(x=>Math.abs(x[1])>=0.01).sort((a,b)=>b[1]-a[1]);f.top_equity=TU.mergeTop(f.top_equity,tl);f.equity_gross_pct=eqFix;f.equity_net_pct=r2(eqFix+A.futNet+A.optNet);f.derivative_gross_exposure_cr=r2((A.futAbs+Math.abs(A.optNet))/100*f.net_assets_cr);f.derivative_basis='futures';
  f.allocation=f.allocation.filter(x=>!/^(fut|opt|eq|reit|invit)$/.test(x[0])).concat([['eq',eqFix]]).concat(reit?[['reit',reit]]:[]).concat(invit?[['invit',invit]]:[]).concat([['fut',A.futNet],['opt',A.optNet]]);Object.assign(f,{unhedged:A.unhedged,unhedged_long:A.unhedged_long,unhedged_short:A.unhedged_short,unhedged_count:A.unhedged_count});if(A.unhedged_note)f.unhedged_note=A.unhedged_note;else delete f.unhedged_note;
  const ni=D.findIndex(r=>/^Regular Plan - Growth/i.test(txt(r,2)));if(ni>=0){const mm=String(D[ni][3]).match(/\d+(?:\.\d+)?/);const v=mm?parseFloat(mm[0]):0;if(v)f.nav_regular_growth=v}
  const dr=D.find(r=>/Portfolio Statement as on/i.test(txt(r,2)));f.as_of=TU.parseDate(dr?dr[2]:'')||L[0].d;out[c]={f,file:L[0].u}}catch(e){out[c]={error:String(e)}}}
 return out}})();
;(function(){const {r2,clean,strip,key,txt,num,isEq,find,rule,finish}=TU._;
TU.iciciFull=(M,V,sh)=>{const end=M.findIndex(r=>/^Total Net Assets/i.test(txt(r,1)));if(end<0)return{error:'no Total Net Assets'};const NA=num(M[end][6]);const sc=1;
 const eq=[],tr=[],opts=[],futs=[],debt=[],mf=[];let nOther=0,fiOther=0,inFut=false,optSec=false;
 for(let i=4;i<end;i++){const x=M[i],n=clean(x[1]);if(!n)continue;const p=num(x[7]);if(/^Stock Options|^Index Options/i.test(n)){optSec=true;continue}if(/^Unlisted|^Debt Instruments/i.test(n))optSec=false;
  const isin=String(x[2]||'');if(/\((Put|Call) Option\)/i.test(n)&&p!=null){opts.push({n:strip(n),k:key(n),type:/Put/i.test(n)?'put':'call',ind:clean(x[4]),p:p*100});continue}
  if(/^IN[A-Z0-9]{10}$/.test(isin)){const t=isin.slice(7,9);if(p==null)continue;if(isEq(isin))eq.push({n,k:key(n),ind:clean(x[4]),p:p*100});else if(t==='25'||t==='23')tr.push([n.replace(/\s*[*#^~@$]+$/,''),t==='25'?'REIT':'InvIT',r2(p*100)]);else if(/^INF/.test(isin))mf.push({n,p:p*100});else debt.push({n:n.replace(/\s*[*#^~@$]+$/,''),r:clean(x[4]),p:p*100});continue}
  if(/^(TREPS|Cash Margin|Net Current Assets)/i.test(n)&&p!=null)fiOther+=p*100,nOther++}
 for(let i=end+1;i<M.length;i++){const n=clean(M[i][1]);if(/^Stock \/ Index Futures/i.test(n)){inFut=true;continue}if(inFut){if(/^Note|^Notes/i.test(n))break;const p=num(M[i][7]);if(p!=null&&n)futs.push({n:strip(n),k:key(n),ind:clean(M[i][4]),p:p*100})}}
 const sum=a=>a.reduce((s,x)=>s+x.p,0);const eqT=sum(eq),optT=sum(opts),futT=sum(futs),fi=sum(debt)+fiOther,mfT=sum(mf);const reit=tr.filter(x=>x[1]==='REIT').reduce((s,x)=>s+x[2],0),invit=tr.filter(x=>x[1]==='InvIT').reduce((s,x)=>s+x[2],0);
 const H={};futs.forEach(f=>{if(f.p<0)H[f.k]=(H[f.k]||0)-f.p});opts.forEach(o=>{if(o.type==='call'&&o.p<0)H[o.k]=(H[o.k]||0)-o.p;if(o.type==='put'&&o.p>0)H[o.k]=(H[o.k]||0)+o.p});
 const EQ={};eq.forEach(e=>EQ[e.k]=(EQ[e.k]||0)+e.p);let arb=0;Object.keys(EQ).forEach(k=>{if(H[k])arb+=Math.min(EQ[k],H[k])});
 const trT=reit+invit;const split=[];if(arb>=1){split.push(['Equity (unhedged)',r2(eqT-arb)]);split.push(['Arbitrage (hedged equity)',r2(arb)])}else split.push(['Equity',r2(eqT)]);split.push(['Fixed income',r2(100-eqT-trT-mfT)]);if(trT>=0.01)split.push(['REITs and InvITs',r2(trT)]);if(mfT>=0.01)split.push(['Mutual fund units',r2(mfT)]);
 const secm={};eq.forEach(e=>secm[e.ind||'Unclassified']=(secm[e.ind||'Unclassified']||0)+e.p);const sl=Object.entries(secm).sort((a,b)=>b[1]-a[1]);const sectors=sl.slice(0,5).map(x=>[x[0],r2(x[1])]);const rest=sl.slice(5).reduce((s,x)=>s+x[1],0);if(rest>0.005)sectors.push(['Other sectors',r2(rest)]);
 const eqA=Object.values(eq.reduce((m,e)=>{m[e.k]=m[e.k]||{n:e.n,ind:e.ind,p:0};m[e.k].p+=e.p;return m},{}));
 const top=(a,n,asc)=>a.slice().sort((x,y)=>asc?x.p-y.p:y.p-x.p).slice(0,n);
 const dgAbs=futs.reduce((s,x)=>s+Math.abs(x.p),0)+opts.reduce((s,x)=>s+Math.abs(x.p),0);
 const nv=M.findIndex(r=>/^Plan Name/i.test(txt(r,1)));let nav=null;if(nv>=0){const hd=M[nv];let c=-1;hd.forEach((h,j)=>{if(/NAV per Unit/i.test(String(h||'')))c=j});for(let i=nv+1;i<nv+4;i++){if(/^Growth Option/i.test(txt(M[i],1))&&c>=0)nav=num(M[i][c])}}
 const ti=M.findIndex(r=>/Portfolio turnover/i.test(txt(r,1)));const tm=ti>=0?String(M[ti][2]||'').match(/[\d.]+/):null;
 const f={allocation:[['eq',r2(eqT)],['opt',r2(optT)],['fi',r2(fi)]].concat(mfT?[['mf',r2(mfT)]]:[]).concat(reit?[['reit',r2(reit)]]:[]).concat(invit?[['invit',r2(invit)]]:[]).concat([['fut',r2(futT)]]),net_assets_cr:r2(NA/100),
  top_equity:TU.mergeTop(top(eqA,10).map(e=>[e.n.replace(/\s*[*#^~@$]+$/,''),e.ind,r2(e.p)]),tr),top_debt:top(debt,5).map(d=>[d.n,d.r,r2(d.p)]),top_shorts:top(futs,5,true).filter(x=>x.p<0).map(x=>[x.n,x.ind,r2(x.p)]),
  equity_gross_pct:r2(eqT),equity_net_pct:r2(eqT-arb),holdings_count:nOther+eq.length+tr.length+mf.length+debt.length+opts.length+futs.length,turnover_ratio:tm?parseFloat(tm[0]):null,derivative_gross_exposure_cr:r2(dgAbs/100*NA/100),derivative_basis:'futures',sectors,split,sector_note:'Share of the fund held in stocks ('+eqT.toFixed(1)+'%), before futures and options hedges'};
 if(nav)f.nav_regular_growth=nav;const dr=M.slice(0,6).find(r=>/Portfolio as on/i.test(txt(r,1)));f.as_of=TU.parseDate(dr?dr[1]:'');const U=TU.icici(M,V,sh);f.equity_net_pct=r2(eqT-arb+(U.unhedged_long||0));Object.assign(f,{unhedged:U.unhedged,unhedged_long:U.unhedged_long,unhedged_short:U.unhedged_short,unhedged_count:U.unhedged_count});if(U.unhedged_note)f.unhedged_note=U.unhedged_note;else delete f.unhedged_note;return{f}};
TU.loadIcici=async()=>{const j=await (await fetch('https://apimf.icicipruamc.com/sif/nms/v1/downloads/files',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({categoryId:'e8b2e4cf-cf3b-29f1-6afe-7e7a25c3014b',schemeCategory:'',userType:'Investor',fileType:'All',page:'1',size:'20',filter:[],categoryName:'OTHERS'})})).json();const fl=((j.success||{}).data||{}).files||[];const L=fl.filter(f=>/monthly portfolio/i.test(f.title.text)&&/\.zip$/i.test(f.url)).sort((a,b)=>b.applicableMonth-a.applicableMonth);if(!L.length)return{error:'no monthly portfolio zip found'};
 const z=await TU.unzip(await (await fetch('https://www.icicipruamc.com/blob'+encodeURI(L[0].url))).arrayBuffer());const MAP={SIFEX100:'SIF-34',SIFEQTLS:'SIF-126',SIFACTLS:'SIF-124',SIFHYBID:'SIF-35'};const out={};
 for(const k of Object.keys(z)){if(!/\.xlsx$/i.test(k))continue;try{const S=await T.readXlsx(URL.createObjectURL(new Blob([z[k]])));const m=S.find(s=>MAP[s.name]),v=S.find(s=>s.name==='Derivative');if(!m||!v)continue;const c=MAP[m.name];const r=TU.iciciFull(TU.dense(m.rows),TU.dense(v.rows),m.name);r.file=L[0].url;out[c]=r}catch(e){out[k]={error:String(e)}}}
 return out}})();

;(function(){const {strip}=TU._;
const nn=s=>strip(String(s).replace(/\s+\d\d-\d\d-\d{4}\s*$/,'')).toLowerCase().replace(/&/g,'and').replace(/\b(ltd|limited|co|company|corporation|corp)\b/g,'').replace(/[^a-z0-9]/g,'');
const lev=(a,b)=>{const m=a.length,n=b.length;let p=Array.from({length:n+1},(_,j)=>j);for(let i=1;i<=m;i++){const c=[i];for(let j=1;j<=n;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=c}return p[n]};
TU._.nn=nn;TU._.fz=(map,name)=>{const k=nn(name);if(map[k])return map[k];if(k.length>=8){for(const q in map){if(Math.abs(q.length-k.length)<=2&&lev(q,k)<=2)return map[q]}}return null}})();
;(function(){const {r2,clean,strip,key,txt,num,isEq,find,rule,finish,nn,fz}=TU._;
const sk=s=>key(String(s).replace(/\s+\d\d-\d\d-\d{4}\s*$/,'').replace(/\s+\d\d\/\d\d\/\d{2,4}.*$/,''));
TU.mirae=D=>{const gt=find(D,/^GRAND TOTAL/i,1);const stock={};for(let i=0;i<(gt<0?D.length:gt);i++){const x=D[i];if(isEq(x[2])&&num(x[6])!=null)stock[nn(x[1])]={ind:clean(x[3]),p:x[6]*100}}
 const sec=(re,pc,optMode)=>{const s=find(D,re,1);const a=[];if(s<0)return a;for(let i=s+2;i<D.length;i++){const t=txt(D[i],1);if(!t||/^(Total|For the|[A-E]\.)/i.test(t))break;const sd=txt(D[i],2).toLowerCase();if(optMode){if(/^(call|put)$/.test(sd))a.push({n:clean(D[i][1]),k:nn(D[i][1]),n:clean(D[i][1]),type:sd})}else if(/^(long|short)$/.test(sd)){const p=num(D[i][pc]);if(p!=null)a.push({n:clean(D[i][1]).replace(/\s+\d\d-\d\d-\d{4}\s*$/,''),k:nn(D[i][1]),p:p*100})}}return a};
 const hF=sec(/^A\.\s*Hedging Positions through Futures/i,8),oF=sec(/^B\.\s*Other than Hedging Positions through Futures/i,8),oO=sec(/^D\.\s*Other than Hedging Positions through Options/i,0,true);
 const fut={};hF.forEach(f=>{fut[f.k]=fut[f.k]||{n:f.n,k:f.k,p:0};fut[f.k].p+=f.p});const U=[];
 Object.values(fut).forEach(f=>{const st=fz(stock,f.n);const v=rule(f.p,st,'hedge');if(Math.abs(v)>=0.005)U.push([f.n+' (futures)',st?st.ind:'',v])});
 oF.forEach(f=>U.push([f.n+' (futures)',(fz(stock,f.n)||{}).ind||'',f.p]));
 const bad=oO.filter(o=>o.type==='call'||!fz(stock,o.n));const o=finish(U,'premium');
 if(bad.length)o.pending='AMC lists '+bad.length+' non-hedging option positions that are calls or puts on stocks not held; their size is not given per line';
 else if(oO.length&&o.unhedged_note)o.unhedged_note+=' Bought put options on stocks the fund holds ('+oO.length+' positions) are protection and are left out.';
 let arb=0;Object.values(fut).forEach(f=>{const st=fz(stock,f.n);if(f.p<0&&st)arb+=Math.min(st.p,-f.p)});o.arb=r2(arb);return o}})();
;(function(){const {txt,finish,find}=TU._;
TU.summit=D=>{const r=D.find(x=>/Total outstanding exposure in derivative instruments/i.test(txt(x,1)));if(!r)return Object.assign(finish([]),{pending:'derivative exposure line not found'});const t=txt(r,1);if(/:\s*nil\s*$/i.test(t))return finish([]);return Object.assign(finish([]),{pending:'AMC reports derivative exposure; adapter does not read it yet: '+t.slice(-60)})}})();
;(function(){const {txt,finish}=TU._;
TU.sapphire=D=>{const rs=D.filter(x=>/Exposure to Derivative Instruments|Outstanding derivative exposure/i.test(txt(x,0)));if(rs.length<1)return Object.assign(finish([]),{pending:'derivative exposure lines not found'});const nil=rs.every(r=>r.slice(1).some(c=>/^\s*nil\s*$/i.test(String(c||''))));return nil?finish([]):Object.assign(finish([]),{pending:'AMC reports derivative exposure; adapter does not read it yet'})}})();
;(function(){const {r2,clean,key,txt,num,isEq,find,rule,finish,nn,fz}=TU._;
TU.diviniti=D=>{const gt=find(D,/^GRAND TOTAL/i,1);const stock={};for(let i=0;i<(gt<0?D.length:gt);i++){const x=D[i];if(isEq(x[2])&&num(x[6])!=null)stock[nn(x[1])]={ind:clean(x[3]),p:x[6]*100}}
 const iD=find(D,/^DERIVATIVES$/i,1,gt);const rows=[];if(iD>=0)for(let i=iD+2;i<D.length;i++){const x=D[i];const t=txt(x,1);if(/^Notes/i.test(t)||!t)break;const sd=txt(x,2).toLowerCase();if(/^(long|short)$/.test(sd)&&num(x[6])!=null)rows.push({n:t.replace(/^NIFTY$/,'Nifty 50 Index'),ind:clean(x[3]),p:(sd==='short'?-1:1)*Math.abs(x[6])*100})}
 const so=find(D,/^Other than Hedging Positions through Futures/i,1);const oSet=new Set();if(so>=0)for(let i=so+2;i<D.length;i++){const x=D[i];if(/^Total/i.test(txt(x,1)))break;if(txt(x,2))oSet.add(nn(x[2]))}
 const oo=D.find(r=>/^Other than Hedging Positions through Options/i.test(txt(r,1)));const optNil=!oo||/:\s*nil\s*$/i.test(txt(oo,1));const ho=D.find(r=>/^Hedging Position[s]? through (Put )?Options?/i.test(txt(r,1)));
 const U=[];rows.forEach(f=>{const st=fz(stock,f.n);const amc=oSet.has(nn(f.n))?'other':'hedge';const v=rule(f.p,st,amc);if(Math.abs(v)>=0.005)U.push([f.n+' (futures)',f.ind,v])});
 const o=finish(U,'premium');if(!optNil)o.pending='AMC lists non-hedging options; adapter does not read them yet';return o}})();
;(function(){const {r2,clean,txt,num,isEq,find,rule,finish,nn,fz}=TU._;
const NF2='Futures the fund is not using to hedge a holding, as % of net assets: long futures, and shorts on stocks it does not hold. The AMC classes these shorts as hedges for the portfolio; they are shown because the fund does not own the stocks.';
TU.redhex=D=>{const end=D.findIndex(r=>/^Total Net Assets/i.test(txt(r,0)));const stock={};for(let i=0;i<(end<0?D.length:end);i++){const x=D[i];if(isEq(x[1])&&num(x[5])!=null)stock[nn(x[0])]={ind:clean(x[2]),p:x[5]*100}}
 const h=D.findIndex(r=>/^Disclosure in Derivatives/i.test(txt(r,0)));if(h<0)return Object.assign(finish([]),{pending:'derivative table not found'});
 const fut={};let n=0;for(let i=h+1;i<D.length;i++){const x=D[i];const t=txt(x,0);if(!t||/^(For the period|[a-e]\))/i.test(t))break;const q=num(x[1]),p=num(x[3]);if(q==null||p==null)continue;const k=nn(t);fut[k]=fut[k]||{n:t.replace(/\s+/g,' '),p:0};fut[k].p+=(q<0?-1:1)*Math.abs(p)*100;n++}
 const nonH=D.find(r=>/^b\)\s*Non Hedging Positions through Futures/i.test(txt(r,0))),oOpt=D.find(r=>/^d\)\s*Other than Hedging Positions through Options/i.test(txt(r,0)));
 const U=[];let unheld=false;Object.values(fut).forEach(f=>{const st=fz(stock,f.n);const v=rule(f.p,st,'hedge');if(Math.abs(v)>=0.005){U.push([f.n+' (futures)',st?st.ind:'',v]);if(!st&&v<0)unheld=true}});
 const o=finish(U,'premium');if(unheld&&o.unhedged_note)o.unhedged_note=NF2;
 if(!(nonH&&/is nil/i.test(txt(nonH,0)))||!(oOpt&&/is nil/i.test(txt(oOpt,0))))o.pending='AMC lists non-hedging futures or options; adapter does not read them yet';
 let arb=0;Object.values(fut).forEach(f=>{const st=fz(stock,f.n);if(f.p<0&&st)arb+=Math.min(st.p,-f.p)});o.arb=r2(arb);return o}})();
;(function(){const {r2,clean,txt,num,isEq,find,rule,finish,nn,fz}=TU._;
TU.quant=D=>{const iDer=find(D,/^DERIVATIVES$/i,2);const iGT=find(D,/^Grand Total/i,2);const stock={};for(let i=0;i<(iDer<0?D.length:iDer);i++){const x=D[i];if(isEq(x[1])&&num(x[7])!=null)stock[nn(x[2])]={ind:clean(x[4]),p:x[7]}}
 const fut=[],opt=[],com=[];let mode='';if(iDer>=0)for(let i=iDer+1;i<(iGT<0?D.length:iGT);i++){const x=D[i];const t=txt(x,2);if(/Index \/ Stock Futures/i.test(t)){mode='f';continue}if(/Index \/ Stock Options/i.test(t)){mode='o';continue}if(/Commodity Futures/i.test(t)){mode='c';continue}if(/Commodity Option/i.test(t)){mode='co';continue}if(/^DEBT INSTRUMENTS/i.test(t))break;const p=num(x[7]);if(p==null||/^(sub )?total$/i.test(t)||!t)continue;
  if(mode==='f')fut.push({n:t,ind:clean(x[4]),p});else if(mode==='o')opt.push({n:t,ind:clean(x[4]),p,put:/\bput\b|\bPE\b/i.test(t)||/PE\d*$/.test(String(x[1]||''))});else if(mode==='c'||mode==='co')com.push({n:t,p})}
 const lst=(re)=>{const s=find(D,re,1);const a=[];if(s<0)return{a,found:false};for(let i=s+2;i<D.length;i++){const x=D[i];const t=txt(x,1);if(!t||/^(Total|For the period)/i.test(t))break;if(/^nil$/i.test(t))continue;a.push({k:nn(t),side:txt(x,2).toLowerCase()})}return{a,found:true}};
 const oF=lst(/^Other than Hedging Positions through Futures/i),oO=lst(/^Other than Hedging Positions through Options/i);
 const agg={};fut.forEach(f=>{const k=nn(f.n);agg[k]=agg[k]||{n:f.n.replace(/\s+/g,' ').trim(),ind:f.ind,p:0};agg[k].p+=f.p});
 const U=[];let unheld=false;Object.entries(agg).forEach(([k,f])=>{const st=fz(stock,f.n);const other=oF.a.some(s=>s.k===k&&((s.side==='long')===(f.p>0)));const v=rule(f.p,st,other?'other':'hedge');if(Math.abs(v)>=0.005)U.push([f.n+' (futures)',f.ind||(st?st.ind:''),v])});
 const om={};opt.forEach(o=>{const listed=oO.a.some(s=>s.k===nn(o.n));if(!listed)return;const st=fz(stock,o.n);let v;if(o.put){v=o.p>0?(st?0:-o.p):Math.abs(o.p)}else{v=o.p>0?o.p:(st?0:-Math.abs(o.p))}if(Math.abs(v)<0.005)return;const nm=o.n.replace(/\s+/g,' ').trim()+' ('+(o.put?'put':'call')+' options)';om[nm]=om[nm]||{ind:o.ind,p:0};om[nm].p+=v});Object.entries(om).forEach(([n,v])=>U.push([n,v.ind,v.p]));
 const o=finish(U,'exposure');if(com.length)o.pending='commodity derivatives present; adapter does not read them yet';
 let arb=0;Object.entries(agg).forEach(([k,f])=>{const st=fz(stock,f.n);if(f.p<0&&st)arb+=Math.min(st.p,-f.p)});o.arb=r2(arb);o.found=[oF.found,oO.found];return o}})();
;Object.assign(TU.byCode,{'SIF-136':['mirae','SIFLS'],'SIF-150':['summit','EQLSSIF'],'SIF-96':['sapphire','SIELS'],'SIF-21':['diviniti','DIVLSF'],'SIF-128':['redhex','*'],'SIF-3':['quant','*'],'SIF-7':['quant','*'],'SIF-25':['quant','*'],'SIF-93':['quant','*'],'SIF-117':['quant','*']});
;(function(){const orig=TU.unhedged;TU.unhedged=(code,sheets)=>{const a=TU.byCode[code];if(a&&a[1]==='*'){try{const D=TU.dense(sheets.reduce((r,x)=>r.concat(x.rows),[]));return TU[a[0]](D)}catch(e){return{error:String(e)}}}return orig(code,sheets)}})();

;(function(){const {r2,clean,strip,key,txt,num,isEq,find,rule,finish,nn,fz}=TU._;
TU.version='2026-10-09a';
const dn=s=>clean(String(s).replace(/\s+\d\d[-.\/]\d\d[-.\/]\d{2,4}.*$/,'').replace(/\s+\d\d-[A-Za-z]{3}-\d{2,4}.*$/,''));
const sbiOld=TU.sbi;
TU.sbi=D=>{const iD=find(D,/^DERIVATIVES$/i,2);if(iD<0)return sbiOld(D);
 const gt=find(D,/^GRAND TOTAL/i,2);const stock={};for(let i=0;i<(gt<0?iD:gt);i++){const x=D[i];if(isEq(x[3])&&num(x[7])!=null)stock[nn(x[2])]={ind:clean(x[4]),p:x[7]}}
 const futs=[];let lakhs=0,isOpt=false,optRows=0;
 for(let i=iD+2;i<D.length;i++){const x=D[i],t=txt(x,2);if(!t||/^Derivatives Total|^Notes/i.test(t))break;
  if(txt(x,3)===''){if(/Options$/i.test(t))isOpt=true;else if(/Futures$/i.test(t))isOpt=false;continue}
  const sd=txt(x,3).toLowerCase(),p=num(x[7]);if(!/^(long|short)$/.test(sd)||p==null)continue;
  if(isOpt){optRows++;continue}
  futs.push({n:dn(t),ind:clean(x[4]),p:(sd==='short'?-1:1)*Math.abs(p)});lakhs+=Math.abs(num(x[6])||0)}
 const so=find(D,/^Other than Hedging Positions through Futures/i,2);const oSet=new Set();
 if(so>=0)for(let i=so+2;i<D.length;i++){const t=txt(D[i],2);if(!t||/^Total|^For the period/i.test(t))break;if(/^nil$/i.test(t))continue;oSet.add(nn(dn(t)))}
 const agg={};futs.forEach(f=>{const k=nn(f.n);agg[k]=agg[k]||{n:f.n,ind:f.ind,p:0};agg[k].p+=f.p});
 const U=[];let arb=0;Object.entries(agg).forEach(([k,f])=>{const st=stock[nn(f.n)];const v=rule(f.p,st,oSet.has(k)?'other':'hedge');if(Math.abs(v)>=0.005)U.push([f.n+' (futures)',st?st.ind:f.ind,r2(v)]);if(f.p<0&&st)arb+=Math.min(st.p,-f.p)});
 const o=finish(U,'premium');
 const oo=find(D,/Other than Hedging Positions through Options/i,2);const nilO=oo>=0&&/nil/i.test(txt(D[oo],2)+' '+txt(D[oo+1],2));
 if(optRows||!nilO)o.pending='AMC lists options among its derivatives or non-hedging options; adapter cannot read them yet';
 o.fix={fut_pct:r2(futs.reduce((s,f)=>s+f.p,0)),gross_cr:r2(lakhs/100),shorts:Object.values(agg).filter(f=>f.p<0).sort((a,b)=>a.p-b.p).slice(0,5).map(f=>[f.n,f.ind,r2(f.p)]),arb:r2(arb)};
 return o};
const sapOld=TU.sapphire;
TU.sapphire=D=>{const hi=D.findIndex(r=>/derivative exposure as % to net assets/i.test(txt(r,7)));if(hi<0)return sapOld(D);
 const end=find(D,/^Net Assets$/i,0,hi);const stock={},futs=[],opts=[];let isOpt=false,lakhs=0;
 for(let i=hi+1;i<(end<0?D.length:end);i++){const x=D[i],t0=txt(x,0),n=txt(x,1);
  if(!n){if(!/total/i.test(t0)){if(/option/i.test(t0))isOpt=true;else if(/future/i.test(t0))isOpt=false}continue}
  if(!isOpt&&isEq(x[0])&&num(x[5])!=null)stock[nn(n)]={ind:clean(x[2]),p:x[5]};
  const d=num(x[7]);if(d==null||Math.abs(d)<0.005)continue;
  if(isOpt)opts.push({n,p:d});else{futs.push({n,p:d});lakhs+=Math.abs(num(x[6])||0)}}
 const sect=re=>{const s=D.findIndex(r=>re.test(txt(r,0)));const a=[];if(s<0)return a;for(let i=s+2;i<D.length;i++){const t=txt(D[i],0);if(!t||/^(i{1,3}|iv|v|vi{1,3})\)/i.test(t)||/^Other than|^Hedging/i.test(t))break;if(/^nil$/i.test(t))continue;a.push(t)}return a};
 const hedF=sect(/^i\)\s*Hedging Positions through Futures/i).map(t=>nn(dn(t))),othF=sect(/^i\)\s*Other than Hedging Positions through Futures/i).map(t=>nn(dn(t))),cc=sect(/covered call options as on/i).map(t=>nn(dn(t.replace(/\s+Option\s+(Call|Put).*$/i,''))));
 const agg={};futs.forEach(f=>{const k=nn(f.n);agg[k]=agg[k]||{n:f.n,p:0};agg[k].p+=f.p});
 const U=[];let arb=0;Object.entries(agg).forEach(([k,f])=>{const st=stock[nn(f.n)];f.ind=st?st.ind:'';const v=rule(f.p,st,othF.includes(k)&&!hedF.includes(k)?'other':'hedge');if(Math.abs(v)>=0.005)U.push([f.n+' (futures)',f.ind,r2(v)]);if(f.p<0&&st)arb+=Math.min(st.p,-f.p)});
 let covered=0;const bad=[];opts.forEach(o=>{const st=stock[nn(o.n)];if(o.p<0&&cc.includes(nn(o.n))&&st)covered+=-o.p;else bad.push(o)});
 const o=finish(U,'exposure');
 if(covered>=0.005)o.unhedged_note=(o.unhedged_note||'Futures the fund is not using to hedge a holding, as % of net assets.')+' Calls written on stocks the fund holds (covered calls, '+r2(covered)+'% of net assets at exposure value) are left out; the AMC counts them as non-hedging.';
 if(bad.length)o.pending='AMC lists '+bad.length+' option positions that are not covered calls; adapter does not read them yet';
 o.fix={fut_pct:r2(futs.reduce((s,f)=>s+f.p,0)),gross_cr:r2(lakhs/100),shorts:Object.values(agg).filter(f=>f.p<0).sort((a,b)=>a.p-b.p).slice(0,5).map(f=>[f.n,f.ind,r2(f.p)]),arb:r2(arb)};
 return o};
Object.assign(TU.byCode,{'SIF-157':['sbi','SIFMEEX100LSF']});
TU.finalize=(code,f,sheets,prev)=>{prev=prev||{};const K=['unhedged','unhedged_long','unhedged_short','unhedged_count','unhedged_note'];K.forEach(k=>delete f[k]);delete f.unhedged_pending;
 let u;try{u=TU.unhedged(code,sheets)}catch(e){u={error:String(e)}}
 const inr=v=>typeof v==='number'&&v>=0&&v<=60;const ok=!!u&&!u.error&&!('pending' in u)&&inr(u.unhedged_long)&&inr(u.unhedged_short);
 if(ok){f.unhedged=u.unhedged;f.unhedged_long=u.unhedged_long;f.unhedged_short=u.unhedged_short;f.unhedged_count=u.unhedged_count;if(u.unhedged_note)f.unhedged_note=u.unhedged_note}
 else{K.forEach(k=>{if(prev[k]!==undefined)f[k]=prev[k]});f.unhedged_pending=true}
 const x=u&&!u.error&&u.fix;if(x){
  if(typeof x.fut_pct==='number'&&Array.isArray(f.allocation)){const a=f.allocation.filter(r=>r[0]!=='fut');if(Math.abs(x.fut_pct)>=0.005)a.push(['fut',x.fut_pct]);f.allocation=a;const g=k=>{const r=a.find(r=>r[0]===k);return r?r[1]:0};f.equity_net_pct=r2(g('eq')+g('fut')+g('opt'))}
  if(typeof x.gross_cr==='number'){f.derivative_gross_exposure_cr=x.gross_cr;f.derivative_basis='futures'}
  if(Array.isArray(x.shorts))f.top_shorts=x.shorts;
  if(typeof x.arb==='number'&&Array.isArray(f.split))f.split=TU.fixSplit(f.split,x.arb)}
 return{ok,why:ok?null:(u?(u.error||u.pending||'figures out of range'):'no adapter for '+code)}};
})();
