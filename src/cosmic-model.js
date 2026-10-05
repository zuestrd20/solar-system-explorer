import {localGroupSpec,neighborhoodSpec,cosmicWebSpec} from './cosmic-web.js';
export const cosmicIds=['earth','sun','solar','stars','galaxy','group','neighbors','web','universe'];
export function validStage(value){const n=Number(value);return Number.isInteger(n)&&n>=0&&n<cosmicIds.length?n:0;}
export function generateGalaxy(count=1300,seed=312){let state=seed;const rand=()=>{state=state*16807%2147483647;return state/2147483647;};return Array.from({length:count},(_,i)=>{const r=Math.sqrt(rand())*9.4;const arm=i%3;const theta=arm*Math.PI*2/3+r*.48+(rand()-.5)*.9;return {x:Math.cos(theta)*r,y:(rand()-.5)*(.25+(10-r)*.12),z:Math.sin(theta)*r,color:i%7===0?'#f7d4a2':'#a9cced',size:.035+rand()*.04};});}
export function sceneSpec(index){
 const sphere=(x,y,z,r,color,label)=>({x,y,z,r,color,label});
 if(index===0)return {spheres:[sphere(0,0,0,3.9,'#4586ad','地球')],points:[],orbits:[],labels:[{x:0,y:-4.9,z:0,text:'我們唯一已知的家'}]};
 if(index===1)return {spheres:[sphere(-5,0,0,1.5,'#ffc167','太陽'),sphere(5,0,0,.17,'#77bce5','地球')],points:[],orbits:[],lines:[[-5,0,0,5,0,0]],labels:[{x:0,y:1.7,z:0,text:'1 AU · 光約走 8 分 19 秒'},{x:0,y:-3,z:0,text:'天體放大，距離以標示數值為準'}]};
 if(index===2){const r=[1.5,2.2,2.9,3.6,5.1,6.4,7.7,9],colors=['#b8a79b','#e7c08d','#77bce5','#d58c6e','#d3ac83','#c9ba91','#90d1d2','#698dc9'];return {spheres:[sphere(0,0,0,.55,'#ffc167','太陽'),...r.map((v,i)=>sphere(Math.cos(i*.9)*v,0,Math.sin(i*.9)*v,i>3?.18:.09,colors[i],i===7?'海王星軌道約 30 AU':''))],orbits:r,points:[],labels:[{x:0,y:-2,z:0,text:'八大行星所在區域 · 非太陽系全部範圍'}]};}
 if(index===3)return {spheres:[sphere(-5,0,0,.38,'#ffca78','太陽'),sphere(5,0,0,.18,'#e99074','比鄰星')],points:[],orbits:[],lines:[[-5,0,0,5,0,0]],labels:[{x:0,y:2,z:0,text:'約 4.24 光年'},{x:0,y:-2.5,z:0,text:'恆星尺寸特別放大 · 地球已小於一個像素'}]};
 if(index===4)return {spheres:[sphere(5.2,0,0,.10,'#ffd284','太陽的位置（約略）')],points:generateGalaxy(),orbits:[],labels:[{x:0,y:2,z:0,text:'銀河系中心'},{x:0,y:-3,z:0,text:'盤面直徑約 10 萬光年'}]};
 if(index===5)return localGroupSpec();
 if(index===6)return neighborhoodSpec();
 if(index===7)return cosmicWebSpec();
 return cosmicWebSpec(873,true);
}
