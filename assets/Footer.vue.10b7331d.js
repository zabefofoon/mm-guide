import{_ as f}from"./nuxt-link.56070618.js";import{_ as x,r as g,o as a,c as l,a as t,b as s,w as c,p as v,e as w,f as m,m as k,z as d,d as r,g as $,R as y,D as p}from"./entry.5ee72010.js";const z={},D={class:"py-3 px-4 | absolute bottom-0 left-0 translate-y-full | w-full max-h-[80vh] overflow-auto | bg-white border-t border-b shadow-md"},I={class:"flex flex-col"},S=t("li",{class:"py-2"},"Introduction",-1),C=t("li",{class:"py-2"},"How To Use",-1),N=t("li",{class:"py-2"},"Embedded",-1);function G(o,e){const n=g("router-link");return a(),l("nav",D,[t("ul",I,[s(n,{to:"/documents"},{default:c(()=>[S]),_:1}),s(n,{to:"/documents/howToUse"},{default:c(()=>[C]),_:1}),s(n,{to:"/documents/embedded"},{default:c(()=>[N]),_:1})])])}const M=x(z,[["render",G]]);const T={},h=o=>(v("data-v-8021e2d4"),o=o(),w(),o),V={class:"logo flex items-center"},B=h(()=>t("div",{class:"ball big"},null,-1)),E=h(()=>t("div",{class:"ball small"},null,-1)),L=[B,E];function U(o,e){return a(),l("div",V,L)}const H=x(T,[["render",U],["__scopeId","data-v-8021e2d4"]]),A={class:"sticky top-0 left-0 z-20 | flex items-center | py-2 lg:py-3 px-3 lg:px-10 | bg-white shadow-md"},F=t("span",{class:"font-black text-slate-800"}," MM-GUIDE ",-1),J={key:0,class:"icon icon-close text-2xl"},K={key:1,class:"icon icon-bars text-2xl"},R={class:"hidden lg:flex gap-8 items-center | ml-auto"},W=t("a",{href:"https://zabefofoon.github.io/mm-embedded/",target:"_blank"},[t("button",{class:"bg-slate-800 | px-4 py-1 | rounded-full | text-white font-bold text-sm"}," Get Started ")],-1),_t=m({__name:"Header",setup(o){const e=k(!1),n=i=>{e.value=i};return(i,_)=>{const u=f,b=M;return a(),l("header",A,[s(u,{to:"/",class:"flex items-center lg:gap-2 py-1"},{default:c(()=>[s(H),F]),_:1}),t("button",{class:"md:hidden flex | ml-auto",onClick:_[0]||(_[0]=ct=>n(!d(e)))},[d(e)?(a(),l("i",J)):(a(),l("i",K))]),t("nav",R,[s(u,{to:"/documents"},{default:c(()=>[r("Docs")]),_:1}),W]),d(e)?(a(),$(b,{key:0})):y("",!0)])}}}),j={class:"relative | mt-auto py-20 px-10 | bg-slate-950 text-slate-100"},q={class:"grid md:grid-cols-4 gap-8 md:gap-0"},O={class:"flex flex-col gap-4"},P={class:"font-bold text-xl"},Q=t("p",null,"Guide for Mark up manager",-1),X=p('<div class="flex gap-3"><a class="text-2xl"><i class="icon icon-youtube"></i></a><a class="text-2xl"><i class="icon icon-twitter"></i></a></div>',1),Y={class:"flex flex-col gap-1"},Z=t("li",{class:"text-sm"},[t("a",{href:"https://zabefofoon.github.io/mm-embedded/",target:"_blank",class:"underline"}," Get Started ")],-1),tt={class:"text-sm"},et=p('<div class="flex flex-col gap-1"><p class="text-sm">Contact</p><p class="text-sm">zabefofoon@gmail.com</p><p class="text-sm">Kakao: zabefofoon</p><p class="text-sm">Insta: sangwwoo</p></div>',1),st=p('<p class="text-sm">About</p><p class="flex gap-1 | text-sm"><a href="https://zabefofoon.github.io/about/#/" target="_blank" class="underline"> Jung Sang Woo </a><a href="https://zabefofoon.github.io/about/#/" target="_blank"><i class="icon icon-arrow-right text-xs"></i></a></p>',2),ot=t("i",{class:"icon icon-arrow-top text-xl"},null,-1),at=[ot],it=m({__name:"Footer",setup(o){const e=()=>window.scrollTo(0,0);return(n,i)=>{const _=f;return a(),l("footer",j,[t("div",q,[t("div",O,[t("div",null,[t("h2",P,[s(_,{to:"/"},{default:c(()=>[r("MM-GUIDE")]),_:1})]),Q]),X]),t("ul",Y,[Z,t("li",tt,[s(_,{to:"/documents",class:"underline"},{default:c(()=>[r(" Docs ")]),_:1})])]),et,t("div",{class:"flex flex-col gap-1 | relative"},[st,t("button",{class:"absolute right-0 | flex | p-1 | border",onClick:e},at)])])])}}});export{_t as _,it as a};