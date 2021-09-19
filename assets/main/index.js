System.register("chunks:///_virtual/ButtonHandler.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,r,o,a,i,l,c,u,s;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,r=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){a=t.cclegacy,i=t._decorator,l=t.VideoPlayer,c=t.EventHandler,u=t.Button,s=t.Component}],execute:function(){var p,d,y,h,f;a._RF.push({},"231202yUgFK4ZGrNVTDQ2EM","ButtonHandler",void 0);var v=i.ccclass,g=i.property;t("ButtonHandler",(p=v("ButtonHandler"),d=g({type:l}),p((f=e((h=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a))||this,r(o(e),"player",f,o(e)),e}n(e,t);var a=e.prototype;return a.start=function(){var t=new c;t.target=this.node,t.component="ButtonHandler",t.handler="callback",this.node.getComponent(u).clickEvents.push(t)},a.callback=function(t){this.player;open("https://www.youtube.com/watch?v=iik25wqIuFo","_self"),console.log("button clicked")},e}(s)).prototype,"player",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=h))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./ButtonHandler.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

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