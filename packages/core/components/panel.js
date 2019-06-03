(function framework7ComponentLoader(e,t){void 0===t&&(t=!0);document,window;var a=e.$,n=(e.Template7,e.utils),i=(e.device,e.support,e.Class);e.Modal,e.ConstructorMethods,e.ModalMethods;var s=function(e){function t(t,i){var s;void 0===i&&(i={}),e.call(this,i,[t]);var l=i.el;!l&&i.content&&(l=i.content);var p=a(l);if(0===p.length)return this;if(p[0].f7Panel)return p[0].f7Panel;p[0].f7Panel=this;var o=i.opened,r=i.side,h=i.effect;if(void 0===o&&(o=p.hasClass("panel-active")),void 0===r&&(r=p.hasClass("panel-left")?"left":"right"),void 0===h&&(h=p.hasClass("panel-cover")?"cover":"reveal"),t.panel[r])throw new Error("Framework7: Can't create panel; app already has a "+r+" panel!");n.extend(t.panel,((s={})[r]=this,s));var c=a(".panel-backdrop");return 0===c.length&&(c=a('<div class="panel-backdrop"></div>')).insertBefore(p),n.extend(this,{app:t,side:r,effect:h,$el:p,el:p[0],opened:o,$backdropEl:c,backdropEl:c[0]}),this.useModules(),this.init(),this}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.init=function(){var e=this.app;e.params.panel[this.side+"Breakpoint"]&&this.initBreakpoints(),(e.params.panel.swipe===this.side||"both"===e.params.panel.swipe||e.params.panel.swipe&&e.params.panel.swipe!==this.side&&e.params.panel.swipeCloseOpposite)&&this.initSwipePanel()},t.prototype.getViewEl=function(){var e=this.app;return e.root.children(".views").length>0?e.root.children(".views")[0]:e.root.children(".view")[0]},t.prototype.setBreakpoint=function(){var e,t,n,i=this.app,s=this.side,l=this.$el,p=a(this.getViewEl()),o=i.params.panel[s+"Breakpoint"],r=l.hasClass("panel-visible-by-breakpoint");i.width>=o?r?p.css(((t={})["margin-"+s]=l.width()+"px",t)):(a("html").removeClass("with-panel-"+s+"-reveal with-panel-"+s+"-cover with-panel"),l.css("display","").addClass("panel-visible-by-breakpoint").removeClass("panel-active"),this.onOpen(),this.onOpened(),p.css(((e={})["margin-"+s]=l.width()+"px",e)),i.allowPanelOpen=!0,i.emit("local::breakpoint panelBreakpoint"),this.$el.trigger("panel:breakpoint",this)):r&&(l.css("display","").removeClass("panel-visible-by-breakpoint panel-active"),this.onClose(),this.onClosed(),p.css(((n={})["margin-"+s]="",n)),i.emit("local::breakpoint panelBreakpoint"),this.$el.trigger("panel:breakpoint",this))},t.prototype.initBreakpoints=function(){var e=this,t=e.app;return e.resizeHandler=function(){e.setBreakpoint()},t.params.panel[e.side+"Breakpoint"]&&t.on("resize",e.resizeHandler),e.setBreakpoint(),e},t.prototype.initSwipePanel=function(){!function(e){var t=e.app;n.extend(e,{swipeable:!0,swipeInitialized:!0});var i,s,l,p,o,r,h,c,d,f,v,w=t.params.panel,g=e.$el,u=e.$backdropEl,m=e.side,C=e.effect,b={},y=0;function k(r){if(e.swipeable&&t.panel.allowOpen&&(w.swipe||w.swipeOnlyClose)&&!s&&!(a(".modal-in:not(.toast):not(.notification), .photo-browser-in").length>0)&&(i=t.panel["left"===m?"right":"left"]||{},(e.opened||!i.opened)&&(w.swipeCloseOpposite||w.swipeOnlyClose||!i.opened)&&(!r.target||"input"!==r.target.nodeName.toLowerCase()||"range"!==r.target.type)&&!(a(r.target).closest(".range-slider, .tabs-swipeable-wrap, .calendar-months, .no-swipe-panel, .card-opened").length>0)&&(b.x="touchstart"===r.type?r.targetTouches[0].pageX:r.pageX,b.y="touchstart"===r.type?r.targetTouches[0].pageY:r.pageY,(!w.swipeOnlyClose||e.opened)&&("both"===w.swipe||!w.swipeCloseOpposite||w.swipe===m||e.opened)))){if(w.swipeActiveArea&&!e.opened){if("left"===m&&b.x>w.swipeActiveArea)return;if("right"===m&&b.x<t.width-w.swipeActiveArea)return}if(w.swipeCloseActiveAreaSide&&e.opened){if("left"===m&&b.x<g[0].offsetWidth-w.swipeCloseActiveAreaSide)return;if("right"===m&&b.x>t.width-g[0].offsetWidth+w.swipeCloseActiveAreaSide)return}y=0,v=a(e.getViewEl()),l=!1,s=!0,p=void 0,o=n.now(),f=void 0}}function A(a){if(s&&!((y+=1)<2))if(a.f7PreventSwipePanel||t.preventSwipePanelBySwipeBack||t.preventSwipePanel)s=!1;else{var n="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,i="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY;if(void 0===p&&(p=!!(p||Math.abs(i-b.y)>Math.abs(n-b.x))),p)s=!1;else{if(!f){if(f=n>b.x?"to-right":"to-left","both"===w.swipe&&w.swipeActiveArea>0&&!e.opened){if("left"===m&&b.x>w.swipeActiveArea)return void(s=!1);if("right"===m&&b.x<t.width-w.swipeActiveArea)return void(s=!1)}if(g.hasClass("panel-visible-by-breakpoint"))return void(s=!1);if("left"===m&&"to-left"===f&&!g.hasClass("panel-active")||"right"===m&&"to-right"===f&&!g.hasClass("panel-active"))return void(s=!1)}var k=e.opened?0:-w.swipeThreshold;if("right"===m&&(k=-k),w.swipeNoFollow){var A,O=n-b.x,x=(new Date).getTime()-o;return!e.opened&&("left"===m&&O>-k||"right"===m&&-O>k)&&(A=!0),e.opened&&("left"===m&&O<0||"right"===m&&O>0)&&(A=!0),void(A&&(x<300&&("to-left"===f&&("right"===m&&t.panel.open(m),"left"===m&&g.hasClass("panel-active")&&t.panel.close()),"to-right"===f&&("left"===m&&t.panel.open(m),"right"===m&&g.hasClass("panel-active")&&t.panel.close())),s=!1,l=!1))}l||(e.opened||(g.show(),u.show(),g.trigger("panel:swipeopen",e),e.emit("local::swipeOpen panelSwipeOpen",e)),d=g[0].offsetWidth,g.transition(0)),l=!0,a.preventDefault(),r=n-b.x+k,"right"===m?"cover"===C?((h=r+(e.opened?0:d))<0&&(h=0),h>d&&(h=d)):((h=r-(e.opened?d:0))>0&&(h=0),h<-d&&(h=-d)):((h=r+(e.opened?d:0))<0&&(h=0),h>d&&(h=d)),"reveal"===C?(v.transform("translate3d("+h+"px,0,0)").transition(0),u.transform("translate3d("+h+"px,0,0)").transition(0),g.trigger("panel:swipe",e,Math.abs(h/d)),e.emit("local::swipe panelSwipe",e,Math.abs(h/d))):("left"===m&&(h-=d),g.transform("translate3d("+h+"px,0,0)").transition(0),u.transition(0),c=1-Math.abs(h/d),u.css({opacity:c}),g.trigger("panel:swipe",e,Math.abs(h/d)),e.emit("local::swipe panelSwipe",e,Math.abs(h/d)))}}}function O(){if(!s||!l)return s=!1,void(l=!1);s=!1,l=!1;var t,i=(new Date).getTime()-o,p=0===h||Math.abs(h)===d,c=w.swipeThreshold||0;if("swap"==(t=e.opened?"cover"===C?0===h?"reset":i<300&&Math.abs(h)>0?"swap":i>=300&&Math.abs(h)<d/2?"reset":"swap":h===-d?"reset":i<300&&Math.abs(h)>=0||i>=300&&Math.abs(h)<=d/2?"left"===m&&h===d?"reset":"swap":"reset":Math.abs(r)<c?"reset":"cover"===C?0===h?"swap":i<300&&Math.abs(h)>0?"swap":i>=300&&Math.abs(h)<d/2?"swap":"reset":0===h?"reset":i<300&&Math.abs(h)>0||i>=300&&Math.abs(h)>=d/2?"swap":"reset")&&(e.opened?e.close(!p):e.open(!p)),"reset"===t&&!e.opened)if(p)g.css({display:""});else{var f="reveal"===C?v:g;a("html").addClass("with-panel-transitioning"),f.transitionEnd(function(){g.hasClass("panel-active")||(g.css({display:""}),a("html").removeClass("with-panel-transitioning"))})}"reveal"===C&&n.nextFrame(function(){v.transition(""),v.transform("")}),g.transition("").transform(""),u.css({display:""}).transform("").transition("").css("opacity","")}t.on("touchstart:passive",k),t.on("touchmove:active",A),t.on("touchend:passive",O),e.on("panelDestroy",function(){t.off("touchstart:passive",k),t.off("touchmove:active",A),t.off("touchend:passive",O)})}(this)},t.prototype.destroy=function(){var e,t=this,i=t.app;if(t.$el){if(t.emit("local::beforeDestroy panelBeforeDestroy",t),t.$el.trigger("panel:beforedestroy",t),t.resizeHandler&&i.off("resize",t.resizeHandler),t.$el.hasClass("panel-visible-by-breakpoint")){var s=a(t.getViewEl());t.$el.css("display","").removeClass("panel-visible-by-breakpoint panel-active"),s.css(((e={})["margin-"+t.side]="",e)),i.emit("local::breakpoint panelBreakpoint"),t.$el.trigger("panel:breakpoint",t)}t.$el.trigger("panel:destroy",t),t.emit("local::destroy panelDestroy"),delete i.panel[t.side],t.el&&(t.el.f7Panel=null,delete t.el.f7Panel),n.deleteProps(t),t=null}},t.prototype.open=function(e){void 0===e&&(e=!0);var t=this,n=t.app;if(!n.panel.allowOpen)return!1;var i=t.side,s=t.effect,l=t.$el,p=t.$backdropEl,o=t.opened,r=l.parent(),h=l.parents(document).length>0;if(!r.is(n.root)||l.prevAll(".views, .view").length){var c=n.root.children(".panel, .views, .view").eq(0),d=n.root.children(".statusbar").eq(0);c.length?l.insertBefore(c):d.length?l.insertAfter(c):n.root.prepend(l),p&&p.length&&(!p.parent().is(n.root)&&0===p.nextAll(".panel").length||p.parent().is(n.root)&&0===p.nextAll(".panel").length)&&p.insertBefore(l),t.once("panelClosed",function(){h?r.append(l):l.remove()})}if(o||l.hasClass("panel-visible-by-breakpoint")||l.hasClass("panel-active"))return!1;n.panel.close("left"===i?"right":"left",e),n.panel.allowOpen=!1,l[e?"removeClass":"addClass"]("not-animated"),l.css({display:"block"}).addClass("panel-active"),p[e?"removeClass":"addClass"]("not-animated"),p.show(),t._clientLeft=l[0].clientLeft,a("html").addClass("with-panel with-panel-"+i+"-"+s),t.onOpen();var f="reveal"===s?l.nextAll(".view, .views").eq(0):l;return e?function e(){f.transitionEnd(function(n){a(n.target).is(f)?l.hasClass("panel-active")?(t.onOpened(),p.css({display:""})):(t.onClosed(),p.css({display:""})):e()})}():(t.onOpened(),p.css({display:""})),!0},t.prototype.close=function(e){void 0===e&&(e=!0);var t=this,n=t.app,i=t.side,s=t.effect,l=t.$el,p=t.$backdropEl;if(!t.opened||l.hasClass("panel-visible-by-breakpoint")||!l.hasClass("panel-active"))return!1;l[e?"removeClass":"addClass"]("not-animated"),l.removeClass("panel-active"),p[e?"removeClass":"addClass"]("not-animated");var o="reveal"===s?l.nextAll(".view, .views").eq(0):l;return t.onClose(),n.panel.allowOpen=!1,e?(o.transitionEnd(function(){l.hasClass("panel-active")||(l.css({display:""}),a("html").removeClass("with-panel-transitioning"),t.onClosed())}),a("html").removeClass("with-panel with-panel-"+i+"-"+s).addClass("with-panel-transitioning")):(l.css({display:""}),l.removeClass("not-animated"),a("html").removeClass("with-panel with-panel-transitioning with-panel-"+i+"-"+s),t.onClosed()),!0},t.prototype.toggle=function(e){void 0===e&&(e=!0);this.opened?this.close(e):this.open(e)},t.prototype.onOpen=function(){this.opened=!0,this.$el.trigger("panel:open",this),this.emit("local::open panelOpen",this)},t.prototype.onOpened=function(){this.app.panel.allowOpen=!0,this.$el.trigger("panel:opened",this),this.emit("local::opened panelOpened",this)},t.prototype.onClose=function(){this.opened=!1,this.$el.addClass("panel-closing"),this.$el.trigger("panel:close",this),this.emit("local::close panelClose",this)},t.prototype.onClosed=function(){this.app.panel.allowOpen=!0,this.$el.removeClass("panel-closing"),this.$el.trigger("panel:closed",this),this.emit("local::closed panelClosed",this)},t}(i),l={name:"panel",params:{panel:{leftBreakpoint:0,rightBreakpoint:0,swipe:void 0,swipeActiveArea:0,swipeCloseActiveAreaSide:0,swipeCloseOpposite:!0,swipeOnlyClose:!1,swipeNoFollow:!1,swipeThreshold:0,closeByBackdropClick:!0}},static:{Panel:s},instance:{panel:{allowOpen:!0}},create:function(){var e=this;n.extend(e.panel,{disableSwipe:function(t){var a;void 0===t&&(t="both");var i=[];"string"==typeof t?"both"===t?(a="both",i=[e.panel.left,e.panel.right]):(a=t,i.push(e.panel[a])):i=[t],i.forEach(function(e){e&&n.extend(e,{swipeable:!1})})},enableSwipe:function(t){void 0===t&&(t="both");var a,i=[];"string"==typeof t?(a=t,"left"===e.params.panel.swipe&&"right"===a||"right"===e.params.panel.swipe&&"left"===a||"both"===a?(a="both",e.params.panel.swipe=a,i=[e.panel.left,e.panel.right]):(e.params.panel.swipe=a,i.push(e.panel[a]))):t&&i.push(t),i.length&&i.forEach(function(e){e&&(e.swipeInitialized?n.extend(e,{swipeable:!0}):e.initSwipePanel())})},create:function(t){return new s(e,t)},open:function(t,n){var i=t;if(!i){if(a(".panel").length>1)return!1;i=a(".panel").hasClass("panel-left")?"left":"right"}if(!i)return!1;if(e.panel[i])return e.panel[i].open(n);var s=a(".panel-"+i);return s.length>0&&e.panel.create({el:s}).open(n)},close:function(t,n){var i,s;return s?i=a(".panel-"+(s=t)):s=(i=a(".panel.panel-active")).hasClass("panel-left")?"left":"right",!!s&&(e.panel[s]?e.panel[s].close(n):i.length>0&&e.panel.create({el:i}).close(n))},toggle:function(t,n){var i,s=t;if(t)i=a(".panel-"+(s=t));else if(a(".panel.panel-active").length)s=(i=a(".panel.panel-active")).hasClass("panel-left")?"left":"right";else{if(a(".panel").length>1)return!1;s=a(".panel").hasClass("panel-left")?"left":"right",i=a(".panel-"+s)}return!!s&&(e.panel[s]?e.panel[s].toggle(n):i.length>0&&e.panel.create({el:i}).toggle(n))},get:function(t){var n=t;if(!n){if(a(".panel").length>1)return;n=a(".panel").hasClass("panel-left")?"left":"right"}if(n){if(e.panel[n])return e.panel[n];var i=a(".panel-"+n);return i.length>0?e.panel.create({el:i}):void 0}}})},on:{init:function(){var e=this;a(".panel").each(function(t,n){var i=a(n).hasClass("panel-left")?"left":"right";e.panel[i]=e.panel.create({el:n,side:i})})}},clicks:{".panel-open":function(e,t){void 0===t&&(t={});var n="left";("right"===t.panel||1===a(".panel").length&&a(".panel").hasClass("panel-right"))&&(n="right"),this.panel.open(n,t.animate)},".panel-close":function(e,t){void 0===t&&(t={});var a=t.panel;this.panel.close(a,t.animate)},".panel-toggle":function(e,t){void 0===t&&(t={});var a=t.panel;this.panel.toggle(a,t.animate)},".panel-backdrop":function(){var e=a(".panel-active"),t=e[0]&&e[0].f7Panel;e.trigger("panel:backdrop-click"),t&&t.emit("backdropClick",t),this.emit("panelBackdropClick",t||e[0]),this.params.panel.closeByBackdropClick&&this.panel.close()}}};if(t){if(e.prototype.modules&&e.prototype.modules[l.name])return;e.use(l),e.instance&&(e.instance.useModuleParams(l,e.instance.params),e.instance.useModule(l))}return l}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
