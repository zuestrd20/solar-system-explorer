(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const oc={id:"sun",name:"太陽",en:"Sun",type:"恆星",color:"#ffbb52",diameterKm:14e5,meanRadiusKm:7e5,distanceAU:null,orbitDays:null,rotationDays:null,rotationDirection:"差速自轉",rotationNote:"不是固體：赤道附近約25個地球日自轉一圈，極區約36日。",tagline:"照亮太陽系的恆星",facts:["太陽是太陽系唯一的恆星，主要由氫和氦組成。","核心核融合釋放能量，提供光與熱。","太陽沒有固體表面；我們看到的明亮部分稱為光球。"],source:"https://science.nasa.gov/sun/facts/",sources:{type:"https://science.nasa.gov/sun/facts/",diameterKm:"https://science.nasa.gov/sun/facts/",meanRadiusKm:"https://science.nasa.gov/sun/facts/",rotationNote:"https://science.nasa.gov/sun/facts/",facts:"https://science.nasa.gov/sun/facts/"}},lc=[{id:"mercury",name:"水星",en:"Mercury",type:"岩石行星",color:"#b8a79b",diameterKm:4878.8,meanRadiusKm:2439.4,distanceAU:.387,orbitDays:87.97,orbitYears:.2408467,rotationDays:58.6462,rotationDirection:"順行",rotationNote:"相對恆星自轉一圈的週期；不是日出到下一次日出的太陽日。巨行星採JPL參考自轉值，各緯度雲層可有不同速度。",tagline:"最靠近太陽的小小岩石世界",facts:["八大行星中最小，也最靠近太陽。","表面布滿撞擊坑，外觀有點像月球。","自轉一圈約59個地球日；完整晝夜循環約176個地球日。"],source:"https://science.nasa.gov/mercury/facts/",sources:{type:"https://science.nasa.gov/mercury/facts/",diameterKm:"https://ssd.jpl.nasa.gov/planets/phys_par.html",meanRadiusKm:"https://ssd.jpl.nasa.gov/planets/phys_par.html",distanceAU:"https://ssd.jpl.nasa.gov/planets/approx_pos.html",orbitDays:"https://ssd.jpl.nasa.gov/planets/phys_par.html",orbitYears:"https://ssd.jpl.nasa.gov/planets/phys_par.html",rotationDays:"https://ssd.jpl.nasa.gov/planets/phys_par.html",rotationDirection:"https://ssd.jpl.nasa.gov/planets/phys_par.html",facts:["https://science.nasa.gov/mercury/facts/","https://science.nasa.gov/mercury/facts/","https://science.nasa.gov/mercury/facts/"]},rawSemiMajorAxisAU:.38709927},{id:"venus",name:"金星",en:"Venus",type:"岩石行星",color:"#e9bd7b",diameterKm:12103.6,meanRadiusKm:6051.8,distanceAU:.723,orbitDays:224.7,orbitYears:.61519726,rotationDays:243.018,rotationDirection:"逆行",rotationNote:"相對恆星自轉一圈的週期；不是日出到下一次日出的太陽日。巨行星採JPL參考自轉值，各緯度雲層可有不同速度。",tagline:"濃厚大氣下的熾熱世界",facts:["濃厚大氣造成強烈溫室效應，是太陽系最熱的行星。","大小和內部結構與地球相近。","自轉方向與地球相反，太陽會從西方升起。"],source:"https://science.nasa.gov/venus/venus-facts/",sources:{type:"https://science.nasa.gov/venus/venus-facts/",diameterKm:"https://ssd.jpl.nasa.gov/planets/phys_par.html",meanRadiusKm:"https://ssd.jpl.nasa.gov/planets/phys_par.html",distanceAU:"https://ssd.jpl.nasa.gov/planets/approx_pos.html",orbitDays:"https://ssd.jpl.nasa.gov/planets/phys_par.html",orbitYears:"https://ssd.jpl.nasa.gov/planets/phys_par.html",rotationDays:"https://ssd.jpl.nasa.gov/planets/phys_par.html",rotationDirection:"https://science.nasa.gov/venus/venus-facts/",facts:["https://science.nasa.gov/venus/venus-facts/","https://science.nasa.gov/venus/venus-facts/","https://science.nasa.gov/venus/venus-facts/"]},rawSemiMajorAxisAU:.72333566},{id:"earth",name:"地球",en:"Earth",type:"岩石行星",color:"#5cafe9",diameterKm:12742.02,meanRadiusKm:6371.0084,distanceAU:1,orbitDays:365.26,orbitYears:1.0000174,rotationDays:.99726968,rotationDirection:"順行",rotationNote:"相對恆星自轉一圈的週期；不是日出到下一次日出的太陽日。巨行星採JPL參考自轉值，各緯度雲層可有不同速度。",tagline:"液態海洋覆蓋的家園",facts:["八大行星中，地球是最大的岩石行星。","表面大部分被液態水覆蓋。","自轉軸傾斜使不同季節的日照角度改變。"],source:"https://science.nasa.gov/earth/facts/",sources:{type:"https://science.nasa.gov/earth/facts/",diameterKm:"https://ssd.jpl.nasa.gov/planets/phys_par.html",meanRadiusKm:"https://ssd.jpl.nasa.gov/planets/phys_par.html",distanceAU:"https://ssd.jpl.nasa.gov/planets/approx_pos.html",orbitDays:"https://ssd.jpl.nasa.gov/planets/phys_par.html",orbitYears:"https://ssd.jpl.nasa.gov/planets/phys_par.html",rotationDays:"https://ssd.jpl.nasa.gov/planets/phys_par.html",rotationDirection:"https://ssd.jpl.nasa.gov/planets/phys_par.html",facts:["https://science.nasa.gov/earth/facts/","https://science.nasa.gov/earth/facts/","https://science.nasa.gov/earth/facts/"]},rawSemiMajorAxisAU:1.00000261},{id:"mars",name:"火星",en:"Mars",type:"岩石行星",color:"#d66d4d",diameterKm:6779,meanRadiusKm:3389.5,distanceAU:1.524,orbitDays:686.98,orbitYears:1.8808476,rotationDays:1.02595676,rotationDirection:"順行",rotationNote:"相對恆星自轉一圈的週期；不是日出到下一次日出的太陽日。巨行星採JPL參考自轉值，各緯度雲層可有不同速度。",tagline:"留下古老水跡的紅色行星",facts:["土壤中的含鐵礦物氧化，使表面呈現紅色。","這裡有稀薄大氣、極地冰帽、峽谷和火山。","探測任務找到許多證據，顯示火星數十億年前更溫暖、更潮濕。"],source:"https://science.nasa.gov/mars/facts/",sources:{type:"https://science.nasa.gov/mars/facts/",diameterKm:"https://ssd.jpl.nasa.gov/planets/phys_par.html",meanRadiusKm:"https://ssd.jpl.nasa.gov/planets/phys_par.html",distanceAU:"https://ssd.jpl.nasa.gov/planets/approx_pos.html",orbitDays:"https://ssd.jpl.nasa.gov/planets/phys_par.html",orbitYears:"https://ssd.jpl.nasa.gov/planets/phys_par.html",rotationDays:"https://ssd.jpl.nasa.gov/planets/phys_par.html",rotationDirection:"https://ssd.jpl.nasa.gov/planets/phys_par.html",facts:["https://science.nasa.gov/mars/facts/","https://science.nasa.gov/mars/facts/","https://science.nasa.gov/mars/facts/"]},rawSemiMajorAxisAU:1.52371034},{id:"jupiter",name:"木星",en:"Jupiter",type:"氣體巨行星",color:"#d8ae80",diameterKm:139822,meanRadiusKm:69911,distanceAU:5.203,orbitDays:4332.82,orbitYears:11.862615,rotationDays:.41354,rotationDirection:"順行",rotationNote:"相對恆星自轉一圈的週期；不是日出到下一次日出的太陽日。巨行星採JPL參考自轉值，各緯度雲層可有不同速度。",tagline:"雲帶與巨型風暴的王國",facts:["木星是太陽系最大的行星。","大紅斑是一場巨型風暴。","約10小時自轉一圈，是八大行星中自轉最快的。"],source:"https://science.nasa.gov/jupiter/jupiter-facts/",sources:{type:"https://science.nasa.gov/jupiter/jupiter-facts/",diameterKm:"https://ssd.jpl.nasa.gov/planets/phys_par.html",meanRadiusKm:"https://ssd.jpl.nasa.gov/planets/phys_par.html",distanceAU:"https://ssd.jpl.nasa.gov/planets/approx_pos.html",orbitDays:"https://ssd.jpl.nasa.gov/planets/phys_par.html",orbitYears:"https://ssd.jpl.nasa.gov/planets/phys_par.html",rotationDays:"https://ssd.jpl.nasa.gov/planets/phys_par.html",rotationDirection:"https://ssd.jpl.nasa.gov/planets/phys_par.html",facts:["https://science.nasa.gov/jupiter/jupiter-facts/","https://science.nasa.gov/jupiter/jupiter-facts/","https://science.nasa.gov/jupiter/jupiter-facts/"]},rawSemiMajorAxisAU:5.202887},{id:"saturn",name:"土星",en:"Saturn",type:"氣體巨行星",color:"#e8cc91",diameterKm:116464,meanRadiusKm:58232,distanceAU:9.537,orbitDays:10755.7,orbitYears:29.447498,rotationDays:.44401,rotationDirection:"順行",rotationNote:"相對恆星自轉一圈的週期；不是日出到下一次日出的太陽日。巨行星採JPL參考自轉值，各緯度雲層可有不同速度。",tagline:"被壯觀光環環繞的巨行星",facts:["土星是太陽系第二大的行星。","土星擁有壯觀的環，但不是唯一有環的行星。","平均密度比水還低，主要成分是氫和氦。"],source:"https://science.nasa.gov/saturn/facts/",sources:{type:"https://science.nasa.gov/saturn/facts/",diameterKm:"https://ssd.jpl.nasa.gov/planets/phys_par.html",meanRadiusKm:"https://ssd.jpl.nasa.gov/planets/phys_par.html",distanceAU:"https://ssd.jpl.nasa.gov/planets/approx_pos.html",orbitDays:"https://ssd.jpl.nasa.gov/planets/phys_par.html",orbitYears:"https://ssd.jpl.nasa.gov/planets/phys_par.html",rotationDays:"https://ssd.jpl.nasa.gov/planets/phys_par.html",rotationDirection:"https://ssd.jpl.nasa.gov/planets/phys_par.html",facts:["https://science.nasa.gov/saturn/facts/","https://science.nasa.gov/saturn/facts/","https://science.nasa.gov/saturn/facts/"]},rawSemiMajorAxisAU:9.53667594},{id:"uranus",name:"天王星",en:"Uranus",type:"冰巨行星",color:"#92dadd",diameterKm:50724,meanRadiusKm:25362,distanceAU:19.189,orbitDays:30687.15,orbitYears:84.016846,rotationDays:.71833,rotationDirection:"逆行",rotationNote:"相對恆星自轉一圈的週期；不是日出到下一次日出的太陽日。巨行星採JPL參考自轉值，各緯度雲層可有不同速度。",tagline:"像側躺著滾動的冰巨行星",facts:["自轉軸傾角約98度，看起來像側躺著轉動。","大氣中的甲烷吸收紅光，讓它呈現藍綠色。","天王星與海王星同屬冰巨行星，內部並不是一整顆固態冰球。"],source:"https://science.nasa.gov/uranus/facts/",sources:{type:"https://science.nasa.gov/uranus/facts/",diameterKm:"https://ssd.jpl.nasa.gov/planets/phys_par.html",meanRadiusKm:"https://ssd.jpl.nasa.gov/planets/phys_par.html",distanceAU:"https://ssd.jpl.nasa.gov/planets/approx_pos.html",orbitDays:"https://ssd.jpl.nasa.gov/planets/phys_par.html",orbitYears:"https://ssd.jpl.nasa.gov/planets/phys_par.html",rotationDays:"https://ssd.jpl.nasa.gov/planets/phys_par.html",rotationDirection:"https://science.nasa.gov/uranus/facts/",facts:["https://science.nasa.gov/uranus/facts/","https://science.nasa.gov/uranus/facts/","https://science.nasa.gov/uranus/facts/"]},rawSemiMajorAxisAU:19.18916464},{id:"neptune",name:"海王星",en:"Neptune",type:"冰巨行星",color:"#568ada",diameterKm:49244,meanRadiusKm:24622,distanceAU:30.07,orbitDays:60190.03,orbitYears:164.79132,rotationDays:.67125,rotationDirection:"順行",rotationNote:"相對恆星自轉一圈的週期；不是日出到下一次日出的太陽日。巨行星採JPL參考自轉值，各緯度雲層可有不同速度。",tagline:"遙遠而多風的藍色世界",facts:["海王星是八大行星中離太陽最遠的。","大氣中有極強的風。","天文學家先用數學預測位置，再於1846年確認這顆行星。"],source:"https://science.nasa.gov/neptune/neptune-facts/",sources:{type:"https://science.nasa.gov/neptune/neptune-facts/",diameterKm:"https://ssd.jpl.nasa.gov/planets/phys_par.html",meanRadiusKm:"https://ssd.jpl.nasa.gov/planets/phys_par.html",distanceAU:"https://ssd.jpl.nasa.gov/planets/approx_pos.html",orbitDays:"https://ssd.jpl.nasa.gov/planets/phys_par.html",orbitYears:"https://ssd.jpl.nasa.gov/planets/phys_par.html",rotationDays:"https://ssd.jpl.nasa.gov/planets/phys_par.html",rotationDirection:"https://ssd.jpl.nasa.gov/planets/phys_par.html",facts:["https://science.nasa.gov/neptune/neptune-facts/","https://science.nasa.gov/neptune/neptune-facts/","https://science.nasa.gov/neptune/neptune-facts/"]},rawSemiMajorAxisAU:30.06992276}],cc={sun:oc,planets:lc},Is=Math.PI*2,Ur=[5.2,7.5,10,12.6,17,22,27,32],hc=[.37,.63,.67,.48,1.65,1.37,1.01,.98],uc=[.6,2.1,4.2,5.6,1.7,3.9,.2,5.1];function dc(i,t,e){const n=uc[i]+Is*t/e;return[Math.cos(n)*Ur[i],0,Math.sin(n)*Ur[i]]}function fc(i,t){return i/t}function ws(i){return new Intl.NumberFormat("zh-TW",{maximumFractionDigits:2}).format(i)}const Ra="180",mi={ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pc=0,Ja=1,mc=2,hl=1,_c=2,ln=3,wn=0,we=1,je=2,bn=0,_i=1,Ns=2,Qa=3,to=4,gc=5,Bn=100,vc=101,xc=102,Mc=103,Sc=104,yc=200,Ec=201,bc=202,Tc=203,Ir=204,Nr=205,Ac=206,wc=207,Rc=208,Cc=209,Pc=210,Dc=211,Lc=212,Uc=213,Ic=214,Fr=0,Or=1,Br=2,xi=3,zr=4,Hr=5,kr=6,Vr=7,ul=0,Nc=1,Fc=2,Tn=0,Oc=1,Bc=2,zc=3,dl=4,Hc=5,kc=6,Vc=7,fl=300,Mi=301,Si=302,Gr=303,Wr=304,Gs=306,Xr=1e3,Hn=1001,Yr=1002,We=1003,Gc=1004,Ji=1005,$e=1006,$s=1007,kn=1008,Je=1009,pl=1010,ml=1011,Hi=1012,Ca=1013,Vn=1014,cn=1015,Xi=1016,Pa=1017,Da=1018,ki=1020,_l=35902,gl=35899,vl=1021,xl=1022,Ge=1023,Vi=1026,Gi=1027,Ml=1028,La=1029,Sl=1030,Ua=1031,Ia=1033,Rs=33776,Cs=33777,Ps=33778,Ds=33779,qr=35840,jr=35841,Kr=35842,$r=35843,Zr=36196,Jr=37492,Qr=37496,ta=37808,ea=37809,na=37810,ia=37811,sa=37812,ra=37813,aa=37814,oa=37815,la=37816,ca=37817,ha=37818,ua=37819,da=37820,fa=37821,pa=36492,ma=36494,_a=36495,ga=36283,va=36284,xa=36285,Ma=36286,Wc=3200,Xc=3201,yl=0,Yc=1,yn="",ye="srgb",yi="srgb-linear",Fs="linear",Kt="srgb",jn=7680,eo=519,qc=512,jc=513,Kc=514,El=515,$c=516,Zc=517,Jc=518,Qc=519,Sa=35044,no="300 es",Ze=2e3,Os=2001;class Yn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ls=Math.PI/180,ya=180/Math.PI;function An(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function th(i,t){return(i%t+t)%t}function Zs(i,t,e){return(1-e)*i+e*t}function Ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const eh={DEG2RAD:Ls};class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const p=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=_,t[e+3]=v;return}if(d!==v||l!==p||c!==m||u!==_){let f=1-o;const h=l*p+c*m+u*_+d*v,b=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const P=Math.sqrt(T),R=Math.atan2(P,h*b);f=Math.sin(f*R)/P,o=Math.sin(o*R)/P}const y=o*b;if(l=l*f+p*y,c=c*f+m*y,u=u*f+_*y,d=d*f+v*y,f===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],p=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+u*d+l*m-c*p,t[e+1]=l*_+u*p+c*d-o*m,t[e+2]=c*_+u*m+o*p-l*d,t[e+3]=u*_-o*d-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),p=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=p*u*d+c*m*_,this._y=c*m*d-p*u*_,this._z=c*u*_+p*m*d,this._w=c*u*d-p*m*_;break;case"YXZ":this._x=p*u*d+c*m*_,this._y=c*m*d-p*u*_,this._z=c*u*_-p*m*d,this._w=c*u*d+p*m*_;break;case"ZXY":this._x=p*u*d-c*m*_,this._y=c*m*d+p*u*_,this._z=c*u*_+p*m*d,this._w=c*u*d-p*m*_;break;case"ZYX":this._x=p*u*d-c*m*_,this._y=c*m*d+p*u*_,this._z=c*u*_-p*m*d,this._w=c*u*d+p*m*_;break;case"YZX":this._x=p*u*d+c*m*_,this._y=c*m*d+p*u*_,this._z=c*u*_-p*m*d,this._w=c*u*d-p*m*_;break;case"XZY":this._x=p*u*d-c*m*_,this._y=c*m*d-p*u*_,this._z=c*u*_+p*m*d,this._w=c*u*d+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],p=n+o+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(io.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(io.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Js.copy(this).projectOnVector(t),this.sub(Js)}reflect(t){return this.sub(Js.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Js=new L,io=new Gn;class zt{constructor(t,e,n,s,r,a,o,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],p=n[2],m=n[5],_=n[8],v=s[0],f=s[3],h=s[6],b=s[1],T=s[4],y=s[7],P=s[2],R=s[5],C=s[8];return r[0]=a*v+o*b+l*P,r[3]=a*f+o*T+l*R,r[6]=a*h+o*y+l*C,r[1]=c*v+u*b+d*P,r[4]=c*f+u*T+d*R,r[7]=c*h+u*y+d*C,r[2]=p*v+m*b+_*P,r[5]=p*f+m*T+_*R,r[8]=p*h+m*y+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,p=o*l-u*r,m=c*r-a*l,_=e*d+n*p+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=d*v,t[1]=(s*c-u*n)*v,t[2]=(o*n-s*a)*v,t[3]=p*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=m*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Qs.makeScale(t,e)),this}rotate(t){return this.premultiply(Qs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qs=new zt;function bl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nh(){const i=Bs("canvas");return i.style.display="block",i}const so={};function Wi(i){i in so||(so[i]=!0,console.warn(i))}function ih(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ro=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ao=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sh(){const i={enabled:!0,workingColorSpace:yi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Kt&&(s.r=un(s.r),s.g=un(s.g),s.b=un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Kt&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yn?Fs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Wi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Wi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yi]:{primaries:t,whitePoint:n,transfer:Fs,toXYZ:ro,fromXYZ:ao,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:t,whitePoint:n,transfer:Kt,toXYZ:ro,fromXYZ:ao,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}}),i}const Yt=sh();function un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Kn;class rh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Kn===void 0&&(Kn=Bs("canvas")),Kn.width=t.width,Kn.height=t.height;const s=Kn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Kn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=un(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(un(e[n]/255)*255):e[n]=un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ah=0;class Na{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=An(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(tr(s[a].image)):r.push(tr(s[a]))}else r=tr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function tr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oh=0;const er=new L;class Re extends Yn{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Hn,s=Hn,r=$e,a=kn,o=Ge,l=Je,c=Re.DEFAULT_ANISOTROPY,u=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=An(),this.name="",this.source=new Na(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(er).x}get height(){return this.source.getSize(er).y}get depth(){return this.source.getSize(er).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xr:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case Yr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xr:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case Yr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=fl;Re.DEFAULT_ANISOTROPY=1;class Qt{constructor(t=0,e=0,n=0,s=1){Qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],p=l[1],m=l[5],_=l[9],v=l[2],f=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-v)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+v)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,y=(m+1)/2,P=(h+1)/2,R=(u+p)/4,C=(d+v)/4,N=(_+f)/4;return T>y&&T>P?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=R/n,r=C/n):y>P?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=N/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=C/r,s=N/r),this.set(n,s,r,e),this}let b=Math.sqrt((f-_)*(f-_)+(d-v)*(d-v)+(p-u)*(p-u));return Math.abs(b)<.001&&(b=1),this.x=(f-_)/b,this.y=(d-v)/b,this.z=(p-u)/b,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lh extends Yn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Re(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Na(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends lh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tl extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ch extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,He):He.fromBufferAttribute(r,a),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qi.copy(n.boundingBox)),Qi.applyMatrix4(t.matrixWorld),this.union(Qi)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ri),ts.subVectors(this.max,Ri),$n.subVectors(t.a,Ri),Zn.subVectors(t.b,Ri),Jn.subVectors(t.c,Ri),fn.subVectors(Zn,$n),pn.subVectors(Jn,Zn),Dn.subVectors($n,Jn);let e=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-Dn.z,Dn.y,fn.z,0,-fn.x,pn.z,0,-pn.x,Dn.z,0,-Dn.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-Dn.y,Dn.x,0];return!nr(e,$n,Zn,Jn,ts)||(e=[1,0,0,0,1,0,0,0,1],!nr(e,$n,Zn,Jn,ts))?!1:(es.crossVectors(fn,pn),e=[es.x,es.y,es.z],nr(e,$n,Zn,Jn,ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const nn=[new L,new L,new L,new L,new L,new L,new L,new L],He=new L,Qi=new Yi,$n=new L,Zn=new L,Jn=new L,fn=new L,pn=new L,Dn=new L,Ri=new L,ts=new L,es=new L,Ln=new L;function nr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ln.fromArray(i,r);const o=s.x*Math.abs(Ln.x)+s.y*Math.abs(Ln.y)+s.z*Math.abs(Ln.z),l=t.dot(Ln),c=e.dot(Ln),u=n.dot(Ln);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const hh=new Yi,Ci=new L,ir=new L;class qi{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):hh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ci.subVectors(t,this.center);const e=Ci.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ci,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ir.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ci.copy(t.center).add(ir)),this.expandByPoint(Ci.copy(t.center).sub(ir))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const sn=new L,sr=new L,ns=new L,mn=new L,rr=new L,is=new L,ar=new L;class ji{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){sr.copy(t).add(e).multiplyScalar(.5),ns.copy(e).sub(t).normalize(),mn.copy(this.origin).sub(sr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ns),o=mn.dot(this.direction),l=-mn.dot(ns),c=mn.lengthSq(),u=Math.abs(1-a*a);let d,p,m,_;if(u>0)if(d=a*l-o,p=a*o-l,_=r*u,d>=0)if(p>=-_)if(p<=_){const v=1/u;d*=v,p*=v,m=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;else p<=-_?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c):p<=_?(d=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(sr).addScaledVector(ns,p),m}intersectSphere(t,e){sn.subVectors(t.center,this.origin);const n=sn.dot(this.direction),s=sn.dot(sn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),u>=0?(r=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,n,s,r){rr.subVectors(e,t),is.subVectors(n,t),ar.crossVectors(rr,is);let a=this.direction.dot(ar),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mn.subVectors(this.origin,t);const l=o*this.direction.dot(is.crossVectors(mn,is));if(l<0)return null;const c=o*this.direction.dot(rr.cross(mn));if(c<0||l+c>a)return null;const u=-o*mn.dot(ar);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,s,r,a,o,l,c,u,d,p,m,_,v,f){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,p,m,_,v,f)}set(t,e,n,s,r,a,o,l,c,u,d,p,m,_,v,f){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=p,h[3]=m,h[7]=_,h[11]=v,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Qn.setFromMatrixColumn(t,0).length(),r=1/Qn.setFromMatrixColumn(t,1).length(),a=1/Qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const p=a*u,m=a*d,_=o*u,v=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+_*c,e[5]=p-v*c,e[9]=-o*l,e[2]=v-p*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*u,m=l*d,_=c*u,v=c*d;e[0]=p+v*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=m*o-_,e[6]=v+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*u,m=l*d,_=c*u,v=c*d;e[0]=p-v*o,e[4]=-a*d,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*u,e[9]=v-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*u,m=a*d,_=o*u,v=o*d;e[0]=l*u,e[4]=_*c-m,e[8]=p*c+v,e[1]=l*d,e[5]=v*c+p,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,m=a*c,_=o*l,v=o*c;e[0]=l*u,e[4]=v-p*d,e[8]=_*d+m,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*d+_,e[10]=p-v*d}else if(t.order==="XZY"){const p=a*l,m=a*c,_=o*l,v=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=p*d+v,e[5]=a*u,e[9]=m*d-_,e[2]=_*d-m,e[6]=o*u,e[10]=v*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uh,t,dh)}lookAt(t,e,n){const s=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),_n.crossVectors(n,Ie),_n.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),_n.crossVectors(n,Ie)),_n.normalize(),ss.crossVectors(Ie,_n),s[0]=_n.x,s[4]=ss.x,s[8]=Ie.x,s[1]=_n.y,s[5]=ss.y,s[9]=Ie.y,s[2]=_n.z,s[6]=ss.z,s[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],p=n[9],m=n[13],_=n[2],v=n[6],f=n[10],h=n[14],b=n[3],T=n[7],y=n[11],P=n[15],R=s[0],C=s[4],N=s[8],S=s[12],M=s[1],w=s[5],O=s[9],k=s[13],K=s[2],X=s[6],j=s[10],J=s[14],V=s[3],G=s[7],et=s[11],ht=s[15];return r[0]=a*R+o*M+l*K+c*V,r[4]=a*C+o*w+l*X+c*G,r[8]=a*N+o*O+l*j+c*et,r[12]=a*S+o*k+l*J+c*ht,r[1]=u*R+d*M+p*K+m*V,r[5]=u*C+d*w+p*X+m*G,r[9]=u*N+d*O+p*j+m*et,r[13]=u*S+d*k+p*J+m*ht,r[2]=_*R+v*M+f*K+h*V,r[6]=_*C+v*w+f*X+h*G,r[10]=_*N+v*O+f*j+h*et,r[14]=_*S+v*k+f*J+h*ht,r[3]=b*R+T*M+y*K+P*V,r[7]=b*C+T*w+y*X+P*G,r[11]=b*N+T*O+y*j+P*et,r[15]=b*S+T*k+y*J+P*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],p=t[10],m=t[14],_=t[3],v=t[7],f=t[11],h=t[15];return _*(+r*l*d-s*c*d-r*o*p+n*c*p+s*o*m-n*l*m)+v*(+e*l*m-e*c*p+r*a*p-s*a*m+s*c*u-r*l*u)+f*(+e*c*d-e*o*m-r*a*d+n*a*m+r*o*u-n*c*u)+h*(-s*o*u-e*l*d+e*o*p+s*a*d-n*a*p+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],p=t[10],m=t[11],_=t[12],v=t[13],f=t[14],h=t[15],b=d*f*c-v*p*c+v*l*m-o*f*m-d*l*h+o*p*h,T=_*p*c-u*f*c-_*l*m+a*f*m+u*l*h-a*p*h,y=u*v*c-_*d*c+_*o*m-a*v*m-u*o*h+a*d*h,P=_*d*l-u*v*l-_*o*p+a*v*p+u*o*f-a*d*f,R=e*b+n*T+s*y+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=b*C,t[1]=(v*p*r-d*f*r-v*s*m+n*f*m+d*s*h-n*p*h)*C,t[2]=(o*f*r-v*l*r+v*s*c-n*f*c-o*s*h+n*l*h)*C,t[3]=(d*l*r-o*p*r-d*s*c+n*p*c+o*s*m-n*l*m)*C,t[4]=T*C,t[5]=(u*f*r-_*p*r+_*s*m-e*f*m-u*s*h+e*p*h)*C,t[6]=(_*l*r-a*f*r-_*s*c+e*f*c+a*s*h-e*l*h)*C,t[7]=(a*p*r-u*l*r+u*s*c-e*p*c-a*s*m+e*l*m)*C,t[8]=y*C,t[9]=(_*d*r-u*v*r-_*n*m+e*v*m+u*n*h-e*d*h)*C,t[10]=(a*v*r-_*o*r+_*n*c-e*v*c-a*n*h+e*o*h)*C,t[11]=(u*o*r-a*d*r-u*n*c+e*d*c+a*n*m-e*o*m)*C,t[12]=P*C,t[13]=(u*v*s-_*d*s+_*n*p-e*v*p-u*n*f+e*d*f)*C,t[14]=(_*o*s-a*v*s-_*n*l+e*v*l+a*n*f-e*o*f)*C,t[15]=(a*d*s-u*o*s+u*n*l-e*d*l-a*n*p+e*o*p)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,p=r*c,m=r*u,_=r*d,v=a*u,f=a*d,h=o*d,b=l*c,T=l*u,y=l*d,P=n.x,R=n.y,C=n.z;return s[0]=(1-(v+h))*P,s[1]=(m+y)*P,s[2]=(_-T)*P,s[3]=0,s[4]=(m-y)*R,s[5]=(1-(p+h))*R,s[6]=(f+b)*R,s[7]=0,s[8]=(_+T)*C,s[9]=(f-b)*C,s[10]=(1-(p+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Qn.set(s[0],s[1],s[2]).length();const a=Qn.set(s[4],s[5],s[6]).length(),o=Qn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ke.copy(this);const c=1/r,u=1/a,d=1/o;return ke.elements[0]*=c,ke.elements[1]*=c,ke.elements[2]*=c,ke.elements[4]*=u,ke.elements[5]*=u,ke.elements[6]*=u,ke.elements[8]*=d,ke.elements[9]*=d,ke.elements[10]*=d,e.setFromRotationMatrix(ke),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ze,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(n-s),p=(e+t)/(e-t),m=(n+s)/(n-s);let _,v;if(l)_=r/(a-r),v=a*r/(a-r);else if(o===Ze)_=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Os)_=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ze,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-s),p=-(e+t)/(e-t),m=-(n+s)/(n-s);let _,v;if(l)_=1/(a-r),v=a/(a-r);else if(o===Ze)_=-2/(a-r),v=-(a+r)/(a-r);else if(o===Os)_=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qn=new L,ke=new ne,uh=new L(0,0,0),dh=new L(1,1,1),_n=new L,ss=new L,Ie=new L,oo=new ne,lo=new Gn;class Qe{constructor(t=0,e=0,n=0,s=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lo.setFromEuler(this),this.setFromQuaternion(lo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class Fa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fh=0;const co=new L,ti=new Gn,rn=new ne,rs=new L,Pi=new L,ph=new L,mh=new Gn,ho=new L(1,0,0),uo=new L(0,1,0),fo=new L(0,0,1),po={type:"added"},_h={type:"removed"},ei={type:"childadded",child:null},or={type:"childremoved",child:null};class fe extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new L,e=new Qe,n=new Gn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new zt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.multiply(ti),this}rotateOnWorldAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.premultiply(ti),this}rotateX(t){return this.rotateOnAxis(ho,t)}rotateY(t){return this.rotateOnAxis(uo,t)}rotateZ(t){return this.rotateOnAxis(fo,t)}translateOnAxis(t,e){return co.copy(t).applyQuaternion(this.quaternion),this.position.add(co.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ho,t)}translateY(t){return this.translateOnAxis(uo,t)}translateZ(t){return this.translateOnAxis(fo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rs.copy(t):rs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Pi,rs,this.up):rn.lookAt(rs,Pi,this.up),this.quaternion.setFromRotationMatrix(rn),s&&(rn.extractRotation(s.matrixWorld),ti.setFromRotationMatrix(rn),this.quaternion.premultiply(ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(po),ei.child=t,this.dispatchEvent(ei),ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_h),or.child=t,this.dispatchEvent(or),or.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(po),ei.child=t,this.dispatchEvent(ei),ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,t,ph),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,mh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),p=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}fe.DEFAULT_UP=new L(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ve=new L,an=new L,lr=new L,on=new L,ni=new L,ii=new L,mo=new L,cr=new L,hr=new L,ur=new L,dr=new Qt,fr=new Qt,pr=new Qt;class ze{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ve.subVectors(t,e),s.cross(Ve);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ve.subVectors(s,e),an.subVectors(n,e),lr.subVectors(t,e);const a=Ve.dot(Ve),o=Ve.dot(an),l=Ve.dot(lr),c=an.dot(an),u=an.dot(lr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const p=1/d,m=(c*l-o*u)*p,_=(a*u-o*l)*p;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,on.x),l.addScaledVector(a,on.y),l.addScaledVector(o,on.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return dr.setScalar(0),fr.setScalar(0),pr.setScalar(0),dr.fromBufferAttribute(t,e),fr.fromBufferAttribute(t,n),pr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(dr,r.x),a.addScaledVector(fr,r.y),a.addScaledVector(pr,r.z),a}static isFrontFacing(t,e,n,s){return Ve.subVectors(n,e),an.subVectors(t,e),Ve.cross(an).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ve.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Ve.cross(an).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ze.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ni.subVectors(s,n),ii.subVectors(r,n),cr.subVectors(t,n);const l=ni.dot(cr),c=ii.dot(cr);if(l<=0&&c<=0)return e.copy(n);hr.subVectors(t,s);const u=ni.dot(hr),d=ii.dot(hr);if(u>=0&&d<=u)return e.copy(s);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ni,a);ur.subVectors(t,r);const m=ni.dot(ur),_=ii.dot(ur);if(_>=0&&m<=_)return e.copy(r);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(ii,o);const f=u*_-m*d;if(f<=0&&d-u>=0&&m-_>=0)return mo.subVectors(r,s),o=(d-u)/(d-u+(m-_)),e.copy(s).addScaledVector(mo,o);const h=1/(f+v+p);return a=v*h,o=p*h,e.copy(n).addScaledVector(ni,a).addScaledVector(ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},as={h:0,s:0,l:0};function mr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=th(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=mr(a,r,t+1/3),this.g=mr(a,r,t),this.b=mr(a,r,t-1/3)}return Yt.colorSpaceToWorking(this,s),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const n=Al[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=un(t.r),this.g=un(t.g),this.b=un(t.b),this}copyLinearToSRGB(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return Yt.workingToColorSpace(Se.copy(this),t),Math.round(Vt(Se.r*255,0,255))*65536+Math.round(Vt(Se.g*255,0,255))*256+Math.round(Vt(Se.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(Se.copy(this),e);const n=Se.r,s=Se.g,r=Se.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=ye){Yt.workingToColorSpace(Se.copy(this),t);const e=Se.r,n=Se.g,s=Se.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gn),this.setHSL(gn.h+t,gn.s+e,gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gn),t.getHSL(as);const n=Zs(gn.h,as.h,e),s=Zs(gn.s,as.s,e),r=Zs(gn.l,as.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new Wt;Wt.NAMES=Al;let gh=0;class Rn extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=An(),this.name="",this.type="Material",this.blending=_i,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ir,this.blendDst=Nr,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ir&&(n.blendSrc=this.blendSrc),this.blendDst!==Nr&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ws extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new L,os=new Ct;let vh=0;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sa,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)os.fromBufferAttribute(this,e),os.applyMatrix3(t),this.setXY(e,os.x,os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ke(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ke(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ke(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ke(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ke(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sa&&(t.usage=this.usage),t}}class wl extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Rl extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let xh=0;const Be=new ne,_r=new fe,si=new L,Ne=new Yi,Di=new Yi,ve=new L;class xe extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bl(t)?Rl:wl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return _r.lookAt(t),_r.updateMatrix(),this.applyMatrix4(_r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Di.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Ne.min,Di.min),Ne.expandByPoint(ve),ve.addVectors(Ne.max,Di.max),Ne.expandByPoint(ve)):(Ne.expandByPoint(Di.min),Ne.expandByPoint(Di.max))}Ne.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ve.fromBufferAttribute(o,c),l&&(si.fromBufferAttribute(t,c),ve.add(si)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new L,l[N]=new L;const c=new L,u=new L,d=new L,p=new Ct,m=new Ct,_=new Ct,v=new L,f=new L;function h(N,S,M){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),p.fromBufferAttribute(r,N),m.fromBufferAttribute(r,S),_.fromBufferAttribute(r,M),u.sub(c),d.sub(c),m.sub(p),_.sub(p);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(w),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(w),o[N].add(v),o[S].add(v),o[M].add(v),l[N].add(f),l[S].add(f),l[M].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let N=0,S=b.length;N<S;++N){const M=b[N],w=M.start,O=M.count;for(let k=w,K=w+O;k<K;k+=3)h(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const T=new L,y=new L,P=new L,R=new L;function C(N){P.fromBufferAttribute(s,N),R.copy(P);const S=o[N];T.copy(S),T.sub(P.multiplyScalar(P.dot(S))).normalize(),y.crossVectors(R,S);const w=y.dot(l[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,w)}for(let N=0,S=b.length;N<S;++N){const M=b[N],w=M.start,O=M.count;for(let k=w,K=w+O;k<K;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,d=new L;if(t)for(let p=0,m=t.count;p<m;p+=3){const _=t.getX(p+0),v=t.getX(p+1),f=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,f),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u);let m=0,_=0;for(let v=0,f=l.length;v<f;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let h=0;h<u;h++)p[_++]=c[m++]}return new Xe(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const p=c[u],m=t(p,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _o=new ne,Un=new ji,ls=new qi,go=new L,cs=new L,hs=new L,us=new L,gr=new L,ds=new L,vo=new L,fs=new L;class Ae extends fe{constructor(t=new xe,e=new Ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ds.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(gr.fromBufferAttribute(d,t),a?ds.addScaledVector(gr,u):ds.addScaledVector(gr.sub(e),u))}e.add(ds)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(r),Un.copy(t.ray).recast(t.near),!(ls.containsPoint(Un.origin)===!1&&(Un.intersectSphere(ls,go)===null||Un.origin.distanceToSquared(go)>(t.far-t.near)**2))&&(_o.copy(r).invert(),Un.copy(t.ray).applyMatrix4(_o),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Un)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=p.length;_<v;_++){const f=p[_],h=a[f.materialIndex],b=Math.max(f.start,m.start),T=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let y=b,P=T;y<P;y+=3){const R=o.getX(y),C=o.getX(y+1),N=o.getX(y+2);s=ps(this,h,t,n,c,u,d,R,C,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let f=_,h=v;f<h;f+=3){const b=o.getX(f),T=o.getX(f+1),y=o.getX(f+2);s=ps(this,a,t,n,c,u,d,b,T,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=p.length;_<v;_++){const f=p[_],h=a[f.materialIndex],b=Math.max(f.start,m.start),T=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let y=b,P=T;y<P;y+=3){const R=y,C=y+1,N=y+2;s=ps(this,h,t,n,c,u,d,R,C,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=_,h=v;f<h;f+=3){const b=f,T=f+1,y=f+2;s=ps(this,a,t,n,c,u,d,b,T,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function Mh(i,t,e,n,s,r,a,o){let l;if(t.side===we?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===wn,o),l===null)return null;fs.copy(o),fs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(fs);return c<e.near||c>e.far?null:{distance:c,point:fs.clone(),object:i}}function ps(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,cs),i.getVertexPosition(l,hs),i.getVertexPosition(c,us);const u=Mh(i,t,e,n,cs,hs,us,vo);if(u){const d=new L;ze.getBarycoord(vo,cs,hs,us,d),s&&(u.uv=ze.getInterpolatedAttribute(s,o,l,c,d,new Ct)),r&&(u.uv1=ze.getInterpolatedAttribute(r,o,l,c,d,new Ct)),a&&(u.normal=ze.getInterpolatedAttribute(a,o,l,c,d,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new L,materialIndex:0};ze.getNormal(cs,hs,us,p.normal),u.face=p,u.barycoord=d}return u}class Ki extends xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let p=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(d,2));function _(v,f,h,b,T,y,P,R,C,N,S){const M=y/C,w=P/N,O=y/2,k=P/2,K=R/2,X=C+1,j=N+1;let J=0,V=0;const G=new L;for(let et=0;et<j;et++){const ht=et*w-k;for(let tt=0;tt<X;tt++){const ft=tt*M-O;G[v]=ft*b,G[f]=ht*T,G[h]=K,c.push(G.x,G.y,G.z),G[v]=0,G[f]=0,G[h]=R>0?1:-1,u.push(G.x,G.y,G.z),d.push(tt/C),d.push(1-et/N),J+=1}}for(let et=0;et<N;et++)for(let ht=0;ht<C;ht++){const tt=p+ht+X*et,ft=p+ht+X*(et+1),Et=p+(ht+1)+X*(et+1),vt=p+(ht+1)+X*et;l.push(tt,ft,vt),l.push(ft,Et,vt),V+=6}o.addGroup(m,V,S),m+=V,p+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ki(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ei(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Te(i){const t={};for(let e=0;e<i.length;e++){const n=Ei(i[e]);for(const s in n)t[s]=n[s]}return t}function Sh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Cl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const yh={clone:Ei,merge:Te};var Eh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eh,this.fragmentShader=bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ei(t.uniforms),this.uniformsGroups=Sh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Pl extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Ze,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vn=new L,xo=new Ct,Mo=new Ct;class De extends Pl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vn.x,vn.y).multiplyScalar(-t/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vn.x,vn.y).multiplyScalar(-t/vn.z)}getViewSize(t,e){return this.getViewBounds(t,xo,Mo),e.subVectors(Mo,xo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ri=-90,ai=1;class Th extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new De(ri,ai,t,e);s.layers=this.layers,this.add(s);const r=new De(ri,ai,t,e);r.layers=this.layers,this.add(r);const a=new De(ri,ai,t,e);a.layers=this.layers,this.add(a);const o=new De(ri,ai,t,e);o.layers=this.layers,this.add(o);const l=new De(ri,ai,t,e);l.layers=this.layers,this.add(l);const c=new De(ri,ai,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ze)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,p,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Dl extends Re{constructor(t=[],e=Mi,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ah extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Dl(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ki(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:bn});r.uniforms.tEquirect.value=e;const a=new Ae(s,r),o=e.minFilter;return e.minFilter===kn&&(e.minFilter=$e),new Th(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Oi extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wh={type:"move"};class vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const f=e.getJointPose(v,n),h=this._getHandJoint(c,v);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&p>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Oi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ll extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Rh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sa,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const be=new L;class zs{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ke(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ke(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ke(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ke(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ke(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new zs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ul extends Rn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let oi;const Li=new L,li=new L,ci=new L,hi=new Ct,Ui=new Ct,Il=new ne,ms=new L,Ii=new L,_s=new L,So=new Ct,xr=new Ct,yo=new Ct;class Ch extends fe{constructor(t=new Ul){if(super(),this.isSprite=!0,this.type="Sprite",oi===void 0){oi=new xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rh(e,5);oi.setIndex([0,1,2,0,2,3]),oi.setAttribute("position",new zs(n,3,0,!1)),oi.setAttribute("uv",new zs(n,2,3,!1))}this.geometry=oi,this.material=t,this.center=new Ct(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),li.setFromMatrixScale(this.matrixWorld),Il.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ci.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&li.multiplyScalar(-ci.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;gs(ms.set(-.5,-.5,0),ci,a,li,s,r),gs(Ii.set(.5,-.5,0),ci,a,li,s,r),gs(_s.set(.5,.5,0),ci,a,li,s,r),So.set(0,0),xr.set(1,0),yo.set(1,1);let o=t.ray.intersectTriangle(ms,Ii,_s,!1,Li);if(o===null&&(gs(Ii.set(-.5,.5,0),ci,a,li,s,r),xr.set(0,1),o=t.ray.intersectTriangle(ms,_s,Ii,!1,Li),o===null))return;const l=t.ray.origin.distanceTo(Li);l<t.near||l>t.far||e.push({distance:l,point:Li.clone(),uv:ze.getInterpolation(Li,ms,Ii,_s,So,xr,yo,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function gs(i,t,e,n,s,r){hi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ui.x=r*hi.x-s*hi.y,Ui.y=s*hi.x+r*hi.y):Ui.copy(hi),i.copy(t),i.x+=Ui.x,i.y+=Ui.y,i.applyMatrix4(Il)}const Mr=new L,Ph=new L,Dh=new zt;class Sn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Mr.subVectors(n,e).cross(Ph.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Mr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dh.getNormalMatrix(t),s=this.coplanarPoint(Mr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new qi,Lh=new Ct(.5,.5),vs=new L;class Oa{constructor(t=new Sn,e=new Sn,n=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ze,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],p=r[6],m=r[7],_=r[8],v=r[9],f=r[10],h=r[11],b=r[12],T=r[13],y=r[14],P=r[15];if(s[0].setComponents(c-a,m-u,h-_,P-b).normalize(),s[1].setComponents(c+a,m+u,h+_,P+b).normalize(),s[2].setComponents(c+o,m+d,h+v,P+T).normalize(),s[3].setComponents(c-o,m-d,h-v,P-T).normalize(),n)s[4].setComponents(l,p,f,y).normalize(),s[5].setComponents(c-l,m-p,h-f,P-y).normalize();else if(s[4].setComponents(c-l,m-p,h-f,P-y).normalize(),e===Ze)s[5].setComponents(c+l,m+p,h+f,P+y).normalize();else if(e===Os)s[5].setComponents(l,p,f,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(t){In.center.set(0,0,0);const e=Lh.distanceTo(t.center);return In.radius=.7071067811865476+e,In.applyMatrix4(t.matrixWorld),this.intersectsSphere(In)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(vs.x=s.normal.x>0?t.max.x:t.min.x,vs.y=s.normal.y>0?t.max.y:t.min.y,vs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zi extends Rn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hs=new L,ks=new L,Eo=new ne,Ni=new ji,xs=new qi,Sr=new L,bo=new L;class Vs extends fe{constructor(t=new xe,e=new zi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Hs.fromBufferAttribute(e,s-1),ks.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Hs.distanceTo(ks);t.setAttribute("lineDistance",new pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(s),xs.radius+=r,t.ray.intersectsSphere(xs)===!1)return;Eo.copy(s).invert(),Ni.copy(t.ray).applyMatrix4(Eo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=m,f=_-1;v<f;v+=c){const h=u.getX(v),b=u.getX(v+1),T=Ms(this,t,Ni,l,h,b,v);T&&e.push(T)}if(this.isLineLoop){const v=u.getX(_-1),f=u.getX(m),h=Ms(this,t,Ni,l,v,f,_-1);h&&e.push(h)}}else{const m=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let v=m,f=_-1;v<f;v+=c){const h=Ms(this,t,Ni,l,v,v+1,v);h&&e.push(h)}if(this.isLineLoop){const v=Ms(this,t,Ni,l,_-1,m,_-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ms(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(Hs.fromBufferAttribute(o,s),ks.fromBufferAttribute(o,r),e.distanceSqToSegment(Hs,ks,Sr,bo)>n)return;Sr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Sr);if(!(c<t.near||c>t.far))return{distance:c,point:bo.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const To=new L,Ao=new L;class Uh extends Vs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)To.fromBufferAttribute(e,s),Ao.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+To.distanceTo(Ao);t.setAttribute("lineDistance",new pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ba extends Rn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wo=new ne,Ea=new ji,Ss=new qi,ys=new L;class Nl extends fe{constructor(t=new xe,e=new Ba){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(s),Ss.radius+=r,t.ray.intersectsSphere(Ss)===!1)return;wo.copy(s).invert(),Ea.copy(t.ray).applyMatrix4(wo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=p,v=m;_<v;_++){const f=c.getX(_);ys.fromBufferAttribute(d,f),Ro(ys,f,l,s,t,e,this)}}else{const p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=p,v=m;_<v;_++)ys.fromBufferAttribute(d,_),Ro(ys,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ro(i,t,e,n,s,r,a){const o=Ea.distanceSqToPoint(i);if(o<e){const l=new L;Ea.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Fl extends Re{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ol extends Re{constructor(t,e,n=Vn,s,r,a,o=We,l=We,c,u=Vi,d=1){if(u!==Vi&&u!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:d};super(p,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Na(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Bl extends Re{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Xs extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,p=e/l,m=[],_=[],v=[],f=[];for(let h=0;h<u;h++){const b=h*p-a;for(let T=0;T<c;T++){const y=T*d-r;_.push(y,-b,0),v.push(0,0,1),f.push(T/o),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){const T=b+c*h,y=b+c*(h+1),P=b+1+c*(h+1),R=b+1+c*h;m.push(T,y,R),m.push(y,P,R)}this.setIndex(m),this.setAttribute("position",new pe(_,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xs(t.width,t.height,t.widthSegments,t.heightSegments)}}class za extends xe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=t;const p=(e-t)/s,m=new L,_=new Ct;for(let v=0;v<=s;v++){for(let f=0;f<=n;f++){const h=r+f/n*a;m.x=d*Math.cos(h),m.y=d*Math.sin(h),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/e+1)/2,_.y=(m.y/e+1)/2,u.push(_.x,_.y)}d+=p}for(let v=0;v<s;v++){const f=v*(n+1);for(let h=0;h<n;h++){const b=h+f,T=b,y=b+n+1,P=b+n+2,R=b+1;o.push(T,y,R),o.push(y,P,R)}}this.setIndex(o),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Xn extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new L,p=new L,m=[],_=[],v=[],f=[];for(let h=0;h<=n;h++){const b=[],T=h/n;let y=0;h===0&&a===0?y=.5/e:h===n&&l===Math.PI&&(y=-.5/e);for(let P=0;P<=e;P++){const R=P/e;d.x=-t*Math.cos(s+R*r)*Math.sin(a+T*o),d.y=t*Math.cos(a+T*o),d.z=t*Math.sin(s+R*r)*Math.sin(a+T*o),_.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),f.push(R+y,1-T),b.push(c++)}u.push(b)}for(let h=0;h<n;h++)for(let b=0;b<e;b++){const T=u[h][b+1],y=u[h][b],P=u[h+1][b],R=u[h+1][b+1];(h!==0||a>0)&&m.push(T,y,R),(h!==n-1||l<Math.PI)&&m.push(y,P,R)}this.setIndex(m),this.setAttribute("position",new pe(_,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class zl extends Rn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ih extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Nh extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ha extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const yr=new ne,Co=new L,Po=new L;class Hl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=Je,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oa,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Co.setFromMatrixPosition(t.matrixWorld),e.position.copy(Co),Po.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Po),e.updateMatrixWorld(),yr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Do=new ne,Fi=new L,Er=new L;class Fh extends Hl{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Fi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Fi),Er.copy(n.position),Er.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Er),n.updateMatrixWorld(),s.makeTranslation(-Fi.x,-Fi.y,-Fi.z),Do.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Do,n.coordinateSystem,n.reversedDepth)}}class Oh extends Ha{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class kl extends Pl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Bh extends Hl{constructor(){super(new kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zh extends Ha{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new Bh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vl extends Ha{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hh extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Lo=new ne;class kh{constructor(t,e,n=0,s=1/0){this.ray=new ji(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Lo.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lo),this}intersectObject(t,e=!0,n=[]){return ba(t,this,n,e),n.sort(Uo),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ba(t[s],this,n,e);return n.sort(Uo),n}}function Uo(i,t){return i.distance-t.distance}function ba(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ba(r[a],t,e,!0)}}class Ta{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Vh extends Yn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Io(i,t,e,n){const s=Gh(n);switch(e){case vl:return i*t;case Ml:return i*t/s.components*s.byteLength;case La:return i*t/s.components*s.byteLength;case Sl:return i*t*2/s.components*s.byteLength;case Ua:return i*t*2/s.components*s.byteLength;case xl:return i*t*3/s.components*s.byteLength;case Ge:return i*t*4/s.components*s.byteLength;case Ia:return i*t*4/s.components*s.byteLength;case Rs:case Cs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ps:case Ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jr:case $r:return Math.max(i,16)*Math.max(t,8)/4;case qr:case Kr:return Math.max(i,8)*Math.max(t,8)/2;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ea:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case na:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ra:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ca:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case da:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pa:case ma:case _a:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ga:case va:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xa:case Ma:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gh(i){switch(i){case Je:case pl:return{byteLength:1,components:1};case Hi:case ml:case Xi:return{byteLength:2,components:1};case Pa:case Da:return{byteLength:2,components:4};case Vn:case Ca:case cn:return{byteLength:4,components:1};case _l:case gl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ra);function Gl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wh(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,_)=>m.start-_.start);let p=0;for(let m=1;m<d.length;m++){const _=d[p],v=d[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++p,d[p]=v)}d.length=p+1;for(let m=0,_=d.length;m<_;m++){const v=d[m];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,su=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ru=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_u=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Su="gl_FragColor = linearToOutputTexel( gl_FragColor );",yu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ru=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Du=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ou=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ju=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,td=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,id=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ad=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,md=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Md=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ed=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Td=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ud=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Id=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Od=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,af=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,df=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ff=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_f=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ef=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:Xh,alphahash_pars_fragment:Yh,alphamap_fragment:qh,alphamap_pars_fragment:jh,alphatest_fragment:Kh,alphatest_pars_fragment:$h,aomap_fragment:Zh,aomap_pars_fragment:Jh,batching_pars_vertex:Qh,batching_vertex:tu,begin_vertex:eu,beginnormal_vertex:nu,bsdfs:iu,iridescence_fragment:su,bumpmap_pars_fragment:ru,clipping_planes_fragment:au,clipping_planes_pars_fragment:ou,clipping_planes_pars_vertex:lu,clipping_planes_vertex:cu,color_fragment:hu,color_pars_fragment:uu,color_pars_vertex:du,color_vertex:fu,common:pu,cube_uv_reflection_fragment:mu,defaultnormal_vertex:_u,displacementmap_pars_vertex:gu,displacementmap_vertex:vu,emissivemap_fragment:xu,emissivemap_pars_fragment:Mu,colorspace_fragment:Su,colorspace_pars_fragment:yu,envmap_fragment:Eu,envmap_common_pars_fragment:bu,envmap_pars_fragment:Tu,envmap_pars_vertex:Au,envmap_physical_pars_fragment:Ou,envmap_vertex:wu,fog_vertex:Ru,fog_pars_vertex:Cu,fog_fragment:Pu,fog_pars_fragment:Du,gradientmap_pars_fragment:Lu,lightmap_pars_fragment:Uu,lights_lambert_fragment:Iu,lights_lambert_pars_fragment:Nu,lights_pars_begin:Fu,lights_toon_fragment:Bu,lights_toon_pars_fragment:zu,lights_phong_fragment:Hu,lights_phong_pars_fragment:ku,lights_physical_fragment:Vu,lights_physical_pars_fragment:Gu,lights_fragment_begin:Wu,lights_fragment_maps:Xu,lights_fragment_end:Yu,logdepthbuf_fragment:qu,logdepthbuf_pars_fragment:ju,logdepthbuf_pars_vertex:Ku,logdepthbuf_vertex:$u,map_fragment:Zu,map_pars_fragment:Ju,map_particle_fragment:Qu,map_particle_pars_fragment:td,metalnessmap_fragment:ed,metalnessmap_pars_fragment:nd,morphinstance_vertex:id,morphcolor_vertex:sd,morphnormal_vertex:rd,morphtarget_pars_vertex:ad,morphtarget_vertex:od,normal_fragment_begin:ld,normal_fragment_maps:cd,normal_pars_fragment:hd,normal_pars_vertex:ud,normal_vertex:dd,normalmap_pars_fragment:fd,clearcoat_normal_fragment_begin:pd,clearcoat_normal_fragment_maps:md,clearcoat_pars_fragment:_d,iridescence_pars_fragment:gd,opaque_fragment:vd,packing:xd,premultiplied_alpha_fragment:Md,project_vertex:Sd,dithering_fragment:yd,dithering_pars_fragment:Ed,roughnessmap_fragment:bd,roughnessmap_pars_fragment:Td,shadowmap_pars_fragment:Ad,shadowmap_pars_vertex:wd,shadowmap_vertex:Rd,shadowmask_pars_fragment:Cd,skinbase_vertex:Pd,skinning_pars_vertex:Dd,skinning_vertex:Ld,skinnormal_vertex:Ud,specularmap_fragment:Id,specularmap_pars_fragment:Nd,tonemapping_fragment:Fd,tonemapping_pars_fragment:Od,transmission_fragment:Bd,transmission_pars_fragment:zd,uv_pars_fragment:Hd,uv_pars_vertex:kd,uv_vertex:Vd,worldpos_vertex:Gd,background_vert:Wd,background_frag:Xd,backgroundCube_vert:Yd,backgroundCube_frag:qd,cube_vert:jd,cube_frag:Kd,depth_vert:$d,depth_frag:Zd,distanceRGBA_vert:Jd,distanceRGBA_frag:Qd,equirect_vert:tf,equirect_frag:ef,linedashed_vert:nf,linedashed_frag:sf,meshbasic_vert:rf,meshbasic_frag:af,meshlambert_vert:of,meshlambert_frag:lf,meshmatcap_vert:cf,meshmatcap_frag:hf,meshnormal_vert:uf,meshnormal_frag:df,meshphong_vert:ff,meshphong_frag:pf,meshphysical_vert:mf,meshphysical_frag:_f,meshtoon_vert:gf,meshtoon_frag:vf,points_vert:xf,points_frag:Mf,shadow_vert:Sf,shadow_frag:yf,sprite_vert:Ef,sprite_frag:bf},ct={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},qe={basic:{uniforms:Te([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Te([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Wt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Te([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Te([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Te([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Wt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Te([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Te([ct.points,ct.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Te([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Te([ct.common,ct.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Te([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Te([ct.sprite,ct.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Te([ct.common,ct.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Te([ct.lights,ct.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};qe.physical={uniforms:Te([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Es={r:0,b:0,g:0},Nn=new Qe,Tf=new ne;function Af(i,t,e,n,s,r,a){const o=new Wt(0);let l=r===!0?0:1,c,u,d=null,p=0,m=null;function _(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?e:t).get(y)),y}function v(T){let y=!1;const P=_(T);P===null?h(o,l):P&&P.isColor&&(h(P,1),y=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(T,y){const P=_(y);P&&(P.isCubeTexture||P.mapping===Gs)?(u===void 0&&(u=new Ae(new Ki(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Ei(qe.backgroundCube.uniforms),vertexShader:qe.backgroundCube.vertexShader,fragmentShader:qe.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Nn.copy(y.backgroundRotation),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Tf.makeRotationFromEuler(Nn)),u.material.toneMapped=Yt.getTransfer(P.colorSpace)!==Kt,(d!==P||p!==P.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=P,p=P.version,m=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new Ae(new Xs(2,2),new tn({name:"BackgroundMaterial",uniforms:Ei(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(P.colorSpace)!==Kt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||p!==P.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=P,p=P.version,m=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function h(T,y){T.getRGB(Es,Cl(i)),n.buffers.color.setClear(Es.r,Es.g,Es.b,y,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),l=y,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(o,l)},render:v,addToRenderList:f,dispose:b}}function wf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(M,w,O,k,K){let X=!1;const j=d(k,O,w);r!==j&&(r=j,c(r.object)),X=m(M,k,O,K),X&&_(M,k,O,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(M,w,O,k),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,w,O){const k=O.wireframe===!0;let K=n[M.id];K===void 0&&(K={},n[M.id]=K);let X=K[w.id];X===void 0&&(X={},K[w.id]=X);let j=X[k];return j===void 0&&(j=p(l()),X[k]=j),j}function p(M){const w=[],O=[],k=[];for(let K=0;K<e;K++)w[K]=0,O[K]=0,k[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:k,object:M,attributes:{},index:null}}function m(M,w,O,k){const K=r.attributes,X=w.attributes;let j=0;const J=O.getAttributes();for(const V in J)if(J[V].location>=0){const et=K[V];let ht=X[V];if(ht===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor)),et===void 0||et.attribute!==ht||ht&&et.data!==ht.data)return!0;j++}return r.attributesNum!==j||r.index!==k}function _(M,w,O,k){const K={},X=w.attributes;let j=0;const J=O.getAttributes();for(const V in J)if(J[V].location>=0){let et=X[V];et===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(et=M.instanceColor));const ht={};ht.attribute=et,et&&et.data&&(ht.data=et.data),K[V]=ht,j++}r.attributes=K,r.attributesNum=j,r.index=k}function v(){const M=r.newAttributes;for(let w=0,O=M.length;w<O;w++)M[w]=0}function f(M){h(M,0)}function h(M,w){const O=r.newAttributes,k=r.enabledAttributes,K=r.attributeDivisors;O[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),K[M]!==w&&(i.vertexAttribDivisor(M,w),K[M]=w)}function b(){const M=r.newAttributes,w=r.enabledAttributes;for(let O=0,k=w.length;O<k;O++)w[O]!==M[O]&&(i.disableVertexAttribArray(O),w[O]=0)}function T(M,w,O,k,K,X,j){j===!0?i.vertexAttribIPointer(M,w,O,K,X):i.vertexAttribPointer(M,w,O,k,K,X)}function y(M,w,O,k){v();const K=k.attributes,X=O.getAttributes(),j=w.defaultAttributeValues;for(const J in X){const V=X[J];if(V.location>=0){let G=K[J];if(G===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(G=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(G=M.instanceColor)),G!==void 0){const et=G.normalized,ht=G.itemSize,tt=t.get(G);if(tt===void 0)continue;const ft=tt.buffer,Et=tt.type,vt=tt.bytesPerElement,B=Et===i.INT||Et===i.UNSIGNED_INT||G.gpuType===Ca;if(G.isInterleavedBufferAttribute){const W=G.data,$=W.stride,mt=G.offset;if(W.isInstancedInterleavedBuffer){for(let ot=0;ot<V.locationSize;ot++)h(V.location+ot,W.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ot=0;ot<V.locationSize;ot++)f(V.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let ot=0;ot<V.locationSize;ot++)T(V.location+ot,ht/V.locationSize,Et,et,$*vt,(mt+ht/V.locationSize*ot)*vt,B)}else{if(G.isInstancedBufferAttribute){for(let W=0;W<V.locationSize;W++)h(V.location+W,G.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let W=0;W<V.locationSize;W++)f(V.location+W);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let W=0;W<V.locationSize;W++)T(V.location+W,ht/V.locationSize,Et,et,ht*vt,ht/V.locationSize*W*vt,B)}}else if(j!==void 0){const et=j[J];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(V.location,et);break;case 3:i.vertexAttrib3fv(V.location,et);break;case 4:i.vertexAttrib4fv(V.location,et);break;default:i.vertexAttrib1fv(V.location,et)}}}}b()}function P(){N();for(const M in n){const w=n[M];for(const O in w){const k=w[O];for(const K in k)u(k[K].object),delete k[K];delete w[O]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const w=n[M.id];for(const O in w){const k=w[O];for(const K in k)u(k[K].object),delete k[K];delete w[O]}delete n[M.id]}function C(M){for(const w in n){const O=n[w];if(O[M.id]===void 0)continue;const k=O[M.id];for(const K in k)u(k[K].object),delete k[K];delete O[M.id]}}function N(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:f,disableUnusedAttributes:b}}function Rf(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_];e.update(m,n,1)}function l(c,u,d,p){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],u[_],p[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v]*p[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Cf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Ge&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const N=C===Xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Je&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==cn&&!N)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:P,maxSamples:R}}function Pf(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Sn,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||n!==0||s;return s=p,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=u(d,p,0)},this.setState=function(d,p,m){const _=d.clippingPlanes,v=d.clipIntersection,f=d.clipShadows,h=i.get(d);if(!s||_===null||_.length===0||r&&!f)r?u(null):c();else{const b=r?0:n,T=b*4;let y=h.clippingState||null;l.value=y,y=u(_,p,T,m);for(let P=0;P!==T;++P)y[P]=e[P];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,p,m,_){const v=d!==null?d.length:0;let f=null;if(v!==0){if(f=l.value,_!==!0||f===null){const h=m+v*4,b=p.matrixWorldInverse;o.getNormalMatrix(b),(f===null||f.length<h)&&(f=new Float32Array(h));for(let T=0,y=m;T!==v;++T,y+=4)a.copy(d[T]).applyMatrix4(b,o),a.normal.toArray(f,y),f[y+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function Df(i){let t=new WeakMap;function e(a,o){return o===Gr?a.mapping=Mi:o===Wr&&(a.mapping=Si),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Gr||o===Wr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ah(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const fi=4,No=[.125,.215,.35,.446,.526,.582],zn=20,br=new kl,Fo=new Wt;let Tr=null,Ar=0,wr=0,Rr=!1;const On=(1+Math.sqrt(5))/2,ui=1/On,Oo=[new L(-On,ui,0),new L(On,ui,0),new L(-ui,0,On),new L(ui,0,On),new L(0,On,-ui),new L(0,On,ui),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Lf=new L;class Bo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Lf}=r;Tr=this._renderer.getRenderTarget(),Ar=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),Rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Tr,Ar,wr),this._renderer.xr.enabled=Rr,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===Si?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tr=this._renderer.getRenderTarget(),Ar=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),Rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Xi,format:Ge,colorSpace:yi,depthBuffer:!1},s=zo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uf(r)),this._blurMaterial=If(r,t,e)}return s}_compileMaterial(t){const e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,br)}_sceneToCubeUV(t,e,n,s,r){const l=new De(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(Fo),d.toneMapping=Tn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const v=new Ws({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),f=new Ae(new Ki,v);let h=!1;const b=t.background;b?b.isColor&&(v.color.copy(b),t.background=null,h=!0):(v.color.copy(Fo),h=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const P=this._cubeSize;bs(s,y*P,T>2?P:0,P,P),d.setRenderTarget(s),h&&d.render(f,l),d.render(t,l)}f.geometry.dispose(),f.material.dispose(),d.toneMapping=m,d.autoClear=p,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Mi||t.mapping===Si;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ho());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ae(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,br)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Oo[(s-r-1)%Oo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ae(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*zn-1),v=r/_,f=isFinite(r)?1+Math.floor(u*v):zn;f>zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${zn}`);const h=[];let b=0;for(let C=0;C<zn;++C){const N=C/v,S=Math.exp(-N*N/2);h.push(S),C===0?b+=S:C<f&&(b+=2*S)}for(let C=0;C<h.length;C++)h[C]=h[C]/b;p.envMap.value=t.texture,p.samples.value=f,p.weights.value=h,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:T}=this;p.dTheta.value=_,p.mipInt.value=T-n;const y=this._sizeLods[s],P=3*y*(s>T-fi?s-T+fi:0),R=4*(this._cubeSize-y);bs(e,P,R,3*y,2*y),l.setRenderTarget(e),l.render(d,br)}}function Uf(i){const t=[],e=[],n=[];let s=i;const r=i-fi+1+No.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-fi?l=No[a-i+fi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,v=3,f=2,h=1,b=new Float32Array(v*_*m),T=new Float32Array(f*_*m),y=new Float32Array(h*_*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,N=R>2?0:-1,S=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];b.set(S,v*_*R),T.set(p,f*_*R);const M=[R,R,R,R,R,R];y.set(M,h*_*R)}const P=new xe;P.setAttribute("position",new Xe(b,v)),P.setAttribute("uv",new Xe(T,f)),P.setAttribute("faceIndex",new Xe(y,h)),t.push(P),s>fi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zo(i,t,e){const n=new Wn(i,t,e);return n.texture.mapping=Gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function If(i,t,e){const n=new Float32Array(zn),s=new L(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ho(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ko(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ka(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Gr||l===Wr,u=l===Mi||l===Si;if(c||u){let d=t.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new Bo(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new Bo(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ff(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Wi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Of(i,t,e,n){const s={},r=new WeakMap;function a(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(d){const p=d.attributes;for(const m in p)t.update(p[m],i.ARRAY_BUFFER)}function c(d){const p=[],m=d.index,_=d.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let T=0,y=b.length;T<y;T+=3){const P=b[T+0],R=b[T+1],C=b[T+2];p.push(P,R,R,C,C,P)}}else if(_!==void 0){const b=_.array;v=_.version;for(let T=0,y=b.length/3-1;T<y;T+=3){const P=T+0,R=T+1,C=T+2;p.push(P,R,R,C,C,P)}}else return;const f=new(bl(p)?Rl:wl)(p,1);f.version=v;const h=r.get(d);h&&t.remove(h),r.set(d,f)}function u(d){const p=r.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Bf(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,m){i.drawElements(n,m,r,p*a),e.update(m,n,1)}function c(p,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,p*a,_),e.update(m,n,_))}function u(p,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,_);let f=0;for(let h=0;h<_;h++)f+=m[h];e.update(f,n,1)}function d(p,m,_,v){if(_===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<p.length;h++)c(p[h]/a,m[h],v[h]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,v,0,_);let h=0;for(let b=0;b<_;b++)h+=m[b]*v[b];e.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function zf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Hf(i,t,e){const n=new WeakMap,s=new Qt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let p=n.get(o);if(p===void 0||p.count!==d){let M=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var m=M;p!==void 0&&p.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),f===!0&&(y=3);let P=o.attributes.position.count*y,R=1;P>t.maxTextureSize&&(R=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const C=new Float32Array(P*R*4*d),N=new Tl(C,P,R,d);N.type=cn,N.needsUpdate=!0;const S=y*4;for(let w=0;w<d;w++){const O=h[w],k=b[w],K=T[w],X=P*R*4*w;for(let j=0;j<O.count;j++){const J=j*S;_===!0&&(s.fromBufferAttribute(O,j),C[X+J+0]=s.x,C[X+J+1]=s.y,C[X+J+2]=s.z,C[X+J+3]=0),v===!0&&(s.fromBufferAttribute(k,j),C[X+J+4]=s.x,C[X+J+5]=s.y,C[X+J+6]=s.z,C[X+J+7]=0),f===!0&&(s.fromBufferAttribute(K,j),C[X+J+8]=s.x,C[X+J+9]=s.y,C[X+J+10]=s.z,C[X+J+11]=K.itemSize===4?s.w:1)}}p={count:d,texture:N,size:new Ct(P,R)},n.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let f=0;f<c.length;f++)_+=c[f];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function kf(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Wl=new Re,Vo=new Ol(1,1),Xl=new Tl,Yl=new ch,ql=new Dl,Go=[],Wo=[],Xo=new Float32Array(16),Yo=new Float32Array(9),qo=new Float32Array(4);function Ai(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Go[s];if(r===void 0&&(r=new Float32Array(s),Go[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ys(i,t){let e=Wo[t];e===void 0&&(e=new Int32Array(t),Wo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function Wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function Xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function Yf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(me(e,n))return;qo.set(n),i.uniformMatrix2fv(this.addr,!1,qo),_e(e,n)}}function qf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(me(e,n))return;Yo.set(n),i.uniformMatrix3fv(this.addr,!1,Yo),_e(e,n)}}function jf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(me(e,n))return;Xo.set(n),i.uniformMatrix4fv(this.addr,!1,Xo),_e(e,n)}}function Kf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $f(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function Zf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function Jf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function Qf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function ip(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vo.compareFunction=El,r=Vo):r=Wl,e.setTexture2D(t||r,s)}function sp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yl,s)}function rp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ql,s)}function ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xl,s)}function op(i){switch(i){case 5126:return Vf;case 35664:return Gf;case 35665:return Wf;case 35666:return Xf;case 35674:return Yf;case 35675:return qf;case 35676:return jf;case 5124:case 35670:return Kf;case 35667:case 35671:return $f;case 35668:case 35672:return Zf;case 35669:case 35673:return Jf;case 5125:return Qf;case 36294:return tp;case 36295:return ep;case 36296:return np;case 35678:case 36198:case 36298:case 36306:case 35682:return ip;case 35679:case 36299:case 36307:return sp;case 35680:case 36300:case 36308:case 36293:return rp;case 36289:case 36303:case 36311:case 36292:return ap}}function lp(i,t){i.uniform1fv(this.addr,t)}function cp(i,t){const e=Ai(t,this.size,2);i.uniform2fv(this.addr,e)}function hp(i,t){const e=Ai(t,this.size,3);i.uniform3fv(this.addr,e)}function up(i,t){const e=Ai(t,this.size,4);i.uniform4fv(this.addr,e)}function dp(i,t){const e=Ai(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fp(i,t){const e=Ai(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pp(i,t){const e=Ai(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mp(i,t){i.uniform1iv(this.addr,t)}function _p(i,t){i.uniform2iv(this.addr,t)}function gp(i,t){i.uniform3iv(this.addr,t)}function vp(i,t){i.uniform4iv(this.addr,t)}function xp(i,t){i.uniform1uiv(this.addr,t)}function Mp(i,t){i.uniform2uiv(this.addr,t)}function Sp(i,t){i.uniform3uiv(this.addr,t)}function yp(i,t){i.uniform4uiv(this.addr,t)}function Ep(i,t,e){const n=this.cache,s=t.length,r=Ys(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Wl,r[a])}function bp(i,t,e){const n=this.cache,s=t.length,r=Ys(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Yl,r[a])}function Tp(i,t,e){const n=this.cache,s=t.length,r=Ys(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ql,r[a])}function Ap(i,t,e){const n=this.cache,s=t.length,r=Ys(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Xl,r[a])}function wp(i){switch(i){case 5126:return lp;case 35664:return cp;case 35665:return hp;case 35666:return up;case 35674:return dp;case 35675:return fp;case 35676:return pp;case 5124:case 35670:return mp;case 35667:case 35671:return _p;case 35668:case 35672:return gp;case 35669:case 35673:return vp;case 5125:return xp;case 36294:return Mp;case 36295:return Sp;case 36296:return yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Tp;case 36289:case 36303:case 36311:case 36292:return Ap}}class Rp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=op(e.type)}}class Cp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wp(e.type)}}class Pp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Cr=/(\w+)(\])?(\[|\.)?/g;function jo(i,t){i.seq.push(t),i.map[t.id]=t}function Dp(i,t,e){const n=i.name,s=n.length;for(Cr.lastIndex=0;;){const r=Cr.exec(n),a=Cr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jo(e,c===void 0?new Rp(o,i,t):new Cp(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Pp(o),jo(e,d)),e=d}}}class Us{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Dp(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ko(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Lp=37297;let Up=0;function Ip(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const $o=new zt;function Np(i){Yt._getMatrix($o,Yt.workingColorSpace,i);const t=`mat3( ${$o.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case Fs:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ip(i.getShaderSource(t),o)}else return r}function Fp(i,t){const e=Np(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Op(i,t){let e;switch(t){case Oc:e="Linear";break;case Bc:e="Reinhard";break;case zc:e="Cineon";break;case dl:e="ACESFilmic";break;case kc:e="AgX";break;case Vc:e="Neutral";break;case Hc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ts=new L;function Bp(){Yt.getLuminanceCoefficients(Ts);const i=Ts.x.toFixed(4),t=Ts.y.toFixed(4),e=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bi).join(`
`)}function Hp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Bi(i){return i!==""}function Jo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Vp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(i){return i.replace(Vp,Wp)}const Gp=new Map;function Wp(i,t){let e=kt[t];if(e===void 0){const n=Gp.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Aa(e)}const Xp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tl(i){return i.replace(Xp,Yp)}function Yp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function el(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===_c?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ln&&(t="SHADOWMAP_TYPE_VSM"),t}function jp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Mi:case Si:t="ENVMAP_TYPE_CUBE";break;case Gs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kp(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Si&&(t="ENVMAP_MODE_REFRACTION"),t}function $p(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ul:t="ENVMAP_BLENDING_MULTIPLY";break;case Nc:t="ENVMAP_BLENDING_MIX";break;case Fc:t="ENVMAP_BLENDING_ADD";break}return t}function Zp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Jp(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=qp(e),c=jp(e),u=Kp(e),d=$p(e),p=Zp(e),m=zp(e),_=Hp(r),v=s.createProgram();let f,h,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Bi).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Bi).join(`
`),h.length>0&&(h+=`
`)):(f=[el(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),h=[el(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Tn?Op("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Fp("linearToOutputTexel",e.outputColorSpace),Bp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bi).join(`
`)),a=Aa(a),a=Jo(a,e),a=Qo(a,e),o=Aa(o),o=Jo(o,e),o=Qo(o,e),a=tl(a),o=tl(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",e.glslVersion===no?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===no?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=b+f+a,y=b+h+o,P=Ko(s,s.VERTEX_SHADER,T),R=Ko(s,s.FRAGMENT_SHADER,y);s.attachShader(v,P),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(w){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(v)||"",k=s.getShaderInfoLog(P)||"",K=s.getShaderInfoLog(R)||"",X=O.trim(),j=k.trim(),J=K.trim();let V=!0,G=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,R);else{const et=Zo(s,P,"vertex"),ht=Zo(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+X+`
`+et+`
`+ht)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(j===""||J==="")&&(G=!1);G&&(w.diagnostics={runnable:V,programLog:X,vertexShader:{log:j,prefix:f},fragmentShader:{log:J,prefix:h}})}s.deleteShader(P),s.deleteShader(R),N=new Us(s,v),S=kp(s,v)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Lp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Up++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=R,this}let Qp=0;class tm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new em(t),e.set(t,n)),n}}class em{constructor(t){this.id=Qp++,this.code=t,this.usedTimes=0}}function nm(i,t,e,n,s,r,a){const o=new Fa,l=new tm,c=new Set,u=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,M,w,O,k){const K=O.fog,X=k.geometry,j=S.isMeshStandardMaterial?O.environment:null,J=(S.isMeshStandardMaterial?e:t).get(S.envMap||j),V=J&&J.mapping===Gs?J.image.height:null,G=_[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const et=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ht=et!==void 0?et.length:0;let tt=0;X.morphAttributes.position!==void 0&&(tt=1),X.morphAttributes.normal!==void 0&&(tt=2),X.morphAttributes.color!==void 0&&(tt=3);let ft,Et,vt,B;if(G){const qt=qe[G];ft=qt.vertexShader,Et=qt.fragmentShader}else ft=S.vertexShader,Et=S.fragmentShader,l.update(S),vt=l.getVertexShaderID(S),B=l.getFragmentShaderID(S);const W=i.getRenderTarget(),$=i.state.buffers.depth.getReversed(),mt=k.isInstancedMesh===!0,ot=k.isBatchedMesh===!0,Pt=!!S.map,he=!!S.matcap,A=!!J,se=!!S.aoMap,Ot=!!S.lightMap,It=!!S.bumpMap,St=!!S.normalMap,re=!!S.displacementMap,yt=!!S.emissiveMap,Ht=!!S.metalnessMap,ge=!!S.roughnessMap,ce=S.anisotropy>0,E=S.clearcoat>0,g=S.dispersion>0,F=S.iridescence>0,q=S.sheen>0,Q=S.transmission>0,Y=ce&&!!S.anisotropyMap,wt=E&&!!S.clearcoatMap,at=E&&!!S.clearcoatNormalMap,bt=E&&!!S.clearcoatRoughnessMap,Tt=F&&!!S.iridescenceMap,st=F&&!!S.iridescenceThicknessMap,pt=q&&!!S.sheenColorMap,Ut=q&&!!S.sheenRoughnessMap,At=!!S.specularMap,ut=!!S.specularColorMap,Bt=!!S.specularIntensityMap,D=Q&&!!S.transmissionMap,rt=Q&&!!S.thicknessMap,lt=!!S.gradientMap,gt=!!S.alphaMap,nt=S.alphaTest>0,Z=!!S.alphaHash,Mt=!!S.extensions;let Ft=Tn;S.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ft=i.toneMapping);const ee={shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:ft,fragmentShader:Et,defines:S.defines,customVertexShaderID:vt,customFragmentShaderID:B,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:ot,batchingColor:ot&&k._colorsTexture!==null,instancing:mt,instancingColor:mt&&k.instanceColor!==null,instancingMorph:mt&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:yi,alphaToCoverage:!!S.alphaToCoverage,map:Pt,matcap:he,envMap:A,envMapMode:A&&J.mapping,envMapCubeUVHeight:V,aoMap:se,lightMap:Ot,bumpMap:It,normalMap:St,displacementMap:p&&re,emissiveMap:yt,normalMapObjectSpace:St&&S.normalMapType===Yc,normalMapTangentSpace:St&&S.normalMapType===yl,metalnessMap:Ht,roughnessMap:ge,anisotropy:ce,anisotropyMap:Y,clearcoat:E,clearcoatMap:wt,clearcoatNormalMap:at,clearcoatRoughnessMap:bt,dispersion:g,iridescence:F,iridescenceMap:Tt,iridescenceThicknessMap:st,sheen:q,sheenColorMap:pt,sheenRoughnessMap:Ut,specularMap:At,specularColorMap:ut,specularIntensityMap:Bt,transmission:Q,transmissionMap:D,thicknessMap:rt,gradientMap:lt,opaque:S.transparent===!1&&S.blending===_i&&S.alphaToCoverage===!1,alphaMap:gt,alphaTest:nt,alphaHash:Z,combine:S.combine,mapUv:Pt&&v(S.map.channel),aoMapUv:se&&v(S.aoMap.channel),lightMapUv:Ot&&v(S.lightMap.channel),bumpMapUv:It&&v(S.bumpMap.channel),normalMapUv:St&&v(S.normalMap.channel),displacementMapUv:re&&v(S.displacementMap.channel),emissiveMapUv:yt&&v(S.emissiveMap.channel),metalnessMapUv:Ht&&v(S.metalnessMap.channel),roughnessMapUv:ge&&v(S.roughnessMap.channel),anisotropyMapUv:Y&&v(S.anisotropyMap.channel),clearcoatMapUv:wt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:at&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:st&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&v(S.sheenRoughnessMap.channel),specularMapUv:At&&v(S.specularMap.channel),specularColorMapUv:ut&&v(S.specularColorMap.channel),specularIntensityMapUv:Bt&&v(S.specularIntensityMap.channel),transmissionMapUv:D&&v(S.transmissionMap.channel),thicknessMapUv:rt&&v(S.thicknessMap.channel),alphaMapUv:gt&&v(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(St||ce),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(Pt||gt),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:$,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:tt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Pt&&S.map.isVideoTexture===!0&&Yt.getTransfer(S.map.colorSpace)===Kt,decodeVideoTextureEmissive:yt&&S.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(S.emissiveMap.colorSpace)===Kt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===je,flipSided:S.side===we,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Mt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&S.extensions.multiDraw===!0||ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ee.vertexUv1s=c.has(1),ee.vertexUv2s=c.has(2),ee.vertexUv3s=c.has(3),c.clear(),ee}function h(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)M.push(w),M.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(b(M,S),T(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function T(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const M=_[S.type];let w;if(M){const O=qe[M];w=yh.clone(O.uniforms)}else w=S.uniforms;return w}function P(S,M){let w;for(let O=0,k=u.length;O<k;O++){const K=u[O];if(K.cacheKey===M){w=K,++w.usedTimes;break}}return w===void 0&&(w=new Jp(i,M,S,r),u.push(w)),w}function R(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function N(){l.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:y,acquireProgram:P,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:N}}function im(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function sm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function nl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function il(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,p,m,_,v,f){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:p,material:m,groupOrder:_,renderOrder:d.renderOrder,z:v,group:f},i[t]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=m,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=v,h.group=f),t++,h}function o(d,p,m,_,v,f){const h=a(d,p,m,_,v,f);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):e.push(h)}function l(d,p,m,_,v,f){const h=a(d,p,m,_,v,f);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):e.unshift(h)}function c(d,p){e.length>1&&e.sort(d||sm),n.length>1&&n.sort(p||nl),s.length>1&&s.sort(p||nl)}function u(){for(let d=t,p=i.length;d<p;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function rm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new il,i.set(n,[a])):s>=r.length?(a=new il,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function am(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Wt};break;case"SpotLight":e={position:new L,direction:new L,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function om(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let lm=0;function cm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function hm(i){const t=new am,e=om(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new ne,a=new ne;function o(c){let u=0,d=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,_=0,v=0,f=0,h=0,b=0,T=0,y=0,P=0,R=0,C=0;c.sort(cm);for(let S=0,M=c.length;S<M;S++){const w=c[S],O=w.color,k=w.intensity,K=w.distance,X=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=O.r*k,d+=O.g*k,p+=O.b*k;else if(w.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(w.sh.coefficients[j],k);C++}else if(w.isDirectionalLight){const j=t.get(w);if(j.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const J=w.shadow,V=e.get(w);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=w.shadow.matrix,b++}n.directional[m]=j,m++}else if(w.isSpotLight){const j=t.get(w);j.position.setFromMatrixPosition(w.matrixWorld),j.color.copy(O).multiplyScalar(k),j.distance=K,j.coneCos=Math.cos(w.angle),j.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),j.decay=w.decay,n.spot[v]=j;const J=w.shadow;if(w.map&&(n.spotLightMap[P]=w.map,P++,J.updateMatrices(w),w.castShadow&&R++),n.spotLightMatrix[v]=J.matrix,w.castShadow){const V=e.get(w);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=X,y++}v++}else if(w.isRectAreaLight){const j=t.get(w);j.color.copy(O).multiplyScalar(k),j.halfWidth.set(w.width*.5,0,0),j.halfHeight.set(0,w.height*.5,0),n.rectArea[f]=j,f++}else if(w.isPointLight){const j=t.get(w);if(j.color.copy(w.color).multiplyScalar(w.intensity),j.distance=w.distance,j.decay=w.decay,w.castShadow){const J=w.shadow,V=e.get(w);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=w.shadow.matrix,T++}n.point[_]=j,_++}else if(w.isHemisphereLight){const j=t.get(w);j.skyColor.copy(w.color).multiplyScalar(k),j.groundColor.copy(w.groundColor).multiplyScalar(k),n.hemi[h]=j,h++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;const N=n.hash;(N.directionalLength!==m||N.pointLength!==_||N.spotLength!==v||N.rectAreaLength!==f||N.hemiLength!==h||N.numDirectionalShadows!==b||N.numPointShadows!==T||N.numSpotShadows!==y||N.numSpotMaps!==P||N.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=f,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,N.directionalLength=m,N.pointLength=_,N.spotLength=v,N.rectAreaLength=f,N.hemiLength=h,N.numDirectionalShadows=b,N.numPointShadows=T,N.numSpotShadows=y,N.numSpotMaps=P,N.numLightProbes=C,n.version=lm++)}function l(c,u){let d=0,p=0,m=0,_=0,v=0;const f=u.matrixWorldInverse;for(let h=0,b=c.length;h<b;h++){const T=c[h];if(T.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),d++}else if(T.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),m++}else if(T.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(f),a.identity(),r.copy(T.matrixWorld),r.premultiply(f),a.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(f),p++}else if(T.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(f),v++}}}return{setup:o,setupView:l,state:n}}function sl(i){const t=new hm(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function um(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new sl(i),t.set(s,[o])):r>=a.length?(o=new sl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pm(i,t,e){let n=new Oa;const s=new Ct,r=new Ct,a=new Qt,o=new Ih({depthPacking:Xc}),l=new Nh,c={},u=e.maxTextureSize,d={[wn]:we,[we]:wn,[je]:je},p=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:dm,fragmentShader:fm}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new xe;_.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ae(_,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let h=this.type;this.render=function(R,C,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),O=i.state;O.setBlending(bn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=h!==ln&&this.type===ln,K=h===ln&&this.type!==ln;for(let X=0,j=R.length;X<j;X++){const J=R[X],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const G=V.getFrameExtents();if(s.multiply(G),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,V.mapSize.y=r.y)),V.map===null||k===!0||K===!0){const ht=this.type!==ln?{minFilter:We,magFilter:We}:{};V.map!==null&&V.map.dispose(),V.map=new Wn(s.x,s.y,ht),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const et=V.getViewportCount();for(let ht=0;ht<et;ht++){const tt=V.getViewport(ht);a.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),O.viewport(a),V.updateMatrices(J,ht),n=V.getFrustum(),y(C,N,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===ln&&b(V,N),V.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(S,M,w)};function b(R,C){const N=t.update(v);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Wn(s.x,s.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,N,p,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,N,m,v,null)}function T(R,C,N,S){let M=null;const w=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)M=w;else if(M=N.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=M.uuid,k=C.uuid;let K=c[O];K===void 0&&(K={},c[O]=K);let X=K[k];X===void 0&&(X=M.clone(),K[k]=X,C.addEventListener("dispose",P)),M=X}if(M.visible=C.visible,M.wireframe=C.wireframe,S===ln?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=N}return M}function y(R,C,N,S,M){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===ln)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const k=t.update(R),K=R.material;if(Array.isArray(K)){const X=k.groups;for(let j=0,J=X.length;j<J;j++){const V=X[j],G=K[V.materialIndex];if(G&&G.visible){const et=T(R,G,S,M);R.onBeforeShadow(i,R,C,N,k,et,V),i.renderBufferDirect(N,null,k,et,R,V),R.onAfterShadow(i,R,C,N,k,et,V)}}}else if(K.visible){const X=T(R,K,S,M);R.onBeforeShadow(i,R,C,N,k,X,null),i.renderBufferDirect(N,null,k,X,R,null),R.onAfterShadow(i,R,C,N,k,X,null)}}const O=R.children;for(let k=0,K=O.length;k<K;k++)y(O[k],C,N,S,M)}function P(R){R.target.removeEventListener("dispose",P);for(const N in c){const S=c[N],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const mm={[Fr]:Or,[Br]:kr,[zr]:Vr,[xi]:Hr,[Or]:Fr,[kr]:Br,[Vr]:zr,[Hr]:xi};function _m(i,t){function e(){let D=!1;const rt=new Qt;let lt=null;const gt=new Qt(0,0,0,0);return{setMask:function(nt){lt!==nt&&!D&&(i.colorMask(nt,nt,nt,nt),lt=nt)},setLocked:function(nt){D=nt},setClear:function(nt,Z,Mt,Ft,ee){ee===!0&&(nt*=Ft,Z*=Ft,Mt*=Ft),rt.set(nt,Z,Mt,Ft),gt.equals(rt)===!1&&(i.clearColor(nt,Z,Mt,Ft),gt.copy(rt))},reset:function(){D=!1,lt=null,gt.set(-1,0,0,0)}}}function n(){let D=!1,rt=!1,lt=null,gt=null,nt=null;return{setReversed:function(Z){if(rt!==Z){const Mt=t.get("EXT_clip_control");Z?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),rt=Z;const Ft=nt;nt=null,this.setClear(Ft)}},getReversed:function(){return rt},setTest:function(Z){Z?W(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(Z){lt!==Z&&!D&&(i.depthMask(Z),lt=Z)},setFunc:function(Z){if(rt&&(Z=mm[Z]),gt!==Z){switch(Z){case Fr:i.depthFunc(i.NEVER);break;case Or:i.depthFunc(i.ALWAYS);break;case Br:i.depthFunc(i.LESS);break;case xi:i.depthFunc(i.LEQUAL);break;case zr:i.depthFunc(i.EQUAL);break;case Hr:i.depthFunc(i.GEQUAL);break;case kr:i.depthFunc(i.GREATER);break;case Vr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=Z}},setLocked:function(Z){D=Z},setClear:function(Z){nt!==Z&&(rt&&(Z=1-Z),i.clearDepth(Z),nt=Z)},reset:function(){D=!1,lt=null,gt=null,nt=null,rt=!1}}}function s(){let D=!1,rt=null,lt=null,gt=null,nt=null,Z=null,Mt=null,Ft=null,ee=null;return{setTest:function(qt){D||(qt?W(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(qt){rt!==qt&&!D&&(i.stencilMask(qt),rt=qt)},setFunc:function(qt,en,Ye){(lt!==qt||gt!==en||nt!==Ye)&&(i.stencilFunc(qt,en,Ye),lt=qt,gt=en,nt=Ye)},setOp:function(qt,en,Ye){(Z!==qt||Mt!==en||Ft!==Ye)&&(i.stencilOp(qt,en,Ye),Z=qt,Mt=en,Ft=Ye)},setLocked:function(qt){D=qt},setClear:function(qt){ee!==qt&&(i.clearStencil(qt),ee=qt)},reset:function(){D=!1,rt=null,lt=null,gt=null,nt=null,Z=null,Mt=null,Ft=null,ee=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},p=new WeakMap,m=[],_=null,v=!1,f=null,h=null,b=null,T=null,y=null,P=null,R=null,C=new Wt(0,0,0),N=0,S=!1,M=null,w=null,O=null,k=null,K=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,J=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=J>=2);let G=null,et={};const ht=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),ft=new Qt().fromArray(ht),Et=new Qt().fromArray(tt);function vt(D,rt,lt,gt){const nt=new Uint8Array(4),Z=i.createTexture();i.bindTexture(D,Z),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Mt=0;Mt<lt;Mt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(rt+Mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return Z}const B={};B[i.TEXTURE_2D]=vt(i.TEXTURE_2D,i.TEXTURE_2D,1),B[i.TEXTURE_CUBE_MAP]=vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[i.TEXTURE_2D_ARRAY]=vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),B[i.TEXTURE_3D]=vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(i.DEPTH_TEST),a.setFunc(xi),It(!1),St(Ja),W(i.CULL_FACE),se(bn);function W(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function $(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function mt(D,rt){return d[D]!==rt?(i.bindFramebuffer(D,rt),d[D]=rt,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=rt),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function ot(D,rt){let lt=m,gt=!1;if(D){lt=p.get(rt),lt===void 0&&(lt=[],p.set(rt,lt));const nt=D.textures;if(lt.length!==nt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,Mt=nt.length;Z<Mt;Z++)lt[Z]=i.COLOR_ATTACHMENT0+Z;lt.length=nt.length,gt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,gt=!0);gt&&i.drawBuffers(lt)}function Pt(D){return _!==D?(i.useProgram(D),_=D,!0):!1}const he={[Bn]:i.FUNC_ADD,[vc]:i.FUNC_SUBTRACT,[xc]:i.FUNC_REVERSE_SUBTRACT};he[Mc]=i.MIN,he[Sc]=i.MAX;const A={[yc]:i.ZERO,[Ec]:i.ONE,[bc]:i.SRC_COLOR,[Ir]:i.SRC_ALPHA,[Pc]:i.SRC_ALPHA_SATURATE,[Rc]:i.DST_COLOR,[Ac]:i.DST_ALPHA,[Tc]:i.ONE_MINUS_SRC_COLOR,[Nr]:i.ONE_MINUS_SRC_ALPHA,[Cc]:i.ONE_MINUS_DST_COLOR,[wc]:i.ONE_MINUS_DST_ALPHA,[Dc]:i.CONSTANT_COLOR,[Lc]:i.ONE_MINUS_CONSTANT_COLOR,[Uc]:i.CONSTANT_ALPHA,[Ic]:i.ONE_MINUS_CONSTANT_ALPHA};function se(D,rt,lt,gt,nt,Z,Mt,Ft,ee,qt){if(D===bn){v===!0&&($(i.BLEND),v=!1);return}if(v===!1&&(W(i.BLEND),v=!0),D!==gc){if(D!==f||qt!==S){if((h!==Bn||y!==Bn)&&(i.blendEquation(i.FUNC_ADD),h=Bn,y=Bn),qt)switch(D){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ns:i.blendFunc(i.ONE,i.ONE);break;case Qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case to:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case to:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,T=null,P=null,R=null,C.set(0,0,0),N=0,f=D,S=qt}return}nt=nt||rt,Z=Z||lt,Mt=Mt||gt,(rt!==h||nt!==y)&&(i.blendEquationSeparate(he[rt],he[nt]),h=rt,y=nt),(lt!==b||gt!==T||Z!==P||Mt!==R)&&(i.blendFuncSeparate(A[lt],A[gt],A[Z],A[Mt]),b=lt,T=gt,P=Z,R=Mt),(Ft.equals(C)===!1||ee!==N)&&(i.blendColor(Ft.r,Ft.g,Ft.b,ee),C.copy(Ft),N=ee),f=D,S=!1}function Ot(D,rt){D.side===je?$(i.CULL_FACE):W(i.CULL_FACE);let lt=D.side===we;rt&&(lt=!lt),It(lt),D.blending===_i&&D.transparent===!1?se(bn):se(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const gt=D.stencilWrite;o.setTest(gt),gt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),yt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function St(D){D!==pc?(W(i.CULL_FACE),D!==w&&(D===Ja?i.cullFace(i.BACK):D===mc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),w=D}function re(D){D!==O&&(j&&i.lineWidth(D),O=D)}function yt(D,rt,lt){D?(W(i.POLYGON_OFFSET_FILL),(k!==rt||K!==lt)&&(i.polygonOffset(rt,lt),k=rt,K=lt)):$(i.POLYGON_OFFSET_FILL)}function Ht(D){D?W(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function ge(D){D===void 0&&(D=i.TEXTURE0+X-1),G!==D&&(i.activeTexture(D),G=D)}function ce(D,rt,lt){lt===void 0&&(G===null?lt=i.TEXTURE0+X-1:lt=G);let gt=et[lt];gt===void 0&&(gt={type:void 0,texture:void 0},et[lt]=gt),(gt.type!==D||gt.texture!==rt)&&(G!==lt&&(i.activeTexture(lt),G=lt),i.bindTexture(D,rt||B[D]),gt.type=D,gt.texture=rt)}function E(){const D=et[G];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(D){ft.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ft.copy(D))}function Ut(D){Et.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Et.copy(D))}function At(D,rt){let lt=c.get(rt);lt===void 0&&(lt=new WeakMap,c.set(rt,lt));let gt=lt.get(D);gt===void 0&&(gt=i.getUniformBlockIndex(rt,D.name),lt.set(D,gt))}function ut(D,rt){const gt=c.get(rt).get(D);l.get(rt)!==gt&&(i.uniformBlockBinding(rt,gt,D.__bindingPointIndex),l.set(rt,gt))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},G=null,et={},d={},p=new WeakMap,m=[],_=null,v=!1,f=null,h=null,b=null,T=null,y=null,P=null,R=null,C=new Wt(0,0,0),N=0,S=!1,M=null,w=null,O=null,k=null,K=null,ft.set(0,0,i.canvas.width,i.canvas.height),Et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:W,disable:$,bindFramebuffer:mt,drawBuffers:ot,useProgram:Pt,setBlending:se,setMaterial:Ot,setFlipSided:It,setCullFace:St,setLineWidth:re,setPolygonOffset:yt,setScissorTest:Ht,activeTexture:ge,bindTexture:ce,unbindTexture:E,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:Tt,texImage3D:st,updateUBOMapping:At,uniformBlockBinding:ut,texStorage2D:at,texStorage3D:bt,texSubImage2D:q,texSubImage3D:Q,compressedTexSubImage2D:Y,compressedTexSubImage3D:wt,scissor:pt,viewport:Ut,reset:Bt}}function gm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,u=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,g){return m?new OffscreenCanvas(E,g):Bs("canvas")}function v(E,g,F){let q=1;const Q=ce(E);if((Q.width>F||Q.height>F)&&(q=F/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(q*Q.width),wt=Math.floor(q*Q.height);d===void 0&&(d=_(Y,wt));const at=g?_(Y,wt):d;return at.width=Y,at.height=wt,at.getContext("2d").drawImage(E,0,0,Y,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+wt+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function f(E){return E.generateMipmaps}function h(E){i.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,g,F,q,Q=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=g;if(g===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),g===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),g===i.RGBA){const wt=Q?Fs:Yt.getTransfer(q);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=wt===Kt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(E,g){let F;return E?g===null||g===Vn||g===ki?F=i.DEPTH24_STENCIL8:g===cn?F=i.DEPTH32F_STENCIL8:g===Hi&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Vn||g===ki?F=i.DEPTH_COMPONENT24:g===cn?F=i.DEPTH_COMPONENT32F:g===Hi&&(F=i.DEPTH_COMPONENT16),F}function P(E,g){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==We&&E.minFilter!==$e?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function R(E){const g=E.target;g.removeEventListener("dispose",R),N(g),g.isVideoTexture&&u.delete(g)}function C(E){const g=E.target;g.removeEventListener("dispose",C),M(g)}function N(E){const g=n.get(E);if(g.__webglInit===void 0)return;const F=E.source,q=p.get(F);if(q){const Q=q[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(E),Object.keys(q).length===0&&p.delete(F)}n.remove(E)}function S(E){const g=n.get(E);i.deleteTexture(g.__webglTexture);const F=E.source,q=p.get(F);delete q[g.__cacheKey],a.memory.textures--}function M(E){const g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let Q=0;Q<g.__webglFramebuffer[q].length;Q++)i.deleteFramebuffer(g.__webglFramebuffer[q][Q]);else i.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)i.deleteFramebuffer(g.__webglFramebuffer[q]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=E.textures;for(let q=0,Q=F.length;q<Q;q++){const Y=n.get(F[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(F[q])}n.remove(E)}let w=0;function O(){w=0}function k(){const E=w;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),w+=1,E}function K(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function X(E,g){const F=n.get(E);if(E.isVideoTexture&&Ht(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){const q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(F,E,g);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function j(E,g){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){B(F,E,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function J(E,g){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){B(F,E,g);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function V(E,g){const F=n.get(E);if(E.version>0&&F.__version!==E.version){W(F,E,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}const G={[Xr]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[Yr]:i.MIRRORED_REPEAT},et={[We]:i.NEAREST,[Gc]:i.NEAREST_MIPMAP_NEAREST,[Ji]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[$s]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},ht={[qc]:i.NEVER,[Qc]:i.ALWAYS,[jc]:i.LESS,[El]:i.LEQUAL,[Kc]:i.EQUAL,[Jc]:i.GEQUAL,[$c]:i.GREATER,[Zc]:i.NOTEQUAL};function tt(E,g){if(g.type===cn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===$e||g.magFilter===$s||g.magFilter===Ji||g.magFilter===kn||g.minFilter===$e||g.minFilter===$s||g.minFilter===Ji||g.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,G[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,G[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,G[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,et[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,et[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ht[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===We||g.minFilter!==Ji&&g.minFilter!==kn||g.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function ft(E,g){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",R));const q=g.source;let Q=p.get(q);Q===void 0&&(Q={},p.set(q,Q));const Y=K(g);if(Y!==E.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[Y].usedTimes++;const wt=Q[E.__cacheKey];wt!==void 0&&(Q[E.__cacheKey].usedTimes--,wt.usedTimes===0&&S(g)),E.__cacheKey=Y,E.__webglTexture=Q[Y].texture}return F}function Et(E,g,F){return Math.floor(Math.floor(E/F)/g)}function vt(E,g,F,q){const Y=E.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,q,g.data);else{Y.sort((st,pt)=>st.start-pt.start);let wt=0;for(let st=1;st<Y.length;st++){const pt=Y[wt],Ut=Y[st],At=pt.start+pt.count,ut=Et(Ut.start,g.width,4),Bt=Et(pt.start,g.width,4);Ut.start<=At+1&&ut===Bt&&Et(Ut.start+Ut.count-1,g.width,4)===ut?pt.count=Math.max(pt.count,Ut.start+Ut.count-pt.start):(++wt,Y[wt]=Ut)}Y.length=wt+1;const at=i.getParameter(i.UNPACK_ROW_LENGTH),bt=i.getParameter(i.UNPACK_SKIP_PIXELS),Tt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let st=0,pt=Y.length;st<pt;st++){const Ut=Y[st],At=Math.floor(Ut.start/4),ut=Math.ceil(Ut.count/4),Bt=At%g.width,D=Math.floor(At/g.width),rt=ut,lt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,Bt,D,rt,lt,F,q,g.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,at),i.pixelStorei(i.UNPACK_SKIP_PIXELS,bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function B(E,g,F){let q=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=i.TEXTURE_3D);const Q=ft(E,g),Y=g.source;e.bindTexture(q,E.__webglTexture,i.TEXTURE0+F);const wt=n.get(Y);if(Y.version!==wt.__version||Q===!0){e.activeTexture(i.TEXTURE0+F);const at=Yt.getPrimaries(Yt.workingColorSpace),bt=g.colorSpace===yn?null:Yt.getPrimaries(g.colorSpace),Tt=g.colorSpace===yn||at===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let st=v(g.image,!1,s.maxTextureSize);st=ge(g,st);const pt=r.convert(g.format,g.colorSpace),Ut=r.convert(g.type);let At=T(g.internalFormat,pt,Ut,g.colorSpace,g.isVideoTexture);tt(q,g);let ut;const Bt=g.mipmaps,D=g.isVideoTexture!==!0,rt=wt.__version===void 0||Q===!0,lt=Y.dataReady,gt=P(g,st);if(g.isDepthTexture)At=y(g.format===Gi,g.type),rt&&(D?e.texStorage2D(i.TEXTURE_2D,1,At,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,At,st.width,st.height,0,pt,Ut,null));else if(g.isDataTexture)if(Bt.length>0){D&&rt&&e.texStorage2D(i.TEXTURE_2D,gt,At,Bt[0].width,Bt[0].height);for(let nt=0,Z=Bt.length;nt<Z;nt++)ut=Bt[nt],D?lt&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ut.width,ut.height,pt,Ut,ut.data):e.texImage2D(i.TEXTURE_2D,nt,At,ut.width,ut.height,0,pt,Ut,ut.data);g.generateMipmaps=!1}else D?(rt&&e.texStorage2D(i.TEXTURE_2D,gt,At,st.width,st.height),lt&&vt(g,st,pt,Ut)):e.texImage2D(i.TEXTURE_2D,0,At,st.width,st.height,0,pt,Ut,st.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,At,Bt[0].width,Bt[0].height,st.depth);for(let nt=0,Z=Bt.length;nt<Z;nt++)if(ut=Bt[nt],g.format!==Ge)if(pt!==null)if(D){if(lt)if(g.layerUpdates.size>0){const Mt=Io(ut.width,ut.height,g.format,g.type);for(const Ft of g.layerUpdates){const ee=ut.data.subarray(Ft*Mt/ut.data.BYTES_PER_ELEMENT,(Ft+1)*Mt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,Ft,ut.width,ut.height,1,pt,ee)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,st.depth,pt,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,At,ut.width,ut.height,st.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?lt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,st.depth,pt,Ut,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,At,ut.width,ut.height,st.depth,0,pt,Ut,ut.data)}else{D&&rt&&e.texStorage2D(i.TEXTURE_2D,gt,At,Bt[0].width,Bt[0].height);for(let nt=0,Z=Bt.length;nt<Z;nt++)ut=Bt[nt],g.format!==Ge?pt!==null?D?lt&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,ut.width,ut.height,pt,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,At,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?lt&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ut.width,ut.height,pt,Ut,ut.data):e.texImage2D(i.TEXTURE_2D,nt,At,ut.width,ut.height,0,pt,Ut,ut.data)}else if(g.isDataArrayTexture)if(D){if(rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,At,st.width,st.height,st.depth),lt)if(g.layerUpdates.size>0){const nt=Io(st.width,st.height,g.format,g.type);for(const Z of g.layerUpdates){const Mt=st.data.subarray(Z*nt/st.data.BYTES_PER_ELEMENT,(Z+1)*nt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,st.width,st.height,1,pt,Ut,Mt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,pt,Ut,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,st.width,st.height,st.depth,0,pt,Ut,st.data);else if(g.isData3DTexture)D?(rt&&e.texStorage3D(i.TEXTURE_3D,gt,At,st.width,st.height,st.depth),lt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,pt,Ut,st.data)):e.texImage3D(i.TEXTURE_3D,0,At,st.width,st.height,st.depth,0,pt,Ut,st.data);else if(g.isFramebufferTexture){if(rt)if(D)e.texStorage2D(i.TEXTURE_2D,gt,At,st.width,st.height);else{let nt=st.width,Z=st.height;for(let Mt=0;Mt<gt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,At,nt,Z,0,pt,Ut,null),nt>>=1,Z>>=1}}else if(Bt.length>0){if(D&&rt){const nt=ce(Bt[0]);e.texStorage2D(i.TEXTURE_2D,gt,At,nt.width,nt.height)}for(let nt=0,Z=Bt.length;nt<Z;nt++)ut=Bt[nt],D?lt&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,pt,Ut,ut):e.texImage2D(i.TEXTURE_2D,nt,At,pt,Ut,ut);g.generateMipmaps=!1}else if(D){if(rt){const nt=ce(st);e.texStorage2D(i.TEXTURE_2D,gt,At,nt.width,nt.height)}lt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Ut,st)}else e.texImage2D(i.TEXTURE_2D,0,At,pt,Ut,st);f(g)&&h(q),wt.__version=Y.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function W(E,g,F){if(g.image.length!==6)return;const q=ft(E,g),Q=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const Y=n.get(Q);if(Q.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+F);const wt=Yt.getPrimaries(Yt.workingColorSpace),at=g.colorSpace===yn?null:Yt.getPrimaries(g.colorSpace),bt=g.colorSpace===yn||wt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Tt=g.isCompressedTexture||g.image[0].isCompressedTexture,st=g.image[0]&&g.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Tt&&!st?pt[Z]=v(g.image[Z],!0,s.maxCubemapSize):pt[Z]=st?g.image[Z].image:g.image[Z],pt[Z]=ge(g,pt[Z]);const Ut=pt[0],At=r.convert(g.format,g.colorSpace),ut=r.convert(g.type),Bt=T(g.internalFormat,At,ut,g.colorSpace),D=g.isVideoTexture!==!0,rt=Y.__version===void 0||q===!0,lt=Q.dataReady;let gt=P(g,Ut);tt(i.TEXTURE_CUBE_MAP,g);let nt;if(Tt){D&&rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Bt,Ut.width,Ut.height);for(let Z=0;Z<6;Z++){nt=pt[Z].mipmaps;for(let Mt=0;Mt<nt.length;Mt++){const Ft=nt[Mt];g.format!==Ge?At!==null?D?lt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt,0,0,Ft.width,Ft.height,At,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt,Bt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt,0,0,Ft.width,Ft.height,At,ut,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt,Bt,Ft.width,Ft.height,0,At,ut,Ft.data)}}}else{if(nt=g.mipmaps,D&&rt){nt.length>0&&gt++;const Z=ce(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Bt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(st){D?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,At,ut,pt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Bt,pt[Z].width,pt[Z].height,0,At,ut,pt[Z].data);for(let Mt=0;Mt<nt.length;Mt++){const ee=nt[Mt].image[Z].image;D?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt+1,0,0,ee.width,ee.height,At,ut,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt+1,Bt,ee.width,ee.height,0,At,ut,ee.data)}}else{D?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,At,ut,pt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Bt,At,ut,pt[Z]);for(let Mt=0;Mt<nt.length;Mt++){const Ft=nt[Mt];D?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt+1,0,0,At,ut,Ft.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt+1,Bt,At,ut,Ft.image[Z])}}}f(g)&&h(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function $(E,g,F,q,Q,Y){const wt=r.convert(F.format,F.colorSpace),at=r.convert(F.type),bt=T(F.internalFormat,wt,at,F.colorSpace),Tt=n.get(g),st=n.get(F);if(st.__renderTarget=g,!Tt.__hasExternalTextures){const pt=Math.max(1,g.width>>Y),Ut=Math.max(1,g.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,bt,pt,Ut,g.depth,0,wt,at,null):e.texImage2D(Q,Y,bt,pt,Ut,0,wt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),yt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Q,st.__webglTexture,0,re(g)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Q,st.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(E,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){const q=g.depthTexture,Q=q&&q.isDepthTexture?q.type:null,Y=y(g.stencilBuffer,Q),wt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=re(g);yt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Y,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Y,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Y,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,E)}else{const q=g.textures;for(let Q=0;Q<q.length;Q++){const Y=q[Q],wt=r.convert(Y.format,Y.colorSpace),at=r.convert(Y.type),bt=T(Y.internalFormat,wt,at,Y.colorSpace),Tt=re(g);F&&yt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,bt,g.width,g.height):yt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,bt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,bt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(g.depthTexture);q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X(g.depthTexture,0);const Q=q.__webglTexture,Y=re(g);if(g.depthTexture.format===Vi)yt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(g.depthTexture.format===Gi)yt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Pt(E){const g=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=q}if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const q=E.texture.mipmaps;q&&q.length>0?ot(g.__webglFramebuffer[0],E):ot(g.__webglFramebuffer,E)}else if(F){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=i.createRenderbuffer(),mt(g.__webglDepthbuffer[q],E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else{const q=E.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),mt(g.__webglDepthbuffer,E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function he(E,g,F){const q=n.get(E);g!==void 0&&$(q.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Pt(E)}function A(E){const g=E.texture,F=n.get(E),q=n.get(g);E.addEventListener("dispose",C);const Q=E.textures,Y=E.isWebGLCubeRenderTarget===!0,wt=Q.length>1;if(wt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=g.version,a.memory.textures++),Y){F.__webglFramebuffer=[];for(let at=0;at<6;at++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[at]=[];for(let bt=0;bt<g.mipmaps.length;bt++)F.__webglFramebuffer[at][bt]=i.createFramebuffer()}else F.__webglFramebuffer[at]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let at=0;at<g.mipmaps.length;at++)F.__webglFramebuffer[at]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(wt)for(let at=0,bt=Q.length;at<bt;at++){const Tt=n.get(Q[at]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&yt(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let at=0;at<Q.length;at++){const bt=Q[at];F.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[at]);const Tt=r.convert(bt.format,bt.colorSpace),st=r.convert(bt.type),pt=T(bt.internalFormat,Tt,st,bt.colorSpace,E.isXRRenderTarget===!0),Ut=re(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,pt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,F.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),tt(i.TEXTURE_CUBE_MAP,g);for(let at=0;at<6;at++)if(g.mipmaps&&g.mipmaps.length>0)for(let bt=0;bt<g.mipmaps.length;bt++)$(F.__webglFramebuffer[at][bt],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,bt);else $(F.__webglFramebuffer[at],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);f(g)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let at=0,bt=Q.length;at<bt;at++){const Tt=Q[at],st=n.get(Tt);let pt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,st.__webglTexture),tt(pt,Tt),$(F.__webglFramebuffer,E,Tt,i.COLOR_ATTACHMENT0+at,pt,0),f(Tt)&&h(pt)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,q.__webglTexture),tt(at,g),g.mipmaps&&g.mipmaps.length>0)for(let bt=0;bt<g.mipmaps.length;bt++)$(F.__webglFramebuffer[bt],E,g,i.COLOR_ATTACHMENT0,at,bt);else $(F.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,at,0);f(g)&&h(at),e.unbindTexture()}E.depthBuffer&&Pt(E)}function se(E){const g=E.textures;for(let F=0,q=g.length;F<q;F++){const Q=g[F];if(f(Q)){const Y=b(E),wt=n.get(Q).__webglTexture;e.bindTexture(Y,wt),h(Y),e.unbindTexture()}}}const Ot=[],It=[];function St(E){if(E.samples>0){if(yt(E)===!1){const g=E.textures,F=E.width,q=E.height;let Q=i.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(E),at=g.length>1;if(at)for(let Tt=0;Tt<g.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const bt=E.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Tt=0;Tt<g.length;Tt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Tt]);const st=n.get(g[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,F,q,0,0,F,q,Q,i.NEAREST),l===!0&&(Ot.length=0,It.length=0,Ot.push(i.COLOR_ATTACHMENT0+Tt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ot.push(Y),It.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,It)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let Tt=0;Tt<g.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Tt]);const st=n.get(g[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,st,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function re(E){return Math.min(s.maxSamples,E.samples)}function yt(E){const g=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ht(E){const g=a.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function ge(E,g){const F=E.colorSpace,q=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==yi&&F!==yn&&(Yt.getTransfer(F)===Kt?(q!==Ge||Q!==Je)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function ce(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=j,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=he,this.setupRenderTarget=A,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=$,this.useMultisampledRTT=yt}function vm(i,t){function e(n,s=yn){let r;const a=Yt.getTransfer(s);if(n===Je)return i.UNSIGNED_BYTE;if(n===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_l)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pl)return i.BYTE;if(n===ml)return i.SHORT;if(n===Hi)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===Xi)return i.HALF_FLOAT;if(n===vl)return i.ALPHA;if(n===xl)return i.RGB;if(n===Ge)return i.RGBA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===Ml)return i.RED;if(n===La)return i.RED_INTEGER;if(n===Sl)return i.RG;if(n===Ua)return i.RG_INTEGER;if(n===Ia)return i.RGBA_INTEGER;if(n===Rs||n===Cs||n===Ps||n===Ds)if(a===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qr||n===jr||n===Kr||n===$r)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$r)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zr||n===Jr||n===Qr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zr||n===Jr)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qr)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ta)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ea)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===na)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ia)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ra)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===aa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===la)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ca)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ha)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ua)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===da)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pa||n===ma||n===_a)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pa)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ga||n===va||n===xa||n===Ma)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Bl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new tn({vertexShader:xm,fragmentShader:Mm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new Xs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ym extends Yn{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,m=null,_=null;const v=typeof XRWebGLBinding<"u",f=new Sm,h={},b=e.getContextAttributes();let T=null,y=null;const P=[],R=[],C=new Ct;let N=null;const S=new De;S.viewport=new Qt;const M=new De;M.viewport=new Qt;const w=[S,M],O=new Hh;let k=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let W=P[B];return W===void 0&&(W=new vr,P[B]=W),W.getTargetRaySpace()},this.getControllerGrip=function(B){let W=P[B];return W===void 0&&(W=new vr,P[B]=W),W.getGripSpace()},this.getHand=function(B){let W=P[B];return W===void 0&&(W=new vr,P[B]=W),W.getHandSpace()};function X(B){const W=R.indexOf(B.inputSource);if(W===-1)return;const $=P[W];$!==void 0&&($.update(B.inputSource,B.frame,c||a),$.dispatchEvent({type:B.type,data:B.inputSource}))}function j(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",J);for(let B=0;B<P.length;B++){const W=R[B];W!==null&&(R[B]=null,P[B].disconnect(W))}k=null,K=null,f.reset();for(const B in h)delete h[B];t.setRenderTarget(T),m=null,p=null,d=null,s=null,y=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",j),s.addEventListener("inputsourceschange",J),b.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,mt=null,ot=null;b.depth&&(ot=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=b.stencil?Gi:Vi,mt=b.stencil?ki:Vn);const Pt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(Pt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new Wn(p.textureWidth,p.textureHeight,{format:Ge,type:Je,depthTexture:new Ol(p.textureWidth,p.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const $={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Wn(m.framebufferWidth,m.framebufferHeight,{format:Ge,type:Je,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),vt.setContext(s),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function J(B){for(let W=0;W<B.removed.length;W++){const $=B.removed[W],mt=R.indexOf($);mt>=0&&(R[mt]=null,P[mt].disconnect($))}for(let W=0;W<B.added.length;W++){const $=B.added[W];let mt=R.indexOf($);if(mt===-1){for(let Pt=0;Pt<P.length;Pt++)if(Pt>=R.length){R.push($),mt=Pt;break}else if(R[Pt]===null){R[Pt]=$,mt=Pt;break}if(mt===-1)break}const ot=P[mt];ot&&ot.connect($)}}const V=new L,G=new L;function et(B,W,$){V.setFromMatrixPosition(W.matrixWorld),G.setFromMatrixPosition($.matrixWorld);const mt=V.distanceTo(G),ot=W.projectionMatrix.elements,Pt=$.projectionMatrix.elements,he=ot[14]/(ot[10]-1),A=ot[14]/(ot[10]+1),se=(ot[9]+1)/ot[5],Ot=(ot[9]-1)/ot[5],It=(ot[8]-1)/ot[0],St=(Pt[8]+1)/Pt[0],re=he*It,yt=he*St,Ht=mt/(-It+St),ge=Ht*-It;if(W.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ge),B.translateZ(Ht),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),ot[10]===-1)B.projectionMatrix.copy(W.projectionMatrix),B.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const ce=he+Ht,E=A+Ht,g=re-ge,F=yt+(mt-ge),q=se*A/E*ce,Q=Ot*A/E*ce;B.projectionMatrix.makePerspective(g,F,q,Q,ce,E),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function ht(B,W){W===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(W.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let W=B.near,$=B.far;f.texture!==null&&(f.depthNear>0&&(W=f.depthNear),f.depthFar>0&&($=f.depthFar)),O.near=M.near=S.near=W,O.far=M.far=S.far=$,(k!==O.near||K!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,K=O.far),O.layers.mask=B.layers.mask|6,S.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;const mt=B.parent,ot=O.cameras;ht(O,mt);for(let Pt=0;Pt<ot.length;Pt++)ht(ot[Pt],mt);ot.length===2?et(O,S,M):O.projectionMatrix.copy(S.projectionMatrix),tt(B,O,mt)};function tt(B,W,$){$===null?B.matrix.copy(W.matrixWorld):(B.matrix.copy($.matrixWorld),B.matrix.invert(),B.matrix.multiply(W.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(W.projectionMatrix),B.projectionMatrixInverse.copy(W.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ya*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(B){l=B,p!==null&&(p.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(O)},this.getCameraTexture=function(B){return h[B]};let ft=null;function Et(B,W){if(u=W.getViewerPose(c||a),_=W,u!==null){const $=u.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let mt=!1;$.length!==O.cameras.length&&(O.cameras.length=0,mt=!0);for(let A=0;A<$.length;A++){const se=$[A];let Ot=null;if(m!==null)Ot=m.getViewport(se);else{const St=d.getViewSubImage(p,se);Ot=St.viewport,A===0&&(t.setRenderTargetTextures(y,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(y))}let It=w[A];It===void 0&&(It=new De,It.layers.enable(A),It.viewport=new Qt,w[A]=It),It.matrix.fromArray(se.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(se.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),A===0&&(O.matrix.copy(It.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),mt===!0&&O.cameras.push(It)}const ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const A=d.getDepthInformation($[0]);A&&A.isValid&&A.texture&&f.init(A,s.renderState)}if(ot&&ot.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let A=0;A<$.length;A++){const se=$[A].camera;if(se){let Ot=h[se];Ot||(Ot=new Bl,h[se]=Ot);const It=d.getCameraImage(se);Ot.sourceTexture=It}}}}for(let $=0;$<P.length;$++){const mt=R[$],ot=P[$];mt!==null&&ot!==void 0&&ot.update(mt,W,c||a)}ft&&ft(B,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),_=null}const vt=new Gl;vt.setAnimationLoop(Et),this.setAnimationLoop=function(B){ft=B},this.dispose=function(){}}}const Fn=new Qe,Em=new ne;function bm(i,t){function e(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,Cl(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function s(f,h,b,T,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(f,h):h.isMeshToonMaterial?(r(f,h),d(f,h)):h.isMeshPhongMaterial?(r(f,h),u(f,h)):h.isMeshStandardMaterial?(r(f,h),p(f,h),h.isMeshPhysicalMaterial&&m(f,h,y)):h.isMeshMatcapMaterial?(r(f,h),_(f,h)):h.isMeshDepthMaterial?r(f,h):h.isMeshDistanceMaterial?(r(f,h),v(f,h)):h.isMeshNormalMaterial?r(f,h):h.isLineBasicMaterial?(a(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?l(f,h,b,T):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,e(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===we&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,e(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===we&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,e(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,e(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const b=t.get(h),T=b.envMap,y=b.envMapRotation;T&&(f.envMap.value=T,Fn.copy(y),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),f.envMapRotation.value.setFromMatrix4(Em.makeRotationFromEuler(Fn)),f.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,f.aoMapTransform))}function a(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,b,T){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*b,f.scale.value=T*.5,h.map&&(f.map.value=h.map,e(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function d(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function p(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,b){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===we&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,h){h.matcap&&(f.matcap.value=h.matcap)}function v(f,h){const b=t.get(h).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const y=T.program;n.uniformBlockBinding(b,y)}function c(b,T){let y=s[b.id];y===void 0&&(_(b),y=u(b),s[b.id]=y,b.addEventListener("dispose",f));const P=T.program;n.updateUBOMapping(b,P);const R=t.render.frame;r[b.id]!==R&&(p(b),r[b.id]=R)}function u(b){const T=d();b.__bindingPointIndex=T;const y=i.createBuffer(),P=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const T=s[b.id],y=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,C=y.length;R<C;R++){const N=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,M=N.length;S<M;S++){const w=N[S];if(m(w,R,S,P)===!0){const O=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let K=0;for(let X=0;X<k.length;X++){const j=k[X],J=v(j);typeof j=="number"||typeof j=="boolean"?(w.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,O+K,w.__data)):j.isMatrix3?(w.__data[0]=j.elements[0],w.__data[1]=j.elements[1],w.__data[2]=j.elements[2],w.__data[3]=0,w.__data[4]=j.elements[3],w.__data[5]=j.elements[4],w.__data[6]=j.elements[5],w.__data[7]=0,w.__data[8]=j.elements[6],w.__data[9]=j.elements[7],w.__data[10]=j.elements[8],w.__data[11]=0):(j.toArray(w.__data,K),K+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,T,y,P){const R=b.value,C=T+"_"+y;if(P[C]===void 0)return typeof R=="number"||typeof R=="boolean"?P[C]=R:P[C]=R.clone(),!0;{const N=P[C];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return P[C]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function _(b){const T=b.uniforms;let y=0;const P=16;for(let C=0,N=T.length;C<N;C++){const S=Array.isArray(T[C])?T[C]:[T[C]];for(let M=0,w=S.length;M<w;M++){const O=S[M],k=Array.isArray(O.value)?O.value:[O.value];for(let K=0,X=k.length;K<X;K++){const j=k[K],J=v(j),V=y%P,G=V%J.boundary,et=V+G;y+=G,et!==0&&P-et<J.storage&&(y+=P-et),O.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=J.storage}}}const R=y%P;return R>0&&(y+=P-R),b.__size=y,b.__cache={},this}function v(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function f(b){const T=b.target;T.removeEventListener("dispose",f);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function h(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class jl{constructor(t={}){const{canvas:e=nh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),v=new Int32Array(4);let f=null,h=null;const b=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let P=!1;this._outputColorSpace=ye;let R=0,C=0,N=null,S=-1,M=null;const w=new Qt,O=new Qt;let k=null;const K=new Wt(0);let X=0,j=e.width,J=e.height,V=1,G=null,et=null;const ht=new Qt(0,0,j,J),tt=new Qt(0,0,j,J);let ft=!1;const Et=new Oa;let vt=!1,B=!1;const W=new ne,$=new L,mt=new Qt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function he(){return N===null?V:1}let A=n;function se(x,U){return e.getContext(x,U)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ra}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),A===null){const U="webgl2";if(A=se(U,x),A===null)throw se(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ot,It,St,re,yt,Ht,ge,ce,E,g,F,q,Q,Y,wt,at,bt,Tt,st,pt,Ut,At,ut,Bt;function D(){Ot=new Ff(A),Ot.init(),At=new vm(A,Ot),It=new Cf(A,Ot,t,At),St=new _m(A,Ot),It.reversedDepthBuffer&&p&&St.buffers.depth.setReversed(!0),re=new zf(A),yt=new im,Ht=new gm(A,Ot,St,yt,It,At,re),ge=new Df(y),ce=new Nf(y),E=new Wh(A),ut=new wf(A,E),g=new Of(A,E,re,ut),F=new kf(A,g,E,re),st=new Hf(A,It,Ht),at=new Pf(yt),q=new nm(y,ge,ce,Ot,It,ut,at),Q=new bm(y,yt),Y=new rm,wt=new um(Ot),Tt=new Af(y,ge,ce,St,F,m,l),bt=new pm(y,F,It),Bt=new Tm(A,re,It,St),pt=new Rf(A,Ot,re),Ut=new Bf(A,Ot,re),re.programs=q.programs,y.capabilities=It,y.extensions=Ot,y.properties=yt,y.renderLists=Y,y.shadowMap=bt,y.state=St,y.info=re}D();const rt=new ym(y,A);this.xr=rt,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const x=Ot.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ot.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize(j,J,!1))},this.getSize=function(x){return x.set(j,J)},this.setSize=function(x,U,z=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=x,J=U,e.width=Math.floor(x*V),e.height=Math.floor(U*V),z===!0&&(e.style.width=x+"px",e.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(j*V,J*V).floor()},this.setDrawingBufferSize=function(x,U,z){j=x,J=U,V=z,e.width=Math.floor(x*z),e.height=Math.floor(U*z),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(w)},this.getViewport=function(x){return x.copy(ht)},this.setViewport=function(x,U,z,H){x.isVector4?ht.set(x.x,x.y,x.z,x.w):ht.set(x,U,z,H),St.viewport(w.copy(ht).multiplyScalar(V).round())},this.getScissor=function(x){return x.copy(tt)},this.setScissor=function(x,U,z,H){x.isVector4?tt.set(x.x,x.y,x.z,x.w):tt.set(x,U,z,H),St.scissor(O.copy(tt).multiplyScalar(V).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(x){St.setScissorTest(ft=x)},this.setOpaqueSort=function(x){G=x},this.setTransparentSort=function(x){et=x},this.getClearColor=function(x){return x.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,z=!0){let H=0;if(x){let I=!1;if(N!==null){const it=N.texture.format;I=it===Ia||it===Ua||it===La}if(I){const it=N.texture.type,dt=it===Je||it===Vn||it===Hi||it===ki||it===Pa||it===Da,xt=Tt.getClearColor(),_t=Tt.getClearAlpha(),Lt=xt.r,Nt=xt.g,Rt=xt.b;dt?(_[0]=Lt,_[1]=Nt,_[2]=Rt,_[3]=_t,A.clearBufferuiv(A.COLOR,0,_)):(v[0]=Lt,v[1]=Nt,v[2]=Rt,v[3]=_t,A.clearBufferiv(A.COLOR,0,v))}else H|=A.COLOR_BUFFER_BIT}U&&(H|=A.DEPTH_BUFFER_BIT),z&&(H|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),Tt.dispose(),Y.dispose(),wt.dispose(),yt.dispose(),ge.dispose(),ce.dispose(),F.dispose(),ut.dispose(),Bt.dispose(),q.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Ye),rt.removeEventListener("sessionend",Ya),Cn.stop()};function lt(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const x=re.autoReset,U=bt.enabled,z=bt.autoUpdate,H=bt.needsUpdate,I=bt.type;D(),re.autoReset=x,bt.enabled=U,bt.autoUpdate=z,bt.needsUpdate=H,bt.type=I}function nt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Z(x){const U=x.target;U.removeEventListener("dispose",Z),Mt(U)}function Mt(x){Ft(x),yt.remove(x)}function Ft(x){const U=yt.get(x).programs;U!==void 0&&(U.forEach(function(z){q.releaseProgram(z)}),x.isShaderMaterial&&q.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,z,H,I,it){U===null&&(U=ot);const dt=I.isMesh&&I.matrixWorld.determinant()<0,xt=ec(x,U,z,H,I);St.setMaterial(H,dt);let _t=z.index,Lt=1;if(H.wireframe===!0){if(_t=g.getWireframeAttribute(z),_t===void 0)return;Lt=2}const Nt=z.drawRange,Rt=z.attributes.position;let Gt=Nt.start*Lt,jt=(Nt.start+Nt.count)*Lt;it!==null&&(Gt=Math.max(Gt,it.start*Lt),jt=Math.min(jt,(it.start+it.count)*Lt)),_t!==null?(Gt=Math.max(Gt,0),jt=Math.min(jt,_t.count)):Rt!=null&&(Gt=Math.max(Gt,0),jt=Math.min(jt,Rt.count));const le=jt-Gt;if(le<0||le===1/0)return;ut.setup(I,H,xt,z,_t);let ie,te=pt;if(_t!==null&&(ie=E.get(_t),te=Ut,te.setIndex(ie)),I.isMesh)H.wireframe===!0?(St.setLineWidth(H.wireframeLinewidth*he()),te.setMode(A.LINES)):te.setMode(A.TRIANGLES);else if(I.isLine){let Dt=H.linewidth;Dt===void 0&&(Dt=1),St.setLineWidth(Dt*he()),I.isLineSegments?te.setMode(A.LINES):I.isLineLoop?te.setMode(A.LINE_LOOP):te.setMode(A.LINE_STRIP)}else I.isPoints?te.setMode(A.POINTS):I.isSprite&&te.setMode(A.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Wi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),te.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))te.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Dt=I._multiDrawStarts,ae=I._multiDrawCounts,Xt=I._multiDrawCount,Le=_t?E.get(_t).bytesPerElement:1,qn=yt.get(H).currentProgram.getUniforms();for(let Ue=0;Ue<Xt;Ue++)qn.setValue(A,"_gl_DrawID",Ue),te.render(Dt[Ue]/Le,ae[Ue])}else if(I.isInstancedMesh)te.renderInstances(Gt,le,I.count);else if(z.isInstancedBufferGeometry){const Dt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ae=Math.min(z.instanceCount,Dt);te.renderInstances(Gt,le,ae)}else te.render(Gt,le)};function ee(x,U,z){x.transparent===!0&&x.side===je&&x.forceSinglePass===!1?(x.side=we,x.needsUpdate=!0,Zi(x,U,z),x.side=wn,x.needsUpdate=!0,Zi(x,U,z),x.side=je):Zi(x,U,z)}this.compile=function(x,U,z=null){z===null&&(z=x),h=wt.get(z),h.init(U),T.push(h),z.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),x!==z&&x.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights();const H=new Set;return x.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const it=I.material;if(it)if(Array.isArray(it))for(let dt=0;dt<it.length;dt++){const xt=it[dt];ee(xt,z,I),H.add(xt)}else ee(it,z,I),H.add(it)}),h=T.pop(),H},this.compileAsync=function(x,U,z=null){const H=this.compile(x,U,z);return new Promise(I=>{function it(){if(H.forEach(function(dt){yt.get(dt).currentProgram.isReady()&&H.delete(dt)}),H.size===0){I(x);return}setTimeout(it,10)}Ot.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let qt=null;function en(x){qt&&qt(x)}function Ye(){Cn.stop()}function Ya(){Cn.start()}const Cn=new Gl;Cn.setAnimationLoop(en),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(x){qt=x,rt.setAnimationLoop(x),x===null?Cn.stop():Cn.start()},rt.addEventListener("sessionstart",Ye),rt.addEventListener("sessionend",Ya),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,U,N),h=wt.get(x,T.length),h.init(U),T.push(h),W.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Et.setFromProjectionMatrix(W,Ze,U.reversedDepth),B=this.localClippingEnabled,vt=at.init(this.clippingPlanes,B),f=Y.get(x,b.length),f.init(),b.push(f),rt.enabled===!0&&rt.isPresenting===!0){const it=y.xr.getDepthSensingMesh();it!==null&&js(it,U,-1/0,y.sortObjects)}js(x,U,0,y.sortObjects),f.finish(),y.sortObjects===!0&&f.sort(G,et),Pt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Pt&&Tt.addToRenderList(f,x),this.info.render.frame++,vt===!0&&at.beginShadows();const z=h.state.shadowsArray;bt.render(z,x,U),vt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=f.opaque,I=f.transmissive;if(h.setupLights(),U.isArrayCamera){const it=U.cameras;if(I.length>0)for(let dt=0,xt=it.length;dt<xt;dt++){const _t=it[dt];ja(H,I,x,_t)}Pt&&Tt.render(x);for(let dt=0,xt=it.length;dt<xt;dt++){const _t=it[dt];qa(f,x,_t,_t.viewport)}}else I.length>0&&ja(H,I,x,U),Pt&&Tt.render(x),qa(f,x,U);N!==null&&C===0&&(Ht.updateMultisampleRenderTarget(N),Ht.updateRenderTargetMipmap(N)),x.isScene===!0&&x.onAfterRender(y,x,U),ut.resetDefaultState(),S=-1,M=null,T.pop(),T.length>0?(h=T[T.length-1],vt===!0&&at.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?f=b[b.length-1]:f=null};function js(x,U,z,H){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Et.intersectsSprite(x)){H&&mt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(W);const dt=F.update(x),xt=x.material;xt.visible&&f.push(x,dt,xt,z,mt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Et.intersectsObject(x))){const dt=F.update(x),xt=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),mt.copy(x.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),mt.copy(dt.boundingSphere.center)),mt.applyMatrix4(x.matrixWorld).applyMatrix4(W)),Array.isArray(xt)){const _t=dt.groups;for(let Lt=0,Nt=_t.length;Lt<Nt;Lt++){const Rt=_t[Lt],Gt=xt[Rt.materialIndex];Gt&&Gt.visible&&f.push(x,dt,Gt,z,mt.z,Rt)}}else xt.visible&&f.push(x,dt,xt,z,mt.z,null)}}const it=x.children;for(let dt=0,xt=it.length;dt<xt;dt++)js(it[dt],U,z,H)}function qa(x,U,z,H){const I=x.opaque,it=x.transmissive,dt=x.transparent;h.setupLightsView(z),vt===!0&&at.setGlobalState(y.clippingPlanes,z),H&&St.viewport(w.copy(H)),I.length>0&&$i(I,U,z),it.length>0&&$i(it,U,z),dt.length>0&&$i(dt,U,z),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function ja(x,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[H.id]===void 0&&(h.state.transmissionRenderTarget[H.id]=new Wn(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Xi:Je,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const it=h.state.transmissionRenderTarget[H.id],dt=H.viewport||w;it.setSize(dt.z*y.transmissionResolutionScale,dt.w*y.transmissionResolutionScale);const xt=y.getRenderTarget(),_t=y.getActiveCubeFace(),Lt=y.getActiveMipmapLevel();y.setRenderTarget(it),y.getClearColor(K),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),Pt&&Tt.render(z);const Nt=y.toneMapping;y.toneMapping=Tn;const Rt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),h.setupLightsView(H),vt===!0&&at.setGlobalState(y.clippingPlanes,H),$i(x,z,H),Ht.updateMultisampleRenderTarget(it),Ht.updateRenderTargetMipmap(it),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let jt=0,le=U.length;jt<le;jt++){const ie=U[jt],te=ie.object,Dt=ie.geometry,ae=ie.material,Xt=ie.group;if(ae.side===je&&te.layers.test(H.layers)){const Le=ae.side;ae.side=we,ae.needsUpdate=!0,Ka(te,z,H,Dt,ae,Xt),ae.side=Le,ae.needsUpdate=!0,Gt=!0}}Gt===!0&&(Ht.updateMultisampleRenderTarget(it),Ht.updateRenderTargetMipmap(it))}y.setRenderTarget(xt,_t,Lt),y.setClearColor(K,X),Rt!==void 0&&(H.viewport=Rt),y.toneMapping=Nt}function $i(x,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let I=0,it=x.length;I<it;I++){const dt=x[I],xt=dt.object,_t=dt.geometry,Lt=dt.group;let Nt=dt.material;Nt.allowOverride===!0&&H!==null&&(Nt=H),xt.layers.test(z.layers)&&Ka(xt,U,z,_t,Nt,Lt)}}function Ka(x,U,z,H,I,it){x.onBeforeRender(y,U,z,H,I,it),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(y,U,z,H,x,it),I.transparent===!0&&I.side===je&&I.forceSinglePass===!1?(I.side=we,I.needsUpdate=!0,y.renderBufferDirect(z,U,H,I,x,it),I.side=wn,I.needsUpdate=!0,y.renderBufferDirect(z,U,H,I,x,it),I.side=je):y.renderBufferDirect(z,U,H,I,x,it),x.onAfterRender(y,U,z,H,I,it)}function Zi(x,U,z){U.isScene!==!0&&(U=ot);const H=yt.get(x),I=h.state.lights,it=h.state.shadowsArray,dt=I.state.version,xt=q.getParameters(x,I.state,it,U,z),_t=q.getProgramCacheKey(xt);let Lt=H.programs;H.environment=x.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(x.isMeshStandardMaterial?ce:ge).get(x.envMap||H.environment),H.envMapRotation=H.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Lt===void 0&&(x.addEventListener("dispose",Z),Lt=new Map,H.programs=Lt);let Nt=Lt.get(_t);if(Nt!==void 0){if(H.currentProgram===Nt&&H.lightsStateVersion===dt)return Za(x,xt),Nt}else xt.uniforms=q.getUniforms(x),x.onBeforeCompile(xt,y),Nt=q.acquireProgram(xt,_t),Lt.set(_t,Nt),H.uniforms=xt.uniforms;const Rt=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Rt.clippingPlanes=at.uniform),Za(x,xt),H.needsLights=ic(x),H.lightsStateVersion=dt,H.needsLights&&(Rt.ambientLightColor.value=I.state.ambient,Rt.lightProbe.value=I.state.probe,Rt.directionalLights.value=I.state.directional,Rt.directionalLightShadows.value=I.state.directionalShadow,Rt.spotLights.value=I.state.spot,Rt.spotLightShadows.value=I.state.spotShadow,Rt.rectAreaLights.value=I.state.rectArea,Rt.ltc_1.value=I.state.rectAreaLTC1,Rt.ltc_2.value=I.state.rectAreaLTC2,Rt.pointLights.value=I.state.point,Rt.pointLightShadows.value=I.state.pointShadow,Rt.hemisphereLights.value=I.state.hemi,Rt.directionalShadowMap.value=I.state.directionalShadowMap,Rt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Rt.spotShadowMap.value=I.state.spotShadowMap,Rt.spotLightMatrix.value=I.state.spotLightMatrix,Rt.spotLightMap.value=I.state.spotLightMap,Rt.pointShadowMap.value=I.state.pointShadowMap,Rt.pointShadowMatrix.value=I.state.pointShadowMatrix),H.currentProgram=Nt,H.uniformsList=null,Nt}function $a(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=Us.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function Za(x,U){const z=yt.get(x);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function ec(x,U,z,H,I){U.isScene!==!0&&(U=ot),Ht.resetTextureUnits();const it=U.fog,dt=H.isMeshStandardMaterial?U.environment:null,xt=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:yi,_t=(H.isMeshStandardMaterial?ce:ge).get(H.envMap||dt),Lt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Nt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Rt=!!z.morphAttributes.position,Gt=!!z.morphAttributes.normal,jt=!!z.morphAttributes.color;let le=Tn;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(le=y.toneMapping);const ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,te=ie!==void 0?ie.length:0,Dt=yt.get(H),ae=h.state.lights;if(vt===!0&&(B===!0||x!==M)){const Ee=x===M&&H.id===S;at.setState(H,x,Ee)}let Xt=!1;H.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==ae.state.version||Dt.outputColorSpace!==xt||I.isBatchedMesh&&Dt.batching===!1||!I.isBatchedMesh&&Dt.batching===!0||I.isBatchedMesh&&Dt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Dt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Dt.instancing===!1||!I.isInstancedMesh&&Dt.instancing===!0||I.isSkinnedMesh&&Dt.skinning===!1||!I.isSkinnedMesh&&Dt.skinning===!0||I.isInstancedMesh&&Dt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Dt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Dt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Dt.instancingMorph===!1&&I.morphTexture!==null||Dt.envMap!==_t||H.fog===!0&&Dt.fog!==it||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==at.numPlanes||Dt.numIntersection!==at.numIntersection)||Dt.vertexAlphas!==Lt||Dt.vertexTangents!==Nt||Dt.morphTargets!==Rt||Dt.morphNormals!==Gt||Dt.morphColors!==jt||Dt.toneMapping!==le||Dt.morphTargetsCount!==te)&&(Xt=!0):(Xt=!0,Dt.__version=H.version);let Le=Dt.currentProgram;Xt===!0&&(Le=Zi(H,U,I));let qn=!1,Ue=!1,wi=!1;const oe=Le.getUniforms(),Fe=Dt.uniforms;if(St.useProgram(Le.program)&&(qn=!0,Ue=!0,wi=!0),H.id!==S&&(S=H.id,Ue=!0),qn||M!==x){St.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),oe.setValue(A,"projectionMatrix",x.projectionMatrix),oe.setValue(A,"viewMatrix",x.matrixWorldInverse);const Ce=oe.map.cameraPosition;Ce!==void 0&&Ce.setValue(A,$.setFromMatrixPosition(x.matrixWorld)),It.logarithmicDepthBuffer&&oe.setValue(A,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&oe.setValue(A,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Ue=!0,wi=!0)}if(I.isSkinnedMesh){oe.setOptional(A,I,"bindMatrix"),oe.setOptional(A,I,"bindMatrixInverse");const Ee=I.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),oe.setValue(A,"boneTexture",Ee.boneTexture,Ht))}I.isBatchedMesh&&(oe.setOptional(A,I,"batchingTexture"),oe.setValue(A,"batchingTexture",I._matricesTexture,Ht),oe.setOptional(A,I,"batchingIdTexture"),oe.setValue(A,"batchingIdTexture",I._indirectTexture,Ht),oe.setOptional(A,I,"batchingColorTexture"),I._colorsTexture!==null&&oe.setValue(A,"batchingColorTexture",I._colorsTexture,Ht));const Oe=z.morphAttributes;if((Oe.position!==void 0||Oe.normal!==void 0||Oe.color!==void 0)&&st.update(I,z,Le),(Ue||Dt.receiveShadow!==I.receiveShadow)&&(Dt.receiveShadow=I.receiveShadow,oe.setValue(A,"receiveShadow",I.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Fe.envMap.value=_t,Fe.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Fe.envMapIntensity.value=U.environmentIntensity),Ue&&(oe.setValue(A,"toneMappingExposure",y.toneMappingExposure),Dt.needsLights&&nc(Fe,wi),it&&H.fog===!0&&Q.refreshFogUniforms(Fe,it),Q.refreshMaterialUniforms(Fe,H,V,J,h.state.transmissionRenderTarget[x.id]),Us.upload(A,$a(Dt),Fe,Ht)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Us.upload(A,$a(Dt),Fe,Ht),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&oe.setValue(A,"center",I.center),oe.setValue(A,"modelViewMatrix",I.modelViewMatrix),oe.setValue(A,"normalMatrix",I.normalMatrix),oe.setValue(A,"modelMatrix",I.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ee=H.uniformsGroups;for(let Ce=0,Ks=Ee.length;Ce<Ks;Ce++){const Pn=Ee[Ce];Bt.update(Pn,Le),Bt.bind(Pn,Le)}}return Le}function nc(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function ic(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(x,U,z){const H=yt.get(x);H.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),yt.get(x.texture).__webglTexture=U,yt.get(x.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){const z=yt.get(x);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const sc=A.createFramebuffer();this.setRenderTarget=function(x,U=0,z=0){N=x,R=U,C=z;let H=!0,I=null,it=!1,dt=!1;if(x){const _t=yt.get(x);if(_t.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(A.FRAMEBUFFER,null),H=!1;else if(_t.__webglFramebuffer===void 0)Ht.setupRenderTarget(x);else if(_t.__hasExternalTextures)Ht.rebindTextures(x,yt.get(x.texture).__webglTexture,yt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Rt=x.depthTexture;if(_t.__boundDepthTexture!==Rt){if(Rt!==null&&yt.has(Rt)&&(x.width!==Rt.image.width||x.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(x)}}const Lt=x.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(dt=!0);const Nt=yt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?I=Nt[U][z]:I=Nt[U],it=!0):x.samples>0&&Ht.useMultisampledRTT(x)===!1?I=yt.get(x).__webglMultisampledFramebuffer:Array.isArray(Nt)?I=Nt[z]:I=Nt,w.copy(x.viewport),O.copy(x.scissor),k=x.scissorTest}else w.copy(ht).multiplyScalar(V).floor(),O.copy(tt).multiplyScalar(V).floor(),k=ft;if(z!==0&&(I=sc),St.bindFramebuffer(A.FRAMEBUFFER,I)&&H&&St.drawBuffers(x,I),St.viewport(w),St.scissor(O),St.setScissorTest(k),it){const _t=yt.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,_t.__webglTexture,z)}else if(dt){const _t=U;for(let Lt=0;Lt<x.textures.length;Lt++){const Nt=yt.get(x.textures[Lt]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Lt,Nt.__webglTexture,z,_t)}}else if(x!==null&&z!==0){const _t=yt.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,_t.__webglTexture,z)}S=-1},this.readRenderTargetPixels=function(x,U,z,H,I,it,dt,xt=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=yt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t){St.bindFramebuffer(A.FRAMEBUFFER,_t);try{const Lt=x.textures[xt],Nt=Lt.format,Rt=Lt.type;if(!It.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-H&&z>=0&&z<=x.height-I&&(x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+xt),A.readPixels(U,z,H,I,At.convert(Nt),At.convert(Rt),it))}finally{const Lt=N!==null?yt.get(N).__webglFramebuffer:null;St.bindFramebuffer(A.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(x,U,z,H,I,it,dt,xt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=yt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t)if(U>=0&&U<=x.width-H&&z>=0&&z<=x.height-I){St.bindFramebuffer(A.FRAMEBUFFER,_t);const Lt=x.textures[xt],Nt=Lt.format,Rt=Lt.type;if(!It.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Gt),A.bufferData(A.PIXEL_PACK_BUFFER,it.byteLength,A.STREAM_READ),x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+xt),A.readPixels(U,z,H,I,At.convert(Nt),At.convert(Rt),0);const jt=N!==null?yt.get(N).__webglFramebuffer:null;St.bindFramebuffer(A.FRAMEBUFFER,jt);const le=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await ih(A,le,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Gt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,it),A.deleteBuffer(Gt),A.deleteSync(le),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,U=null,z=0){const H=Math.pow(2,-z),I=Math.floor(x.image.width*H),it=Math.floor(x.image.height*H),dt=U!==null?U.x:0,xt=U!==null?U.y:0;Ht.setTexture2D(x,0),A.copyTexSubImage2D(A.TEXTURE_2D,z,0,0,dt,xt,I,it),St.unbindTexture()};const rc=A.createFramebuffer(),ac=A.createFramebuffer();this.copyTextureToTexture=function(x,U,z=null,H=null,I=0,it=null){it===null&&(I!==0?(Wi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=I,I=0):it=0);let dt,xt,_t,Lt,Nt,Rt,Gt,jt,le;const ie=x.isCompressedTexture?x.mipmaps[it]:x.image;if(z!==null)dt=z.max.x-z.min.x,xt=z.max.y-z.min.y,_t=z.isBox3?z.max.z-z.min.z:1,Lt=z.min.x,Nt=z.min.y,Rt=z.isBox3?z.min.z:0;else{const Oe=Math.pow(2,-I);dt=Math.floor(ie.width*Oe),xt=Math.floor(ie.height*Oe),x.isDataArrayTexture?_t=ie.depth:x.isData3DTexture?_t=Math.floor(ie.depth*Oe):_t=1,Lt=0,Nt=0,Rt=0}H!==null?(Gt=H.x,jt=H.y,le=H.z):(Gt=0,jt=0,le=0);const te=At.convert(U.format),Dt=At.convert(U.type);let ae;U.isData3DTexture?(Ht.setTexture3D(U,0),ae=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ht.setTexture2DArray(U,0),ae=A.TEXTURE_2D_ARRAY):(Ht.setTexture2D(U,0),ae=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const Xt=A.getParameter(A.UNPACK_ROW_LENGTH),Le=A.getParameter(A.UNPACK_IMAGE_HEIGHT),qn=A.getParameter(A.UNPACK_SKIP_PIXELS),Ue=A.getParameter(A.UNPACK_SKIP_ROWS),wi=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ie.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ie.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Lt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Nt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Rt);const oe=x.isDataArrayTexture||x.isData3DTexture,Fe=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const Oe=yt.get(x),Ee=yt.get(U),Ce=yt.get(Oe.__renderTarget),Ks=yt.get(Ee.__renderTarget);St.bindFramebuffer(A.READ_FRAMEBUFFER,Ce.__webglFramebuffer),St.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ks.__webglFramebuffer);for(let Pn=0;Pn<_t;Pn++)oe&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,yt.get(x).__webglTexture,I,Rt+Pn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,yt.get(U).__webglTexture,it,le+Pn)),A.blitFramebuffer(Lt,Nt,dt,xt,Gt,jt,dt,xt,A.DEPTH_BUFFER_BIT,A.NEAREST);St.bindFramebuffer(A.READ_FRAMEBUFFER,null),St.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(I!==0||x.isRenderTargetTexture||yt.has(x)){const Oe=yt.get(x),Ee=yt.get(U);St.bindFramebuffer(A.READ_FRAMEBUFFER,rc),St.bindFramebuffer(A.DRAW_FRAMEBUFFER,ac);for(let Ce=0;Ce<_t;Ce++)oe?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Oe.__webglTexture,I,Rt+Ce):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Oe.__webglTexture,I),Fe?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ee.__webglTexture,it,le+Ce):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ee.__webglTexture,it),I!==0?A.blitFramebuffer(Lt,Nt,dt,xt,Gt,jt,dt,xt,A.COLOR_BUFFER_BIT,A.NEAREST):Fe?A.copyTexSubImage3D(ae,it,Gt,jt,le+Ce,Lt,Nt,dt,xt):A.copyTexSubImage2D(ae,it,Gt,jt,Lt,Nt,dt,xt);St.bindFramebuffer(A.READ_FRAMEBUFFER,null),St.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Fe?x.isDataTexture||x.isData3DTexture?A.texSubImage3D(ae,it,Gt,jt,le,dt,xt,_t,te,Dt,ie.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(ae,it,Gt,jt,le,dt,xt,_t,te,ie.data):A.texSubImage3D(ae,it,Gt,jt,le,dt,xt,_t,te,Dt,ie):x.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,it,Gt,jt,dt,xt,te,Dt,ie.data):x.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,it,Gt,jt,ie.width,ie.height,te,ie.data):A.texSubImage2D(A.TEXTURE_2D,it,Gt,jt,dt,xt,te,Dt,ie);A.pixelStorei(A.UNPACK_ROW_LENGTH,Xt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Le),A.pixelStorei(A.UNPACK_SKIP_PIXELS,qn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ue),A.pixelStorei(A.UNPACK_SKIP_IMAGES,wi),it===0&&U.generateMipmaps&&A.generateMipmap(ae),St.unbindTexture()},this.initRenderTarget=function(x){yt.get(x).__webglFramebuffer===void 0&&Ht.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Ht.setTextureCube(x,0):x.isData3DTexture?Ht.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ht.setTexture2DArray(x,0):Ht.setTexture2D(x,0),St.unbindTexture()},this.resetState=function(){R=0,C=0,N=null,St.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ze}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}const rl={type:"change"},Va={type:"start"},Kl={type:"end"},As=new ji,al=new Sn,Am=Math.cos(70*eh.DEG2RAD),de=new L,Pe=2*Math.PI,Zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pr=1e-6;class $l extends Vh{constructor(t,e=null){super(t,e),this.state=Zt.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mi.ROTATE,MIDDLE:mi.DOLLY,RIGHT:mi.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Gn,this._lastTargetPosition=new L,this._quat=new Gn().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ta,this._sphericalDelta=new Ta,this._scale=1,this._panOffset=new L,this._rotateStart=new Ct,this._rotateEnd=new Ct,this._rotateDelta=new Ct,this._panStart=new Ct,this._panEnd=new Ct,this._panDelta=new Ct,this._dollyStart=new Ct,this._dollyEnd=new Ct,this._dollyDelta=new Ct,this._dollyDirection=new L,this._mouse=new Ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Rm.bind(this),this._onPointerDown=wm.bind(this),this._onPointerUp=Cm.bind(this),this._onContextMenu=Fm.bind(this),this._onMouseWheel=Lm.bind(this),this._onKeyDown=Um.bind(this),this._onTouchStart=Im.bind(this),this._onTouchMove=Nm.bind(this),this._onMouseDown=Pm.bind(this),this._onMouseMove=Dm.bind(this),this._interceptControlDown=Om.bind(this),this._interceptControlUp=Bm.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rl),this.update(),this.state=Zt.NONE}update(t=null){const e=this.object.position;de.copy(e).sub(this.target),de.applyQuaternion(this._quat),this._spherical.setFromVector3(de),this.autoRotate&&this.state===Zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Pe:n>Math.PI&&(n-=Pe),s<-Math.PI?s+=Pe:s>Math.PI&&(s-=Pe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(de.setFromSpherical(this._spherical),de.applyQuaternion(this._quatInverse),e.copy(this.target).add(de),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=de.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=de.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(As.origin.copy(this.object.position),As.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(As.direction))<Am?this.object.lookAt(this.target):(al.setFromNormalAndCoplanarPoint(this.object.up,this.target),As.intersectPlane(al,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Pr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pr||this._lastTargetPosition.distanceToSquared(this.target)>Pr?(this.dispatchEvent(rl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Pe/60*this.autoRotateSpeed*t:Pe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){de.setFromMatrixColumn(e,0),de.multiplyScalar(-t),this._panOffset.add(de)}_panUp(t,e){this.screenSpacePanning===!0?de.setFromMatrixColumn(e,1):(de.setFromMatrixColumn(e,0),de.crossVectors(this.object.up,de)),de.multiplyScalar(t),this._panOffset.add(de)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;de.copy(s).sub(this.target);let r=de.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function wm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Rm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Cm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kl),this.state=Zt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Pm(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Zt.DOLLY;break;case mi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Zt.ROTATE}break;case mi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Zt.PAN}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(Va)}function Dm(i){switch(this.state){case Zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Lm(i){this.enabled===!1||this.enableZoom===!1||this.state!==Zt.NONE||(i.preventDefault(),this.dispatchEvent(Va),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Kl))}function Um(i){this.enabled!==!1&&this._handleKeyDown(i)}function Im(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case di.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Zt.TOUCH_ROTATE;break;case di.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Zt.TOUCH_PAN;break;default:this.state=Zt.NONE}break;case 2:switch(this.touches.TWO){case di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Zt.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Zt.TOUCH_DOLLY_ROTATE;break;default:this.state=Zt.NONE}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(Va)}function Nm(i){switch(this._trackPointer(i),this.state){case Zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Zt.NONE}}function Fm(i){this.enabled!==!1&&i.preventDefault()}function Om(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Bm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zm(i){return new xe().setFromPoints(Array.from({length:181},(t,e)=>new L(Math.cos(e/180*Is)*i,0,Math.sin(e/180*Is)*i)))}function Hm(i,t,e,n){const s=new jl({antialias:!0,alpha:!0});s.setPixelRatio(Math.min(devicePixelRatio,1.75)),s.outputColorSpace=ye,s.toneMapping=dl,s.toneMappingExposure=1.4,i.prepend(s.domElement);const r=s.domElement;r.tabIndex=0,r.setAttribute("aria-label","三維太陽系。方向鍵旋轉，加減鍵縮放。也可使用畫布下方行星按鈕。");const a=new Ll,o=new De(43,1,.1,600);o.position.set(0,43,51);const l=new $l(o,r);l.enableDamping=!0,l.enablePan=!1,l.minDistance=9,l.maxDistance=110,l.maxPolarAngle=Math.PI*.95,a.add(new Vl("#cfdef0",1.3));const c=new Oh("#ffddad",160,130,1);a.add(c);const u=new Xn(1,48,32),d=[],p=document.getElementById("labels"),m=`varying vec3 vNormal; varying vec3 vWorld; varying vec3 vLocal; uniform vec3 base; uniform float kind; uniform float seed; float noise(vec3 p){return sin(p.x*12.+sin(p.z*8.))*sin(p.y*15.+sin(p.x*7.));} void main(){vec3 p=vLocal;float n=noise(p*2.+seed);vec3 col=base; if(kind==1.){float land=sin(p.x*5.+sin(p.z*6.))+sin(p.y*8.+p.z*3.);col=mix(vec3(.025,.22,.43),vec3(.19,.4,.25),smoothstep(.25,.6,land));float cloud=smoothstep(.65,.93,noise(p*1.4+2.));col=mix(col,vec3(.88,.92,.91),cloud*.65);if(abs(p.y)>.89)col=mix(col,vec3(.88,.93,.95),.8);}else if(kind==2.){float bands=sin(p.y*35.+sin(p.x*5.)*.8);col*=.76+.24*bands;col+=vec3(.1,.06,.025)*n;}else if(kind==3.){col*=.9+.12*sin(p.y*18.);}else{col*=.83+.17*n;}float lit=.26+.74*max(dot(normalize(vNormal),normalize(-vWorld)),0.);if(kind==4.){lit=1.25;col+=vec3(.1,.035,0.)*n;}gl_FragColor=vec4(col*lit,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>}`;t.forEach((G,et)=>{const ht=G.id==="earth"?1:["jupiter","saturn"].includes(G.id)?2:["uranus","neptune","venus"].includes(G.id)?3:G.id==="sun"?4:0,tt=new tn({uniforms:{base:{value:new Wt(G.color)},kind:{value:ht},seed:{value:et*3.21}},vertexShader:"varying vec3 vNormal;varying vec3 vWorld;varying vec3 vLocal;void main(){vLocal=position;vNormal=mat3(modelMatrix)*normal;vWorld=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(vWorld,1.);}",fragmentShader:m}),ft=new Ae(u,tt);ft.scale.setScalar(et===0?2.5:hc[et-1]),ft.userData.id=G.id,a.add(ft),d.push(ft);const Et=document.createElement("span");if(Et.className="planet-label",Et.textContent=G.name,p.append(Et),ft.userData.label=Et,et>0){const vt=new Vs(zm(Ur[et-1]),new zi({color:"#6f8295",transparent:!0,opacity:.25}));a.add(vt)}if(G.id==="saturn"){const vt=new Ae(new za(1.5,2.3,96),new Ws({color:"#bfb093",transparent:!0,opacity:.63,side:je}));vt.rotation.x=Math.PI/2-.4,ft.add(vt)}});const _=new Ae(new Xn(2.72,48,32),new tn({transparent:!0,depthWrite:!1,side:we,vertexShader:"varying vec3 n;varying vec3 p;void main(){n=normalize(normalMatrix*normal);vec4 q=modelViewMatrix*vec4(position,1.);p=q.xyz;gl_Position=projectionMatrix*q;}",fragmentShader:"varying vec3 n;varying vec3 p;void main(){float f=pow(1.-abs(dot(normalize(n),normalize(-p))),2.);gl_FragColor=vec4(1.,.5,.12,f*.45);}"}));a.add(_);let v=8721;const f=()=>(v=v*16807%2147483647,v/2147483647),h=[];for(let G=0;G<1e3;G++){let et=f()*Is,ht=f()*2-1,tt=170;h.push(tt*Math.sqrt(1-ht*ht)*Math.cos(et),tt*ht,tt*Math.sqrt(1-ht*ht)*Math.sin(et))}const b=new xe;b.setAttribute("position",new pe(h,3)),a.add(new Nl(b,new Ba({color:"#b9cee0",size:.18,transparent:!0,opacity:.65})));const T=new kh,y=new Ct;let P=null,R=0,C=!1,N=1,S=!0,M=performance.now(),w="earth",O=!0;const k=typeof IntersectionObserver<"u"?new IntersectionObserver(G=>O=G[0].isIntersecting):null;k?.observe(i),r.addEventListener("pointerdown",G=>P=[G.clientX,G.clientY]),r.addEventListener("pointerup",G=>{if(P&&Math.hypot(G.clientX-P[0],G.clientY-P[1])<6){const et=r.getBoundingClientRect();y.set((G.clientX-et.left)/et.width*2-1,-(G.clientY-et.top)/et.height*2+1),T.setFromCamera(y,o);const ht=T.intersectObjects(d,!1)[0];ht&&e(ht.object.userData.id)}P=null});function K(G){o.position.multiplyScalar(G).clampLength(9,110),l.update()}function X(){o.position.set(0,43,51),l.target.set(0,0,0),l.update()}r.addEventListener("keydown",G=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","+","=","-"].includes(G.key))if(G.preventDefault(),G.key==="+"||G.key==="=")K(.9);else if(G.key==="-")K(1.1);else{const et=new Ta().setFromVector3(o.position);et.theta+=G.key==="ArrowLeft"?-.12:G.key==="ArrowRight"?.12:0,et.phi=Math.max(.1,Math.min(Math.PI*.95,et.phi+(G.key==="ArrowUp"?-.1:G.key==="ArrowDown"?.1:0))),o.position.setFromSpherical(et),l.update()}});const j=new ResizeObserver(()=>{const G=i.clientWidth,et=i.clientHeight;o.aspect=G/et,o.fov=o.aspect<1?63:43,o.updateProjectionMatrix(),s.setSize(G,et)});j.observe(i),r.addEventListener("webglcontextlost",G=>{G.preventDefault(),S=!1,r.hidden=!0,p.hidden=!0,n()});const J=new L;function V(G){if(!S)return;requestAnimationFrame(V);const et=Math.min((G-M)/1e3,.06);M=G,!(document.hidden||!O)&&(C||(R+=et*20*N),d.forEach((ht,tt)=>{tt&&ht.position.fromArray(dc(tt-1,R,t[tt].orbitDays)),C||(ht.rotation.y+=et*.04),J.copy(ht.position).project(o);const ft=ht.userData.label;ft.style.left=(J.x*.5+.5)*i.clientWidth+"px",ft.style.top=(-J.y*.5+.5)*i.clientHeight+"px",ft.hidden=J.z>1||J.z<-1,ft.classList.toggle("selected",ht.userData.id===w)}),l.update(),s.render(a,o))}return requestAnimationFrame(V),{select(G){w=G},zoom:K,reset:X,setPaused(G){C=G},setSpeed(G){N=G},setVisible(G){r.hidden=!G,p.hidden=!G},dispose(){S=!1,k?.disconnect(),j.disconnect(),l.dispose(),a.traverse(G=>{G.geometry?.dispose(),G.material&&G.material.dispose()}),s.dispose(),r.remove(),p.replaceChildren()}}}const km={earthDiameterKm:12742.0168,auKm:1495978707e-1,lightYearKm:9460730472580799e-3,neptuneOrbitAU:30.06992276,proximaDistanceLy:4.24},Vm=[{id:"earth",name:"地球",kicker:"我們的起點",scaleLabel:"平均直徑約 12,742 公里",title:"從一顆藍色星球出發",facts:["先把地球當作尺規，接著比較天體之間的距離。","直徑衡量地球本身有多大；下一站則衡量兩個天體相隔多遠。"],caution:"地球不是完美球體；這裡使用體積等效平均直徑。",source:"https://ssd.jpl.nasa.gov/planets/phys_par.html",sourceLabel:"NASA / JPL 原始資料",extentType:"mean_diameter",value:12742.0168,unit:"km",approximate:!0,range:null,lightTime:"光走過相同長度約 0.043 秒（不是穿過地球）",distanceKm:12742.0168},{id:"sun",name:"地球到太陽",kicker:"從大小轉向距離",scaleLabel:"代表距離 1 AU ≈ 1.496 億公里",title:"陽光也需要時間抵達",facts:["天文單位 AU 是描述太陽系距離的方便尺規。","陽光走完1 AU約需8分19秒；真實地日距離會略有變化。"],caution:"1 AU是固定長度單位，不表示地球每一刻都離太陽恰好1 AU。",source:"https://ssd.jpl.nasa.gov/astro_par.html",sourceLabel:"NASA / JPL 原始資料",extentType:"representative_separation",value:1,unit:"AU",approximate:!0,range:null,lightTime:"1 AU 的光行時約 8 分 19 秒",distanceKm:1495978707e-1,distanceAU:1},{id:"solar",name:"行星區與更遠處",kicker:"太陽系沒有單一硬邊界",scaleLabel:"太陽到海王星軌道約 30 AU",title:"跨出行星區，旅程仍未結束",facts:["海王星軌道半長軸約30 AU；這是從太陽向外量的距離。","日球層是太陽風形成的區域；旅行者探測器約在120 AU附近越過日球層頂。","更遠還有推測中的歐特雲；行星區、日球層和歐特雲指的是不同範圍。"],caution:"30 AU不是太陽系直徑。日球層並非固定120 AU的球殼；歐特雲邊界仍屬估計。",source:"https://ssd.jpl.nasa.gov/planets/approx_pos.html",sourceLabel:"NASA / JPL 原始資料",extentType:"heliocentric_orbital_semimajor_axis",value:30.06992276,unit:"AU",approximate:!0,range:null,lightTime:"太陽到海王星軌道約 4 小時 10 分",distanceKm:4498396417009467e-6,distanceAU:30.06992276,sources:["https://ssd.jpl.nasa.gov/planets/approx_pos.html","https://www.nasa.gov/solar-system/the-voyage-to-interstellar-space/","https://science.nasa.gov/learn/basics-of-space-flight/chapter1-1/","https://science.nasa.gov/solar-system/oort-cloud/facts/"]},{id:"stars",name:"最近的恆星鄰居",kicker:"太陽之外的下一顆恆星",scaleLabel:"太陽到比鄰星約 4.24 光年",title:"看似擁擠的星空，其實相隔很遠",facts:["比鄰星是離太陽最近的其他恆星。","1光年是光在一年中走過的距離，約9.46兆公里。"],caution:"恆星圓點為了看清而放大；背景星點是示意分布，不是精確星圖。",source:"https://science.nasa.gov/sun/facts/",sourceLabel:"NASA / JPL 原始資料",extentType:"star_to_star_separation",value:4.24,unit:"ly",approximate:!0,range:null,lightTime:"光走過這段距離約需 4.24 年",distanceLy:4.24},{id:"galaxy",name:"銀河系",kicker:"太陽系所在的星系",scaleLabel:"恆星盤直徑約 10 萬光年",title:"我們住在銀河的一角",facts:["太陽系距銀河中心約2.6萬光年，並不在中央。","約10萬光年描述的是銀河恆星盤的直徑；更外圍的暈並不包含在這把尺中。"],caution:"銀河外觀、旋臂與星點為教學示意，並非從銀河外拍攝的照片或精確座標圖。",source:"https://imagine.gsfc.nasa.gov/science/featured_science/milkyway/index.html",sourceLabel:"NASA / JPL 原始資料",extentType:"stellar_disk_diameter",value:1e5,unit:"ly",approximate:!0,range:null,lightTime:"以靜態距離比較：橫跨恆星盤約 10 萬光年",distanceLy:1e5,sunToCenterLy:26e3},{id:"group",name:"本星系群",kicker:"從一個星系到星系鄰里",scaleLabel:"群體跨度約 1,000 萬光年",title:"銀河系也有鄰居",facts:["銀河系、仙女座星系與三角座星系都是本星系群的成員。","這裡的約1,000萬光年是整個群體的尺度，不是地球到每個星系的距離。","除了三個醒目的大成員，本星系群也有許多矮星系；畫面中的符號數量只是示意。"],caution:"星系位置和外觀為程序示意；群體沒有整齊球殼，也不以太陽系為真正中心。",source:"https://imagine.gsfc.nasa.gov/features/cosmic/local_group_info.html",sourceLabel:"NASA / JPL 原始資料",extentType:"group_approximate_diameter",value:1e7,unit:"ly",approximate:!0,range:null,lightTime:"此站比較群體跨度，不代表某一顆星系的光行時間",distanceLy:1e7},{id:"neighbors",name:"近鄰星系群與星系團",kicker:"走出本星系群",scaleLabel:"代表距離約 1,200 萬至 5,400 萬光年",title:"我們的星系鄰里，還有其他鄰里",facts:["M81星系群的代表成員M81距我們約1,200萬光年。","半人馬A／M83星系群的兩個代表成員分別約1,200萬及1,500萬光年遠。","室女座星系團約5,400萬光年遠；它是星系團，不是星系群。"],caution:"星系的位置、大小、數量與連線都是程序生成的教學示意，不是精確觀測星圖。 所列距離有的是代表成員、有的是星系團代表距離，並非同一座標系的精確群中心。",source:"https://science.nasa.gov/universe/galaxies/large-scale-structures/",sourceLabel:"NASA／ESA 原始資料",sources:["https://science.nasa.gov/universe/galaxies/large-scale-structures/","https://www.nasa.gov/image-article/an-infrared-view-of-m81-galaxy/","https://esahubble.org/news/heic1403/","https://www.esa.int/Science_Exploration/Space_Science/Herschel/The_dark_heart_of_a_cosmic_collision","https://www.nasa.gov/universe/suzaku-finds-common-chemical-makeup-at-largest-cosmic-scales/"],lightTime:"此站比較不同天體的代表距離，不是單一旅程的時間。",extentType:"multiple_representative_object_distances",value:null,unit:"ly",approximate:!0},{id:"web",name:"宇宙網",kicker:"從鄰里到大尺度結構",scaleLabel:"細絲、交會區與空洞",title:"星系並非均勻撒在宇宙裡",facts:["星系、星系群與星系團沿細絲狀結構聚集，之間有星系較稀少的空洞。","星系團常出現在物質聚集的交會區。","圖中的明亮連線用來提示結構；肉眼不會看見這樣的發光網線。"],caution:"星系的位置、大小、數量與連線都是程序生成的教學示意，不是精確觀測星圖。 線條是結構標記；空洞也不是絕對沒有物質。",source:"https://science.nasa.gov/universe/galaxies/large-scale-structures/",sourceLabel:"NASA 大尺度結構",sources:["https://science.nasa.gov/universe/galaxies/large-scale-structures/"],lightTime:"宇宙網是一種分布結構，沒有單一距離或光行時間。",extentType:"schematic_large_scale_structure",value:null,unit:null,approximate:!0},{id:"universe",name:"可觀測宇宙",kicker:"我們能接收到訊息的範圍",scaleLabel:"今日尺度半徑約 460 億光年",title:"看得見的範圍，不是全部宇宙",facts:["可觀測宇宙今日尺度的直徑約920億光年，半徑約460億光年。","宇宙年齡約138億年；空間在光傳播時也持續膨脹，因此距離數字與年齡不同。","我們位於自己的觀測範圍中心，不表示地球是整個宇宙的中心。"],caution:"460億光年不是光已旅行460億年，也不是已知宇宙的硬邊界。整個宇宙的大小仍未知；圖中銀河分布是示意。",source:"https://www.nasa.gov/science-research/astrophysics/how-big-is-space-we-asked-a-nasa-expert-episode-61/",sourceLabel:"NASA / JPL 原始資料",extentType:"present_observable_radius",value:46e9,unit:"ly",approximate:!0,range:null,lightTime:"不可用今日距離直接除以光速當作回望時間",distanceLy:46e9,ageYears:138e8,diameterLy:92e9,sources:["https://www.nasa.gov/science-research/astrophysics/how-big-is-space-we-asked-a-nasa-expert-episode-61/","https://science.nasa.gov/exoplanets/what-is-the-universe/","https://science.nasa.gov/mission/webb/big-bang-q-and-a/"]}],Gm={constants:km,stages:Vm};function Ga(i){let t=i;return()=>(t=t*16807%2147483647,t/2147483647)}const hn=(i,t,e,n,s=0,r=0)=>({x:i,y:t,z:e,r:n,kind:s,angle:r});function Wm(){const i=Ga(335),t=[hn(-3,0,0,1.8,0,-.3),hn(3.2,1.8,-1,2.4,0,.55),hn(5.8,-2,1,.95,0,-.7)];for(let e=0;e<25;e++){const n=i()*Math.PI*2,s=2.5+i()*6;t.push(hn(Math.cos(n)*s,Math.sin(n)*s*.7,(i()-.5)*4,.1+i()*.23,e%3,i()*Math.PI))}return{spheres:[],points:[],orbits:[],galaxies:t,labels:[{x:-3,y:2.1,z:0,text:"銀河系"},{x:3.2,y:4.6,z:-1,text:"仙女座星系"},{x:5.8,y:-3.5,z:1,text:"三角座星系"},{x:-5,y:-4.5,z:0,text:"周圍還有許多矮星系（數量為示意）"}]}}function Xm(){const i=Ga(919),t=[],e=[{x:0,y:0,z:0,n:12,r:1.1,name:"本星系群"},{x:-7,y:4,z:1,n:18,r:1.7,name:"M81 星系群"},{x:-6,y:-4,z:-1,n:20,r:2,name:"半人馬 A / M83 群"},{x:6.3,y:1.7,z:0,n:65,r:3.3,name:"室女座星系團"}];for(const n of e){t.push(hn(n.x,n.y,n.z,n.n>40?.65:.5,n.n>40?1:0));for(let s=0;s<n.n;s++){const r=i()*Math.PI*2,a=Math.sqrt(i())*n.r;t.push(hn(n.x+Math.cos(r)*a,n.y+Math.sin(r)*a*.85,n.z+(i()-.5)*2,.1+i()*.23,s%3,i()*Math.PI))}}return{spheres:[],points:[],orbits:[],galaxies:t,labels:e.map(n=>({x:n.x,y:n.y+n.r+1,z:n.z,text:n.name})),highlights:e.map(n=>({...n,r:n.r+1}))}}function ol(i=453,t=!1){const e=Ga(i),n=Array.from({length:22},()=>({x:(e()-.5)*24,y:(e()-.5)*16,z:(e()-.5)*15})),s=[],r=[],a=[],o=new Set;for(let l=0;l<n.length;l++){const c=n.map((u,d)=>({j:d,d:Math.hypot(u.x-n[l].x,u.y-n[l].y,u.z-n[l].z)})).filter(u=>u.j!==l).sort((u,d)=>u.d-d.d).slice(0,3);for(const{j:u}of c){const d=[l,u].sort((p,m)=>p-m).join("-");o.has(d)||(o.add(d),s.push([n[l],n[u]]))}}for(const[l,c]of s){for(let u=0;u<24;u++){const d=u/23,p=.1+Math.sin(d*Math.PI)*.35;r.push({x:l.x+(c.x-l.x)*d+(e()-.5)*p,y:l.y+(c.y-l.y)*d+(e()-.5)*p,z:l.z+(c.z-l.z)*d+(e()-.5)*p,color:u%6===0?"#f2d0a0":"#7cabdc",size:.025+e()*.04})}for(let u=0;u<3;u++){const d=e();a.push(hn(l.x+(c.x-l.x)*d,l.y+(c.y-l.y)*d,l.z+(c.z-l.z)*d,.055+e()*.1,u%3,e()*Math.PI))}}for(const l of n){a.push(hn(l.x,l.y,l.z,.25+e()*.22,1));for(let c=0;c<4;c++)a.push(hn(l.x+(e()-.5)*1.4,l.y+(e()-.5)*1.3,l.z+(e()-.5),.08+e()*.12,c%3,e()*Math.PI))}return{spheres:[],points:r,orbits:[],galaxies:a,filaments:s,labels:t?[{x:0,y:8.5,z:0,text:"這是可觀測宇宙內的結構示意，不是宇宙的牆"}]:[{x:-6,y:8,z:0,text:"節點：星系群與星系團聚集"},{x:6,y:-6,z:0,text:"絲狀結構之間，有廣大的空洞"}]}}const Dr=["earth","sun","solar","stars","galaxy","group","neighbors","web","universe"];function Zl(i,t,e=1){return i/t*e/100}function Ym(i=1300,t=312){let e=t;const n=()=>(e=e*16807%2147483647,e/2147483647);return Array.from({length:i},(s,r)=>{const a=Math.sqrt(n())*9.4,l=r%3*Math.PI*2/3+a*.48+(n()-.5)*.9;return{x:Math.cos(l)*a,y:(n()-.5)*(.25+(10-a)*.12),z:Math.sin(l)*a,color:r%7===0?"#f7d4a2":"#a9cced",size:.035+n()*.04}})}function qm(i){const t=(e,n,s,r,a,o)=>({x:e,y:n,z:s,r,color:a,label:o});if(i===0)return{spheres:[t(0,0,0,3.9,"#4586ad","地球")],points:[],orbits:[],labels:[{x:0,y:-4.9,z:0,text:"我們唯一已知的家"}]};if(i===1)return{spheres:[t(-5,0,0,1.5,"#ffc167","太陽"),t(5,0,0,.17,"#77bce5","地球")],points:[],orbits:[],lines:[[-5,0,0,5,0,0]],labels:[{x:0,y:1.7,z:0,text:"1 AU · 光約走 8 分 19 秒"},{x:0,y:-3,z:0,text:"天體放大，距離以標示數值為準"}]};if(i===2){const e=[1.5,2.2,2.9,3.6,5.1,6.4,7.7,9],n=["#b8a79b","#e7c08d","#77bce5","#d58c6e","#d3ac83","#c9ba91","#90d1d2","#698dc9"];return{spheres:[t(0,0,0,.55,"#ffc167","太陽"),...e.map((s,r)=>t(Math.cos(r*.9)*s,0,Math.sin(r*.9)*s,r>3?.18:.09,n[r],r===7?"海王星軌道約 30 AU":""))],orbits:e,points:[],labels:[{x:0,y:-2,z:0,text:"八大行星所在區域 · 非太陽系全部範圍"}]}}return i===3?{spheres:[t(-5,0,0,.38,"#ffca78","太陽"),t(5,0,0,.18,"#e99074","比鄰星")],points:[],orbits:[],lines:[[-5,0,0,5,0,0]],labels:[{x:0,y:2,z:0,text:"約 4.24 光年"},{x:0,y:-2.5,z:0,text:"恆星尺寸特別放大 · 地球已小於一個像素"}]}:i===4?{spheres:[t(5.2,0,0,.1,"#ffd284","太陽的位置（約略）")],points:Ym(),orbits:[],labels:[{x:0,y:2,z:0,text:"銀河系中心"},{x:0,y:-3,z:0,text:"盤面直徑約 10 萬光年"}]}:i===5?Wm():i===6?Xm():i===7?ol():ol(873,!0)}function jm(i=1,t=!1){let e=i,n=i,s=i,r=0,a=0;const o=l=>{if(a){const c=Math.max(0,Math.min(1,(l-r)/a)),u=c*c*(3-2*c);e=n+(s-n)*u,c===1&&(e=s,a=0)}return e};return{advance:o,set(l,c,u=!1){o(c),n=e,s=Math.max(.1,Math.min(10,Number(l))),r=c,a=t?0:u?1400:400,a||(e=s)},get moving(){return a>0},get value(){return e},get target(){return s}}}function Km(i,t,e="earth"){const n={earth:t.auKm,neptune:t.auKm*t.neptuneOrbitAU,proxima:t.lightYearKm*t.proximaDistanceLy},s={earth:1200,neptune:36e3,proxima:32e7},r=Zl(n[e],t.earthDiameterKm,i);return{earthRadius:i*8,metres:r,spanMetres:s[e],fraction:r/s[e]}}function $m(i,t,{reducedMotion:e=!1,onPreset:n}={}){let s="earth",r=0,a=!1,o=!0;const l=jm(1,e),c={earth:"地球",neptune:"海王星軌道",proxima:"比鄰星"},u={earth:"0 → 1,200 公尺",neptune:"0 → 36 公里",proxima:"0 → 320,000 公里"};i.innerHTML=`<div class="ruler-visual-heading"><div><p class="eyebrow">WATCH THE MODEL CHANGE</p><h4>拖動上方滑桿，看模型一起變大。</h4><p>地球珠子變大 2 倍，太陽的模型尺寸與所有模型距離也都變成 2 倍。</p></div><div class="ruler-presets"><button data-ruler-cm="1">1 cm 地球</button><button data-ruler-cm="10">10 cm 地球</button></div></div><div class="ruler-animation-grid"><div class="bead-panel"><span class="ruler-panel-title">① 看珠子：同一把公分尺</span><svg id="ruler-bead-svg" viewBox="0 0 260 230" role="img" aria-label="模型地球與公分尺"><defs><radialGradient id="bead-fill" cx="30%" cy="25%"><stop offset="0" stop-color="#a5d9ea"/><stop offset=".38" stop-color="#3e94b7"/><stop offset=".8" stop-color="#155374"/><stop offset="1" stop-color="#06182c"/></radialGradient></defs><g id="ruler-bead" transform="translate(130 104) scale(1)"><circle r="8" fill="url(#bead-fill)"/><path d="M-4 -5 L0 -6 3 -2 1 0 2 3 -1 6 -3 2 -5 0Z" fill="#a7c4a5" opacity=".65"/></g><line x1="50" x2="210" y1="198" y2="198" stroke="#8298ac"/>${Array.from({length:11},(f,h)=>`<line x1="${50+h*16}" x2="${50+h*16}" y1="193" y2="${h%5===0?207:202}" stroke="#8298ac"/>${h%5===0?`<text x="${50+h*16}" y="221" text-anchor="middle">${h} cm</text>`:""}`).join("")}<line id="bead-width" x1="122" x2="138" y1="175" y2="175" stroke="#f5c589" stroke-width="2"/><text id="bead-caption" x="130" y="157" text-anchor="middle">模型地球直徑 1.0 cm</text></svg><small>畫面上的公分尺是模型圖，並非螢幕的實際公分。</small></div><div class="distance-panel"><span class="ruler-panel-title">② 看距離：固定視窗，不跟著自動縮放</span><div class="ruler-distance-tabs" role="group" aria-label="選擇模型距離"><button data-ruler-distance="earth" aria-pressed="true">太陽 ↔ 地球</button><button data-ruler-distance="neptune" aria-pressed="false">到海王星軌道</button><button data-ruler-distance="proxima" aria-pressed="false">到比鄰星</button></div><svg id="ruler-distance-svg" viewBox="0 0 700 230" role="img" aria-label="固定距離尺上的模型天體位置"><defs><radialGradient id="ruler-sun-fill"><stop stop-color="#fff4ca"/><stop offset=".6" stop-color="#ffc56e"/><stop offset="1" stop-color="#b76126"/></radialGradient></defs><line x1="45" x2="655" y1="112" y2="112" stroke="#344c64" stroke-dasharray="3 7"/><line id="ruler-distance-line" x1="45" x2="105" y1="112" y2="112" stroke="#e7b87c" stroke-width="2"/><circle cx="45" cy="112" r="13" fill="url(#ruler-sun-fill)"/><text x="45" y="77" text-anchor="middle">模型太陽</text><g id="ruler-endpoint" transform="translate(105 112)"><circle r="7" fill="#8bc6e1" stroke="#d5edf4"/><text id="ruler-endpoint-name" y="35" text-anchor="middle">地球</text></g><text id="ruler-distance-value" x="350" y="46" text-anchor="middle">117.4 公尺</text><line x1="45" x2="655" y1="186" y2="186" stroke="#647e96"/>${[0,.25,.5,.75,1].map(f=>`<line x1="${45+f*610}" x2="${45+f*610}" y1="182" y2="193" stroke="#647e96"/>`).join("")}<text x="45" y="215">0</text><text id="ruler-span-label" x="655" y="215" text-anchor="end">1,200 公尺</text></svg><small>球形標記特別放大；這張圖只比較距離。切換目標會換一把距離尺，與左邊珠子圖不是同一畫面比例。</small></div></div><p id="ruler-animation-status" class="ruler-explanation" aria-live="polite">地球縮成 1 cm 時，模型太陽距地球約 117.4 公尺。</p>`;const d=f=>i.querySelector(f),p=f=>new Intl.NumberFormat("zh-TW",{maximumFractionDigits:1}).format(f),m=f=>f>=1e3?`${p(f/1e3)} 公里`:`${p(f)} 公尺`;function _(f){const h=Km(f,t,s),b=45+h.fraction*610;i.dataset.modelCm=f.toFixed(4),i.dataset.animating=String(l.moving),d("#ruler-bead").setAttribute("transform",`translate(130 104) scale(${f})`),d("#bead-width").setAttribute("x1",String(130-h.earthRadius)),d("#bead-width").setAttribute("x2",String(130+h.earthRadius)),d("#bead-caption").textContent=`模型地球直徑 ${f.toFixed(1)} cm`,d("#bead-caption").setAttribute("y",f>5?"16":"157"),d("#ruler-endpoint").setAttribute("transform",`translate(${b} 112)`),d("#ruler-distance-line").setAttribute("x2",String(b)),d("#ruler-distance-value").textContent=m(h.metres),d("#ruler-span-label").textContent=u[s].split("→ ")[1],d("#ruler-endpoint-name").textContent=c[s],d("#ruler-bead-svg").setAttribute("aria-label",`模型地球直徑 ${f.toFixed(1)} 公分，圖示與固定0至10公分模型尺比較`),d("#ruler-distance-svg").setAttribute("aria-label",`模型太陽到${c[s]}距離${m(h.metres)}，尺規${u[s]}`),l.moving||(d("#ruler-animation-status").textContent=`地球模型直徑 ${f.toFixed(1)} cm → 模型太陽到${c[s]}約 ${m(h.metres)}。滑桿調整的是整套模型的縮尺；真實宇宙沒有因此變大或變小。`)}function v(f){if(a)return;const h=l.moving,b=l.advance(f);(o||h)&&(_(b),o=!1),r=requestAnimationFrame(v)}for(const f of i.querySelectorAll("[data-ruler-distance]"))f.addEventListener("click",()=>{s=f.dataset.rulerDistance;for(const h of i.querySelectorAll("[data-ruler-distance]"))h.setAttribute("aria-pressed",String(h===f));o=!0,_(l.value)});for(const f of i.querySelectorAll("[data-ruler-cm]"))f.addEventListener("click",()=>{const h=Number(f.dataset.rulerCm);n?.(h),l.set(h,performance.now(),!0),o=!0,e&&_(h)});return _(1),r=requestAnimationFrame(v),{setDiameter(f){l.set(f,performance.now()),o=!0,e&&_(l.value)},dispose(){a=!0,cancelAnimationFrame(r)}}}const pi=[0,Math.log(23),Math.log(184),Math.log(22080),Math.log(22080*50),Math.log(22080*50*15),Math.log(22080*50*15*6),Math.log(22080*50*15*6*10),Math.log(22080*50*15*6*10*25)],En=i=>Math.max(0,Math.min(pi.length-1,Number.isFinite(Number(i))?Number(i):0));function wa(i){const t=En(i),e=Math.min(pi.length-2,Math.floor(t));return pi[e]+(pi[e+1]-pi[e])*(t-e)}function Lr(i,t){const e=i-t,n=Math.exp(pi[i]-wa(t)),s=e>0?Math.max(0,Math.min(1,(1.1-e)/.8)):Math.max(0,Math.min(1,1+e*.55));return{scale:n,opacity:s,visible:s>.005&&n<250&&n>5e-5}}function Zm(i=0,t=!1){let e=En(i),n=e,s=e,r=0,a=0;function o(l){if(a){const c=Math.max(0,Math.min(1,(l-r)/a)),u=c*c*(3-2*c);e=n+(s-n)*u,c===1&&(e=s,a=0)}return e}return{advance:o,aim(l,c,{immediate:u=!1,scrub:d=!1}={}){return o(c),n=e,s=En(l),r=c,a=t||u?0:d?320:1800+Math.abs(s-n)*600,a||(e=s),e},get value(){return e},get target(){return s},get moving(){return a>0}}}function Jm(i=0){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");if(!e)return t;const n=i===1,s=e.createRadialGradient(64,64,1,64,64,62);if(s.addColorStop(0,n?"rgba(255,226,179,.95)":"rgba(216,237,255,.8)"),s.addColorStop(.17,n?"rgba(244,182,116,.55)":"rgba(127,190,244,.4)"),s.addColorStop(.55,n?"rgba(204,128,76,.13)":"rgba(90,140,217,.12)"),s.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=s,e.beginPath(),e.ellipse(64,64,62,i===1?38:34,0,0,Math.PI*2),e.fill(),i===0)for(let a=0;a<3;a++)for(let o=0;o<85;o++){const l=o/85*54,c=a*Math.PI*2/3+l*.065;e.fillStyle=`rgba(169,214,255,${.12+.4*(1-o/85)})`,e.beginPath(),e.arc(64+Math.cos(c)*l,64+Math.sin(c)*l*.46,.8+o/150,0,Math.PI*2),e.fill()}else if(i===2)for(let a=0;a<15;a++)e.fillStyle="rgba(154,205,236,.2)",e.beginPath(),e.arc(64+Math.sin(a*7)*28,64+Math.cos(a*3)*16,2+a%4,0,Math.PI*2),e.fill();const r=e.createRadialGradient(64,64,0,64,64,n?12:8);return r.addColorStop(0,"rgba(255,247,213,1)"),r.addColorStop(.35,"rgba(255,216,164,.85)"),r.addColorStop(1,"rgba(255,204,141,0)"),e.fillStyle=r,e.beginPath(),e.ellipse(64,64,n?12:8,n?9:5,0,0,Math.PI*2),e.fill(),t}function Qm(){const i=document.createElement("canvas");i.width=256,i.height=128;const t=i.getContext("2d");if(!t)return null;const e=t.createImageData(256,128);for(let s=0;s<128;s++)for(let r=0;r<256;r++){const a=(s/128-.5)*Math.PI,o=r/256*Math.PI*2,l=Math.sin(o*3+Math.sin(a*5))+Math.sin(a*6+o*.6),u=Math.abs(a)>1.3?[194,217,227]:l>.6?[77,126,101]:[28,83,127],d=(s*256+r)*4;for(let p=0;p<3;p++)e.data[d+p]=u[p];e.data[d+3]=255}t.putImageData(e,0,0);const n=new Fl(i);return n.colorSpace=ye,n}function t_(i){const t=qm(i);if(i===0)return{...t,spheres:[],labels:[]};if(i===1)return{...t,spheres:[{x:-8,y:0,z:0,r:1.5,color:"#ffc167",label:"太陽"}],lines:[[-8,0,0,0,0,0]],labels:[{x:-4,y:1,z:0,text:"1 AU · 光約走 8 分 19 秒"}]};if(i===2){const n=[.52,.72,1,1.5,3,4.5,6,8];return{...t,orbitCenter:-1,orbits:n,spheres:[{x:-1,y:0,z:0,r:1.5/8,color:"#ffc167",label:"太陽"},...t.spheres.slice(1).filter((s,r)=>r!==2).map((s,r)=>{const a=r<2?r:r+1,o=n[a];return{...s,x:-1+Math.cos(a*.9)*o,z:Math.sin(a*.9)*o,r:a>3?.15:.07}})],labels:[]}}if(i===3)return{...t,spheres:[{x:8,y:0,z:0,r:.18,color:"#e99074",label:"比鄰星"}],lines:[[0,0,0,8,0,0]],labels:[{x:4,y:1.3,z:0,text:"太陽附近 → 比鄰星：約 4.24 光年"}]};const e=i===4?-5.2:i===5?3:0;return{...t,spheres:[],points:t.points.map(n=>({...n,x:n.x+e})),galaxies:t.galaxies?.map(n=>({...n,x:n.x+e})),labels:t.labels.map(n=>({...n,x:n.x+e}))}}function e_(i,t){const e=new Oi;for(const n of i.galaxies||[]){const s=new Ch(new Ul({map:t[n.kind||0],transparent:!0,opacity:1,depthWrite:!1,blending:Ns,rotation:n.angle||0}));s.position.set(n.x,n.y,n.z),s.scale.set(n.r*2,n.r*2,1),e.add(s)}if(i.filaments){const n=[];for(const[r,a]of i.filaments)n.push(r.x,r.y,r.z,a.x,a.y,a.z);const s=new xe;s.setAttribute("position",new pe(n,3)),e.add(new Uh(s,new zi({color:"#79aee4",transparent:!0,opacity:.25,depthWrite:!1,blending:Ns})))}for(const n of i.spheres){const s=new zl({color:n.color,roughness:1,emissive:n.color,emissiveIntensity:.35,transparent:!0}),r=new Ae(new Xn(n.r,32,20),s);r.position.set(n.x,n.y,n.z),e.add(r)}if(i.points.length){const n=[],s=[];for(const a of i.points){n.push(a.x,a.y,a.z);const o=new Wt(a.color);s.push(o.r,o.g,o.b)}const r=new xe;r.setAttribute("position",new pe(n,3)),r.setAttribute("color",new pe(s,3)),e.add(new Nl(r,new Ba({size:.095,vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1})))}for(const n of i.orbits){const s=Array.from({length:129},(r,a)=>new L(Math.cos(a/128*Math.PI*2)*n+(i.orbitCenter||0),0,Math.sin(a/128*Math.PI*2)*n));e.add(new Vs(new xe().setFromPoints(s),new zi({color:"#7395af",transparent:!0,opacity:.45})))}for(const n of i.lines||[])e.add(new Vs(new xe().setFromPoints([new L(...n.slice(0,3)),new L(...n.slice(3))]),new zi({color:"#aa9376",transparent:!0,opacity:.7})));return e.traverse(n=>{n.material&&(n.userData.baseOpacity=n.material.opacity)}),e}function n_(i,{onMode:t,onProgress:e,reducedMotion:n=!1,force2d:s=!1}={}){i.dataset.reducedMotion=String(n);const r=Zm(0,n),a=Array.from({length:Dr.length},(tt,ft)=>t_(ft));let o=null,l,c,u,d,p,m=0,_=!1,v=!0,f=!0,h=null,b=!1;const T=[0,1,2].map(Jm),y=T.map(tt=>{const ft=new Fl(tt);return ft.colorSpace=ye,ft}),P=[],R=document.createElement("div"),C=document.createElement("canvas");R.className="cosmic-labels",R.setAttribute("aria-hidden","true"),C.className="cosmic-2d",C.setAttribute("aria-hidden","true"),i.append(R),i.prepend(C);try{h=C.getContext("2d")}catch{}const N=document.createElement("span");N.className="earth-anchor-label",N.textContent="地球觀測起點",R.append(N);const S=a.map((tt,ft)=>[...tt.spheres.filter(Et=>Et.label).map(Et=>({...Et,text:Et.label,y:Et.y-Et.r-.5})),...tt.labels].map(Et=>{const vt=document.createElement("span");return vt.textContent=Et.text,vt._point=new L(Et.x,Et.y,Et.z),vt._layer=ft,R.append(vt),vt}));function M(){o&&(o.dispose(),o.domElement.remove(),o=null),C.hidden=!1,t?.("2d"),f=!0,b&&K()}try{if(s)throw Error("2D requested");o=new jl({antialias:!0,alpha:!0}),o.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,1.5)),o.outputColorSpace=ye,i.prepend(o.domElement),o.domElement.tabIndex=0,o.domElement.setAttribute("aria-label","以地球觀測起點連續拉遠的三維示意。方向鍵切換尺度，滑桿連續縮放。"),l=new Ll,c=new De(46,1,.01,1e4),c.position.set(0,13,23),u=new $l(c,o.domElement),o.domElement.style.touchAction="pan-y",u.enableDamping=!0,u.enableZoom=!1,u.enablePan=!1,u.rotateSpeed=.55,l.add(new Vl("#ddefff",2));const tt=new zh("#e1efff",3);tt.position.set(-5,5,8),l.add(tt),d=new Ae(new Xn(3.9,40,26),new zl({color:"#ffffff",roughness:1,map:Qm()})),l.add(d),p=new Ae(new Xn(.035,12,8),new Ws({color:"#ffdda4",transparent:!0,opacity:0})),l.add(p);for(let ft=0;ft<Dr.length;ft++){const Et=e_(a[ft],y);l.add(Et),P.push(Et)}o.domElement.addEventListener("webglcontextlost",ft=>{ft.preventDefault(),M()}),C.hidden=!0,t?.("3d")}catch{M()}let w=800,O=500,k=20;function K(){if(b=!0,w=i.clientWidth||800,O=i.clientHeight||500,k=Math.min(w/23,O/23),o)o.setSize(w,O),c.aspect=w/O,c.fov=c.aspect<1?65:46,c.updateProjectionMatrix();else if(h){const tt=Math.min(globalThis.devicePixelRatio||1,1.5);C.width=w*tt,C.height=O*tt,C.style.width=w+"px",C.style.height=O+"px",h.setTransform(tt,0,0,tt,0,0)}f=!0}function X(tt,ft){return[w/2+tt.x*k*ft,O/2+(tt.z*.35-tt.y*.8)*k*ft]}function j(tt,ft,Et,vt=!1){const[B,W]=X(tt,ft),$=tt.r*k*ft;if($<.06||B+$<0||B-$>w||W+$<0||W-$>O||$>1e4)return;h.globalAlpha=Et;const mt=h.createRadialGradient(B-$*.35,W-$*.4,$*.05,B,W,$);if(mt.addColorStop(0,tt.color),mt.addColorStop(.6,tt.color),mt.addColorStop(1,"#07101c"),h.fillStyle=mt,h.beginPath(),h.arc(B,W,$,0,Math.PI*2),h.fill(),vt&&$>3){h.save(),h.beginPath(),h.arc(B,W,$,0,Math.PI*2),h.clip(),h.globalAlpha=Et*.55,h.fillStyle="#91b2a1";for(let ot=0;ot<5;ot++)h.beginPath(),h.ellipse(B+Math.sin(ot*2.3)*$*.55,W+Math.cos(ot*1.8)*$*.5,$*.2,$*.11,ot,0,Math.PI*2),h.fill();h.restore()}}function J(tt){if(!h)return;h.clearRect(0,0,w,O);let ft=17;h.globalAlpha=1;for(let vt=0;vt<100;vt++){ft=ft*16807%2147483647;const B=ft/2147483647*w;ft=ft*16807%2147483647,h.fillStyle="#adbed144",h.fillRect(B,ft/2147483647*O,1,1)}for(let vt=Dr.length-1;vt>=1;vt--){const B=Lr(vt,tt),W=a[vt];if(B.visible){if(h.globalAlpha=B.opacity,W.filaments)for(const[$,mt]of W.filaments){const[ot,Pt]=X($,B.scale),[he,A]=X(mt,B.scale);h.strokeStyle="#6392ca22",h.lineWidth=5,h.beginPath(),h.moveTo(ot,Pt),h.lineTo(he,A),h.stroke(),h.strokeStyle="#92bdea66",h.lineWidth=.75,h.stroke()}h.save(),h.globalCompositeOperation="screen";for(const $ of W.galaxies||[]){const[mt,ot]=X($,B.scale),Pt=Math.max(1.8,$.r*k*B.scale);mt+Pt<0||mt-Pt>w||ot+Pt<0||ot-Pt>O||Pt>1e4||(h.save(),h.translate(mt,ot),h.rotate($.angle||0),h.drawImage(T[$.kind||0],-Pt,-Pt,2*Pt,2*Pt),h.restore())}h.restore();for(const $ of W.orbits){const[mt,ot]=X({x:W.orbitCenter||0,y:0,z:0},B.scale);h.strokeStyle="#7795af77",h.lineWidth=1,h.beginPath(),h.ellipse(mt,ot,$*k*B.scale,$*k*B.scale*.35,0,0,Math.PI*2),h.stroke()}for(const $ of W.lines||[]){const[mt,ot]=X({x:$[0],y:$[1],z:$[2]},B.scale),[Pt,he]=X({x:$[3],y:$[4],z:$[5]},B.scale);h.strokeStyle="#d4b27b88",h.setLineDash([4,6]),h.beginPath(),h.moveTo(mt,ot),h.lineTo(Pt,he),h.stroke(),h.setLineDash([])}for(const $ of W.points){const[mt,ot]=X($,B.scale);mt<0||mt>w||ot<0||ot>O||(h.fillStyle=$.color,h.beginPath(),h.arc(mt,ot,Math.max(.45,Math.min(3,($.size||.04)*k*Math.sqrt(B.scale))),0,Math.PI*2),h.fill())}for(const $ of W.spheres)j($,B.scale,B.opacity)}}const Et=Math.exp(-wa(tt));j({x:0,y:0,z:0,r:3.9,color:"#4586ad"},Et,1,!0),3.9*k*Et<2.8&&(h.globalAlpha=1,h.strokeStyle="#efc58f",h.lineWidth=1,h.beginPath(),h.arc(w/2,O/2,4,0,Math.PI*2),h.stroke(),h.fillStyle="#efc58f",h.fillRect(w/2-1,O/2-1,2,2)),h.globalAlpha=1}function V(tt){i.dataset.zoomProgress=tt.toFixed(4),i.dataset.zoomTarget=r.target.toFixed(4),i.dataset.zoomAnimating=String(r.moving);const ft=wa(tt),Et=Math.exp(-ft);if(o){for(let vt=0;vt<P.length;vt++){const B=Lr(vt,tt),W=P[vt];W.visible=B.visible,W.scale.setScalar(B.scale),W.traverse($=>{$.material&&($.material.opacity=$.userData.baseOpacity*B.opacity)})}d.scale.setScalar(Et),p.material.opacity=3.9*k*Et<2.8?1:0,u.update(),c.updateMatrixWorld(),o.render(l,c)}else J(tt);for(let vt=0;vt<S.length;vt++){const B=Lr(vt,tt);for(const W of S[vt]){const $=Math.max(0,1-Math.abs(tt-vt)*1.5);if(W.hidden=$<.08,W.hidden)continue;let mt,ot;if(o){const Pt=W._point.clone().multiplyScalar(B.scale).project(c);mt=(Pt.x*.5+.5)*w,ot=(-Pt.y*.5+.5)*O}else[mt,ot]=X(W._point,B.scale);W.style.left=mt+"px",W.style.top=ot+"px",W.style.opacity=String($)}}N.style.left=w/2+"px",N.style.top=O/2+Math.min(O*.3,3.9*k*Et)+8+"px",N.textContent=tt<.5?"地球":tt<2?"地球觀測起點":"我們在這個方向 · 標記已放大",e?.(tt,r.target,r.moving)}function G(tt){if(_)return;m=requestAnimationFrame(G);const ft=r.moving,Et=r.advance(tt);v&&!document.hidden&&(f||ft||o)&&(V(Et),f=!1)}const et=typeof ResizeObserver<"u"?new ResizeObserver(K):null;et?.observe(i);const ht=typeof IntersectionObserver<"u"?new IntersectionObserver(tt=>{v=tt[0].isIntersecting,v&&(f=!0)}):null;return ht?.observe(i),K(),V(0),m=requestAnimationFrame(G),{setStage(tt,{immediate:ft=!1,scrub:Et=!1}={}){r.aim(En(tt),performance.now(),{immediate:ft,scrub:Et}),f=!0,(ft||n)&&V(r.value)},getProgress(){return r.advance(performance.now())},getTarget(){return r.target},resetView(){c&&(c.position.set(0,13,23),u.target.set(0,0,0),u.update())},dispose(){_=!0,cancelAnimationFrame(m),et?.disconnect(),ht?.disconnect(),u?.dispose(),l&&l.traverse(tt=>{tt.geometry?.dispose(),tt.material&&(tt.material.map?.dispose(),tt.material.dispose())}),y.forEach(tt=>tt.dispose()),o?.dispose(),i.replaceChildren()}}}function i_(){const i=_=>document.querySelector(_),{stages:t,constants:e}=Gm;let n=0,s=0,r=!1;const a=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1;i("#cosmic-steps").innerHTML=t.map((_,v)=>`<button data-cosmic="${v}" aria-current="false"><small>${String(v+1).padStart(2,"0")}</small>${_.name}</button>`).join("");const o=n_(i("#cosmic-stage"),{reducedMotion:a,force2d:new URLSearchParams(location.search).has("no3d"),onProgress:(_,v,f)=>{r||(i("#cosmic-range").value=String(_)),i("#cosmic-stage").setAttribute("aria-busy",String(f)),i("#cosmic-scale").textContent=t[Math.round(_)].scaleLabel,i("#cosmic-visual-note").textContent=_>=5?"星系形狀、數量、位置與絲線皆為教學示意，非真實星圖":"藝術化空間示意，請以標示數值為準",i("#cosmic-motion-status").textContent=f?`${v>=_?"正在拉遠":"正在拉近"} · ${t[Math.floor(_)].name} → ${t[Math.min(t.length-1,Math.ceil(_))].name}`:"觀測起點：地球 · 不是宇宙的中心"},onMode:_=>{i("#cosmic-mode").textContent=_==="3d"?"✦ 3D 尺度導覽":"✦ 2D 尺度導覽"}});function l(_,v=!1,{immediate:f=!1,scrub:h=!1}={}){s=En(_),n=Math.round(s);const b=t[n];if(o.setStage(s,{immediate:f,scrub:h}),i("#cosmic-counter").textContent=`${String(n+1).padStart(2,"0")} / ${String(t.length).padStart(2,"0")}`,i("#cosmic-scale").textContent=b.scaleLabel,(f||a)&&(i("#cosmic-range").value=String(s)),i("#cosmic-range").setAttribute("aria-valuetext",b.name+"，"+b.scaleLabel),i("#cosmic-range-name").textContent=b.name,i("#cosmic-prev").disabled=s===0,i("#cosmic-next").disabled=s===t.length-1,document.querySelectorAll("[data-cosmic]").forEach(T=>T.setAttribute("aria-current",Number(T.dataset.cosmic)===n?"step":"false")),i("#cosmic-detail").innerHTML=`<p class="eyebrow">${String(n+1).padStart(2,"0")} / 目的尺度 · ${b.kicker}</p><h3>${b.title}</h3><div class="cosmic-distance">${b.scaleLabel}</div><div class="cosmic-copy">${b.facts.map(T=>`<p>${T}</p>`).join("")}</div><p class="cosmic-caution">${b.caution}</p><div class="cosmic-light"><span>光與時間</span>${b.lightTime}</div><a class="source" href="${b.source}" target="_blank" rel="noopener">查看官方資料 ↗</a>${b.sources?.length>1?`<div class="cosmic-extra-sources">${b.sources.slice(1).map((T,y)=>`<a href="${T}" target="_blank" rel="noopener">延伸來源 ${y+1} ↗</a>`).join(" · ")}</div>`:""}`,v){const T=new URL(location.href);T.searchParams.set("cosmic",String(Number(s.toFixed(2)))),T.href!==location.href&&history.pushState(null,"",T)}}function c(_){const v=o.getProgress(),f=o.getTarget(),h=_>0?f<v?Math.ceil(v):Math.floor(f)+1:f>v?Math.floor(v):Math.ceil(f)-1;l(En(h),!0)}i("#cosmic-prev").addEventListener("click",()=>c(-1)),i("#cosmic-next").addEventListener("click",()=>c(1)),document.querySelectorAll("[data-cosmic]").forEach(_=>_.addEventListener("click",()=>l(Number(_.dataset.cosmic),!0))),i("#cosmic-range").addEventListener("pointerdown",()=>r=!0),window.addEventListener("pointerup",()=>r=!1),i("#cosmic-range").addEventListener("input",_=>l(Number(_.target.value),!1,{scrub:!0})),i("#cosmic-range").addEventListener("change",()=>{r=!1,l(s,!0,{scrub:!0})}),i("#cosmic-reset").addEventListener("click",()=>{o.resetView(),l(0,!0,{immediate:!0})}),i("#return-solar").addEventListener("click",()=>{l(o.getProgress(),!1,{immediate:!0}),document.querySelector("#planet-nav [data-body=earth]").click()}),i("#cosmic-stage").addEventListener("keydown",_=>{["ArrowRight","ArrowUp","ArrowLeft","ArrowDown","Home","End"].includes(_.key)&&(_.preventDefault(),_.key==="Home"?l(0,!0):_.key==="End"?l(t.length-1,!0):c(["ArrowRight","ArrowUp"].includes(_.key)?1:-1))}),i("#cosmic-stage").tabIndex=0,window.addEventListener("popstate",()=>l(En(new URLSearchParams(location.search).get("cosmic")),!1,{immediate:!0}));const u=_=>new Intl.NumberFormat("zh-TW",{maximumFractionDigits:1}).format(_),d=_=>_>=1e3?`${u(_/1e3)} 公里`:`${u(_)} 公尺`;let p=null;function m(){const _=Number(i("#earth-cm").value);i("#earth-cm-value").value=_.toFixed(1)+" cm",p?.setDiameter(_);const v=f=>Zl(f,e.earthDiameterKm,_);i("#ruler-results").innerHTML=[["太陽直徑",d(v(14e5)),"太陽直徑採約 140 萬公里"],["模型地球到太陽",d(v(e.auKm)),"真實代表距離：1 AU"],["模型太陽到海王星軌道",d(v(e.auKm*e.neptuneOrbitAU)),"真實軌道半長軸：約 30 AU"],["模型太陽到比鄰星",d(v(e.lightYearKm*e.proximaDistanceLy)),"真實距離：約 4.24 光年"]].map(([f,h,b])=>`<div class="ruler-result"><span>${f}</span><b>${h}</b><small>${b}</small></div>`).join("")}return p=$m(i("#ruler-animation"),e,{reducedMotion:a,onPreset:_=>{i("#earth-cm").value=String(_),m()}}),i("#earth-cm").addEventListener("input",m),m(),l(En(new URLSearchParams(location.search).get("cosmic")),!1,{immediate:!0}),{show:l,index:()=>n,dispose:()=>{o.dispose(),p.dispose()}}}const{planets:bi,sun:s_}=cc,Ti=[s_,...bi],Jt=i=>document.querySelector(i);let dn=null,xn=!1,Jl=!1,vi=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Mn="diameterKm";const Wa=(i,t)=>`<span class="orb ${i.id}" style="--body-color:${i.color};--diameter:${t}px" aria-hidden="true"></span>`;Jt("#planet-nav").innerHTML=Ti.map(i=>`<button data-body="${i.id}" aria-pressed="false"><span class="nav-dot" style="--body-color:${i.color}"></span>${i.name}<small>${i.en.toUpperCase()}</small></button>`).join("");Jt("#flat").innerHTML=Ti.map((i,t)=>`<button class="flat-body" data-body="${i.id}" aria-label="探索${i.name}">${Wa(i,t===0?70:Math.max(15,Math.sqrt(i.diameterKm/bi[4].diameterKm)*52))}<span>${i.name}</span></button>`).join("");function qs(i,t=!0){const e=Ti.find(n=>n.id===i);if(e&&(dn?.select(i),document.querySelectorAll("[data-body]").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.body===i))),Jt("#detail").innerHTML=`<div class="detail-index">${i==="sun"?"THE STAR":String(Ti.indexOf(e)).padStart(2,"0")+" / 08"} · COSMIC FIELD NOTES</div><div class="detail-heading"><div><h2>${e.name}</h2><small>${e.en.toUpperCase()}</small></div>${Wa(e,65)}</div><span class="type">${e.type}</span><p class="tagline">${e.tagline}</p><ul class="facts">${e.facts.map(n=>`<li>${n}</li>`).join("")}</ul><div class="stats"><div class="stat"><span>平均直徑</span><b>約 ${ws(Math.round(e.diameterKm))} km</b></div><div class="stat"><span>軌道半長軸</span><b>${e.distanceAU===null?"—（中央恆星）":ws(e.distanceAU)+" AU"}</b></div><div class="stat"><span>公轉週期</span><b>${e.orbitDays===null?"—（不適用）":ws(e.orbitDays)+" 地球日"}</b></div></div><a class="source" href="${e.source}" target="_blank" rel="noopener">NASA ${e.name}資料 ↗</a>`,t)){const n=new URL(location.href);n.searchParams.set("planet",i),history.pushState(null,"",n)}}document.querySelectorAll("[data-body]").forEach(i=>i.addEventListener("click",()=>qs(i.dataset.body)));window.addEventListener("popstate",()=>qs(new URLSearchParams(location.search).get("planet")||"earth",!1));function Xa(i){xn=i,Jt("#flat").hidden=!xn,dn?.setVisible(!xn),Jt("#mode").textContent=xn?"切換 3D 探索":"切換 2D 導覽",Jt("#mode").disabled=Jl,Jt("#interaction-hint").textContent=xn?"點選天體或使用下方按鈕閱讀知識卡":"拖曳旋轉 · 滾輪／雙指縮放 · 點選行星";for(const t of["zoom-in","zoom-out","reset","pause","speed"])Jt("#"+t).disabled=xn;Jt("#time-label").textContent=xn?"2D 靜態導覽":`1 秒 = ${20*Number(Jt("#speed").value)} 地球日`}function ll(){document.querySelectorAll("#stage canvas").forEach(i=>i.hidden=!0),Jt("#labels").hidden=!0,Jl=!0,Xa(!0),Jt("#fallback").hidden=!1,Jt("#mode").textContent="目前為 2D 導覽"}try{if(new URLSearchParams(location.search).has("no3d"))throw Error("Explicit fallback");dn=Hm(Jt("#stage"),Ti,i=>qs(i),ll),dn.setPaused(vi),Xa(!1)}catch{ll()}Jt("#mode").addEventListener("click",()=>Xa(!xn));Jt("#zoom-in").addEventListener("click",()=>dn?.zoom(.8));Jt("#zoom-out").addEventListener("click",()=>dn?.zoom(1.25));Jt("#reset").addEventListener("click",()=>dn?.reset());function Ql(){dn?.setPaused(vi),Jt("#pause").textContent=vi?"▶ 開始公轉":"Ⅱ 暫停公轉",Jt("#pause").setAttribute("aria-pressed",String(vi))}Jt("#pause").addEventListener("click",()=>{vi=!vi,Ql()});Jt("#speed").addEventListener("change",()=>{dn?.setSpeed(Number(Jt("#speed").value)),Jt("#time-label").textContent=`1 秒 = ${20*Number(Jt("#speed").value)} 地球日`});Ql();const r_={diameterKm:{unit:"km",note:"平均直徑比較。長條共用線性比例，最長為木星；採體積等效平均半徑 × 2，非赤道直徑。"},distanceAU:{unit:"AU",note:"軌道半長軸比較。長條共用線性比例；這是軌道尺度，並非此刻日距。1 AU 約 1.496 億公里。"},orbitDays:{unit:"地球日",note:"恆星公轉週期比較。長條共用線性比例，內行星的短條很小是正常的；數字仍完整顯示。"}};function tc(){const i=r_[Mn],t=Math.max(...bi.map(e=>e[Mn]));Jt("#compare-note").textContent=i.note,Jt("#chart").innerHTML=bi.map(e=>`<div class="bar-row"><span>${e.name}</span><div class="bar-track" aria-hidden="true"><i style="--body-color:${e.color};width:${fc(e[Mn],t)*100}%"></i></div><span class="bar-value">${ws(Mn==="diameterKm"?Math.round(e[Mn]):e[Mn])} ${i.unit}</span></div>`).join(""),document.querySelectorAll("[data-metric]").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.metric===Mn)))}document.querySelectorAll("[data-metric]").forEach(i=>i.addEventListener("click",()=>{Mn=i.dataset.metric,tc()}));Jt("#size-row").innerHTML=bi.map(i=>`<div class="size-item">${Wa(i,i.diameterKm/bi[4].diameterKm*120)}<span>${i.name}</span></div>`).join("");const cl=new URLSearchParams(location.search).get("planet");qs(Ti.some(i=>i.id===cl)?cl:"earth",!1);tc();i_();
