(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-2').attr('src', (dpi>1) ? 'images/3-300.png' : 'images/3-150.png');
$('.js-3').attr('src', (dpi>1) ? 'images/1-300.png' : 'images/1-150.png');
$('.js-4').attr('src', (dpi>1) ? 'images/1436281700_male3-300.png' : 'images/1436281700_male3-150.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-1')[0]);
initMenu($('#menu-2')[0]);
initMenu($('#menu-3')[0]);
initMenu($('#menu-4')[0]);
initMenu($('#menu-5')[0]);
initMenu($('#menu-6')[0]);
initMenu($('#menu-7')[0]);
initMenu($('#menu-8')[0]);
initMenu($('#menu-9')[0]);
initMenu($('#menu-10')[0]);
initMenu($('#menu-11')[0]);
$('.cont').Stickyfill();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});