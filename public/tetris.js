+function(n,i,t){+function(r,e,o,c,u,a){function f(n,i,t){return 10*(t+n/4<<0)+i+n%4}function s(n,i){return n.repeat(i)}function m(n,i){return d.substr(n,i)}function v(){U=1,clearTimeout(j),E()}function p(){U=0,E(),O()}function h(n){if(H)return H=0,void T();if(I&&n in{89:1,78:1})switch(I=0,n){case 89:T();break;case 78:H=1,E()}if(!I){if(U)return void p();if(n in{27:1,80:1}&&v(),n in{37:1,38:1,39:1}){var i=x(k);switch(n){case 37:i.x=0===i.x?0:i.x-1;break;case 39:var r=10-c[i.i];i.x=i.x===r?r:i.x+1;break;case 38:var e=o[k.i],u=0,f=0;a[e]&&(u=a[e][0],f=a[e][1]),i=x(k,{x:k.x+u,y:k.y+f,i:e}),i.x=t.min(i.x,10-c[i.i]),i.x=t.max(i.x,0)}k=S(i)||k,R(),E()}if(n in{40:1,32:1}){switch(n){case 40:l();break;case 32:for(;l(););}E(),O()}}}function x(n,i){var r=19*t.random()<<0;return Object.assign({x:4+(u[r]?u[r]:0),y:0,c:0,i:r},n,i)}function S(n){if(!e[n.i].some(function(i,t){if(t=f(t,n.x,n.y),i&&(t>=200||r[t]))return 1}))return n}function g(){for(var i=200,t=10,e=0,o=0;i-=t;)r.slice(i,i+t).every(n)&&(r.splice(i,t),o+=t,e<4&&e++,++C%10===0&&(P=P<9?P+1:1));for(;o--;)r.unshift(0);w+=[0,50,150,350,1e3][e]*P,r.some(n)||(w+=2e3*P)}function R(){b=r.slice(),e[k.i].map(function(n,i){i=f(i,k.x,k.y),void 0!==b[i]&&(b[i]=b[i]||n)})}function l(){var n=x(k,{y:k.y+1,c:k.c+1});return k=S(n)||k,R(),k===n?1:k.c?(w+=10*P,k=D,D=x(),r=b,g(),b=r,void R()):(I=1,void i(function(){F(w,P,C)}))}function A(){var n="\n\r",i=s(" ",28),t=i+"<!",r="!>"+i,o=r+t,c=String.fromCharCode(9646),u=s(c,2),a=s(" ",80)+n;if(H)return i=s(" ",19),d=[-58917640,-942919668,858981133,-2096247688,-1023360221,53509168,-858816512].map(function(n){return(s("0",10)+(n>>>0).toString(2)).substr(-32)}).join("").substr(0,210).split("").map(function(n){return[" ",c][n]}).join("").match(/.{1,42}/g).join(i+n+i),void(d=s(a,8)+i+d+i+n+s(a,4)+s(" ",33)+"PRESS ANY KEY"+s(" ",34)+n+s(a,7));d=b.map(function(n){return[" .",u][n]}).join("").match(/.{20}/g).join(o),d=t+d+o+s("=",20)+r+i+"  "+s("\\/",10)+"  "+i;var f=C.toString();f="ROWS HIT:"+s(" ",15-f.length)+f,d=f+m(24);var v=w.toString().reverse().match(/.{1,3}/g).join(" ").reverse();v="SCORE:"+s(" ",18-v.length)+v,d=m(0,80)+v+m(104),d=m(0,160)+"LEVEL:"+s(" ",17)+P+m(184),e[D.i].map(function(n,i){i=80*(10+2*i/8<<0)+20+2*i%8,n&&(d=m(0,i)+u+m(i+2))}),d=m(0,138)+"UP ARROW: ROTATE"+m(154),d=m(0,216)+"DOWN ARROW: SOFT DROP"+m(237),d=m(0,298)+"SPACEBAR: HARD DROP"+m(317),d=m(0,380)+"ESC, P: PAUSE"+m(393),U&&(d=m(0,757)+"PAUSED"+m(763)),I&&(d=m(0,756)+"TRY AGAIN?"+m(766),d=m(0,836)+"   Y/N    "+m(846)),d=d.match(/.{1,80}/g).join(n),d=a+d+n+s(a,2)}function E(){A(),Y(d)}function y(n){F=n.finish||W,(Y=n.nextFrame||W)(d)}function O(){clearTimeout(j),I||H||(j=i(function(){l(),E(),O()},100*(10-P)))}function T(){D=x(),k=D,r=N,P=1,w=0,C=0,I=0,R(),E(),O()}var d,b,j,P,w,C,D=x(),k=D,N=r.slice(),W=function(){},Y=W,F=W,I=0,U=0,H=1;T(),window.TETRIS={on:y,pause:v,pressKey:h,start:T,upause:p}}("0".repeat(200).split("").map(n),[785,23,547,116,51,114,305,39,562,15,4369,99,306,54,561,802,113,275,71].map(function(i){return(i>>>0).toString(2).split("").reverse().map(n)}),[1,2,3,0,4,6,7,8,5,10,9,12,11,14,13,16,17,18,15],[2,3,2,3,2,3,2,3,2,4,1,3,2,3,2,2,3,2,3],{9:-1,10:1},{5:[0,0],6:[1,0],7:[-1,1],8:[0,0],9:[-2,2],10:[2,-1],11:[-1,1],12:[1,0],13:[-1,1],14:[1,0]})}(parseFloat,setTimeout,Math),String.prototype.reverse=function(){for(var n="",i=this.length;i--;)n+=this.charAt(i);return n};