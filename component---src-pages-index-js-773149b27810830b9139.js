(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("0mN4");var a=r("5NKs");t.__esModule=!0,t.default=void 0;var n,i=a(r("v06X")),o=a(r("XEEL")),s=a(r("uDP2")),l=a(r("j8BX")),c=a(r("q1tI")),d=a(r("17x9")),u=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,r=e.fixed;return(t&&t[0]||r&&r[0]).src},p=Object.create({}),m=function(e){var t=u(e),r=f(t);return p[r]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,y=h&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),c.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function v(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function S(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function x(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function w(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var z=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),b.set(e,t)),function(){r.unobserve(e),b.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+c+o+s+r+a+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=function(e){var t=e.src,r=e.imageVariants,a=e.generateSources,n=e.spreadProps,i=c.default.createElement(I,(0,l.default)({src:t},n));return r.length>1?c.default.createElement("picture",null,a(r),i):i},I=c.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:r,srcSet:a,src:n},p,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var C=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=h&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!g&&y&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||h&&(g||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=f(t),p[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,g=e.fixed,h=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,v=e.itemProp,w=e.loading,z=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,l.default)({opacity:C?1:0,transition:L?"opacity "+y+"ms":"none"},s),V="boolean"==typeof h?"lightgray":h,A={transitionDelay:y+"ms"},R=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&A,{},s,{},f),k={title:t,alt:this.state.isVisible?"":r,style:R,className:p,itemProp:v};if(m){var P=m,F=P[0];return c.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(F.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/F.aspectRatio+"%"}}),V&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&A)}),F.base64&&c.default.createElement(j,{src:F.base64,spreadProps:k,imageVariants:P,generateSources:x}),F.tracedSVG&&c.default.createElement(j,{src:F.tracedSVG,spreadProps:k,imageVariants:P,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,E(P),c.default.createElement(I,{alt:r,title:t,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:z})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:r,title:t,loading:w},F,{imageVariants:P}))}}))}if(g){var M=g,T=M[0],W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},i);return"inherit"===i.display&&delete W.display,c.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},V&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:V,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},L&&A)}),T.base64&&c.default.createElement(j,{src:T.base64,spreadProps:k,imageVariants:M,generateSources:x}),T.tracedSVG&&c.default.createElement(j,{src:T.tracedSVG,spreadProps:k,imageVariants:M,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,E(M),c.default.createElement(I,{alt:r,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:z})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:r,title:t,loading:w},T,{imageVariants:M}))}}))}return null},t}(c.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),N=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});C.propTypes={resolutions:L,sizes:N,fixed:d.default.oneOfType([L,d.default.arrayOf(L)]),fluid:d.default.oneOfType([N,d.default.arrayOf(N)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var V=C;t.default=V},MTnK:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFE0lEQVQ4y02Ua1CUVRjHN6xvfalPNZMja1wspxqbSbMvfatpci/cAnZx78vu++4CgpqTQGoaikwhIesgIBdFIRAkFdERFLkIgYQsCOiKsIpYgyBKaXs5/56zLI3vzDPnnD3n+Z3/+3+edyXhCkHCHz6GK6wrJMFnrVJYt1ohZoYphEapXOh962uh9+1NQiOts95TWD5ePhcut64Ik1v/ZwR/FPhGSPDAh7RxfpXMytbGpmBNbBo2xImw6SxITLIiMjoFUrmICIW1OUwufBTMCXkJZpXQrcswA214pVGpSEjQo8i02ftdfJx3rzre32jX+5vSjN7dRoN3rczEwmLSONRHUGNQXQjNA5MVQVjymphUrKLbY+K0njpBwxpystm12jJ0Nlayq1UOdsJuwuktZnZAp2KfKE0eqUIEzyGQNQhdsowUbqQFwugA+eMr1KlwNieLuYa72Pz9QcxNDWCOxuaiXJwQ9axM0LEDeg3CZMk+nhMeCOEzyUvGdnNvQuWid6PSgGq7kTnbz7Kn00N4ONqF6ZEOzE0O4GZrAypEPRyikZ2x61jsN3qslAneNTEppNLas1yZLyOi7AE/CMg2KnSsNnsrm7x5Fa7ei5gZ68bcvX48HOnEjZZaVGcIKLaZQJ6yvQY9o+JRruDjDIJ+xYFHI5cM9pJ/7AuFipVnb8W5U0eRuzMdrY2VcP3RhobSfOR/vx3V39pRbNWhnOKIWcc+jrIwaisv7wZquxIOHI6IsvFb/LxVVHEqHLRo8NP+LGTt2II9mRmoOVaAgtxsZKSL2JtiRqUpCSdTk3Fc0OPT6GQWKhd83DKyrpcDn/GCUDCpzMIsCSoUp5pRV3EY5Y5clB0+iNv9l1FfeRjVJfm4cLocdft2osq8mVRqsUFp4Ar9EUobZ0zygjznQFLIQgloTlSjUBuPvvO1mLjRiqGuZripMK6BVox3n8fcRD8aCnLg0CWiPDkJMmUiWykT/ZFKkXv4gCt0h/MFAallWJ5BiyJdAurz9mDePYjRtjPochyCi8CLD25i6PJpVJIlJckaFBrVSFerWaTC6g+nopCHTgk1ZRNvTrrFu15pZA5TEisVjXAY1GgpL8T0cAemulswM9oNZ3sT6rIyUGbR4qBehSrRwGpSTezzWJNXGh0obKOE6Bb+Ga1Tmr2ZWg07nmJiRWR6BSUdotc6W1MaeOVbPS3Is+hxjPaq7EaU0n4VNfgp8nt9jMX7LgGJJUg+iBLfkMqtj3abzThp0/tzNAkoMmtYqTYBFbu2Y7DrAmZdfZh0XsMxqnihNhElZg0cdKZQHYNtGqM/VEl9LLf+SXV4M9DcqzeZ7futFuxSx3l+1KrYEZsRbfUl7M5YBxv9/RImh9rhGr6G6cke9LRUo5zeonSbDW1VBSzdlOx5Z5OI96NtqQEYml4PjPq4+F/T4qKQGqPwDPY1+6em+vH82Tjr7zrHRoeusMWFUSw+ucVuj3cw990uPHrQ538yP/zvuVPFiBJ31AdYgEQi01leCX7Sr1ZX/NJ4oiwfszMDuDve6bkz2um72FLD+nqbsfB4GGMj7cw9cd33YnHc8/zZGPwv7uKv+31NBHqNAxou/bbE2vdzXsjyHwXYVObCY+ff8E3hySyHXMXM/T52y3mFue/1AJ57gG8SC7POf0hx1nJex40rSwydWhUYq6scy0olBAyl+IFU9BBwgat7Ns9jhObO3qdzw/sopMvn3e7+QO6E67rkPxwYX59DIV0nAAAAAElFTkSuQmCC","aspectRatio":0.9920718816067653,"src":"/static/d2f0a4b1cf07c66cd5df08a159534fb6/c6a2b/profile.png","srcSet":"/static/d2f0a4b1cf07c66cd5df08a159534fb6/19787/profile.png 75w,\\n/static/d2f0a4b1cf07c66cd5df08a159534fb6/59d48/profile.png 150w,\\n/static/d2f0a4b1cf07c66cd5df08a159534fb6/c6a2b/profile.png 300w,\\n/static/d2f0a4b1cf07c66cd5df08a159534fb6/eea35/profile.png 450w,\\n/static/d2f0a4b1cf07c66cd5df08a159534fb6/78d2a/profile.png 600w,\\n/static/d2f0a4b1cf07c66cd5df08a159534fb6/c730b/profile.png 1877w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},OGtf:function(e,t,r){var a=r("XKFU"),n=r("eeVq"),i=r("vhPU"),o=/"/g,s=function(e,t,r,a){var n=String(i(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),a(a.P+a.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},RXBc:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r.n(a),i=r("9kay"),o=r("MTnK"),s=r("9eSz"),l=r.n(s),c=function(){var e=o.data;return n.a.createElement(l.a,{fluid:e.placeholderImage.childImageSharp.fluid})},d=r("vrFN"),u=(r("/O7w"),function(e){var t=e.fontColor,r=e.title,a=e.content;return n.a.createElement("section",{class:"section"},n.a.createElement("header",null,n.a.createElement("h2",{style:{marginBottom:"0.75em",fontSize:"20px",fontWeight:"600",color:t,textTransform:"uppercase"}},r)),n.a.createElement("main",null,function(){switch(a.type){case"paragraph":return n.a.createElement("p",{style:{fontSize:"14px",fontWeight:"400",color:t,lineHeight:"1.4em"}},a.data);case"list":return n.a.createElement("ul",{style:{margin:"0",listStyle:"none"}},function(e){if(e)return e.map((function(e){return n.a.createElement("li",{style:{fontSize:"14px",fontWeight:"400",color:t,lineHeight:"1.2em"},key:e},e)}))}(a.data));default:return null}}()))});u.defaultProps={fontColor:"#414242",title:"",content:""};var f=u,p=(r("f3/d"),r("bWfx"),r("ioFf"),r("V+eJ"),r("91GP"),{color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0}),m=a.createContext&&a.createContext(p),g=function(){return(g=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},h=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};function y(e){return function(t){return a.createElement(b,g({attr:g({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return a.createElement(t.tag,g({key:r},t.attr),e(t.child))}))}(e.child))}}function b(e){var t=function(t){var r,n=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var i=e.attr,o=e.title,s=h(e,["attr","title"]);return a.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:r,style:g({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==m?a.createElement(m.Consumer,null,(function(e){return t(e)})):t(p)}var E=function(e){return y({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)};E.displayName="FaLinkedin";var v=function(e){var t=e.image,r=e.name,a=e.title;e.email;return n.a.createElement("article",{style:{padding:"64px 24px 24px",textAlign:"center",background:"#d4cfc2"}},n.a.createElement("div",{style:{padding:"0 24px"}},t),n.a.createElement("h1",{style:{margin:"20px 0 0 0",fontSize:"32px",fontWeight:"700",color:"#414242",textTransform:"uppercase"}},r),n.a.createElement("span",{style:{margin:"8px 0 0 0",fontSize:"16px",fontWeight:"400",color:"#414242"}},a),n.a.createElement("a",{style:{display:"block",margin:"24px auto 0",width:"48px",fontSize:"14px",color:"#414242"},href:"http://www.linkedin.com/in/uxplusdev",target:"_blank"},n.a.createElement(E,null)))};v.defaultProps={image:"",name:"",title:"",email:""};var S=v,x=(r("D8Ce"),function(e){var t=e.summary,r=e.skills,a=e.language;return n.a.createElement("article",{class:"introduction"},t,r,a)});x.defaultProps={summary:n.a.createElement(n.a.Fragment,null),skills:n.a.createElement(n.a.Fragment,null),language:n.a.createElement(n.a.Fragment,null)};var w=x,z=function(e){var t=e.fontColor,r=e.company,a=e.title,i=e.dates,o=e.location,s=e.projects;return n.a.createElement("article",{style:{marginBottom:"1.4em"}},n.a.createElement("header",{style:{marginBottom:"0.5em"}},n.a.createElement("h3",{style:{marginBottom:"0.25em",fontSize:"16px",fontWeight:"600",color:t,textTransform:"uppercase"}},r," ∙ ",a),n.a.createElement("span",{style:{display:"block",fontSize:"13px",fontWeight:"300",lineHeight:"1.4em",color:"#80786d"}},i),n.a.createElement("span",{style:{display:"block",fontSize:"13px",fontWeight:"300",lineHeight:"1.4em",color:"#80786d"}},o)),n.a.createElement("main",null,function(){if(s)return s.map((function(e){return n.a.createElement("section",{key:e.title},n.a.createElement("h4",{style:{marginBottom:"0.25em",fontSize:"15px",fontWeight:"400",color:t}},e.title,", ",e.description),n.a.createElement("ul",{style:{listStyle:"circle",marginBottom:"6px"}},function(r){if(r)return e.roles.map((function(r){return n.a.createElement("li",{style:{marginBottom:"0",fontSize:"14px",fontWeight:"300",lineHeight:"1.4em",color:t},key:e+"-"+r},r)}))}(e.roles)))}))}()))};z.defaultProps={fontColor:"#414242",company:"",title:"",dates:"",location:"",projects:[]};var O=z,j=(r("Fqmz"),function(e){var t=e.fontColor,r=e.school,a=e.degree,i=e.department,o=e.years,s=e.description;return n.a.createElement("article",{class:"education"},n.a.createElement("header",{style:{marginBottom:"0.2em"}},n.a.createElement("h3",{style:{marginBottom:"0.2em",fontSize:"16px",fontWeight:"600",lineHeight:"1.4em",color:t,textTransform:"uppercase"}},r),n.a.createElement("span",{style:{display:"block",fontSize:"15px",fontWeight:"400",lineHeight:"1.2em",color:t}},a,", ",i),n.a.createElement("span",{style:{display:"block",fontSize:"13px",fontWeight:"300",lineHeight:"1.4em",color:"#80786d"}},o)),n.a.createElement("main",null,n.a.createElement("p",{style:{fontSize:"14px",fontWeight:"300",lineHeight:"1.4em",color:t}},s)))});j.defaultProps={fontColor:"#414242",school:"",degree:"",department:"",years:"",description:""};var I=j,C=function(){var e=Object(i.b)(),t=e.t;e.i18n;return n.a.createElement("article",null,n.a.createElement(f,{title:t("history.experience.title"),content:{type:"list",data:[n.a.createElement(O,{company:t("history.experience.content.0.company"),title:t("history.experience.content.0.title"),dates:t("history.experience.content.0.dates"),location:t("history.experience.content.0.location"),projects:[{title:t("history.experience.content.0.projects.0.title"),description:t("history.experience.content.0.projects.0.description"),roles:t("history.experience.content.0.projects.0.roles")},{title:t("history.experience.content.0.projects.1.title"),description:t("history.experience.content.0.projects.1.description")}]}),n.a.createElement(O,{company:t("history.experience.content.1.company"),title:t("history.experience.content.1.title"),dates:t("history.experience.content.1.dates"),location:t("history.experience.content.1.location"),projects:[{title:t("history.experience.content.1.projects.0.title"),description:t("history.experience.content.1.projects.0.description"),roles:t("history.experience.content.1.projects.0.roles")},{title:t("history.experience.content.1.projects.1.title"),description:t("history.experience.content.1.projects.1.description"),roles:t("history.experience.content.1.projects.1.roles")}]}),n.a.createElement(O,{company:t("history.experience.content.2.company"),title:t("history.experience.content.2.title"),dates:t("history.experience.content.2.dates"),location:t("history.experience.content.2.location"),projects:[{title:t("history.experience.content.2.projects.0.title"),description:t("history.experience.content.2.projects.0.description"),roles:t("history.experience.content.2.projects.0.roles")}]})]}}),n.a.createElement(f,{title:t("history.education.title"),content:{type:"list",data:[n.a.createElement(I,{school:t("history.education.content.0.school"),degree:t("history.education.content.0.degree"),department:t("history.education.content.0.department"),years:t("history.education.content.0.years"),description:t("history.education.content.0.description")}),n.a.createElement(I,{school:t("history.education.content.1.school"),degree:t("history.education.content.1.degree"),department:t("history.education.content.1.department"),years:t("history.education.content.1.years"),description:t("history.education.content.1.description")}),n.a.createElement(I,{school:t("history.education.content.2.school"),degree:t("history.education.content.2.degree"),department:t("history.education.content.2.department"),years:t("history.education.content.2.years"),description:t("history.education.content.2.description")})]}}))};C.defaultProps={experience:"",education:""};var L=C;r("EDuE"),t.default=function(){var e=Object(i.b)(),t=e.t;e.i18n;return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{title:"Home"}),n.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",borderTop:"8px solid #59625a"}},n.a.createElement("aside",{id:"aside"},n.a.createElement(S,{image:n.a.createElement(c,null),name:t("profile.name"),title:t("profile.title"),email:t("profile.email")}),n.a.createElement(w,{summary:n.a.createElement(f,{fontColor:"#f0ecda",title:t("introduction.summary.title"),content:{type:"paragraph",data:t("introduction.summary.content")}}),skills:n.a.createElement(f,{fontColor:"#f0ecda",title:t("introduction.skills.title"),content:{type:"list",data:t("introduction.skills.content")}}),language:n.a.createElement(f,{fontColor:"#f0ecda",title:t("introduction.languages.title"),content:{type:"list",data:t("introduction.languages.content")}})})),n.a.createElement("main",{id:"main"},n.a.createElement(L,null))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-773149b27810830b9139.js.map