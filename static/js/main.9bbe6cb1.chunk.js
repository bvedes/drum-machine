(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],[,,,,,function(e,n,t){e.exports=t.p+"static/media/boom.550be808.wav"},function(e,n,t){e.exports=t.p+"static/media/hihat.4ba39e07.wav"},function(e,n,t){e.exports=t.p+"static/media/kick.4dd58595.wav"},function(e,n,t){e.exports=t.p+"static/media/openhat.a62db465.wav"},function(e,n,t){e.exports=t.p+"static/media/ride.b0d70ec5.wav"},function(e,n,t){e.exports=t.p+"static/media/clap.a6e86dd7.wav"},function(e,n,t){e.exports=t.p+"static/media/snare.80c4129b.wav"},function(e,n,t){e.exports=t.p+"static/media/tom.572ed39d.wav"},function(e,n,t){e.exports=t.p+"static/media/tink.2a6bb6f5.wav"},,,function(e,n,t){e.exports=t(26)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(2),c=t.n(r),i=(t(21),t(3)),d=t(4),l=t(15),s=t(14),u=t(5),m=t.n(u),p=t(6),v=t.n(p),f=t(7),y=t.n(f),k=t(8),h=t.n(k),w=t(9),E=t.n(w),N=t(10),b=t.n(N),C=t(11),x=t.n(C),g=t(12),D=t.n(g),j=t(13),O=t.n(j),A=[{keyCode:81,letter:"q",soundName:"boom",src:m.a},{keyCode:87,letter:"w",soundName:"hihat",src:v.a},{keyCode:69,letter:"e",soundName:"kick",src:y.a},{keyCode:65,letter:"a",soundName:"openhat",src:h.a},{keyCode:83,letter:"s",soundName:"clap",src:b.a},{keyCode:68,letter:"d",soundName:"ride",src:E.a},{keyCode:90,letter:"z",soundName:"snare",src:x.a},{keyCode:88,letter:"x",soundName:"tom",src:D.a},{keyCode:67,letter:"c",soundName:"tink",src:O.a}],K=(t(22),function(e){Object(l.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).handleKeyDown=function(n){var t,a=n.key;console.log(" key: ",a);var o=null===(t=A.find((function(e){return e.letter===a})))||void 0===t?void 0:t.src;e.playSound(o)},e.playSound=function(e){console.log(e);var n=new Audio(e);console.log(" audio: ",n),n.play()},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"machine",id:"drum-machine"},A.map((function(n){var t=n.letter,a=n.soundName,r=n.src;return o.a.createElement("div",{className:"drum-pad",id:"display",key:a,onClick:function(){return e.playSound(r)}},o.a.createElement("div",{className:"letter"},t),o.a.createElement("div",{className:"sound-name"},a))})))}}]),t}(a.Component)),S=(t(23),function(){return o.a.createElement("div",{className:"Header"},o.a.createElement("h1",null,"Drum Machine"),o.a.createElement("h5",null,"freeCodeCamp 2020"))}),B=(t(24),function(){return o.a.createElement("div",{className:"Footer"},o.a.createElement("div",{className:"benvinda"}," Coded by Benvinda Vedes"),o.a.createElement("div",null," 2020 freeCodeCamp"))});t(25);var J=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(S,null),o.a.createElement(K,null),o.a.createElement(B,null))};c.a.render(o.a.createElement("div",null,o.a.createElement(J,null)),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.9bbe6cb1.chunk.js.map