(this["webpackJsonpsummoners-arena"]=this["webpackJsonpsummoners-arena"]||[]).push([[0],{41:function(e,s,t){},55:function(e,s,t){},57:function(e,s,t){"use strict";t.r(s);var c=t(7),a=t.n(c),i=t(28),n=t.n(i),l=(t(41),t(0)),r=function(){return Object(l.jsxs)("div",{className:"banner",children:[Object(l.jsx)("div",{className:"banner__background",children:Object(l.jsx)("img",{src:"assets/images/banner-background.png",alt:"background"})}),Object(l.jsxs)("div",{className:"banner__content",children:[Object(l.jsx)("div",{className:"banner__content-text",children:"Get ready and be the best among all summoners!"}),Object(l.jsxs)("div",{className:"banner__content-button",children:[Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("img",{src:"assets/images/google-play.png",alt:"google-play"})}),Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("img",{src:"assets/images/app-store.png",alt:"app-store"})})]})]})]})},j=t(13),d=t(23),m=t.n(d),o=t(29),b=t(9),h=t(19),x=t(35),O=t(34),_=["mixes","scale","animationStateCallback"],g=Object(h.PixiComponent)("Spine",{create:function(e){var s=e.spineData;return new O.Spine(s)},applyProps:function(e,s,t){var c=t.mixes,a=void 0===c?[]:c,i=t.scale,n=void 0===i?1:i,l=t.animationStateCallback,r=Object(x.a)(t,_);Object(h.applyDefaultProps)(e,s,r),e.scale.set(n),a.forEach((function(s){return e.stateData.setMix(s.from,s.to,s.duration)})),l&&l(e.state)},config:{destroy:!1,destroyChildren:!1}}),v=[{id:1,title:"Malefica",name:"Eitri",nameSpine:"Eitri",path:"/assets/elements/Eitri/Eitri.json",icon:"assets/images/element-item-01.png",bg:"assets/images/eitri-bg.png",items:["Eitris pet","Self Purify","Defender","Furious Eitri"],class:"eitri",x:0,y:0},{id:2,title:"Heroes of Light",name:"Phalanx",nameSpine:"HolyKnight",path:"/assets/elements/HolyKnight/HolyKnight.json",icon:"assets/images/element-item-02.png",bg:"assets/images/heroes-bg.png",items:["Spirit Focus","Holy Shield","Holy Mark","Holy Blessing"],class:"phalanx",x:0,y:0},{id:2,title:"Kingdom of Darkness",name:"Diadora",nameSpine:"Diadora",path:"/assets/elements/Diadora/Diadora.json",icon:"assets/images/element-item-03.png",bg:"assets/images/darkness-bg.png",items:["Toxic Attack","Silence","Grateful","Curse of Soul"],class:"diadora",x:0,y:0},{id:3,title:"Land of Nature",name:"Cernunos",nameSpine:"cernunos",path:"/assets/elements/cernunos/cernunos.json",icon:"assets/images/element-item-04.png",bg:"assets/images/cernunos-bg.png",items:["Natures Root","Good Spirit","Nature Style","Nature Blood"],class:"cernunos",x:0,y:-30},{id:4,title:"Land of Abyss",name:"Zygor",nameSpine:"Zygor",path:"/assets/elements/Zygor/Zygor.json",icon:"assets/images/element-item-01.png",bg:"assets/images/zygor-bg.png",items:["Ancient Beast","Dragon Fang","Hard Mud","Born from Earth"],class:"zygor",x:-90,y:50},{id:5,title:"Marine Union",name:"Osse",nameSpine:"Osse",path:"/assets/elements/Osse/Osse.json",icon:"assets/images/element-item-05.png",bg:"assets/images/osse-bg.png",items:["Hailstorm","Spread of Water","Chained","Ocean Bond"],class:"osse",x:0,y:50}],p=[],N=function(e){var s=e.id,a=Object(c.useState)(),i=Object(j.a)(a,2),n=i[0],r=i[1],d=Object(c.useState)(900),x=Object(j.a)(d,2),O=x[0],_=x[1],N=Object(c.useState)(800),u=Object(j.a)(N,2),f=u[0],y=u[1],w=Object(c.useState)(.8),S=Object(j.a)(w,2),k=S[0],A=S[1];Object(c.useEffect)((function(){var e=window.innerWidth;e<900&&e>400&&(_(550),y(550),A(.5)),e<400&&(_(e-50),y(500),A(.4))}),[]),Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(m.a.mark((function e(){var c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(null,34));case 2:c=new b.h,a=v[s]||v[1],c.add(a.nameSpine,a.path).load((function(e,s){if(s[a.nameSpine].spineData){var t=s[a.nameSpine].spineData;r(t)}}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r(null),e()}),[s]);var E=Object(c.useCallback)((function(e){e&&e.addAnimation(0,"idle",!0,0)}),[]);return Object(l.jsx)("div",{className:"element_canvas",children:Object(l.jsx)(h.Stage,{width:O,height:f,options:{transparent:!0},children:n&&Object(l.jsx)(g,{x:O/2+v[s].x,y:f-(150+v[s].y),spineData:n,scale:k,mixes:p,animationStateCallback:E})})})},u=t(59),f=(t(26),t(27),function(){var e=Object(c.useState)(0),s=Object(j.a)(e,2),t=s[0],a=s[1],i=Object(c.useState)(v[0].items),n=Object(j.a)(i,2),r=n[0],d=n[1];Object(c.useEffect)((function(){new u.a(".elementSwiper",{slidesPerView:1,spaceBetween:30,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},breakpoints:{576:{slidesPerView:3},1200:{slidesPerView:5}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}),[]),Object(c.useEffect)((function(){d([]),setTimeout((function(){d(v[t].items)}),500)}),[t]);return Object(l.jsxs)("div",{className:"section element",style:{background:"url(".concat(v[t].bg?v[t].bg:"",") center/cover no-repeat")},children:[Object(l.jsx)("div",{className:"section__background"}),Object(l.jsx)("div",{className:"containner",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-lg-10 col-12 mx-auto",children:Object(l.jsx)("div",{className:"section__content text-center",children:Object(l.jsx)("div",{className:"section__content-title",children:"The Epic Elements"})})}),Object(l.jsxs)("div",{className:"col-12",children:[Object(l.jsx)("div",{className:"swiper element-tab elementSwiper",children:Object(l.jsx)("div",{className:"swiper-wrapper",children:v.map((function(e,s){return Object(l.jsx)("div",{className:"swiper-slide",onClick:function(){a(s)},children:Object(l.jsxs)("div",{className:"element__item ".concat(s===t?"active":""),children:[Object(l.jsx)("div",{className:"element__item-image",children:Object(l.jsx)("img",{src:e.icon,alt:"element-item",className:"mx-auto"})}),Object(l.jsx)("div",{className:"element__item-content",children:e.title})]})})}))})}),Object(l.jsx)("div",{onClick:function(){var e=t+1;a(e>5?0:e)},className:"swiper-button-next"}),Object(l.jsxs)("div",{className:"element-info",children:[Object(l.jsxs)("div",{className:"left-info",children:[Object(l.jsx)("div",{className:"left-info__name","data-aos":"fade-right",children:v[t].name}),Object(l.jsxs)("div",{className:"left-info__line",children:[Object(l.jsx)("div",{className:"left-info__title","data-aos":"fade-right","data-aos-delay":"1000",children:v[t].title}),Object(l.jsx)("div",{className:"left-info__stars",children:Object(l.jsx)("span",{})})]})]}),Object(l.jsx)(N,{id:t}),Object(l.jsxs)("div",{className:"right-info ".concat(v[t].class),children:[Object(l.jsx)("div",{className:"right-info__line"}),Object(l.jsx)("div",{className:"right-info__items",children:r&&r.map((function(e,s){return Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("div",{className:"item__icon"}),Object(l.jsx)("div",{className:"item__name","data-aos":"fade-left","data-aos-delay":"".concat(1e3*s),children:e})]})}))})]})]}),Object(l.jsx)("div",{onClick:function(){var e=t-1;a(e<0?0:e)},className:"swiper-button-prev"})]})]})})]})}),y=function(){return Object(l.jsx)("div",{class:"footer",children:Object(l.jsx)("div",{class:"container",children:Object(l.jsxs)("div",{class:"row",children:[Object(l.jsxs)("div",{class:"col-md-6 col-lg-4",children:[Object(l.jsx)("div",{class:"footer__logo",children:Object(l.jsx)("img",{src:"assets/images/logo.png",alt:"logo"})}),Object(l.jsx)("div",{class:"footer__content",children:"Incididunt nostrud enim cillum dolore ullamco amet id voluptate proident laborum velit ullamco irure esse."})]}),Object(l.jsx)("div",{class:"col-md-6 col-lg-5 ml-auto",children:Object(l.jsx)("div",{class:"footer__list",children:Object(l.jsxs)("div",{class:"row",children:[Object(l.jsxs)("div",{class:"col-sm-6",children:[Object(l.jsx)("div",{class:"footer__list-item",children:Object(l.jsx)("a",{href:"#",class:"item__link",children:"Home"})}),Object(l.jsx)("div",{class:"footer__list-item",children:Object(l.jsx)("a",{href:"#",class:"item__link",children:"Marketplace"})}),Object(l.jsx)("div",{class:"footer__list-item",children:Object(l.jsx)("a",{href:"#",class:"item__link",children:"White Paper"})}),Object(l.jsx)("div",{class:"footer__list-item",children:Object(l.jsx)("a",{href:"#",class:"item__link",children:"SEG"})})]}),Object(l.jsxs)("div",{class:"col-sm-6",children:[Object(l.jsx)("div",{class:"footer__list-item",children:Object(l.jsx)("a",{href:"#",class:"item__link",children:"Getting Started"})}),Object(l.jsx)("div",{class:"footer__list-item",children:Object(l.jsx)("a",{href:"#",class:"item__link",children:"News"})}),Object(l.jsx)("div",{class:"footer__list-item",children:Object(l.jsx)("a",{href:"#",class:"item__link",children:"Wikir"})}),Object(l.jsx)("div",{class:"footer__list-item",children:Object(l.jsx)("a",{href:"#",class:"item__link",children:"FAQ"})}),Object(l.jsx)("div",{class:"footer__list-item",children:Object(l.jsx)("a",{href:"#",class:"item__link",children:"Contact Us"})})]})]})})}),Object(l.jsx)("div",{class:"col-lg-2 mx-auto",children:Object(l.jsxs)("div",{class:"footer__app",children:[Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("img",{src:"assets/images/google-play.png",alt:"app"})}),Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("img",{src:"assets/images/app-store.png",alt:"app"})}),Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("img",{src:"assets/images/nox-player.png",alt:"app"})})]})}),Object(l.jsx)("div",{class:"col-12",children:Object(l.jsxs)("div",{class:"footer__bottom",children:[Object(l.jsx)("div",{class:"footer__bottom-copyright",children:"\xa9 2021 Fansipan-All Rights Reserved"}),Object(l.jsxs)("div",{class:"footer__bottom-list",children:[Object(l.jsx)("a",{href:"#",class:"list__item",children:"Privacy policy"}),Object(l.jsx)("a",{href:"#",class:"list__item",children:"Terms of service"}),Object(l.jsx)("a",{href:"#",class:"list__item",children:"Language"})]}),Object(l.jsxs)("div",{class:"footer__bottom-social",children:[Object(l.jsx)("a",{href:"#",class:"social__link",children:Object(l.jsx)("img",{src:"assets/images/icon-twitter.png",alt:"icon"})}),Object(l.jsx)("a",{href:"#",class:"social__link",children:Object(l.jsx)("img",{src:"assets/images/icon-vk.png",alt:"icon"})}),Object(l.jsx)("a",{href:"#",class:"social__link",children:Object(l.jsx)("img",{src:"assets/images/icon-discord.png",alt:"icon"})}),Object(l.jsx)("a",{href:"#",class:"social__link",children:Object(l.jsx)("img",{src:"assets/images/icon-reddit.png",alt:"icon"})}),Object(l.jsx)("a",{href:"#",class:"social__link",children:Object(l.jsx)("img",{src:"assets/images/icon-naver.png",alt:"icon"})})]})]})})]})})})},w=function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("div",{className:"header__overlay"}),Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"header__menu",children:[Object(l.jsx)("div",{className:"header__menu-button",children:Object(l.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",children:[Object(l.jsx)("path",{className:"line line1",d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),Object(l.jsx)("path",{className:"line line2",d:"M 20,50 H 80"}),Object(l.jsx)("path",{className:"line line3",d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})]})}),Object(l.jsxs)("ul",{className:"header__menu-list",children:[Object(l.jsx)("li",{className:"list__item",children:Object(l.jsx)("a",{href:"#",className:"list__item-logo",children:Object(l.jsx)("img",{src:"assets/images/logo.png",alt:"logo"})})}),Object(l.jsx)("li",{className:"list__item",children:Object(l.jsx)("a",{href:"index.html",className:"list__item-link",children:"Home"})}),Object(l.jsx)("li",{className:"list__item",children:Object(l.jsx)("a",{href:"#",className:"list__item-link",children:"SEG"})}),Object(l.jsx)("li",{className:"list__item",children:Object(l.jsx)("a",{href:"#",className:"list__item-link",children:"Marketplace"})}),Object(l.jsx)("li",{className:"list__item d-lg-none",children:Object(l.jsx)("a",{href:"#",className:"list__item-link",children:"More"})}),Object(l.jsx)("li",{className:"list__item d-lg-none",children:Object(l.jsx)("a",{href:"#",className:"btn btn-yellow-border",children:"Connect wallet"})}),Object(l.jsx)("li",{className:"list__item d-lg-none",children:Object(l.jsx)("a",{href:"#",className:"btn btn-yellow",children:"Buy SME"})})]}),Object(l.jsxs)("div",{className:"header__menu-action",children:[Object(l.jsx)("a",{href:"#",className:"more",children:"More"}),Object(l.jsx)("a",{href:"#",className:"btn btn-yellow-border",children:"Connect wallet"}),Object(l.jsx)("a",{href:"#",className:"btn btn-yellow",children:"Buy SME"})]})]})})]})},S=function(){return Object(l.jsxs)("div",{className:"section partner",children:[Object(l.jsx)("div",{className:"section__divider"}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-lg-10 col-12 mx-auto",children:Object(l.jsx)("div",{className:"section__content text-center",children:Object(l.jsx)("div",{className:"section__content-title",children:"Our Partner"})})}),Object(l.jsx)("div",{className:"col-12 mb-sm-20",children:Object(l.jsxs)("div",{className:"row align-items-center",children:[Object(l.jsx)("div",{className:"col-6 col-sm-3 mb30",children:Object(l.jsx)("div",{className:"partner__image",children:Object(l.jsx)("img",{src:"assets/images/partner-01.png",alt:"partner"})})}),Object(l.jsx)("div",{className:"col-6 col-sm-3 mb30",children:Object(l.jsx)("div",{className:"partner__image",children:Object(l.jsx)("img",{src:"assets/images/partner-02.png",alt:"partner"})})}),Object(l.jsx)("div",{className:"col-6 col-sm-3 mb30",children:Object(l.jsx)("div",{className:"partner__image",children:Object(l.jsx)("img",{src:"assets/images/partner-03.png",alt:"partner"})})}),Object(l.jsx)("div",{className:"col-6 col-sm-3 mb30",children:Object(l.jsx)("div",{className:"partner__image",children:Object(l.jsx)("img",{src:"assets/images/partner-04.png",alt:"partner"})})})]})}),Object(l.jsx)("div",{className:"col-12",children:Object(l.jsxs)("div",{className:"row align-items-center",children:[Object(l.jsx)("div",{className:"col-6 col-sm-3 mx-auto mb30",children:Object(l.jsx)("div",{className:"partner__image",children:Object(l.jsx)("img",{src:"assets/images/partner-05.png",alt:"partner"})})}),Object(l.jsx)("div",{className:"col-6 col-sm-3 mx-auto mb30",children:Object(l.jsx)("div",{className:"partner__image",children:Object(l.jsx)("img",{src:"assets/images/partner-06.png",alt:"partner"})})}),Object(l.jsx)("div",{className:"col-6 col-sm-3 mx-auto mb30",children:Object(l.jsx)("div",{className:"partner__image",children:Object(l.jsx)("img",{src:"assets/images/partner-07.png",alt:"partner"})})})]})})]})})]})},k=function(){return Object(l.jsxs)("div",{className:"section register",children:[Object(l.jsx)("div",{className:"section__background"}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-lg-10 col-12 mx-auto",children:Object(l.jsx)("div",{className:"section__content text-center",children:Object(l.jsx)("div",{className:"section__content-title",children:"Get ready and be the best among all summoners!"})})}),Object(l.jsx)("div",{className:"col-lg-10 col-12 mx-auto",children:Object(l.jsx)("div",{className:"section__form",children:Object(l.jsxs)("form",{action:"",children:[Object(l.jsx)("label",{for:"email",children:"Get news and updates right to your inbox!"}),Object(l.jsx)("input",{type:"email",id:"email",placeholder:"Your Email..."}),Object(l.jsx)("button",{className:"btn",type:"submit",children:"Register"})]})})})]})})]})},A=function(){return Object(c.useEffect)((function(){new u.a(".strategysSwiper",{slidesPerView:1,spaceBetween:50,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination"}})}),[]),Object(l.jsxs)("div",{className:"section strategys",children:[Object(l.jsx)("div",{className:"section__divider"}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-lg-10 col-12 mx-auto",children:Object(l.jsx)("div",{className:"section__content text-center",children:Object(l.jsxs)("div",{className:"section__content-title",children:[Object(l.jsx)("span",{children:"Best Strategy"}),Object(l.jsx)("span",{children:"Idle-RPG game "})]})})}),Object(l.jsx)("div",{className:"col-12",children:Object(l.jsxs)("div",{className:"swiper strategysSwiper",children:[Object(l.jsxs)("div",{className:"swiper-wrapper",children:[Object(l.jsx)("div",{className:"swiper-slide",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-lg-6",children:Object(l.jsxs)("div",{className:"strategys__item",children:[Object(l.jsx)("div",{className:"strategys__item-image",children:Object(l.jsx)("img",{src:"assets/images/strategy-item-01.png",alt:"item"})}),Object(l.jsxs)("div",{className:"strategys__item-content",children:[Object(l.jsx)("div",{className:"content__title",children:"Summon"}),Object(l.jsxs)("div",{className:"content__text",children:[Object(l.jsx)("p",{children:"After the first batch, Heroes can only be brought into circulation via Summon."}),Object(l.jsx)("p",{children:"Summon costs $SEG and gives back a Hero NFT!"})]})]})]})}),Object(l.jsx)("div",{className:"col-lg-6",children:Object(l.jsxs)("div",{className:"strategys__item",children:[Object(l.jsx)("div",{className:"strategys__item-image",children:Object(l.jsx)("img",{src:"assets/images/strategy-item-02.png",alt:"item"})}),Object(l.jsxs)("div",{className:"strategys__item-content",children:[Object(l.jsx)("div",{className:"content__title",children:"Hero"}),Object(l.jsxs)("div",{className:"content__text",children:[Object(l.jsx)("p",{children:"In Summoners Arena, Heroes are powerful characters represented as tradeable NFT collectibles."}),Object(l.jsx)("p",{children:"Stronger Heroes beat others more easily and earn rarer resources."})]})]})]})})]})}),Object(l.jsx)("div",{className:"swiper-slide",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-lg-6",children:Object(l.jsxs)("div",{className:"strategys__item",children:[Object(l.jsx)("div",{className:"strategys__item-image",children:Object(l.jsx)("img",{src:"assets/images/strategy-item-03.png",alt:"item"})}),Object(l.jsxs)("div",{className:"strategys__item-content",children:[Object(l.jsx)("div",{className:"content__title",children:"Items"}),Object(l.jsxs)("div",{className:"content__text",children:[Object(l.jsx)("p",{children:"Valuable Items enhance Heroes with unmatched power to dominate the battlefield."}),Object(l.jsx)("p",{children:"Three same items can be merged to upgrade into a rarer one."})]})]})]})}),Object(l.jsx)("div",{className:"col-lg-6",children:Object(l.jsxs)("div",{className:"strategys__item",children:[Object(l.jsx)("div",{className:"strategys__item-image",children:Object(l.jsx)("img",{src:"assets/images/strategy-item-04.png",alt:"item"})}),Object(l.jsxs)("div",{className:"strategys__item-content",children:[Object(l.jsx)("div",{className:"content__title",children:"Guild"}),Object(l.jsxs)("div",{className:"content__text",children:[Object(l.jsx)("p",{children:"Guild Leaderships are NFTs that make owners Guild Leaders. Leaders can recruit Members and lead the Guilds to Guild Wars, Titan Fights and Dungeons. "}),Object(l.jsx)("p",{children:"Guild Members have exclusive perks and the chance to win rare Guild Items."})]})]})]})})]})}),Object(l.jsx)("div",{className:"swiper-slide",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-lg-8",children:Object(l.jsxs)("div",{className:"strategys__item",children:[Object(l.jsx)("div",{className:"strategys__item-image",children:Object(l.jsx)("img",{src:"assets/images/strategy-item-05.png",alt:"item"})}),Object(l.jsxs)("div",{className:"strategys__item-content",children:[Object(l.jsx)("div",{className:"content__title",children:"Land"}),Object(l.jsxs)("div",{className:"content__text",children:[Object(l.jsx)("p",{children:"After the first batch, Heroes can only be brought into circulation via Summon."}),Object(l.jsx)("p",{children:"Summon costs $SEG and gives back a Hero NFT!"})]})]})]})}),Object(l.jsx)("div",{className:"col-lg-4"})]})})]}),Object(l.jsx)("div",{className:"swiper-pagination"})]})})]})})]})},E=(t(58),t(54),function(){return Object(l.jsxs)("div",{className:"section video",children:[Object(l.jsx)("div",{className:"section__background"}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-lg-10 col-12 mx-auto",children:Object(l.jsxs)("div",{className:"section__content text-center",children:[Object(l.jsx)("div",{className:"section__content-title",children:"Welcome to Era World"}),Object(l.jsxs)("div",{className:"section__content-text",children:[Object(l.jsx)("span",{children:"Summoners, behold! Summonia!"}),Object(l.jsx)("span",{children:"Every single shred of Summonians existence in the last millenium was destined for this ultimate moment. Summoners, the Dawn is calling. Pick up your spell book and buckle up for this one last war!"})]})]})}),Object(l.jsx)("div",{className:"col-12 col-lg-10 mx-auto",children:Object(l.jsx)("div",{className:"section__video",children:Object(l.jsx)("div",{className:"section__video-content",children:Object(l.jsx)("a",{href:"https://www.youtube.com/watch?v=jL247RxNuOo&t=1s","data-fancybox":"video",children:Object(l.jsx)("img",{src:"assets/images/play.png",alt:"icon"})})})})})]})})]})}),L=(t(55),function(){return Object(l.jsxs)("div",{className:"section team",children:[Object(l.jsx)("div",{className:"section__divider"}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-lg-10 col-12 mx-auto",children:Object(l.jsx)("div",{className:"section__content text-center",children:Object(l.jsx)("div",{className:"section__content-title",children:"Team & Advisors"})})})}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-sm-6 col-lg-3 mb30",children:[Object(l.jsx)("div",{className:"team__item",children:Object(l.jsx)("img",{src:"assets/images/team-01.png",alt:"team"})}),Object(l.jsxs)("div",{className:"team__content",children:[Object(l.jsx)("div",{className:"team__content-name",children:"ABYSSAL CALAMITY"}),Object(l.jsx)("div",{className:"team__content-position",children:"production manager"})]})]}),Object(l.jsxs)("div",{className:"col-sm-6 col-lg-3 mb30",children:[Object(l.jsx)("div",{className:"team__item",children:Object(l.jsx)("img",{src:"assets/images/team-02.jpg",alt:"team"})}),Object(l.jsxs)("div",{className:"team__content",children:[Object(l.jsx)("div",{className:"team__content-name",children:"ABYSSAL CALAMITY"}),Object(l.jsx)("div",{className:"team__content-position",children:"production manager"})]})]}),Object(l.jsxs)("div",{className:"col-sm-6 col-lg-3 mb30",children:[Object(l.jsx)("div",{className:"team__item",children:Object(l.jsx)("img",{src:"assets/images/team-03.jpg",alt:"team"})}),Object(l.jsxs)("div",{className:"team__content",children:[Object(l.jsx)("div",{className:"team__content-name",children:"ABYSSAL CALAMITY"}),Object(l.jsx)("div",{className:"team__content-position",children:"production manager"})]})]}),Object(l.jsxs)("div",{className:"col-sm-6 col-lg-3 mb30",children:[Object(l.jsx)("div",{className:"team__item",children:Object(l.jsx)("img",{src:"assets/images/team-04.jpg",alt:"team"})}),Object(l.jsxs)("div",{className:"team__content",children:[Object(l.jsx)("div",{className:"team__content-name",children:"ABYSSAL CALAMITY"}),Object(l.jsx)("div",{className:"team__content-position",children:"production manager"})]})]}),Object(l.jsxs)("div",{className:"col-sm-6 col-lg-3 mb30",children:[Object(l.jsx)("div",{className:"team__item",children:Object(l.jsx)("img",{src:"assets/images/team-05.jpg",alt:"team"})}),Object(l.jsxs)("div",{className:"team__content",children:[Object(l.jsx)("div",{className:"team__content-name",children:"ABYSSAL CALAMITY"}),Object(l.jsx)("div",{className:"team__content-position",children:"production manager"})]})]}),Object(l.jsxs)("div",{className:"col-sm-6 col-lg-3 mb30",children:[Object(l.jsx)("div",{className:"team__item",children:Object(l.jsx)("img",{src:"assets/images/team-06.jpg",alt:"team"})}),Object(l.jsxs)("div",{className:"team__content",children:[Object(l.jsx)("div",{className:"team__content-name",children:"ABYSSAL CALAMITY"}),Object(l.jsx)("div",{className:"team__content-position",children:"production manager"})]})]}),Object(l.jsxs)("div",{className:"col-sm-6 col-lg-3 mb30",children:[Object(l.jsx)("div",{className:"team__item",children:Object(l.jsx)("img",{src:"assets/images/team-07.jpg",alt:"team"})}),Object(l.jsxs)("div",{className:"team__content",children:[Object(l.jsx)("div",{className:"team__content-name",children:"ABYSSAL CALAMITY"}),Object(l.jsx)("div",{className:"team__content-position",children:"production manager"})]})]}),Object(l.jsxs)("div",{className:"col-sm-6 col-lg-3 mb30",children:[Object(l.jsx)("div",{className:"team__item",children:Object(l.jsx)("img",{src:"assets/images/team-08.jpg",alt:"team"})}),Object(l.jsxs)("div",{className:"team__content",children:[Object(l.jsx)("div",{className:"team__content-name",children:"ABYSSAL CALAMITY"}),Object(l.jsx)("div",{className:"team__content-position",children:"production manager"})]})]})]})]})]})}),C=function(){return Object(l.jsxs)("div",{className:"section roadmap",children:[Object(l.jsx)("div",{className:"section__divider"}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-lg-10 col-12 mx-auto",children:Object(l.jsx)("div",{className:"section__content text-center",children:Object(l.jsx)("div",{className:"section__content-title",children:"Game Roadmap"})})})}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-sm-6 col-lg-3 mb30",children:Object(l.jsxs)("div",{className:"roadmap__item",children:[Object(l.jsx)("img",{src:"assets/images/roadmap-item.png",alt:""}),Object(l.jsxs)("div",{className:"roadmap__item-content",children:[Object(l.jsx)("div",{className:"content__title",children:"Q1"}),Object(l.jsx)("div",{className:"content__text",children:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."})]})]})}),Object(l.jsx)("div",{className:"col-sm-6 col-lg-3 mb30",children:Object(l.jsxs)("div",{className:"roadmap__item",children:[Object(l.jsx)("img",{src:"assets/images/roadmap-item.png",alt:""}),Object(l.jsxs)("div",{className:"roadmap__item-content",children:[Object(l.jsx)("div",{className:"content__title",children:"Q2"}),Object(l.jsx)("div",{className:"content__text",children:"Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage."})]})]})}),Object(l.jsx)("div",{className:"col-sm-6 col-lg-3 mb30",children:Object(l.jsxs)("div",{className:"roadmap__item",children:[Object(l.jsx)("img",{src:"assets/images/roadmap-item.png",alt:""}),Object(l.jsxs)("div",{className:"roadmap__item-content",children:[Object(l.jsx)("div",{className:"content__title",children:"Q3"}),Object(l.jsx)("div",{className:"content__text",children:"Going through the cites of the word in classical literature, discovered the undoubtable source. "})]})]})}),Object(l.jsx)("div",{className:"col-sm-6 col-lg-3 mb30",children:Object(l.jsxs)("div",{className:"roadmap__item",children:[Object(l.jsx)("img",{src:"assets/images/roadmap-item.png",alt:""}),Object(l.jsxs)("div",{className:"roadmap__item-content",children:[Object(l.jsx)("div",{className:"content__title",children:"Q4"}),Object(l.jsx)("div",{className:"content__text",children:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."})]})]})})]})]})]})},G=function(){return Object(l.jsx)("div",{className:"section p2e",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"p2e-info",children:[Object(l.jsx)("div",{className:"p2e-info__title",children:"Redefine Play-to-Earn"}),Object(l.jsx)("div",{className:"p2e-info__desc",children:'Summoners Arena economy was built and nurtured revolving the understanding that "Earn" means different things to different people and we are to make sure that all grounds are covered.'}),Object(l.jsxs)("div",{className:"p2e-info__rows",children:[Object(l.jsxs)("div",{className:"rows__item",children:[Object(l.jsx)("div",{className:"item__left-info",children:Object(l.jsx)("div",{className:"left-info__icon"})}),Object(l.jsxs)("div",{className:"item__right-info",children:[Object(l.jsx)("div",{className:"right-info__title",children:"SEG"}),Object(l.jsx)("div",{className:"right-info__desc",children:"Earn Governance Rights that can be transferred into Economics Gains"})]})]}),Object(l.jsxs)("div",{className:"rows__item",children:[Object(l.jsx)("div",{className:"item__left-info",children:Object(l.jsx)("div",{className:"left-info__icon"})}),Object(l.jsxs)("div",{className:"item__right-info",children:[Object(l.jsx)("div",{className:"right-info__title",children:"SEG"}),Object(l.jsx)("div",{className:"right-info__desc",children:"Earn Governance Rights that can be transferred into Economics Gains"})]})]}),Object(l.jsxs)("div",{className:"rows__item",children:[Object(l.jsx)("div",{className:"item__left-info",children:Object(l.jsx)("div",{className:"left-info__icon"})}),Object(l.jsxs)("div",{className:"item__right-info",children:[Object(l.jsx)("div",{className:"right-info__title",children:"SEG"}),Object(l.jsx)("div",{className:"right-info__desc",children:"Earn Governance Rights that can be transferred into Economics Gains"})]})]})]})]})})})},M=t(33),I=t.n(M),B=(t(56),function(){return Object(l.jsxs)("div",{className:"section manifest",children:[Object(l.jsx)("div",{className:"section__divider"}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-lg-10 col-12 mx-auto",children:Object(l.jsxs)("div",{className:"section__content text-center",children:[Object(l.jsxs)("div",{className:"section__content-title",children:[Object(l.jsx)("span",{children:"Manifest the"}),Object(l.jsx)("span",{children:"metaverse fantasy"})]}),Object(l.jsx)("div",{className:"section__content-text",children:"The metaverse hype is spreading like wildfire and it is inevitable. In Summoners Arena, we aim to manifest a metaverse that reaches outside of the singularity universe with just summoners and heroes. Cross-chain and cross-game experience, we promise them all. Sky is the limit!"})]})})})}),Object(l.jsx)("div",{className:"manifest__content",children:Object(l.jsx)("img",{src:"assets/images/manifest-content.png",alt:"manefist-content"})})]})});var H=function(){return Object(c.useEffect)((function(){I.a.init({debounceDelay:50,throttleDelay:99,offset:120,delay:100,duration:1e3})}),[]),Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(w,{}),Object(l.jsx)(r,{}),Object(l.jsx)(E,{}),Object(l.jsx)(f,{}),Object(l.jsx)(A,{}),Object(l.jsx)(B,{}),Object(l.jsx)(G,{}),Object(l.jsx)(C,{}),Object(l.jsx)(S,{}),Object(l.jsx)(L,{}),Object(l.jsx)(k,{}),Object(l.jsx)(y,{})]})},T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,i=s.getLCP,n=s.getTTFB;t(e),c(e),a(e),i(e),n(e)}))};n.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(H,{})}),document.getElementById("root")),T()}},[[57,1,2]]]);
//# sourceMappingURL=main.d68c0f9a.chunk.js.map