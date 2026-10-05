export const zoomStops=[0,Math.log(23),Math.log(23*8),Math.log(23*8*120),Math.log(23*8*120*50),Math.log(23*8*120*50*15),Math.log(23*8*120*50*15*6),Math.log(23*8*120*50*15*6*10),Math.log(23*8*120*50*15*6*10*25)];
export const clampProgress=v=>Math.max(0,Math.min(zoomStops.length-1,Number.isFinite(Number(v))?Number(v):0));
export function zoomAt(progress){const p=clampProgress(progress),i=Math.min(zoomStops.length-2,Math.floor(p));return zoomStops[i]+(zoomStops[i+1]-zoomStops[i])*(p-i);}
export function layerTransform(layer,progress){const delta=layer-progress,scale=Math.exp(zoomStops[layer]-zoomAt(progress));const opacity=delta>0?Math.max(0,Math.min(1,(1.1-delta)/.8)):Math.max(0,Math.min(1,1+delta*.55));return {scale,opacity,visible:opacity>.005&&scale<250&&scale>.00005};}
export function createZoomMotion(initial=0,reducedMotion=false){let value=clampProgress(initial),from=value,target=value,start=0,duration=0;
 function advance(now){if(duration){const t=Math.max(0,Math.min(1,(now-start)/duration));const ease=t*t*(3-2*t);value=from+(target-from)*ease;if(t===1){value=target;duration=0;}}return value;}
 return {advance,aim(next,now,{immediate=false,scrub=false}={}){advance(now);from=value;target=clampProgress(next);start=now;duration=reducedMotion||immediate?0:scrub?320:1800+Math.abs(target-from)*600;if(!duration)value=target;return value;},get value(){return value;},get target(){return target;},get moving(){return duration>0;}};
}
