"use strict";var e,S,b;function d(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return l(e,t)}(e))){var t=0,s=function(){};return{s:s,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i,o=!0,r=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return o=e.done,e},e:function(e){r=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(r)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,a=new Array(t);s<t;s++)a[s]=e[s];return a}function t(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}null!=(b=document.querySelector(".header"))&&function(){var t=function(){void 0===o&&null===o||(s.classList.remove("nav__wrapper-active"),o.classList.remove("burger__1-active"),r.classList.remove("burger__2-active"),l.classList.remove("burger__3-active"),n.classList.remove("body-scrollLockMQ"),c.classList.remove("coverbg-active"))},e=function(){var e=document.querySelector(".nav__items-dropdown>.dropdown"),t=parseInt(getComputedStyle(e).getPropertyValue("width"))+16;document.querySelector(".menu-trigger").style.width=t+"px"},s=document.querySelector(".nav__wrapper-itemsContent"),a=document.querySelector(".burger"),o=document.querySelector(".burger__1"),r=document.querySelector(".burger__2"),l=document.querySelector(".burger__3"),n=document.querySelector(".body"),c=document.querySelector(".coverbg");document.querySelector(".topbar__items_item-close"),document.querySelector(".topbar"),document.querySelector(".main"),S=0;var d=!1;a.onclick=function(e){void 0===o&&null===o||(s.classList.contains("nav__wrapper-active")?t():(s.classList.add("nav__wrapper-active"),o.classList.add("burger__1-active"),r.classList.add("burger__2-active"),l.classList.add("burger__3-active"),n.classList.add("body-scrollLockMQ"),c.classList.add("coverbg-active")))},c.onclick=t;var u=document.querySelector(".menu__btn"),m=document.querySelector(".burger__1s"),v=document.querySelector(".burger__2s"),f=document.querySelector(".burger__3s");$(u).click(function(e){void 0===o&&null===o||(m.classList.toggle("burger__1s-active"),v.classList.toggle("burger__2s-active"),f.classList.toggle("burger__3s-active"))});for(var g=document.querySelectorAll(".dropdown-target"),h=document.querySelectorAll(".dropdown__items"),_=document.querySelectorAll(".dropdown-target>i"),p=document.querySelector(".dropdown-cover"),L=(g[i],function(e){var t=g[e];function s(){h[e].classList.toggle("dropdown-visible"),_[e].classList.toggle("dropdownRotate"),t.classList.toggle("dropdown-target-visible")}function a(){1200<$(window).width()?(p.classList.remove("dropdown-cover-dnone"),t.addEventListener("mouseenter",function(){p.classList.add("dropdown-cover-active")}),t.addEventListener("mouseleave",function(){p.classList.remove("dropdown-cover-active")}),h[e].addEventListener("mouseenter",function(){p.classList.add("dropdown-cover-active")}),h[e].addEventListener("mouseleave",function(){p.classList.remove("dropdown-cover-active")}),p.classList.remove("dropdown-cover-dnone"),h[e].classList.remove("dropdown-visible"),_[e].classList.remove("dropdownRotate"),t.classList.remove("dropdown-target-visible"),t.removeEventListener("click",s)):(t.addEventListener("click",s),p.classList.add("dropdown-cover-dnone"))}a(),$(window).resize(a)}),y=0;y<g.length;y++)L(y);document.querySelector(".menu-trigger").onclick=function(){document.querySelector(".nav__items-dropdown").classList.toggle("nav__items-dropdown-active")},window.onmousemove=function(e){d=e.target.closest(".header")==document.querySelector(".header")?(b.classList.add("header-vis"),b.classList.remove("header-hidden"),!1):(b.classList.remove("header-vis"),!0)},window.addEventListener("scroll",function(e){var t=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,s=window.pageYOffset||document.documentElement.scrollTop;S<s&&141<=t?(b.classList.add("header-hidden"),d&&(document.querySelector(".nav__items-dropdown").classList.remove("nav__items-dropdown-active"),m.classList.remove("burger__1s-active"),v.classList.remove("burger__2s-active"),f.classList.remove("burger__3s-active"))):b.classList.remove("header-hidden"),S=s<=0?0:s},!1),e(),$(window).resize(e),$(window).click(function(e){var t=!e.target.closest(".dropdown-target"),s=!e.target.closest(".menu-trigger");t&&s&&(document.querySelector(".nav__items-dropdown").classList.remove("nav__items-dropdown-active"),m.classList.remove("burger__1s-active"),v.classList.remove("burger__2s-active"),f.classList.remove("burger__3s-active"))})}(),$(".slider-1").slick({draggable:!0,dots:!0,autoplaySpeed:5e3,fade:!0,slidesToShow:1,prevArrow:'<i class="fa fa-angle-left slick-prev1" aria-hidden="true"></i>',nextArrow:'<i class="fa fa-angle-right slick-next1" aria-hidden="true"></i>'}),$(".slider-2").slick({draggable:!0,dots:!1,infinite:!1,autoplaySpeed:3e3,slidesToShow:2,centerPadding:"0px",prevArrow:'<i class="fa fa-angle-left slick-prev1" aria-hidden="true"></i>',nextArrow:'<i class="fa fa-angle-right slick-next1" aria-hidden="true"></i>'}),$(".slider-2-row").slick({draggable:!0,dots:!1,infinite:!1,autoplaySpeed:3e3,slidesToShow:2,centerPadding:"0px",prevArrow:'<i class="fa fa-angle-left slick-prev1" aria-hidden="true"></i>',nextArrow:'<i class="fa fa-angle-right slick-next1" aria-hidden="true"></i>'}),$(".slider-3-row").slick({draggable:!0,infinite:!1,dots:!1,autoplay:!1,autoplaySpeed:3e3,slidesToShow:3,centerPadding:"0px",prevArrow:'<i class="fa fa-angle-left slick-prev1" aria-hidden="true"></i>',nextArrow:'<i class="fa fa-angle-right slick-next1" aria-hidden="true"></i>'}),$(".slider-3").slick({draggable:!0,infinite:!1,dots:!1,autoplay:!1,autoplaySpeed:3e3,slidesToShow:3,centerPadding:"0px",prevArrow:'<i class="fa fa-angle-left slick-prev1" aria-hidden="true"></i>',nextArrow:'<i class="fa fa-angle-right slick-next1" aria-hidden="true"></i>'}),$(".slider-4").slick({draggable:!0,dots:!1,infinite:!1,autoplaySpeed:3e3,slidesToShow:4,centerPadding:"0px",prevArrow:'<i class="fa fa-angle-left slick-prev1" aria-hidden="true"></i>',nextArrow:'<i class="fa fa-angle-right slick-next1" aria-hidden="true"></i>'}),$(".slider-5").slick({draggable:!0,dots:!1,infinite:!1,autoplaySpeed:3e3,slidesToShow:5,centerPadding:"0px",prevArrow:'<i class="fa fa-angle-left slick-prev1" aria-hidden="true"></i>',nextArrow:'<i class="fa fa-angle-right slick-next1" aria-hidden="true"></i>'}),$(".slider-6").slick({draggable:!0,infinite:!1,dots:!1,autoplaySpeed:3e3,slidesToShow:6,centerPadding:"0px",prevArrow:'<i class="fa fa-angle-left slick-prev1" aria-hidden="true"></i>',nextArrow:'<i class="fa fa-angle-right slick-next1" aria-hidden="true"></i>'});var s,a,o,r,n,c,u,m,v,f,g,h,_,p,L,y=document.querySelectorAll(".hero__content"),w=document.querySelectorAll(".hero__imgContent"),k=(document.querySelector(".slick-dots"),document.querySelector(".hero")),A=document.querySelectorAll(".hero__text");function q(){for(var e=0;e<y.length;e++)w[e].classList.remove("hero__imgContent-active"),A[e].classList.remove("hero__text-active"),y[e].classList.contains("slick-active")&&(w[e].classList.add("hero__imgContent-active"),A[e].classList.add("hero__text-active"))}function T(){var e=$(window).width(),t=document.querySelectorAll(".grids__gridTab"),s=document.querySelectorAll(".grids__items");if(0!=t.length){if(e<1200&&s[0].classList.contains("tabContent-active"))for(var a=0;a<t.length;a++)t[a].classList.remove("tabs__tab-active"),t[1].classList.add("tabs__tab-active"),s[a].classList.add("tabContent-hidden"),s[a].classList.remove("tabContent-active"),s[1].classList.add("tabContent-active"),s[1].classList.remove("tabContent-hidden");if(e<1e3&&s[1].classList.contains("tabContent-active"))for(var i=0;i<t.length;i++)t[i].classList.remove("tabs__tab-active"),t[2].classList.add("tabs__tab-active"),s[i].classList.add("tabContent-hidden"),s[i].classList.remove("tabContent-active"),s[2].classList.add("tabContent-active"),s[2].classList.remove("tabContent-hidden");if(e<600&&s[2].classList.contains("tabContent-active"))for(var o=0;o<t.length;o++)t[o].classList.remove("tabs__tab-active"),t[3].classList.add("tabs__tab-active"),s[o].classList.add("tabContent-hidden"),s[o].classList.remove("tabContent-active"),s[3].classList.add("tabContent-active"),s[3].classList.remove("tabContent-hidden")}}function x(){var e=$(".header").css("height");parseInt(e,10)+100<=pageYOffset?$(".goTop").addClass("goTop-active"):$(".goTop").removeClass("goTop-active")}null==k&&null==k||(k.addEventListener("click",q),k.addEventListener("touchend",q),k.addEventListener("mouseup",q)),$(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-nav"}),$(".slider-nav").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".slider-for",dots:!0,centerMode:!0,focusOnSelect:!0,fade:!0}),$(".slider-single-nav").slick((t(e={slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!0,speed:1,draggable:!0,autoplaySpeed:5e3,fade:!0},"slidesToShow",1),t(e,"prevArrow",'<i class="fa fa-angle-left slick-prev1" aria-hidden="true"></i>'),t(e,"nextArrow",'<i class="fa fa-angle-right slick-next1" aria-hidden="true"></i>'),e)),$(document).on("click",".smallnav img",function(){var e=$(this).data("index");$(".slider-single-nav").slick("slickGoTo",e)}),s=new createjs.LoadQueue,a=document.querySelector(".body"),o=document.querySelector(".preload"),r=document.querySelectorAll(".hero__imgContent_inner")[0].src,n=document.querySelectorAll(".hero__imgCover")[0].src,s.on("complete",function(e){o.classList.add("preload-done"),a.classList.remove("body-preload-active"),(null!=w[0]||null!=w[0])&&(setTimeout(function(){w[0].classList.add("hero__imgContent-active"),A[0].classList.add("hero__text-active")},100),setInterval(function(){q()},900))}),s.loadManifest([{id:"1",src:window},{id:"2",src:n},{id:"3",src:r}]),function(){var e=document.querySelectorAll(".scolors__item"),t=document.querySelectorAll(".scolors-sa__item");if(null!=t||null!=t||null!=e||null!=e){var s,a=d(t);try{for(a.s();!(s=a.n()).done;){var i=s.value,o=$(i).data("color");$(i).css("background-color",o),$(i).click(function(){$(this).parent()[0].querySelectorAll(".scolors-sa__item"),$(this).hasClass("scolors-sa__item-choosen")?($(this).attr("data-status",""),$(this).removeClass("scolors-sa__item-choosen")):($(this).addClass("scolors-sa__item-choosen"),$(this).attr("data-status","checked"))})}}catch(e){a.e(e)}finally{a.f()}var r,l=d(e);try{for(l.s();!(r=l.n()).done;){var n=r.value,c=$(n).data("color");$(n).css("background-color",c),$(n).click(function(){var e,t=d($(this).parent()[0].querySelectorAll(".scolors__item"));try{for(t.s();!(e=t.n()).done;){var s=e.value;$(s).attr("data-status",""),$(s).removeClass("scolors__item-choosen"),$(this).addClass("scolors__item-choosen"),$(this).attr("data-status","checked")}}catch(e){t.e(e)}finally{t.f()}})}}catch(e){l.e(e)}finally{l.f()}}}(),function(){var e=document.querySelectorAll(".stexts__item"),t=document.querySelectorAll(".stexts-sa__item");if(null!=t||null!=t||null!=e||null!=e){var s,a=d(t);try{for(a.s();!(s=a.n()).done;){var i=s.value;$(i).click(function(){$(this).parent()[0].querySelectorAll(".stexts-sa__item"),$(this).hasClass("stexts-sa__item-choosen")?($(this).attr("data-status",""),$(this).removeClass("stexts-sa__item-choosen")):($(this).addClass("stexts-sa__item-choosen"),$(this).attr("data-status","checked"))})}}catch(e){a.e(e)}finally{a.f()}var o,r=d(e);try{for(r.s();!(o=r.n()).done;){var l=o.value;$(l).click(function(){var e,t=d($(this).parent()[0].querySelectorAll(".stexts__item"));try{for(t.s();!(e=t.n()).done;){var s=e.value;$(s).removeClass("stexts__item-choosen"),$(s).attr("data-status",""),$(this).addClass("stexts__item-choosen"),$(this).attr("data-status","checked")}}catch(e){t.e(e)}finally{t.f()}})}}catch(e){r.e(e)}finally{r.f()}}}(),c=document.querySelector(".sidebar__bar"),u=document.querySelector(".burger__1m"),m=document.querySelector(".burger__2m"),v=document.querySelector(".burger__3m"),f=document.querySelector(".sidebar"),null==c&&null==c||(c.onclick=function(){u.classList.toggle("burger__1s-active"),m.classList.toggle("burger__2s-active"),v.classList.toggle("burger__3s-active"),f.classList.toggle("sidebar-active")}),(g=jQuery)(document).ready(function(){g(".range").each(function(){var t=g(this).attr("data-slider-val");g(this).slider({formatter:function(e){return"".concat(t)+e},min:parseFloat(g(this).attr("data-slider-min")),max:parseFloat(g(this).attr("data-slider-max")),range:!0,value:parseFloat(g(this).attr("data-slider-start")),step:parseFloat(g(this).attr("data-slider-step")),tooltip_split:!0,tooltip:!0})})}),window.onload=function(){var e,t;e=function(e){1==e&&document.querySelector("body").classList.add("webp")},(t=new Image).onload=t.onerror=function(){e(2==t.height)},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"},function(){var e,t,s,f=[],a=document.querySelectorAll("[data-da]"),g=[],h=[];if(0<a.length){for(var i=0,o=0;o<a.length;o++){var r=a[o],l=r.getAttribute("data-da");if(""!=l){var n=l.split(","),c=n[1]?n[1].trim():"last",d=n[2]?n[2].trim():"767",u="min"===n[3]?n[3].trim():"max",m=document.querySelector("."+n[0].trim());0<n.length&&m&&(r.setAttribute("data-da-index",i),f[i]={parent:r.parentNode,index:(t=r,s=void 0,s=Array.prototype.slice.call(t.parentNode.children),s.indexOf(t))},g[i]={element:r,destination:document.querySelector("."+n[0].trim()),place:c,breakpoint:d,type:u},i++)}}(e=g).sort(function(e,t){return e.breakpoint>t.breakpoint?-1:1}),e.sort(function(e,t){return e.place>t.place?1:-1});for(var v=0;v<g.length;v++){var _=g[v],p=_.breakpoint,L=_.type;h.push(window.matchMedia("("+L+"-width: "+p+"px)")),h[v].addListener(y)}}function y(e){for(var t=0;t<g.length;t++){var s=g[t],a=s.element,i=s.destination,o=s.place,r="_dynamic_adapt_"+s.breakpoint;if(h[t].matches){if(!a.classList.contains(r)){var l=S(i)[o];"first"===o?l=S(i)[0]:"last"===o&&(l=S(i)[S(i).length]),i.insertBefore(a,i.children[l]),a.classList.add(r)}}else a.classList.contains(r)&&(m=u=void 0,c=(n=a).getAttribute("data-da-index"),d=f[c],u=d.parent,m=d.index,v=S(u,!0)[m],u.insertBefore(n,u.children[v]),a.classList.remove(r))}var n,c,d,u,m,v}function S(e,t){for(var s=e.children,a=[],i=0;i<s.length;i++){var o=s[i];t?a.push(i):null==o.getAttribute("data-da")&&a.push(i)}return a}y()}(),function(){function e(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}e(function(){for(var e=document.getElementsByClassName("jsModalTrigger"),t=0;t<e.length;t++)e[t].onclick=function(){var e=this.getAttribute("href").substr(1),t=document.getElementById(e);return document.querySelector("body").classList.add("body-scrollLock"),t.classList?t.classList.add("open"):t.className+=" open",!1}}),e(function(){for(var e=document.getElementsByClassName("jsModalClose"),t=document.getElementsByClassName("jsOverlay"),s=0;s<e.length;s++)e[s].onclick=function(){var e=this.parentNode.parentNode;document.querySelector("body").classList.remove("body-scrollLock"),e.classList?e.classList.remove("open"):e.className=e.className.replace(new RegExp("(^|\\b)"+"open".split(" ").join("|")+"(\\b|$)","gi")," ")};for(s=0;s<t.length;s++)t[s].onclick=function(){var e=this.parentNode;document.querySelector("body").classList.remove("body-scrollLock"),e.classList?e.classList.remove("open"):e.className=e.className.replace(new RegExp("(^|\\b)"+"open".split(" ").join("|")+"(\\b|$)","gi")," ")}})}(),function(){for(var s=document.querySelectorAll(".store-slider"),a=document.querySelectorAll(".anim__hand"),e=function(e){function t(){a[e].classList.remove("anim__hand-animON")}s[e].addEventListener("touchstart",t),s[e].addEventListener("mouseup",t)},t=0;t<s.length;t++)e(t)}(),function(){var e,t=document.querySelectorAll(".tabs__tab"),s=document.querySelectorAll(".tabContent");for(document.querySelectorAll(".tabContent"),e=0;e<s.length;e++)s[0].classList.remove("tabContent-hidden"),s[0].classList.add("tabContent-active"),t[0].classList.add("hover-active"),s[e].classList.contains("tabContent-hidden")||(t[e].classList.add("tabs__tab-active"),t[e].classList.add("hover-active")),t[e].onclick=function(){for(var e=0;e<t.length;e++)t[e].classList.remove("tabs__tab-active"),t[e].classList.remove("hover-active"),s[e].classList.add("tabContent-hidden"),s[e].classList.remove("tabContent-active"),this.classList.add("tabs__tab-active"),t[e].classList.contains("tabs__tab-active")&&(s[e].classList.remove("tabContent-hidden"),s[e].classList.add("tabContent-active"))}}(),$(window).resize(T),T(),function(){var a=document.querySelectorAll(".accordion");if(0<a.length){a[0].classList.add("active"),a[0].childNodes[1].classList.toggle("accordion__plus_active");var e=a[0].nextElementSibling;a[0].nextElementSibling.style.maxHeight=e.scrollHeight+"px";for(var t=0;t<a.length;t++)a[t].onclick=function(e){for(var t=0;t<a.length;t++)a[t].classList.remove("active"),a[t].childNodes[1].classList.remove("accordion__plus_active"),a[t].nextElementSibling.style.maxHeight=null;this.classList.toggle("active"),this.childNodes[0],this.childNodes[1].classList.toggle("accordion__plus_active");var s=this.nextElementSibling;s.style.maxHeight?s.style.maxHeight=null:s.style.maxHeight=s.scrollHeight+"px"}}}(),$(".input-number-increment").on("click",function(){$(this).prev().val()&&$(this).prev().val(+$(this).prev().val()+1)}),$(".input-number-decrement").on("click",function(){1<$(this).next().val()&&1<$(this).next().val()&&$(this).next().val(+$(this).next().val()-1)}),h=0,$(window).scroll(function(){var e=$(".stats");if(0<$(e).length){var t=e.offset().top-window.innerHeight;0==h&&$(window).scrollTop()>t&&($(".stats__item_value").each(function(){var e=$(this),t=e.attr("data-count");$({countNum:e.text()}).animate({countNum:t},{duration:2e3,easing:"swing",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum)}})}),h=1)}}),_=document.querySelector(".bigView"),p=document.querySelector(".bigView__close"),L=document.querySelector(".bigView__zoom"),null==_&&null==_||(L.onclick=function(){body.classList.add("body-scrollLock"),_.classList.add("bigView-active"),p.onclick=function(){_.classList.remove("bigView-active"),body.classList.remove("body-scrollLock")}}),$(".goTop").on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},"300")}),window.onscroll=x,$(window).resize(x),function(){for(var e=document.querySelectorAll(".fastView-trigger"),s=document.querySelector(".fastView"),a=document.querySelector(".fastView__close"),t=(document.querySelector(".fastView-active"),0);t<e.length;t++)e[t].onclick=function(){function t(){s.classList.remove("fastView-active"),body.classList.remove("body-scrollLock-fv")}return s.classList.add("fastView-active"),body.classList.add("body-scrollLock-fv"),a.onclick=a,!(window.onclick=function(e){e.target==a&&t(),e.target==s&&t()})}}(),function(){var e=document.querySelectorAll(".form__group"),s=document.querySelectorAll(".form__input"),a=document.querySelectorAll(".form__label");if(null!=e||null!=e)for(var t=function(t){""!=s[t].value&&a[t].classList.add("form__label-active"),window.onlcick=function(){""==e[t].value?a[t].classList.remove("form__label-active"):a[t].classList.add("form__label-active")},e[t].onclick=function(){a[t].classList.add("form__label-active")},e[t].addEventListener("focusout",function(e){""==e.target.value?a[t].classList.remove("form__label-active"):a[t].classList.add("form__label-active")})},i=0;i<e.length;i++)t(i)}();var C,O,E=document.querySelector(".input__country");if(null!=E||null!=E){var I=function(){var e=E.value;E.style.color="select"==e?"grey":"rgb(48, 48, 48)"};I(),window.onclick=I}C=document.querySelectorAll(".items-cards-2>.item-card"),null==(O=document.querySelector(".item-card-big>.item-inner >.item__img"))&&null==O||(2<C.length?O.classList.add("item__img-big"):0==C.length?(document.querySelector(".items-cards-2").style.display="none",document.querySelector(".item-card-big").classList.add("item-card-big-single")):O.classList.remove("item__img-big")),$(function(){var t=document.querySelectorAll(".ratings>.star");$(".star").on("click",function(){$(".selected").each(function(){$(this).removeClass("selected")}),$(this).addClass("selected");for(var e=0;e<t.length;e++)t[e].classList.contains("selected")&&(0==e&&(console.log("5 stars"),$(".ratings").attr("data-stars","5")),1==e&&(console.log("4 stars"),$(".ratings").attr("data-stars","4")),2==e&&(console.log("3 stars"),$(".ratings").attr("data-stars","3")),3==e&&(console.log("2 stars"),$(".ratings").attr("data-stars","2")),4==e&&(console.log("1 stars"),$(".ratings").attr("data-stars","1")))})});var N,M=localStorage.getItem("isRTL"),H=d(document.querySelectorAll(".rtl-trigger"));try{var R=function(){var e=N.value;function t(){document.querySelector("body").classList.add("rtl-on"),document.querySelector("body").dir="rtl",e.innerHTML="Switch to LTR",$(".slick-slider").slick("slickSetOption","rtl",!0,!0)}function s(){document.querySelector("body").classList.remove("rtl-on"),document.querySelector("body").dir="ltr",e.innerHTML="Switch to RTL",$(".slick-slider").slick("slickSetOption","rtl",!1,!0)}e.onclick=function(){localStorage.setItem("isRTL",""),null!==(M=localStorage.getItem("isRTL"))&&(body.classList.contains("rtl-on")?(location.reload(),localStorage.setItem("isRTL",!1),M=localStorage.getItem("isRTL"),setTimeout(function(){s()},100)):(location.reload(),localStorage.setItem("isRTL",!0),M=localStorage.getItem("isRTL"),setTimeout(function(){t()},100)))},"true"==M?t():s()};for(H.s();!(N=H.n()).done;)R()}catch(e){H.e(e)}finally{H.f()}function V(){var e=$(window).width();e<=1500?($(".slider-3-row").slick("slickSetOption","slidesToShow",2,!0),$(".slider-5").slick("slickSetOption","slidesToShow",4,!0)):($(".slider-3-row").slick("slickSetOption","slidesToShow",3,!0),$(".slider-5").slick("slickSetOption","slidesToShow",5,!0)),e<=1300?($(".slider-6").slick("slickSetOption","slidesToShow",5,!0),$(".slider-4").slick("slickSetOption","slidesToShow",3,!0),$(".slider-5").slick("slickSetOption","slidesToShow",3,!0)):($(".slider-6").slick("slickSetOption","slidesToShow",6,!0),$(".slider-4").slick("slickSetOption","slidesToShow",4,!0)),e<=1100?($(".slider-6").slick("slickSetOption","slidesToShow",4,!0),$(".slider-4").slick("slickSetOption","slidesToShow",2,!0),$(".slider-3").slick("slickSetOption","slidesToShow",2,!0),$(".slider-5").slick("slickSetOption","slidesToShow",2,!0),$(".slider-3-row").slick("slickSetOption","slidesToShow",1,!0),$(".slider-2-row").slick("slickSetOption","slidesToShow",1,!0)):($(".slider-3").slick("slickSetOption","slidesToShow",3,!0),$(".slider-2-row").slick("slickSetOption","slidesToShow",2,!0)),e<=850&&$(".slider-6").slick("slickSetOption","slidesToShow",3,!0),e<=650?($(".slider-5").slick("slickSetOption","slidesToShow",1,!0),$(".slider-2").slick("slickSetOption","slidesToShow",1,!0),$(".slider-3").slick("slickSetOption","slidesToShow",1,!0),$(".slider-4").slick("slickSetOption","slidesToShow",1,!0)):$(".slider-2").slick("slickSetOption","slidesToShow",2,!0),e<=550&&$(".slider-6").slick("slickSetOption","slidesToShow",2,!0),e<=300&&$(".slider-6").slick("slickSetOption","slidesToShow",1,!0)}window.onload=function(){var e,t=d(document.querySelectorAll(".stexts__item"));try{for(t.s();!(e=t.n()).done;){var s=e.value;"checked"==$(s).data("status")&&$(s).addClass("stexts__item-choosen")}}catch(e){t.e(e)}finally{t.f()}var a,i=d(document.querySelectorAll(".scolors__item"));try{for(i.s();!(a=i.n()).done;){var o=a.value;"checked"==$(o).data("status")&&$(o).addClass("scolors__item-choosen")}}catch(e){i.e(e)}finally{i.f()}},(window.onresize=V)(),function(){for(var e=document.querySelector(".alert-def"),t=document.querySelector(".alert-success"),s=document.querySelector(".alert-fail"),a=document.querySelectorAll(".alert-trigger-def"),i=document.querySelectorAll(".alert-trigger-success"),o=document.querySelectorAll(".alert-trigger-fail"),r=(document.querySelectorAll(".alert__close"),0);r<a.length;r++)a[r].onclick=function(){console.log(1),e.classList.add("alert-active"),setTimeout(function(){e.classList.remove("alert-active")},3500)};for(var l=0;l<i.length;l++)i[l].onclick=function(){console.log(1),t.classList.add("alert-active"),setTimeout(function(){t.classList.remove("alert-active")},3500)};for(var n=0;n<o.length;n++)o[n].onclick=function(){console.log(1),s.classList.add("alert-active"),setTimeout(function(){s.classList.remove("alert-active")},3500)}}(),function(){for(var e,i=document.querySelectorAll(".cart-trigger"),o=(document.querySelectorAll(".cart-alert"),document.querySelectorAll(".item-pure")),r=document.querySelectorAll(".wishlist-trigger"),l=document.querySelectorAll(".compare-trigger"),t=function(t){function s(){(e=l[t].childNodes[0]).innerHTML=$(e).attr("data-add-text")||"Error",l[t].classList.remove("compare-active"),l[t].classList.add("compare-inactive")}function a(){(e=l[t].childNodes[0]).innerHTML=$(e).attr("data-remove-text")||"Error",l[t].classList.remove("compare-inactive"),l[t].classList.add("compare-active")}"true"==$(o[t]).attr("data-compare-status")&&(console.log(1),a()),"false"==$(o[t]).attr("data-compare-status")&&(console.log(2),s()),l[t].onclick=function(){var e=this;"false"==$(o[t]).attr("data-compare-status")?(a(),$(o[t]).attr("data-compare-status","true"),this.classList.add("btnItemAnim"),setTimeout(function(){e.classList.remove("btnItemAnim")},171)):"true"==$(o[t]).attr("data-compare-status")&&(s(),$(o[t]).attr("data-compare-status","false"),this.classList.add("btnItemAnim"),setTimeout(function(){e.classList.remove("btnItemAnim")},171))}},s=0;s<l.length;s++)t(s);for(var a=function(t){function s(){(e=r[t].childNodes[0]).innerHTML=$(e).attr("data-add-text")||"Error",r[t].classList.remove("wishlist-active"),r[t].classList.add("wishlist-inactive")}function a(){(e=r[t].childNodes[0]).innerHTML=$(e).attr("data-remove-text")||"Error",r[t].classList.remove("wishlist-inactive"),r[t].classList.add("wishlist-active")}"true"==$(o[t]).attr("data-wishlist-status")&&a(),"false"==$(o[t]).attr("data-wishlist-status")&&s(),r[t].onclick=function(){var e=this;"false"==$(o[t]).attr("data-wishlist-status")?(a(),$(o[t]).attr("data-wishlist-status","true"),this.classList.add("btnItemAnim"),setTimeout(function(){e.classList.remove("btnItemAnim")},171)):"true"==$(o[t]).attr("data-wishlist-status")&&(s(),$(o[t]).attr("data-wishlist-status","false"),this.classList.add("btnItemAnim"),setTimeout(function(){e.classList.remove("btnItemAnim")},171))}},n=0;n<r.length;n++)a(n);for(var c=function(t){function s(){(e=i[t].childNodes[0]).innerHTML=$(e).attr("data-add-text")||"Error",i[t].classList.remove("cart-active"),i[t].classList.add("cart-inactive")}function a(){(e=i[t].childNodes[0]).innerHTML=$(e).attr("data-remove-text")||"Error",i[t].classList.remove("cart-inactive"),i[t].classList.add("cart-active")}"true"==$(o[t]).attr("data-cart-status")&&a(),"false"==$(o[t]).attr("data-cart-status")&&s(),i[t].onclick=function(){var e=this;"false"==$(o[t]).attr("data-cart-status")?(a(),$(o[t]).attr("data-cart-status","true"),this.classList.add("btnItemAnim"),setTimeout(function(){e.classList.remove("btnItemAnim")},171)):"true"==$(o[t]).attr("data-cart-status")&&(s(),$(o[t]).attr("data-cart-status","false"),this.classList.add("btnItemAnim"),setTimeout(function(){e.classList.remove("btnItemAnim")},171))}},d=0;d<i.length;d++)c(d)}();