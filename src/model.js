export const TAU=Math.PI*2;
export const orbitRadii=[5.2,7.5,10,12.6,17,22,27,32];
export const displayRadii=[.37,.63,.67,.48,1.65,1.37,1.01,.98];
export const phases=[.6,2.1,4.2,5.6,1.7,3.9,.2,5.1];
export function orbitPosition(index,days,period){const a=phases[index]+TAU*days/period;return [Math.cos(a)*orbitRadii[index],0,Math.sin(a)*orbitRadii[index]];}
export function ratio(value,max){return value/max;}
export function format(value){return new Intl.NumberFormat('zh-TW',{maximumFractionDigits:2}).format(value);}
