(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();var W,d,f_,H,Q,a_,R,S={},p_=[],b_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,G=Array.isArray;function $(e,_){for(var t in _)e[t]=_[t];return e}function d_(e){var _=e.parentNode;_&&_.removeChild(e)}function w_(e,_,t){var o,n,r,c={};for(r in _)r=="key"?o=_[r]:r=="ref"?n=_[r]:c[r]=_[r];if(arguments.length>2&&(c.children=arguments.length>3?W.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)c[r]===void 0&&(c[r]=e.defaultProps[r]);return A(e,c,o,n,null)}function A(e,_,t,o,n){var r={type:e,props:_,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++f_,__i:-1,__u:0};return n==null&&d.vnode!=null&&d.vnode(r),r}function C(e){return e.children}function D(e,_){this.props=e,this.context=_}function E(e,_){if(_==null)return e.__?E(e.__,e.__i+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?E(e):null}function h_(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return h_(e)}}function X(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!O.__r++||Q!==d.debounceRendering)&&((Q=d.debounceRendering)||a_)(O)}function O(){var e,_,t,o,n,r,c,l,u;for(H.sort(R);e=H.shift();)e.__d&&(_=H.length,o=void 0,r=(n=(t=e).__v).__e,l=[],u=[],(c=t.__P)&&((o=$({},n)).__v=n.__v+1,d.vnode&&d.vnode(o),K(c,o,n,t.__n,c.ownerSVGElement!==void 0,32&n.__u?[r]:null,l,r??E(n),!!(32&n.__u),u),o.__v=n.__v,o.__.__k[o.__i]=o,y_(l,o,u),o.__e!=r&&h_(o)),H.length>_&&H.sort(R));O.__r=0}function v_(e,_,t,o,n,r,c,l,u,s,a){var i,p,f,y,x,g=o&&o.__k||p_,h=_.length;for(t.__d=u,x_(t,_,g),u=t.__d,i=0;i<h;i++)(f=t.__k[i])!=null&&typeof f!="boolean"&&typeof f!="function"&&(p=f.__i===-1?S:g[f.__i]||S,f.__i=i,K(e,f,p,n,r,c,l,u,s,a),y=f.__e,f.ref&&p.ref!=f.ref&&(p.ref&&Y(p.ref,null,f),a.push(f.ref,f.__c||y,f)),x==null&&y!=null&&(x=y),65536&f.__u||p.__k===f.__k?(y||p.__e!=u||(u=E(p)),u=m_(f,u,e)):typeof f.type=="function"&&f.__d!==void 0?u=f.__d:y&&(u=y.nextSibling),f.__d=void 0,f.__u&=-196609);t.__d=u,t.__e=x}function x_(e,_,t){var o,n,r,c,l,u=_.length,s=t.length,a=s,i=0;for(e.__k=[],o=0;o<u;o++)c=o+i,(n=e.__k[o]=(n=_[o])==null||typeof n=="boolean"||typeof n=="function"?null:typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?A(null,n,null,null,null):G(n)?A(C,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?A(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n)!=null?(n.__=e,n.__b=e.__b+1,l=P_(n,t,c,a),n.__i=l,r=null,l!==-1&&(a--,(r=t[l])&&(r.__u|=131072)),r==null||r.__v===null?(l==-1&&i--,typeof n.type!="function"&&(n.__u|=65536)):l!==c&&(l===c+1?i++:l>c?a>u-c?i+=l-c:i--:l<c?l==c-1&&(i=l-c):i=0,l!==o+i&&(n.__u|=65536))):(r=t[c])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=E(r)),j(r,r,!1),t[c]=null,a--);if(a)for(o=0;o<s;o++)(r=t[o])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=E(r)),j(r,r))}function m_(e,_,t){var o,n;if(typeof e.type=="function"){for(o=e.__k,n=0;o&&n<o.length;n++)o[n]&&(o[n].__=e,_=m_(o[n],_,t));return _}e.__e!=_&&(t.insertBefore(e.__e,_||null),_=e.__e);do _=_&&_.nextSibling;while(_!=null&&_.nodeType===8);return _}function P_(e,_,t,o){var n=e.key,r=e.type,c=t-1,l=t+1,u=_[t];if(u===null||u&&n==u.key&&r===u.type&&!(131072&u.__u))return t;if(o>(u!=null&&!(131072&u.__u)?1:0))for(;c>=0||l<_.length;){if(c>=0){if((u=_[c])&&!(131072&u.__u)&&n==u.key&&r===u.type)return c;c--}if(l<_.length){if((u=_[l])&&!(131072&u.__u)&&n==u.key&&r===u.type)return l;l++}}return-1}function __(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||b_.test(_)?t:t+"px"}function T(e,_,t,o,n){var r;_:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(_ in o)t&&_ in t||__(e.style,_,"");if(t)for(_ in t)o&&t[_]===o[_]||__(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")r=_!==(_=_.replace(/(PointerCapture)$|Capture$/i,"$1")),_=_.toLowerCase()in e||_==="onFocusOut"||_==="onFocusIn"?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+r]=t,t?o?t.u=o.u:(t.u=Date.now(),e.addEventListener(_,r?t_:e_,r)):e.removeEventListener(_,r?t_:e_,r);else{if(n)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!=="width"&&_!=="height"&&_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_!=="rowSpan"&&_!=="colSpan"&&_!=="role"&&_ in e)try{e[_]=t??"";break _}catch{}typeof t=="function"||(t==null||t===!1&&_[4]!=="-"?e.removeAttribute(_):e.setAttribute(_,t))}}function e_(e){if(this.l){var _=this.l[e.type+!1];if(e.t){if(e.t<=_.u)return}else e.t=Date.now();return _(d.event?d.event(e):e)}}function t_(e){if(this.l)return this.l[e.type+!0](d.event?d.event(e):e)}function K(e,_,t,o,n,r,c,l,u,s){var a,i,p,f,y,x,g,h,k,P,N,F,J,L,I,w=_.type;if(_.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),r=[l=_.__e=t.__e]),(a=d.__b)&&a(_);_:if(typeof w=="function")try{if(h=_.props,k=(a=w.contextType)&&o[a.__c],P=a?k?k.props.value:a.__:o,t.__c?g=(i=_.__c=t.__c).__=i.__E:("prototype"in w&&w.prototype.render?_.__c=i=new w(h,P):(_.__c=i=new D(h,P),i.constructor=w,i.render=H_),k&&k.sub(i),i.props=h,i.state||(i.state={}),i.context=P,i.__n=o,p=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),w.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=$({},i.__s)),$(i.__s,w.getDerivedStateFromProps(h,i.__s))),f=i.props,y=i.state,i.__v=_,p)w.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(w.getDerivedStateFromProps==null&&h!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(h,P),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(h,i.__s,P)===!1||_.__v===t.__v)){for(_.__v!==t.__v&&(i.props=h,i.state=i.__s,i.__d=!1),_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(M){M&&(M.__=_)}),N=0;N<i._sb.length;N++)i.__h.push(i._sb[N]);i._sb=[],i.__h.length&&c.push(i);break _}i.componentWillUpdate!=null&&i.componentWillUpdate(h,i.__s,P),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,y,x)})}if(i.context=P,i.props=h,i.__P=e,i.__e=!1,F=d.__r,J=0,"prototype"in w&&w.prototype.render){for(i.state=i.__s,i.__d=!1,F&&F(_),a=i.render(i.props,i.state,i.context),L=0;L<i._sb.length;L++)i.__h.push(i._sb[L]);i._sb=[]}else do i.__d=!1,F&&F(_),a=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++J<25);i.state=i.__s,i.getChildContext!=null&&(o=$($({},o),i.getChildContext())),p||i.getSnapshotBeforeUpdate==null||(x=i.getSnapshotBeforeUpdate(f,y)),v_(e,G(I=a!=null&&a.type===C&&a.key==null?a.props.children:a)?I:[I],_,t,o,n,r,c,l,u,s),i.base=_.__e,_.__u&=-161,i.__h.length&&c.push(i),g&&(i.__E=i.__=null)}catch(M){_.__v=null,u||r!=null?(_.__e=l,_.__u|=u?160:32,r[r.indexOf(l)]=null):(_.__e=t.__e,_.__k=t.__k),d.__e(M,_,t)}else r==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=$_(t.__e,_,t,o,n,r,c,u,s);(a=d.diffed)&&a(_)}function y_(e,_,t){_.__d=void 0;for(var o=0;o<t.length;o++)Y(t[o],t[++o],t[++o]);d.__c&&d.__c(_,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){d.__e(r,n.__v)}})}function $_(e,_,t,o,n,r,c,l,u){var s,a,i,p,f,y,x,g=t.props,h=_.props,k=_.type;if(k==="svg"&&(n=!0),r!=null){for(s=0;s<r.length;s++)if((f=r[s])&&"setAttribute"in f==!!k&&(k?f.localName===k:f.nodeType===3)){e=f,r[s]=null;break}}if(e==null){if(k===null)return document.createTextNode(h);e=n?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,h.is&&h),r=null,l=!1}if(k===null)g===h||l&&e.data===h||(e.data=h);else{if(r=r&&W.call(e.childNodes),g=t.props||S,!l&&r!=null)for(g={},s=0;s<e.attributes.length;s++)g[(f=e.attributes[s]).name]=f.value;for(s in g)f=g[s],s=="children"||(s=="dangerouslySetInnerHTML"?i=f:s==="key"||s in h||T(e,s,null,f,n));for(s in h)f=h[s],s=="children"?p=f:s=="dangerouslySetInnerHTML"?a=f:s=="value"?y=f:s=="checked"?x=f:s==="key"||l&&typeof f!="function"||g[s]===f||T(e,s,f,g[s],n);if(a)l||i&&(a.__html===i.__html||a.__html===e.innerHTML)||(e.innerHTML=a.__html),_.__k=[];else if(i&&(e.innerHTML=""),v_(e,G(p)?p:[p],_,t,o,n&&k!=="foreignObject",r,c,r?r[0]:t.__k&&E(t,0),l,u),r!=null)for(s=r.length;s--;)r[s]!=null&&d_(r[s]);l||(s="value",y!==void 0&&(y!==e[s]||k==="progress"&&!y||k==="option"&&y!==g[s])&&T(e,s,y,g[s],!1),s="checked",x!==void 0&&x!==e[s]&&T(e,s,x,g[s],!1))}return e}function Y(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(o){d.__e(o,t)}}function j(e,_,t){var o,n;if(d.unmount&&d.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||Y(o,null,_)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){d.__e(r,_)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(n=0;n<o.length;n++)o[n]&&j(o[n],_,t||typeof e.type!="function");t||e.__e==null||d_(e.__e),e.__=e.__e=e.__d=void 0}function H_(e,_,t){return this.constructor(e,t)}function E_(e,_,t){var o,n,r,c;d.__&&d.__(e,_),n=(o=typeof t=="function")?null:t&&t.__k||_.__k,r=[],c=[],K(_,e=(!o&&t||_).__k=w_(C,null,[e]),n||S,S,_.ownerSVGElement!==void 0,!o&&t?[t]:n?null:_.firstChild?W.call(_.childNodes):null,r,!o&&t?t:n?n.__e:_.firstChild,o,c),y_(r,e,c)}W=p_.slice,d={__e:function(e,_,t,o){for(var n,r,c;_=_.__;)if((n=_.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),c=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e,o||{}),c=n.__d),c)return n.__E=n}catch(l){e=l}throw e}},f_=0,D.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof e=="function"&&(e=e($({},t),this.props)),e&&$(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),X(this))},D.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),X(this))},D.prototype.render=C,H=[],a_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,R=function(e,_){return e.__v.__b-_.__v.__b},O.__r=0;var q,v,B,n_,Z=0,g_=[],U=[],m=d,o_=m.__b,r_=m.__r,i_=m.diffed,c_=m.__c,l_=m.unmount,s_=m.__;function F_(e,_){m.__h&&m.__h(v,e,Z||_),Z=0;var t=v.__H||(v.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:U}),t.__[e]}function S_(e){return Z=1,C_(k_,e)}function C_(e,_,t){var o=F_(q++,2);if(o.t=e,!o.__c&&(o.__=[t?t(_):k_(void 0,_),function(l){var u=o.__N?o.__N[0]:o.__[0],s=o.t(u,l);u!==s&&(o.__N=[s,o.__[1]],o.__c.setState({}))}],o.__c=v,!v.u)){var n=function(l,u,s){if(!o.__c.__H)return!0;var a=o.__c.__H.__.filter(function(p){return!!p.__c});if(a.every(function(p){return!p.__N}))return!r||r.call(this,l,u,s);var i=!1;return a.forEach(function(p){if(p.__N){var f=p.__[0];p.__=p.__N,p.__N=void 0,f!==p.__[0]&&(i=!0)}}),!(!i&&o.__c.props===l)&&(!r||r.call(this,l,u,s))};v.u=!0;var r=v.shouldComponentUpdate,c=v.componentWillUpdate;v.componentWillUpdate=function(l,u,s){if(this.__e){var a=r;r=void 0,n(l,u,s),r=a}c&&c.call(this,l,u,s)},v.shouldComponentUpdate=n}return o.__N||o.__}function N_(){for(var e;e=g_.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(V),e.__H.__h.forEach(z),e.__H.__h=[]}catch(_){e.__H.__h=[],m.__e(_,e.__v)}}m.__b=function(e){v=null,o_&&o_(e)},m.__=function(e,_){e&&_.__k&&_.__k.__m&&(e.__m=_.__k.__m),s_&&s_(e,_)},m.__r=function(e){r_&&r_(e),q=0;var _=(v=e.__c).__H;_&&(B===v?(_.__h=[],v.__h=[],_.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=U,t.__N=t.i=void 0})):(_.__h.forEach(V),_.__h.forEach(z),_.__h=[],q=0)),B=v},m.diffed=function(e){i_&&i_(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&(g_.push(_)!==1&&n_===m.requestAnimationFrame||((n_=m.requestAnimationFrame)||L_)(N_)),_.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==U&&(t.__=t.__V),t.i=void 0,t.__V=U})),B=v=null},m.__c=function(e,_){_.some(function(t){try{t.__h.forEach(V),t.__h=t.__h.filter(function(o){return!o.__||z(o)})}catch(o){_.some(function(n){n.__h&&(n.__h=[])}),_=[],m.__e(o,t.__v)}}),c_&&c_(e,_)},m.unmount=function(e){l_&&l_(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{V(o)}catch(n){_=n}}),t.__H=void 0,_&&m.__e(_,t.__v))};var u_=typeof requestAnimationFrame=="function";function L_(e){var _,t=function(){clearTimeout(o),u_&&cancelAnimationFrame(_),setTimeout(e)},o=setTimeout(t,100);u_&&(_=requestAnimationFrame(t))}function V(e){var _=v,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),v=_}function z(e){var _=v;e.__c=e.__(),v=_}function k_(e,_){return typeof _=="function"?_(e):_}const M_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='27.68'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20296'%3e%3cpath%20fill='%23673AB8'%20d='m128%200l128%2073.9v147.8l-128%2073.9L0%20221.7V73.9z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M34.865%20220.478c17.016%2021.78%2071.095%205.185%20122.15-34.704c51.055-39.888%2080.24-88.345%2063.224-110.126c-17.017-21.78-71.095-5.184-122.15%2034.704c-51.055%2039.89-80.24%2088.346-63.224%20110.126Zm7.27-5.68c-5.644-7.222-3.178-21.402%207.573-39.253c11.322-18.797%2030.541-39.548%2054.06-57.923c23.52-18.375%2048.303-32.004%2069.281-38.442c19.922-6.113%2034.277-5.075%2039.92%202.148c5.644%207.223%203.178%2021.403-7.573%2039.254c-11.322%2018.797-30.541%2039.547-54.06%2057.923c-23.52%2018.375-48.304%2032.004-69.281%2038.441c-19.922%206.114-34.277%205.076-39.92-2.147Z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M220.239%20220.478c17.017-21.78-12.169-70.237-63.224-110.126C105.96%2070.464%2051.88%2053.868%2034.865%2075.648c-17.017%2021.78%2012.169%2070.238%2063.224%20110.126c51.055%2039.889%20105.133%2056.485%20122.15%2034.704Zm-7.27-5.68c-5.643%207.224-19.998%208.262-39.92%202.148c-20.978-6.437-45.761-20.066-69.28-38.441c-23.52-18.376-42.74-39.126-54.06-57.923c-10.752-17.851-13.218-32.03-7.575-39.254c5.644-7.223%2019.999-8.261%2039.92-2.148c20.978%206.438%2045.762%2020.067%2069.281%2038.442c23.52%2018.375%2042.739%2039.126%2054.06%2057.923c10.752%2017.85%2013.218%2032.03%207.574%2039.254Z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M127.552%20167.667c10.827%200%2019.603-8.777%2019.603-19.604c0-10.826-8.776-19.603-19.603-19.603c-10.827%200-19.604%208.777-19.604%2019.603c0%2010.827%208.777%2019.604%2019.604%2019.604Z'%3e%3c/path%3e%3c/svg%3e",T_="/preact/vite.svg";var A_=0;function b(e,_,t,o,n,r){var c,l,u={};for(l in _)l=="ref"?c=_[l]:u[l]=_[l];var s={type:e,props:u,key:t,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--A_,__i:-1,__u:0,__source:n,__self:r};if(typeof e=="function"&&(c=e.defaultProps))for(l in c)u[l]===void 0&&(u[l]=c[l]);return d.vnode&&d.vnode(s),s}function D_(){const[e,_]=S_(0);return b(C,{children:[b("div",{children:[b("a",{href:"https://vitejs.dev",target:"_blank",children:b("img",{src:T_,class:"logo",alt:"Vite logo"})}),b("a",{href:"https://preactjs.com",target:"_blank",children:b("img",{src:M_,class:"logo preact",alt:"Preact logo"})})]}),b("h1",{children:"Vite + Preact"}),b("div",{class:"card",children:[b("button",{onClick:()=>_(t=>t+1),children:["count is ",e]}),b("p",{children:["Edit ",b("code",{children:"src/app.tsx"})," and save to test HMR"]})]}),b("p",{class:"read-the-docs",children:"Click on the Vite and Preact logos to learn more"})]})}E_(b(D_,{}),document.getElementById("app"));
