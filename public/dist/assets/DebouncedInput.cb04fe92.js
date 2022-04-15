import{m as Lt,k as _t,f as gt,d as ht,h as Dt,r as vt,o as Ut,B as Ft,g as kt,u as zt}from"./vendor.20269374.js";function De(e,t){return gt(),Lt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[_t("path",{"fill-rule":"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})])}var Vt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},mt={},T={};let rt;const $t=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];T.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};T.getSymbolTotalCodewords=function(t){return $t[t]};T.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};T.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');rt=t};T.isKanjiModeEnabled=function(){return typeof rt!="undefined"};T.toSJIS=function(t){return rt(t)};var O={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(o){return o&&typeof o.bit!="undefined"&&o.bit>=0&&o.bit<4},e.from=function(o,n){if(e.isValid(o))return o;try{return t(o)}catch{return n}}})(O);function wt(){this.buffer=[],this.length=0}wt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Ht=wt;function V(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}V.prototype.set=function(e,t,i,o){const n=e*this.size+t;this.data[n]=i,o&&(this.reservedBit[n]=!0)};V.prototype.get=function(e,t){return this.data[e*this.size+t]};V.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};V.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Kt=V,yt={};(function(e){const t=T.getSymbolSize;e.getRowColCoords=function(o){if(o===1)return[];const n=Math.floor(o/7)+2,r=t(o),s=r===145?26:Math.ceil((r-13)/(2*n-2))*2,a=[r-7];for(let u=1;u<n-1;u++)a[u]=a[u-1]-s;return a.push(6),a.reverse()},e.getPositions=function(o){const n=[],r=e.getRowColCoords(o),s=r.length;for(let a=0;a<s;a++)for(let u=0;u<s;u++)a===0&&u===0||a===0&&u===s-1||a===s-1&&u===0||n.push([r[a],r[u]]);return n}})(yt);var Et={};const Jt=T.getSymbolSize,at=7;Et.getPositions=function(t){const i=Jt(t);return[[0,0],[i-at,0],[0,i-at]]};var Ct={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7},e.from=function(n){return e.isValid(n)?parseInt(n,10):void 0},e.getPenaltyN1=function(n){const r=n.size;let s=0,a=0,u=0,c=null,l=null;for(let p=0;p<r;p++){a=u=0,c=l=null;for(let m=0;m<r;m++){let f=n.get(p,m);f===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=f,a=1),f=n.get(m,p),f===l?u++:(u>=5&&(s+=t.N1+(u-5)),l=f,u=1)}a>=5&&(s+=t.N1+(a-5)),u>=5&&(s+=t.N1+(u-5))}return s},e.getPenaltyN2=function(n){const r=n.size;let s=0;for(let a=0;a<r-1;a++)for(let u=0;u<r-1;u++){const c=n.get(a,u)+n.get(a,u+1)+n.get(a+1,u)+n.get(a+1,u+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(n){const r=n.size;let s=0,a=0,u=0;for(let c=0;c<r;c++){a=u=0;for(let l=0;l<r;l++)a=a<<1&2047|n.get(c,l),l>=10&&(a===1488||a===93)&&s++,u=u<<1&2047|n.get(l,c),l>=10&&(u===1488||u===93)&&s++}return s*t.N3},e.getPenaltyN4=function(n){let r=0;const s=n.data.length;for(let u=0;u<s;u++)r+=n.data[u];return Math.abs(Math.ceil(r*100/s/5)-10)*t.N4};function i(o,n,r){switch(o){case e.Patterns.PATTERN000:return(n+r)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return r%3===0;case e.Patterns.PATTERN011:return(n+r)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2===0;case e.Patterns.PATTERN101:return n*r%2+n*r%3===0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2===0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}e.applyMask=function(n,r){const s=r.size;for(let a=0;a<s;a++)for(let u=0;u<s;u++)r.isReserved(u,a)||r.xor(u,a,i(n,u,a))},e.getBestMask=function(n,r){const s=Object.keys(e.Patterns).length;let a=0,u=1/0;for(let c=0;c<s;c++){r(c),e.applyMask(c,n);const l=e.getPenaltyN1(n)+e.getPenaltyN2(n)+e.getPenaltyN3(n)+e.getPenaltyN4(n);e.applyMask(c,n),l<u&&(u=l,a=c)}return a}})(Ct);var Y={};const R=O,$=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],H=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Y.getBlocksCount=function(t,i){switch(i){case R.L:return $[(t-1)*4+0];case R.M:return $[(t-1)*4+1];case R.Q:return $[(t-1)*4+2];case R.H:return $[(t-1)*4+3];default:return}};Y.getTotalCodewordsCount=function(t,i){switch(i){case R.L:return H[(t-1)*4+0];case R.M:return H[(t-1)*4+1];case R.Q:return H[(t-1)*4+2];case R.H:return H[(t-1)*4+3];default:return}};var pt={},j={};const k=new Uint8Array(512),K=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)k[i]=t,K[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)k[i]=k[i-255]})();j.log=function(t){if(t<1)throw new Error("log("+t+")");return K[t]};j.exp=function(t){return k[t]};j.mul=function(t,i){return t===0||i===0?0:k[K[t]+K[i]]};(function(e){const t=j;e.mul=function(o,n){const r=new Uint8Array(o.length+n.length-1);for(let s=0;s<o.length;s++)for(let a=0;a<n.length;a++)r[s+a]^=t.mul(o[s],n[a]);return r},e.mod=function(o,n){let r=new Uint8Array(o);for(;r.length-n.length>=0;){const s=r[0];for(let u=0;u<n.length;u++)r[u]^=t.mul(n[u],s);let a=0;for(;a<r.length&&r[a]===0;)a++;r=r.slice(a)}return r},e.generateECPolynomial=function(o){let n=new Uint8Array([1]);for(let r=0;r<o;r++)n=e.mul(n,new Uint8Array([1,t.exp(r)]));return n}})(pt);const Bt=pt;function ot(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}ot.prototype.initialize=function(t){this.degree=t,this.genPoly=Bt.generateECPolynomial(this.degree)};ot.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const o=Bt.mod(i,this.genPoly),n=this.degree-o.length;if(n>0){const r=new Uint8Array(this.degree);return r.set(o,n),r}return o};var Ot=ot,At={},L={},it={};it.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var M={};const Nt="[0-9]+",Yt="[A-Z $%*+\\-./:]+";let z="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";z=z.replace(/u/g,"\\u");const jt="(?:(?![A-Z0-9 $%*+\\-./:]|"+z+`)(?:.|[\r
]))+`;M.KANJI=new RegExp(z,"g");M.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");M.BYTE=new RegExp(jt,"g");M.NUMERIC=new RegExp(Nt,"g");M.ALPHANUMERIC=new RegExp(Yt,"g");const Gt=new RegExp("^"+z+"$"),Qt=new RegExp("^"+Nt+"$"),qt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");M.testKanji=function(t){return Gt.test(t)};M.testNumeric=function(t){return Qt.test(t)};M.testAlphanumeric=function(t){return qt.test(t)};(function(e){const t=it,i=M;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(r,s){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?r.ccBits[0]:s<27?r.ccBits[1]:r.ccBits[2]},e.getBestModeForData=function(r){return i.testNumeric(r)?e.NUMERIC:i.testAlphanumeric(r)?e.ALPHANUMERIC:i.testKanji(r)?e.KANJI:e.BYTE},e.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},e.isValid=function(r){return r&&r.bit&&r.ccBits};function o(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+n)}}e.from=function(r,s){if(e.isValid(r))return r;try{return o(r)}catch{return s}}})(L);(function(e){const t=T,i=Y,o=O,n=L,r=it,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,a=t.getBCHDigit(s);function u(m,f,w){for(let y=1;y<=40;y++)if(f<=e.getCapacity(y,w,m))return y}function c(m,f){return n.getCharCountIndicator(m,f)+4}function l(m,f){let w=0;return m.forEach(function(y){w+=c(y.mode,f)+y.getBitsLength()}),w}function p(m,f){for(let w=1;w<=40;w++)if(l(m,w)<=e.getCapacity(w,f,n.MIXED))return w}e.from=function(f,w){return r.isValid(f)?parseInt(f,10):w},e.getCapacity=function(f,w,y){if(!r.isValid(f))throw new Error("Invalid QR Code version");typeof y=="undefined"&&(y=n.BYTE);const N=t.getSymbolTotalCodewords(f),h=i.getTotalCodewordsCount(f,w),E=(N-h)*8;if(y===n.MIXED)return E;const g=E-c(y,f);switch(y){case n.NUMERIC:return Math.floor(g/10*3);case n.ALPHANUMERIC:return Math.floor(g/11*2);case n.KANJI:return Math.floor(g/13);case n.BYTE:default:return Math.floor(g/8)}},e.getBestVersionForData=function(f,w){let y;const N=o.from(w,o.M);if(Array.isArray(f)){if(f.length>1)return p(f,N);if(f.length===0)return 1;y=f[0]}else y=f;return u(y.mode,y.getLength(),N)},e.getEncodedBits=function(f){if(!r.isValid(f)||f<7)throw new Error("Invalid QR Code version");let w=f<<12;for(;t.getBCHDigit(w)-a>=0;)w^=s<<t.getBCHDigit(w)-a;return f<<12|w}})(At);var Tt={};const tt=T,bt=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,Wt=1<<14|1<<12|1<<10|1<<4|1<<1,ct=tt.getBCHDigit(bt);Tt.getEncodedBits=function(t,i){const o=t.bit<<3|i;let n=o<<10;for(;tt.getBCHDigit(n)-ct>=0;)n^=bt<<tt.getBCHDigit(n)-ct;return(o<<10|n)^Wt};var It={};const Zt=L;function _(e){this.mode=Zt.NUMERIC,this.data=e.toString()}_.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};_.prototype.getLength=function(){return this.data.length};_.prototype.getBitsLength=function(){return _.getBitsLength(this.data.length)};_.prototype.write=function(t){let i,o,n;for(i=0;i+3<=this.data.length;i+=3)o=this.data.substr(i,3),n=parseInt(o,10),t.put(n,10);const r=this.data.length-i;r>0&&(o=this.data.substr(i),n=parseInt(o,10),t.put(n,r*3+1))};var Xt=_;const xt=L,q=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function D(e){this.mode=xt.ALPHANUMERIC,this.data=e}D.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let o=q.indexOf(this.data[i])*45;o+=q.indexOf(this.data[i+1]),t.put(o,11)}this.data.length%2&&t.put(q.indexOf(this.data[i]),6)};var te=D,ee=function(t){for(var i=[],o=t.length,n=0;n<o;n++){var r=t.charCodeAt(n);if(r>=55296&&r<=56319&&o>n+1){var s=t.charCodeAt(n+1);s>=56320&&s<=57343&&(r=(r-55296)*1024+s-56320+65536,n+=1)}if(r<128){i.push(r);continue}if(r<2048){i.push(r>>6|192),i.push(r&63|128);continue}if(r<55296||r>=57344&&r<65536){i.push(r>>12|224),i.push(r>>6&63|128),i.push(r&63|128);continue}if(r>=65536&&r<=1114111){i.push(r>>18|240),i.push(r>>12&63|128),i.push(r>>6&63|128),i.push(r&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const ne=ee,re=L;function v(e){this.mode=re.BYTE,this.data=new Uint8Array(ne(e))}v.getBitsLength=function(t){return t*8};v.prototype.getLength=function(){return this.data.length};v.prototype.getBitsLength=function(){return v.getBitsLength(this.data.length)};v.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var oe=v;const ie=L,se=T;function U(e){this.mode=ie.KANJI,this.data=e}U.getBitsLength=function(t){return t*13};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=se.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var ue=U,Mt={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,o,n){var r={},s={};s[o]=0;var a=t.PriorityQueue.make();a.push(o,0);for(var u,c,l,p,m,f,w,y,N;!a.empty();){u=a.pop(),c=u.value,p=u.cost,m=i[c]||{};for(l in m)m.hasOwnProperty(l)&&(f=m[l],w=p+f,y=s[l],N=typeof s[l]=="undefined",(N||y>w)&&(s[l]=w,a.push(l,w),r[l]=c))}if(typeof n!="undefined"&&typeof s[n]=="undefined"){var h=["Could not find a path from ",o," to ",n,"."].join("");throw new Error(h)}return r},extract_shortest_path_from_predecessor_list:function(i,o){for(var n=[],r=o;r;)n.push(r),r=i[r];return n.reverse(),n},find_path:function(i,o,n){var r=t.single_source_shortest_paths(i,o,n);return t.extract_shortest_path_from_predecessor_list(r,n)},PriorityQueue:{make:function(i){var o=t.PriorityQueue,n={},r;i=i||{};for(r in o)o.hasOwnProperty(r)&&(n[r]=o[r]);return n.queue=[],n.sorter=i.sorter||o.default_sorter,n},default_sorter:function(i,o){return i.cost-o.cost},push:function(i,o){var n={value:i,cost:o};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Mt);(function(e){const t=L,i=Xt,o=te,n=oe,r=ue,s=M,a=T,u=Mt.exports;function c(h){return unescape(encodeURIComponent(h)).length}function l(h,E,g){const d=[];let C;for(;(C=h.exec(g))!==null;)d.push({data:C[0],index:C.index,mode:E,length:C[0].length});return d}function p(h){const E=l(s.NUMERIC,t.NUMERIC,h),g=l(s.ALPHANUMERIC,t.ALPHANUMERIC,h);let d,C;return a.isKanjiModeEnabled()?(d=l(s.BYTE,t.BYTE,h),C=l(s.KANJI,t.KANJI,h)):(d=l(s.BYTE_KANJI,t.BYTE,h),C=[]),E.concat(g,d,C).sort(function(A,b){return A.index-b.index}).map(function(A){return{data:A.data,mode:A.mode,length:A.length}})}function m(h,E){switch(E){case t.NUMERIC:return i.getBitsLength(h);case t.ALPHANUMERIC:return o.getBitsLength(h);case t.KANJI:return r.getBitsLength(h);case t.BYTE:return n.getBitsLength(h)}}function f(h){return h.reduce(function(E,g){const d=E.length-1>=0?E[E.length-1]:null;return d&&d.mode===g.mode?(E[E.length-1].data+=g.data,E):(E.push(g),E)},[])}function w(h){const E=[];for(let g=0;g<h.length;g++){const d=h[g];switch(d.mode){case t.NUMERIC:E.push([d,{data:d.data,mode:t.ALPHANUMERIC,length:d.length},{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.ALPHANUMERIC:E.push([d,{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.KANJI:E.push([d,{data:d.data,mode:t.BYTE,length:c(d.data)}]);break;case t.BYTE:E.push([{data:d.data,mode:t.BYTE,length:c(d.data)}])}}return E}function y(h,E){const g={},d={start:{}};let C=["start"];for(let B=0;B<h.length;B++){const A=h[B],b=[];for(let P=0;P<A.length;P++){const I=A[P],F=""+B+P;b.push(F),g[F]={node:I,lastCount:0},d[F]={};for(let Q=0;Q<C.length;Q++){const S=C[Q];g[S]&&g[S].node.mode===I.mode?(d[S][F]=m(g[S].lastCount+I.length,I.mode)-m(g[S].lastCount,I.mode),g[S].lastCount+=I.length):(g[S]&&(g[S].lastCount=I.length),d[S][F]=m(I.length,I.mode)+4+t.getCharCountIndicator(I.mode,E))}}C=b}for(let B=0;B<C.length;B++)d[C[B]].end=0;return{map:d,table:g}}function N(h,E){let g;const d=t.getBestModeForData(h);if(g=t.from(E,d),g!==t.BYTE&&g.bit<d.bit)throw new Error('"'+h+'" cannot be encoded with mode '+t.toString(g)+`.
 Suggested mode is: `+t.toString(d));switch(g===t.KANJI&&!a.isKanjiModeEnabled()&&(g=t.BYTE),g){case t.NUMERIC:return new i(h);case t.ALPHANUMERIC:return new o(h);case t.KANJI:return new r(h);case t.BYTE:return new n(h)}}e.fromArray=function(E){return E.reduce(function(g,d){return typeof d=="string"?g.push(N(d,null)):d.data&&g.push(N(d.data,d.mode)),g},[])},e.fromString=function(E,g){const d=p(E,a.isKanjiModeEnabled()),C=w(d),B=y(C,g),A=u.find_path(B.map,"start","end"),b=[];for(let P=1;P<A.length-1;P++)b.push(B.table[A[P]].node);return e.fromArray(f(b))},e.rawSplit=function(E){return e.fromArray(p(E,a.isKanjiModeEnabled()))}})(It);const G=T,W=O,ae=Ht,ce=Kt,le=yt,fe=Et,et=Ct,nt=Y,de=Ot,J=At,ge=Tt,he=L,Z=It;function me(e,t){const i=e.size,o=fe.getPositions(t);for(let n=0;n<o.length;n++){const r=o[n][0],s=o[n][1];for(let a=-1;a<=7;a++)if(!(r+a<=-1||i<=r+a))for(let u=-1;u<=7;u++)s+u<=-1||i<=s+u||(a>=0&&a<=6&&(u===0||u===6)||u>=0&&u<=6&&(a===0||a===6)||a>=2&&a<=4&&u>=2&&u<=4?e.set(r+a,s+u,!0,!0):e.set(r+a,s+u,!1,!0))}}function we(e){const t=e.size;for(let i=8;i<t-8;i++){const o=i%2===0;e.set(i,6,o,!0),e.set(6,i,o,!0)}}function ye(e,t){const i=le.getPositions(t);for(let o=0;o<i.length;o++){const n=i[o][0],r=i[o][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(n+s,r+a,!0,!0):e.set(n+s,r+a,!1,!0)}}function Ee(e,t){const i=e.size,o=J.getEncodedBits(t);let n,r,s;for(let a=0;a<18;a++)n=Math.floor(a/3),r=a%3+i-8-3,s=(o>>a&1)===1,e.set(n,r,s,!0),e.set(r,n,s,!0)}function X(e,t,i){const o=e.size,n=ge.getEncodedBits(t,i);let r,s;for(r=0;r<15;r++)s=(n>>r&1)===1,r<6?e.set(r,8,s,!0):r<8?e.set(r+1,8,s,!0):e.set(o-15+r,8,s,!0),r<8?e.set(8,o-r-1,s,!0):r<9?e.set(8,15-r-1+1,s,!0):e.set(8,15-r-1,s,!0);e.set(o-8,8,1,!0)}function Ce(e,t){const i=e.size;let o=-1,n=i-1,r=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let u=0;u<2;u++)if(!e.isReserved(n,a-u)){let c=!1;s<t.length&&(c=(t[s]>>>r&1)===1),e.set(n,a-u,c),r--,r===-1&&(s++,r=7)}if(n+=o,n<0||i<=n){n-=o,o=-o;break}}}function pe(e,t,i){const o=new ae;i.forEach(function(u){o.put(u.mode.bit,4),o.put(u.getLength(),he.getCharCountIndicator(u.mode,e)),u.write(o)});const n=G.getSymbolTotalCodewords(e),r=nt.getTotalCodewordsCount(e,t),s=(n-r)*8;for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(0);const a=(s-o.getLengthInBits())/8;for(let u=0;u<a;u++)o.put(u%2?17:236,8);return Be(o,e,t)}function Be(e,t,i){const o=G.getSymbolTotalCodewords(t),n=nt.getTotalCodewordsCount(t,i),r=o-n,s=nt.getBlocksCount(t,i),a=o%s,u=s-a,c=Math.floor(o/s),l=Math.floor(r/s),p=l+1,m=c-l,f=new de(m);let w=0;const y=new Array(s),N=new Array(s);let h=0;const E=new Uint8Array(e.buffer);for(let A=0;A<s;A++){const b=A<u?l:p;y[A]=E.slice(w,w+b),N[A]=f.encode(y[A]),w+=b,h=Math.max(h,b)}const g=new Uint8Array(o);let d=0,C,B;for(C=0;C<h;C++)for(B=0;B<s;B++)C<y[B].length&&(g[d++]=y[B][C]);for(C=0;C<m;C++)for(B=0;B<s;B++)g[d++]=N[B][C];return g}function Ae(e,t,i,o){let n;if(Array.isArray(e))n=Z.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const l=Z.rawSplit(e);c=J.getBestVersionForData(l,i)}n=Z.fromString(e,c||40)}else throw new Error("Invalid data");const r=J.getBestVersionForData(n,i);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=r;else if(t<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`);const s=pe(t,i,n),a=G.getSymbolSize(t),u=new ce(a);return me(u,t),we(u),ye(u,t),X(u,i,0),t>=7&&Ee(u,t),Ce(u,s),isNaN(o)&&(o=et.getBestMask(u,X.bind(null,u,i))),et.applyMask(o,u),X(u,i,o),{modules:u,version:t,errorCorrectionLevel:i,maskPattern:o,segments:n}}mt.create=function(t,i){if(typeof t=="undefined"||t==="")throw new Error("No input text");let o=W.M,n,r;return typeof i!="undefined"&&(o=W.from(i.errorCorrectionLevel,W.M),n=J.from(i.version),r=et.from(i.maskPattern),i.toSJISFunc&&G.setToSJISFunction(i.toSJISFunc)),Ae(t,n,o,r)};var St={},st={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let o=i.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+i);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(r){return[r,r]}))),o.length===6&&o.push("F","F");const n=parseInt(o.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:"#"+o.slice(0,6).join("")}}e.getOptions=function(o){o||(o={}),o.color||(o.color={});const n=typeof o.margin=="undefined"||o.margin===null||o.margin<0?4:o.margin,r=o.width&&o.width>=21?o.width:void 0,s=o.scale||4;return{width:r,scale:r?4:s,margin:n,color:{dark:t(o.color.dark||"#000000ff"),light:t(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},e.getScale=function(o,n){return n.width&&n.width>=o+n.margin*2?n.width/(o+n.margin*2):n.scale},e.getImageWidth=function(o,n){const r=e.getScale(o,n);return Math.floor((o+n.margin*2)*r)},e.qrToImageData=function(o,n,r){const s=n.modules.size,a=n.modules.data,u=e.getScale(s,r),c=Math.floor((s+r.margin*2)*u),l=r.margin*u,p=[r.color.light,r.color.dark];for(let m=0;m<c;m++)for(let f=0;f<c;f++){let w=(m*c+f)*4,y=r.color.light;if(m>=l&&f>=l&&m<c-l&&f<c-l){const N=Math.floor((m-l)/u),h=Math.floor((f-l)/u);y=p[a[N*s+h]?1:0]}o[w++]=y.r,o[w++]=y.g,o[w++]=y.b,o[w]=y.a}}})(st);(function(e){const t=st;function i(n,r,s){n.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=s,r.width=s,r.style.height=s+"px",r.style.width=s+"px"}function o(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(r,s,a){let u=a,c=s;typeof u=="undefined"&&(!s||!s.getContext)&&(u=s,s=void 0),s||(c=o()),u=t.getOptions(u);const l=t.getImageWidth(r.modules.size,u),p=c.getContext("2d"),m=p.createImageData(l,l);return t.qrToImageData(m.data,r,u),i(p,c,l),p.putImageData(m,0,0),c},e.renderToDataURL=function(r,s,a){let u=a;typeof u=="undefined"&&(!s||!s.getContext)&&(u=s,s=void 0),u||(u={});const c=e.render(r,s,u),l=u.type||"image/png",p=u.rendererOpts||{};return c.toDataURL(l,p.quality)}})(St);var Pt={};const Ne=st;function lt(e,t){const i=e.a/255,o=t+'="'+e.hex+'"';return i<1?o+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':o}function x(e,t,i){let o=e+t;return typeof i!="undefined"&&(o+=" "+i),o}function Te(e,t,i){let o="",n=0,r=!1,s=0;for(let a=0;a<e.length;a++){const u=Math.floor(a%t),c=Math.floor(a/t);!u&&!r&&(r=!0),e[a]?(s++,a>0&&u>0&&e[a-1]||(o+=r?x("M",u+i,.5+c+i):x("m",n,0),n=0,r=!1),u+1<t&&e[a+1]||(o+=x("h",s),s=0)):n++}return o}Pt.render=function(t,i,o){const n=Ne.getOptions(i),r=t.modules.size,s=t.modules.data,a=r+n.margin*2,u=n.color.light.a?"<path "+lt(n.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+lt(n.color.dark,"stroke")+' d="'+Te(s,r,n.margin)+'"/>',l='viewBox="0 0 '+a+" "+a+'"',p=n.width?'width="'+n.width+'" height="'+n.width+'" ':"",m='<svg xmlns="http://www.w3.org/2000/svg" '+p+l+' shape-rendering="crispEdges">'+u+c+`</svg>
`;return typeof o=="function"&&o(null,m),m};const be=Vt,ft=mt,Rt=St,Ie=Pt;function ut(e,t,i,o,n){const r=[].slice.call(arguments,1),s=r.length,a=typeof r[s-1]=="function";if(!a&&!be())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(n=i,i=t,t=o=void 0):s===3&&(t.getContext&&typeof n=="undefined"?(n=o,o=void 0):(n=o,o=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=o=void 0):s===2&&!t.getContext&&(o=i,i=t,t=void 0),new Promise(function(u,c){try{const l=ft.create(i,o);u(e(l,t,o))}catch(l){c(l)}})}try{const u=ft.create(i,o);n(null,e(u,t,o))}catch(u){n(u)}}var Me=ut.bind(null,Rt.render),Se=ut.bind(null,Rt.renderToDataURL),Pe=ut.bind(null,function(e,t,i){return Ie.render(e,i)});/*! vue-qrcode v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */const dt="ready";var ve=ht({name:"VueQrcode",props:{value:{type:String,default:void 0},options:{type:Object,default:void 0},tag:{type:String,default:"canvas"}},emits:[dt],watch:{$props:{deep:!0,immediate:!0,handler(){this.$el&&this.generate()}}},mounted(){this.generate()},methods:{generate(){const e=this.options||{},t=String(this.value),i=()=>{this.$emit(dt,this.$el)};switch(this.tag){case"canvas":Me(this.$el,t,e,o=>{if(o)throw o;i()});break;case"img":Se(t,e,(o,n)=>{if(o)throw o;this.$el.src=n,this.$el.onload=i});break;case"svg":Pe(t,e,(o,n)=>{if(o)throw o;const r=document.createElement("div");r.innerHTML=n;const s=r.querySelector("svg");if(s){const{attributes:a,childNodes:u}=s;Object.keys(a).forEach(c=>{const l=a[Number(c)];this.$el.setAttribute(l.name,l.value)}),Object.keys(u).forEach(c=>{const l=u[Number(c)];this.$el.appendChild(l.cloneNode(!0))}),i()}});break}}},render(){return Dt(this.tag,this.$slots.default)}});const Re=(e,t)=>{let i;const o=(...n)=>new Promise(r=>{i&&clearTimeout(i),i=setTimeout(()=>{r(e(...n))},t)});return o.cancel=()=>clearTimeout(i),o},Le=["value"],Ue=ht({props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:t}){const i=vt(null),o=Re(n=>{n&&t("update:modelValue",n.value)},600);return Ut(()=>{var n;((n=i.value)==null?void 0:n.hasAttribute("autofocus"))&&i.value.focus()}),Ft(()=>{o.cancel()}),(n,r)=>(gt(),kt("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-zinc-900",value:e.modelValue,onInput:r[0]||(r[0]=s=>zt(o)(s.target)),ref_key:"input",ref:i},null,40,Le))}});export{Ue as _,ve as i,De as r};
