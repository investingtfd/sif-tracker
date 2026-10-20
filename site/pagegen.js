/* SIF fund page generator. Pure function: SIFPAGES.build(facts, data) -> [{slug, code, title, description, html, name}]
   Used by the browser (WordPress publisher) and by node tests. */
(function (root) {
  var BASE = 'https://investingtfd.com/sif-tracker/';
  var AMC = {qsif:'Quant Mutual Fund',Altiva:'Edelweiss Mutual Fund',Magnum:'SBI Mutual Fund',Diviniti:'ITI Mutual Fund',Titanium:'Tata Mutual Fund',Arudha:'Bandhan Mutual Fund',iSIF:'ICICI Prudential Mutual Fund',DynaSIF:'360 ONE Mutual Fund',Apex:'Aditya Birla Sun Life Mutual Fund',Sapphire:'Franklin Templeton Mutual Fund',WSIF:'The Wealth Company Mutual Fund',Arthaya:'Union Mutual Fund',Platinum:'Mirae Asset Mutual Fund',RedHex:'HSBC Mutual Fund',Infinity:'Kotak Mutual Fund',Prism:'Jio BlackRock Mutual Fund',Summit:'Invesco Mutual Fund'};
  var MON = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  function e(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function slugify(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')}
  function D(iso){var p=iso.split('-');return Date.UTC(+p[0],+p[1]-1,+p[2])}
  function fd(iso,short){var p=iso.split('-');var m=MON[+p[1]-1];return (+p[2])+' '+(short?m.slice(0,3):m)+' '+p[0]}
  function pct(x,nd,sign){nd=nd==null?2:nd;var s=x.toFixed(nd)+'%';return (sign===false||x<0)?s:'+'+s}
  function num(x,nd){return x.toLocaleString('en-US',{minimumFractionDigits:nd,maximumFractionDigits:nd})}
  function catLabel(c){c=c.replace('Open Ended Schemes','').replace('Interval Fund Schemes','');var m=c.match(/-\s*(.*?)\s*\)/);var s=m?m[1]:c;return s.replace('Long-Short Fund','').replace('Long Short Fund','').replace(/^[\s-]+|[\s-]+$/g,'')}
  function an(w){return /^[aeiou]/i.test(w)?'an':'a'}
  function ret(ser,days){var last=ser[ser.length-1];var t=D(last.date)-days*864e5;var base=null;for(var i=0;i<ser.length;i++){if(D(ser[i].date)<=t)base=ser[i]}return base?(last.nav/base.nav-1)*100:null}
  function build(F, DATA){
    var SCH={};DATA.schemes.forEach(function(s){SCH[s.scheme_code]=s});
    var meta={},codes=Object.keys(SCH).filter(function(c){return F[c]&&F[c].name});
    codes.forEach(function(c){var s=SCH[c],f=F[c];var brand=s.provider.replace(' SIF','').replace('SUMMIT','Summit');meta[c]={code:c,name:f.name,slug:slugify(f.name),brand:brand,amc:AMC[brand]||brand,cat:catLabel(s.category)}});
    var out=[];
    codes.forEach(function(c){
      var m=meta[c],s=SCH[c],f=F[c];
      var ser=s.series.slice().sort(function(a,b){return a.date<b.date?-1:1});
      var last=ser[ser.length-1],first=ser[0],nav=last.nav,navD=last.date;
      var sl=(nav/first.nav-1)*100,days=Math.round((D(navD)-D(first.date))/864e5);
      var r1=ret(ser,30),r3=ret(ser,91),r6=ret(ser,182);
      var ut,un=0;
      if(f.unhedged_pending){ut='Unhedged derivative positions: available soon. The fund discloses its derivatives, and we are still reading the long and short sides.'}
      else{un=f.unhedged_count||0;
        if(!un)ut='No unhedged derivative positions in the latest portfolio: any futures or options the fund holds are matched by a share position, or it holds none.';
        else{var b=[];if(f.unhedged_long!=null)b.push('long '+f.unhedged_long.toFixed(2)+'%');if(f.unhedged_short!=null)b.push('short '+f.unhedged_short.toFixed(2)+'%');ut=un+' derivative positions are not matched by a share holding ('+b.join(', ')+' of net assets).'}}
      var rb=f.risk_band,asof=f.as_of,size=f.net_assets_cr;
      var title=m.name+': NAV, returns and unhedged exposure';if(title.length>62)title=m.name+': NAV, returns, unhedged exposure';if(title.length>62)title=m.name+': NAV and unhedged exposure';
      var d0=m.name+' by '+m.amc+': NAV '+nav.toFixed(4)+' on '+fd(navD,1)+', '+pct(sl,1)+' since launch';
      var d1=(size?', fund size Rs '+num(size,0)+' crore':'')+(rb?', risk band '+rb+' of 5':'');
      var tails=[d0+d1+'. Unhedged exposure and holdings.',d0+d1+'. Unhedged exposure.',d0+'. Unhedged exposure and holdings.',d0+'.'];
      var desc=tails.filter(function(t){return t.length<=158})[0]||tails[3].slice(0,157);
      var rows=[['Fund house',m.amc],['Brand',m.brand+' SIF'],['Strategy',m.cat+' long-short'],['Plan shown','Regular, Growth'],['Launched',fd(first.date)],['NAV on '+fd(navD,1),'Rs '+nav.toFixed(4)]];
      if(size)rows.push(['Fund size ('+fd(asof,1)+')','Rs '+num(size,2)+' crore']);
      if(f.benchmark)rows.push(['Benchmark',f.benchmark]);
      if(rb)rows.push(['Risk band (fund house)',rb+' of 5']);
      if(f.holdings_count)rows.push(['Holdings',String(f.holdings_count)]);
      if(f.turnover_ratio!=null)rows.push(['Portfolio turnover',f.turnover_ratio+'x']);
      rows.push(['Minimum investment','Rs 10 lakh per investor per fund house (SIF rule)']);
      var facts=rows.map(function(r){return '<tr><th>'+e(r[0])+'</th><td>'+e(r[1])+'</td></tr>'}).join('');
      var rr=[['1 month',r1],['3 months',r3],['6 months',r6],['Since launch ('+days+' days)',sl]];
      var rets=rr.filter(function(r){return r[1]!=null}).map(function(r){return '<tr><th>'+r[0]+'</th><td>'+pct(r[1])+'</td></tr>'}).join('');
      var T=function(h,body){return '<table class="tfdf-t"><thead><tr>'+h.map(function(x){return '<th>'+x+'</th>'}).join('')+'</tr></thead><tbody>'+body+'</tbody></table>'};
      var alloc=f.split&&f.split.length?'<h2>How the money is invested</h2><table class="tfdf-t"><tbody>'+f.split.map(function(x){return '<tr><th>'+e(x[0])+'</th><td>'+x[1].toFixed(2)+'%</td></tr>'}).join('')+'</tbody></table>':'';
      var unh='<h2>Unhedged derivatives</h2><p>'+e(ut)+'</p>';
      if(f.unhedged&&f.unhedged.length){unh+=T(['Position','Sector','% of net assets'],f.unhedged.map(function(x){return '<tr><td>'+e(x[0])+'</td><td>'+e(x[1])+'</td><td>'+(x[2]>=0?'+':'')+x[2].toFixed(2)+'%</td></tr>'}).join(''));if(f.unhedged_note)unh+='<p class="tfdf-n">'+e(f.unhedged_note)+'</p>'}
      var eq=f.top_equity&&f.top_equity.length?'<h2>Top equity holdings</h2>'+T(['Company','Sector','% of net assets'],f.top_equity.map(function(x){return '<tr><td>'+e(x[0])+'</td><td>'+e(x[1])+'</td><td>'+x[2].toFixed(2)+'%</td></tr>'}).join('')):'';
      var de=f.top_debt&&f.top_debt.length?'<h2>Top debt holdings</h2>'+T(['Security','Rating','% of net assets'],f.top_debt.map(function(x){return '<tr><td>'+e(x[0])+'</td><td>'+e(x[1])+'</td><td>'+x[2].toFixed(2)+'%</td></tr>'}).join('')):'';
      var sec=f.sectors&&f.sectors.length?'<h2>Sector mix</h2><p>'+e(f.sectors.map(function(x){return x[0]+' '+x[1].toFixed(1)+'%'}).join(', '))+'.</p>':'';
      var all=Object.keys(meta).map(function(k){return meta[k]});
      var sameAmc=all.filter(function(x){return x.brand===m.brand&&x.code!==c}),sameCat=all.filter(function(x){return x.cat===m.cat&&x.brand!==m.brand}).slice(0,5);
      var li=function(x){return '<li><a href="'+BASE+x.slug+'/">'+e(x.name)+'</a></li>'};
      var rel=(sameAmc.length?'<h3>Other '+e(m.brand)+' SIF funds</h3><ul>'+sameAmc.map(li).join('')+'</ul>':'')+(sameCat.length?'<h3>Other '+e(m.cat.toLowerCase())+' long-short funds</h3><ul>'+sameCat.map(li).join('')+'</ul>':'');
      var faq=[
        ['What is '+m.name+'?',m.name+' is a Specialised Investment Fund (SIF) from '+m.amc+'. It follows '+an(m.cat)+' '+m.cat.toLowerCase()+' long-short strategy, which means it can hold shares it expects to rise and take short positions through derivatives. It launched on '+fd(first.date)+'.'],
        ['What is the minimum investment?','SIFs need at least Rs 10 lakh per investor per fund house, across that fund house\'s SIF strategies. Check the scheme\'s offer documents for any further rules.'],
        ['How has '+m.name+' performed?','On '+fd(navD)+' the NAV was Rs '+nav.toFixed(4)+', a change of '+pct(sl)+' since launch '+days+' days earlier. This is a short record, so it says little about how the fund behaves over a full market cycle. Past returns do not predict future returns.'],
        ['Does the fund hold unhedged derivatives?',ut],
        ['Where does this data come from?','NAV comes from AMFI. Portfolio data comes from the fund house\'s monthly disclosure for '+fd(asof)+(f.source?' ('+f.source+')':'')+'. We check it daily and note the date on every figure.']];
      var faqH='<h2>Frequently asked questions</h2>'+faq.map(function(q){return '<h3>'+e(q[0])+'</h3><p>'+e(q[1])+'</p>'}).join('');
      var ld=[{'@context':'https://schema.org','@type':'FAQPage',mainEntity:faq.map(function(q){return {'@type':'Question',name:q[0],acceptedAnswer:{'@type':'Answer',text:q[1]}}})},
        {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Investing TFD',item:'https://investingtfd.com/'},{'@type':'ListItem',position:2,name:'SIF Tracker',item:BASE},{'@type':'ListItem',position:3,name:m.name,item:BASE+m.slug+'/'}]}];
      var ldH=ld.map(function(x){return '<script type="application/ld+json">'+JSON.stringify(x).replace(/</g,'\\u003c').replace(/&/g,'\\u0026')+'</script>'}).join('');
      var lead=m.name+' is '+an(m.cat)+' '+m.cat.toLowerCase()+' long-short Specialised Investment Fund from '+m.amc+'. Its NAV was Rs '+nav.toFixed(4)+' on '+fd(navD)+', '+pct(sl)+' since it launched on '+fd(first.date)+'. '+ut;
      var css='<style>.tfdf{max-width:880px;margin:0 auto;font-size:17px;line-height:1.6}.tfdf h1{font-size:2rem;line-height:1.2;margin:.2em 0 .4em}.tfdf h2{font-size:1.35rem;margin:1.8em 0 .5em}.tfdf h3{font-size:1.05rem;margin:1.2em 0 .3em}.tfdf-t{width:100%;border-collapse:collapse;margin:.5em 0 1em;font-size:.95rem}.tfdf-t th,.tfdf-t td{padding:.5em .6em;border-bottom:1px solid #e3e3df;text-align:left;vertical-align:top}.tfdf-t td:last-child{text-align:right;font-variant-numeric:tabular-nums}.tfdf-t th{font-weight:600;color:#33403a}.tfdf-n,.tfdf-d{font-size:.88rem;color:#5b6660}.tfdf-b{display:flex;gap:.8rem;flex-wrap:wrap;margin:1.2em 0}.tfdf-b a{background:#0f6e56;color:#fff;padding:.55em 1em;border-radius:999px;text-decoration:none;font-weight:600;font-size:.95rem}.tfdf-b a.o{background:#fff;color:#0f6e56;border:1px solid #0f6e56}.tfdf nav{font-size:.9rem}</style>';
      var html=css+'<div class="tfdf"><nav><a href="https://investingtfd.com/">Investing TFD</a> / <a href="'+BASE+'">SIF Tracker</a> / '+e(m.name)+'</nav><h1>'+e(m.name)+': NAV, returns, unhedged exposure and holdings</h1><p>'+e(lead)+'</p><div class="tfdf-b"><a href="'+BASE+'#fund/'+c+'">See the live chart</a><a class="o" href="'+BASE+'">All SIFs</a></div><h2>Key facts</h2><table class="tfdf-t"><tbody>'+facts+'</tbody></table><h2>Returns</h2><table class="tfdf-t"><tbody>'+rets+'</tbody></table><p class="tfdf-n">Returns are absolute and measured on the Regular plan growth NAV from AMFI up to '+fd(navD)+'. The fund is '+days+' days old, so annualising would mislead.</p>'+alloc+unh+eq+de+sec+faqH+'<h2>Compare and explore</h2>'+rel+'<p class="tfdf-d">Data as of '+fd(asof)+' (portfolio) and '+fd(navD)+' (NAV). Sources: AMFI and '+e(m.amc)+' monthly disclosures. This page is information, not advice, and no return is promised. Ashish Jain, AMFI-registered mutual fund distributor, ARN-294841. Mutual fund investments are subject to market risks; read all scheme related documents carefully.</p></div>'+ldH;
      out.push({slug:m.slug,code:c,title:title,description:desc,html:html,name:m.name});
    });
    return out;
  }
  root.SIFPAGES={build:build,BASE:BASE};
  if(typeof module!=='undefined')module.exports=root.SIFPAGES;
})(typeof window!=='undefined'?window:globalThis);
