!function(){var e=document.createElement("style");e.innerHTML=".ant-message{box-sizing:border-box;margin:0;padding:0;color:#485378;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:'tnum';position:fixed;top:8px;left:0;z-index:1010;width:100%;pointer-events:none}.ant-message-notice{padding:8px;text-align:center}.ant-message-notice-content{display:inline-block;padding:10px 16px;background:#fff;border-radius:2px;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);pointer-events:all}.ant-message-success .anticon{color:#52c41a}.ant-message-error .anticon{color:#ff4d4f}.ant-message-warning .anticon{color:#faad14}.ant-message-info .anticon,.ant-message-loading .anticon{color:#4ea5f2}.ant-message .anticon{position:relative;top:1px;margin-right:8px;font-size:16px}.ant-message-notice.ant-move-up-leave.ant-move-up-leave-active{-webkit-animation-name:MessageMoveOut;animation-name:MessageMoveOut;-webkit-animation-duration:.3s;animation-duration:.3s}@-webkit-keyframes MessageMoveOut{0%{max-height:150px;padding:8px;opacity:1}100%{max-height:0;padding:0;opacity:0}}@keyframes MessageMoveOut{0%{max-height:150px;padding:8px;opacity:1}100%{max-height:0;padding:0;opacity:0}}.ant-message-rtl{direction:rtl}.ant-message-rtl span{direction:rtl}.ant-message-rtl .anticon{margin-right:0;margin-left:8px}",document.head.appendChild(e),System.register(["./vendor-legacy.66ec1a9f.js"],(function(e){"use strict";var t,n,i,a,r;return{setters:[function(e){t=e.x,n=e.w,i=e.A,a=e.r,r=e._}],execute:function(){e("a",["xxl","xl","lg","md","sm","xs"]);var o,s={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},c=new Map,d=-1,m={},l=(e("r",{matchHandlers:{},dispatch:function(e){return m=e,c.forEach((function(e){return e(m)})),c.size>=1},subscribe:function(e){return c.size||this.register(),d+=1,c.set(d,e),e(m),d},unsubscribe:function(e){c.delete(e),c.size||this.unregister()},unregister:function(){var e=this;Object.keys(s).forEach((function(t){var n=s[t],i=e.matchHandlers[n];null==i||i.mql.removeListener(null==i?void 0:i.listener)})),c.clear()},register:function(){var e=this;Object.keys(s).forEach((function(i){var a=s[i],r=function(a){var r=a.matches;e.dispatch(t(t({},m),n({},i,r)))},o=window.matchMedia(a);o.addListener(r),e.matchHandlers[a]={mql:o,listener:r},r(o)}))}}),function(){if(!i()||!window.document.documentElement)return!1;if(void 0!==o)return o;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),o=1===e.scrollHeight,document.body.removeChild(e),o});e("u",(function(){var e=a.exports.useState(!1),t=r(e,2),n=t[0],i=t[1];return a.exports.useEffect((function(){i(l())}),[]),n}))}}}))}();
