(this["webpackJsonpaudio-player"]=this["webpackJsonpaudio-player"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Perfect Two 1.9d286ccc.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Perfect.fd8701d3.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Little Do You Know 1.c3c65b98.png"},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),r=c.n(s),i=c(2),l=c(0),o=function(e){var t=e.tracks,c=e.index,n=e.changeIndex,a=e.isPlay,s=t.map((function(e,t){return Object(l.jsxs)("div",{className:"menu__audio"+(t===c?" menu__audio--current":"")+(t===c&&!0===a?" menu__audio--play":""),onClick:function(){n(t)},children:[Object(l.jsxs)("div",{className:"menu__audio__img",children:[Object(l.jsx)("img",{src:e.img.default,alt:e.title}),Object(l.jsx)("div",{className:"menu__audio__img--overlay",children:Object(l.jsx)("i",{className:"fas fa-play"})})]}),Object(l.jsxs)("div",{className:"menu__audio__info",children:[Object(l.jsx)("span",{children:e.title}),Object(l.jsx)("span",{children:e.artist})]}),Object(l.jsx)("button",{onClick:function(e){e.stopPropagation()},children:Object(l.jsx)("a",{href:e.src,download:e.title,children:Object(l.jsx)("i",{className:"fas fa-download"})})})]},t)}));return Object(l.jsxs)("div",{className:"menu",children:[Object(l.jsx)("h3",{children:"Playlist"}),s]})},u=function(e){var t=e.tracks,c=e.index,a=e.onChangeTrack,s=e.isPlay,r=Object(n.useState)(!1),u=Object(i.a)(r,2),j=u[0],d=u[1],b=function(e){e.target.closest(".menu__audio")||e.target.closest(".header__button")||d(!1)};Object(n.useEffect)((function(){return document.addEventListener("click",b,!1),function(){document.removeEventListener("click",b,!1)}}),[]);return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("span",{className:"place-holder"}),Object(l.jsx)("h3",{className:"header__title",children:"Now Playing"}),Object(l.jsxs)("button",{className:"header__button open-playlist",onClick:function(){d(!j)},children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]}),j&&Object(l.jsx)(o,{tracks:t,isPlay:s,index:c,changeIndex:function(e){d(!1),a(e)}})]})},j=function(e){var t=e.isPlaying,c=e.playMode,n=e.onPlayPauseClick,a=e.onPrevClick,s=e.onNextClick,r=e.onRandClick,i=e.onReClick;return Object(l.jsxs)("div",{className:"control",children:[Object(l.jsx)("button",{className:"control__button --level-1"+(-1===c?" active":""),onClick:r,children:Object(l.jsx)("i",{className:"fas fa-random"})}),Object(l.jsx)("button",{className:"control__button --level-2",onClick:a,children:Object(l.jsx)("i",{className:"fas fa-backward"})}),t?Object(l.jsx)("button",{className:"control__button --level-3",onClick:function(){n(!1)},children:Object(l.jsx)("i",{className:"fas fa-pause"})}):Object(l.jsx)("button",{className:"control__button --level-3",onClick:function(){n(!0)},children:Object(l.jsx)("i",{className:"fas fa-play"})}),Object(l.jsx)("button",{className:"control__button --level-2",onClick:s,children:Object(l.jsx)("i",{className:"fas fa-forward"})}),Object(l.jsx)("button",{className:"control__button --level-1"+(1===c?" active":""),onClick:i,children:Object(l.jsx)("i",{className:"fas fa-redo-alt"})})]})},d=function(e){var t=e.tracks,c=e.index,a=e.onChangePlay,s=Object(n.useState)(0),r=Object(i.a)(s,2),o=r[0],u=r[1],d=Object(n.useState)(0),b=Object(i.a)(d,2),f=b[0],O=b[1],m=Object(n.useState)(!1),h=Object(i.a)(m,2),x=h[0],p=h[1],v=Object(n.useState)(0),_=Object(i.a)(v,2),g=_[0],k=_[1],N=Object(n.useState)(0),y=Object(i.a)(N,2),C=y[0],P=y[1],w=Object(n.useRef)(null),M=Object(n.useRef)(null),E=function(){clearInterval(M.current),M.current=setInterval((function(){w.current.ended||O(w.current.currentTime||0)}),1e3)};Object(n.useEffect)((function(){console.log("playing"),x?(w.current.play(),E()):(clearInterval(M.current),w.current.pause())}),[x]),Object(n.useEffect)((function(){x?(w.current.play(),E()):(clearInterval(M.current),w.current.pause()),O(0)}),[o]),Object(n.useEffect)((function(){u(c)}),[c]),Object(n.useEffect)((function(){return function(){clearInterval(M.current),w.current.pause()}}),[]),Object(n.useEffect)((function(){console.log("rerendered")}));var S=function(){if(-1===g){for(var e=o;e===o;)c=0,n=t.length-1,e=Math.floor(Math.random()*(n-c+1))+c;u(e)}else o===t.length-1?(u(0),p(!1),a(!1)):u(o+1);var c,n},I=function(){w.current.currentTime=f,x&&E()};return Object(l.jsxs)("main",{children:[Object(l.jsx)("audio",{ref:w,src:t[o].src,loop:!1,onEnded:function(){S()},onLoadedData:function(){P(w.current.duration)}}),Object(l.jsxs)("div",{className:"audio",children:[Object(l.jsx)("div",{className:"audio__img--wrapper",children:Object(l.jsx)("img",{src:t[o].img.default,alt:t[o].title})}),Object(l.jsxs)("div",{className:"audio__info",children:[Object(l.jsx)("h1",{children:"#"+(o+1)+" - "+t[o].title}),Object(l.jsx)("h3",{children:t[o].artist})]})]}),Object(l.jsxs)("div",{className:"progress__wrapper",children:[Object(l.jsx)("span",{children:("00"+Math.floor(Math.floor(f)/60)).substr(-2)+":"+("00"+Math.floor(f)%60).substr(-2)}),Object(l.jsx)("input",{type:"range",value:f,step:"1",min:"0",max:C,className:"progress",onChange:function(e){return t=e.target.value,clearInterval(M.current),void O(t);var t},onMouseUp:I,onKeyUp:I}),Object(l.jsx)("span",{children:("00"+Math.floor(Math.floor(C)/60)).substr(-2)+":"+("00"+Math.floor(C%60)).substr(-2)})]}),Object(l.jsx)(j,{isPlaying:x,playMode:g,onPlayPauseClick:function(e){p(e),a(e)},onPrevClick:function(){u(0===o?t.length-1:o-1)},onNextClick:S,onRandClick:function(){k(-1===g?0:-1),w.current.loop=!1},onReClick:function(){1===g?(w.current.loop=!1,k(0)):(k(1),w.current.loop=!0)}})]})},b=(c(10),c.p+"static/media/Perfect Two.dbf4257a.mp3"),f=c.p+"static/media/Perfect.d2a0cf88.mp3",O=c.p+"static/media/Little Do You Know.620329d4.mp3",m=[{title:"Perfect two",artist:"Auburn",src:b,img:c(11)},{title:"Perfect",artist:"Ed Sheeran",src:f,img:c(12)},{title:"Little do you know",artist:"Auburn",src:O,img:c(13)}],h=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(i.a)(s,2),o=r[0],j=r[1];return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(u,{tracks:m,index:c,onChangeTrack:function(e){a(e)},isPlay:o}),Object(l.jsx)(d,{tracks:m,index:c,onChangePlay:function(e){j(e)}})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.51dfa2ad.chunk.js.map