System.register("chunks:///_virtual/VideoPlayerCtrl.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var r,t,i,o,n,a,l,c,s,u;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,a=e._decorator,l=e.VideoPlayer,c=e.find,s=e.Node,u=e.Component}],execute:function(){var p,y,d,f,v;n._RF.push({},"0ec07xRNnFHLbODEqUVugkV","VideoPlayerCtrl",void 0);var h=a.ccclass,P=a.property;e("VideoPlayerCtrl",(p=h("VideoPlayerCtrl"),y=P({type:l}),p((v=r((f=function(e){function r(){for(var r,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return r=e.call.apply(e,[this].concat(n))||this,i(o(r),"videoPlayer",v,o(r)),r}t(r,e);var n=r.prototype;return n.start=function(){c("Canvas").on(s.EventType.MOUSE_MOVE,this.playVideo,this)},n.playVideo=function(){this.videoPlayer.play()},r}(u)).prototype,"videoPlayer",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=f))||d));n._RF.pop()}}}));

System.register("chunks:///_virtual/ButtonHandler.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,e,o,r,c,u,a;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,r=t.EventHandler,c=t.Button,u=t.director,a=t.Component}],execute:function(){var l;e._RF.push({},"231202yUgFK4ZGrNVTDQ2EM","ButtonHandler",void 0);var i=o.ccclass;o.property,t("ButtonHandler",i("ButtonHandler")(l=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.start=function(){var t=new r;t.target=this.node,t.component="ButtonHandler",t.handler="callback",this.node.getComponent(c).clickEvents.push(t)},o.callback=function(t){console.log("button clicked"),u.loadScene("VideoCont")},e}(a))||l);e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./VideoPlayerCtrl.ts","./ButtonHandler.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});