"use strict";!function(n){jQuery.noConflict();n.fn.countUp=function(t){var e=n.extend({time:2e3,delay:10},t);return this.each(function(){var i=n(this),p=e;i.waypoint(function(){i.data("counterupTo")||i.data("counterupTo",i.text());var t=0<parseInt(i.data("counter-time"))?parseInt(i.data("counter-time")):p.time,e=0<parseInt(i.data("counter-delay"))?parseInt(i.data("counter-delay")):p.delay,n=t/e,a=i.data("counterupTo"),u=[a],r=/[0-9]+,[0-9]+/.test(a);a=a.replace(/,/g,"");/^[0-9]+$/.test(a);for(var o=/^[0-9]+\.[0-9]+$/.test(a),c=o?(a.split(".")[1]||[]).length:0,d=n;1<=d;d--){var s=parseInt(Math.round(a/n*d));if(o&&(s=parseFloat(a/n*d).toFixed(c)),r)for(;/(\d+)(\d{3})/.test(s.toString());)s=s.toString().replace(/(\d+)(\d{3})/,"$1,$2");u.unshift(s)}i.data("counterup-nums",u),i.text("0");i.data("counterup-func",function(){i.text(i.data("counterup-nums").shift()),i.data("counterup-nums").length?setTimeout(i.data("counterup-func"),e):(i.data("counterup-nums"),i.data("counterup-nums",null),i.data("counterup-func",null))}),setTimeout(i.data("counterup-func"),e)},{offset:"100%",triggerOnce:!0})})}}(jQuery);