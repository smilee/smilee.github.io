(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,n){"use strict";n("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("EK0E"),n("0mN4");var a=n("TqRt");t.__esModule=!0,t.default=void 0;var r,i=a(n("PJYZ")),o=a(n("VbXa")),s=a(n("8OQS")),l=a(n("pVnL")),c=a(n("q1tI")),d=a(n("17x9")),u=function(e){var t=(0,l.default)({},e),n=t.resolutions,a=t.sizes,r=t.critical;return n&&(t.fixed=n,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},p=function(e){var t=e.fluid,n=e.fixed;return(t&&t[0]||n&&n[0]).src},f=Object.create({}),m=function(e){var t=u(e),n=p(t);return f[n]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,y=g&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map((function(e){var t=e.src,n=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:i}),c.default.createElement("source",{media:r,srcSet:n,sizes:i}))}))}function v(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function S(e){return e.map((function(e){var t=e.src,n=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:n,srcSet:a})}))}function x(e){return e.map((function(e){var t=e.src,n=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:n,srcSet:a})}))}function w(e,t){var n=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var z=function(e,t){var n=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return n&&(n.observe(e),b.set(e,t)),function(){n.unobserve(e),b.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+c+o+s+n+a+t+i+r+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,n=e.imageVariants,a=e.generateSources,r=e.spreadProps,i=c.default.createElement(C,(0,l.default)({src:t},r));return n.length>1?c.default.createElement("picture",null,a(n),i):i},C=c.default.forwardRef((function(e,t){var n=e.sizes,a=e.srcSet,r=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,p=e.draggable,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:n,srcSet:a,src:r},f,{onLoad:o,onError:d,ref:t,loading:u,draggable:p,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));C.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var I=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=g&&m(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!h&&y&&!n.isCritical&&!n.seenBefore;var a=n.isCritical||g&&(h||!n.useIOSupport);return n.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,i.default)(n)),n.handleRef=n.handleRef.bind((0,i.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),n=p(t),f[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,p=void 0===d?{}:d,f=e.placeholderClassName,m=e.fluid,h=e.fixed,g=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,v=e.itemProp,w=e.loading,z=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:I?1:0,transition:L?"opacity "+y+"ms":"none"},s),k="boolean"==typeof g?"lightgray":g,N={transitionDelay:y+"ms"},P=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&N,{},s,{},p),R={title:t,alt:this.state.isVisible?"":n,style:P,className:f,itemProp:v};if(m){var A=m,B=A[0];return c.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),k&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&N)}),B.base64&&c.default.createElement(O,{src:B.base64,spreadProps:R,imageVariants:A,generateSources:x}),B.tracedSVG&&c.default.createElement(O,{src:B.tracedSVG,spreadProps:R,imageVariants:A,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,E(A),c.default.createElement(C,{alt:n,title:t,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:z})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:n,title:t,loading:w},B,{imageVariants:A}))}}))}if(h){var W=h,T=W[0],F=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},i);return"inherit"===i.display&&delete F.display,c.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},k&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:k,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},L&&N)}),T.base64&&c.default.createElement(O,{src:T.base64,spreadProps:R,imageVariants:W,generateSources:x}),T.tracedSVG&&c.default.createElement(O,{src:T.tracedSVG,spreadProps:R,imageVariants:W,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,E(W),c.default.createElement(C,{alt:n,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:z})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:n,title:t,loading:w},T,{imageVariants:W}))}}))}return null},t}(c.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),V=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});I.propTypes={resolutions:L,sizes:V,fixed:d.default.oneOfType([L,d.default.arrayOf(L)]),fluid:d.default.oneOfType([V,d.default.arrayOf(V)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var k=I;t.default=k},MTnK:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFE0lEQVQ4y02Ua1CUVRjHN6xvfalPNZMja1wspxqbSbMvfatpci/cAnZx78vu++4CgpqTQGoaikwhIesgIBdFIRAkFdERFLkIgYQsCOiKsIpYgyBKaXs5/56zLI3vzDPnnD3n+Z3/+3+edyXhCkHCHz6GK6wrJMFnrVJYt1ohZoYphEapXOh962uh9+1NQiOts95TWD5ePhcut64Ik1v/ZwR/FPhGSPDAh7RxfpXMytbGpmBNbBo2xImw6SxITLIiMjoFUrmICIW1OUwufBTMCXkJZpXQrcswA214pVGpSEjQo8i02ftdfJx3rzre32jX+5vSjN7dRoN3rczEwmLSONRHUGNQXQjNA5MVQVjymphUrKLbY+K0njpBwxpystm12jJ0Nlayq1UOdsJuwuktZnZAp2KfKE0eqUIEzyGQNQhdsowUbqQFwugA+eMr1KlwNieLuYa72Pz9QcxNDWCOxuaiXJwQ9axM0LEDeg3CZMk+nhMeCOEzyUvGdnNvQuWid6PSgGq7kTnbz7Kn00N4ONqF6ZEOzE0O4GZrAypEPRyikZ2x61jsN3qslAneNTEppNLas1yZLyOi7AE/CMg2KnSsNnsrm7x5Fa7ei5gZ68bcvX48HOnEjZZaVGcIKLaZQJ6yvQY9o+JRruDjDIJ+xYFHI5cM9pJ/7AuFipVnb8W5U0eRuzMdrY2VcP3RhobSfOR/vx3V39pRbNWhnOKIWcc+jrIwaisv7wZquxIOHI6IsvFb/LxVVHEqHLRo8NP+LGTt2II9mRmoOVaAgtxsZKSL2JtiRqUpCSdTk3Fc0OPT6GQWKhd83DKyrpcDn/GCUDCpzMIsCSoUp5pRV3EY5Y5clB0+iNv9l1FfeRjVJfm4cLocdft2osq8mVRqsUFp4Ar9EUobZ0zygjznQFLIQgloTlSjUBuPvvO1mLjRiqGuZripMK6BVox3n8fcRD8aCnLg0CWiPDkJMmUiWykT/ZFKkXv4gCt0h/MFAallWJ5BiyJdAurz9mDePYjRtjPochyCi8CLD25i6PJpVJIlJckaFBrVSFerWaTC6g+nopCHTgk1ZRNvTrrFu15pZA5TEisVjXAY1GgpL8T0cAemulswM9oNZ3sT6rIyUGbR4qBehSrRwGpSTezzWJNXGh0obKOE6Bb+Ga1Tmr2ZWg07nmJiRWR6BSUdotc6W1MaeOVbPS3Is+hxjPaq7EaU0n4VNfgp8nt9jMX7LgGJJUg+iBLfkMqtj3abzThp0/tzNAkoMmtYqTYBFbu2Y7DrAmZdfZh0XsMxqnihNhElZg0cdKZQHYNtGqM/VEl9LLf+SXV4M9DcqzeZ7futFuxSx3l+1KrYEZsRbfUl7M5YBxv9/RImh9rhGr6G6cke9LRUo5zeonSbDW1VBSzdlOx5Z5OI96NtqQEYml4PjPq4+F/T4qKQGqPwDPY1+6em+vH82Tjr7zrHRoeusMWFUSw+ucVuj3cw990uPHrQ538yP/zvuVPFiBJ31AdYgEQi01leCX7Sr1ZX/NJ4oiwfszMDuDve6bkz2um72FLD+nqbsfB4GGMj7cw9cd33YnHc8/zZGPwv7uKv+31NBHqNAxou/bbE2vdzXsjyHwXYVObCY+ff8E3hySyHXMXM/T52y3mFue/1AJ57gG8SC7POf0hx1nJex40rSwydWhUYq6scy0olBAyl+IFU9BBwgat7Ns9jhObO3qdzw/sopMvn3e7+QO6E67rkPxwYX59DIV0nAAAAAElFTkSuQmCC","aspectRatio":0.9920718816067653,"src":"/static/d2f0a4b1cf07c66cd5df08a159534fb6/c6a2b/profile.png","srcSet":"/static/d2f0a4b1cf07c66cd5df08a159534fb6/19787/profile.png 75w,\\n/static/d2f0a4b1cf07c66cd5df08a159534fb6/59d48/profile.png 150w,\\n/static/d2f0a4b1cf07c66cd5df08a159534fb6/c6a2b/profile.png 300w,\\n/static/d2f0a4b1cf07c66cd5df08a159534fb6/eea35/profile.png 450w,\\n/static/d2f0a4b1cf07c66cd5df08a159534fb6/78d2a/profile.png 600w,\\n/static/d2f0a4b1cf07c66cd5df08a159534fb6/c730b/profile.png 1877w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},OGtf:function(e,t,n){var a=n("XKFU"),r=n("eeVq"),i=n("vhPU"),o=/"/g,s=function(e,t,n,a){var r=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("9kay"),o=n("MTnK"),s=n("9eSz"),l=n.n(s),c=function(){var e=o.data;return r.a.createElement(l.a,{fluid:e.placeholderImage.childImageSharp.fluid})},d=n("vrFN"),u=(n("/O7w"),function(e){var t=e.fontColor,n=e.title,a=e.content;return r.a.createElement("section",{className:"section"},r.a.createElement("header",null,r.a.createElement("h2",{style:{marginBottom:"0.75em",fontSize:"20px",fontWeight:"600",color:t,textTransform:"uppercase"}},n)),r.a.createElement("main",null,function(){switch(a.type){case"paragraph":return r.a.createElement("p",{style:{fontSize:"14px",fontWeight:"400",color:t,lineHeight:"1.4em"},key:a.data},a.data);case"list":return r.a.createElement("ul",{style:{margin:"0",listStyle:"none"},key:a.data},function(e){if(e)return e.map((function(e){return r.a.createElement("li",{style:{fontSize:"14px",fontWeight:"400",color:t,lineHeight:"1.2em"},key:e},e)}))}(a.data));default:return null}}()))});u.defaultProps={fontColor:"#414242",title:"",content:""};var p=u,f=(n("f3/d"),n("bWfx"),n("ioFf"),n("V+eJ"),n("91GP"),{color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0}),m=a.createContext&&a.createContext(f),h=function(){return(h=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},g=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n};function y(e){return function(t){return a.createElement(b,h({attr:h({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return a.createElement(t.tag,h({key:n},t.attr),e(t.child))}))}(e.child))}}function b(e){var t=function(t){var n,r=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var i=e.attr,o=e.title,s=g(e,["attr","title"]);return a.createElement("svg",h({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:n,style:h({color:e.color||t.color},t.style,e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==m?a.createElement(m.Consumer,null,(function(e){return t(e)})):t(f)}var E=function(e){return y({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)};E.displayName="FaLinkedin";n("eFPe");var v=function(e){var t=e.image,n=e.name,a=e.title;e.email;return r.a.createElement("article",{id:"profile"},r.a.createElement("div",{style:{padding:"0 24px"}},t),r.a.createElement("h1",{style:{margin:"20px 0 0 0",fontSize:"32px",fontWeight:"700",color:"#414242",textTransform:"uppercase"}},n),r.a.createElement("span",{style:{margin:"8px 0 0 0",fontSize:"16px",fontWeight:"400",color:"#414242"}},a),r.a.createElement("a",{style:{display:"block",margin:"24px auto 0",width:"48px",fontSize:"14px",color:"#414242"},href:"http://www.linkedin.com/in/uxplusdev",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(E,null)))};v.defaultProps={image:"",name:"",title:"",email:""};var S=v,x=(n("D8Ce"),function(e){var t=e.summary,n=e.skills,a=e.language;return r.a.createElement("article",{className:"introduction"},t,n,a)});x.defaultProps={summary:r.a.createElement(r.a.Fragment,null),skills:r.a.createElement(r.a.Fragment,null),language:r.a.createElement(r.a.Fragment,null)};var w=x,z=function(e){var t=e.fontColor,n=e.company,a=e.title,i=e.dates,o=e.location,s=e.projects;return r.a.createElement("article",{style:{marginBottom:"1.4em"}},r.a.createElement("header",{style:{marginBottom:"0.5em"}},r.a.createElement("h3",{style:{marginBottom:"0.25em",fontSize:"16px",fontWeight:"600",color:t,textTransform:"uppercase"}},n," ∙ ",a),r.a.createElement("span",{style:{display:"block",fontSize:"13px",fontWeight:"300",lineHeight:"1.4em",color:"#80786d"}},i),r.a.createElement("span",{style:{display:"block",fontSize:"13px",fontWeight:"300",lineHeight:"1.4em",color:"#80786d"}},o)),r.a.createElement("main",null,function(){if(s)return s.map((function(e){return r.a.createElement("section",{key:e.title},r.a.createElement("h4",{style:{marginBottom:"0.25em",fontSize:"15px",fontWeight:"400",color:t}},e.title,", ",e.description),r.a.createElement("ul",{style:{listStyle:"circle",marginBottom:"6px"}},function(n){if(n)return e.roles.map((function(n){return r.a.createElement("li",{style:{marginBottom:"0",fontSize:"14px",fontWeight:"300",lineHeight:"1.4em",color:t},key:e+"-"+n},n)}))}(e.roles)))}))}()))};z.defaultProps={fontColor:"#414242",company:"",title:"",dates:"",location:"",projects:[]};var j=z,O=(n("Fqmz"),function(e){var t=e.fontColor,n=e.school,a=e.degree,i=e.department,o=e.years,s=e.description;return r.a.createElement("article",{class:"education"},r.a.createElement("header",{style:{marginBottom:"0.2em"}},r.a.createElement("h3",{style:{marginBottom:"0.2em",fontSize:"16px",fontWeight:"600",lineHeight:"1.4em",color:t,textTransform:"uppercase"}},n),r.a.createElement("span",{style:{display:"block",fontSize:"15px",fontWeight:"400",lineHeight:"1.2em",color:t}},a,", ",i),r.a.createElement("span",{style:{display:"block",fontSize:"13px",fontWeight:"300",lineHeight:"1.4em",color:"#80786d"}},o)),r.a.createElement("main",null,r.a.createElement("p",{style:{fontSize:"14px",fontWeight:"300",lineHeight:"1.4em",color:t}},s)))});O.defaultProps={fontColor:"#414242",school:"",degree:"",department:"",years:"",description:""};var C=O,I=(n("4SLU"),function(e){var t=e.fontColor,n=e.title,a=e.date,i=e.publication,o=e.publisher;return r.a.createElement("article",{class:"publication"},r.a.createElement("header",{style:{marginBottom:"0.2em"}},r.a.createElement("h3",{style:{marginBottom:"0.2em",fontSize:"16px",fontWeight:"600",lineHeight:"1.4em",color:t,textTransform:"uppercase"}},n),r.a.createElement("span",{style:{display:"block",fontSize:"13px",fontWeight:"300",lineHeight:"1.4em",color:"#80786d"}},a," ∙ ",i," / ",o)))});I.defaultProps={fontColor:"#414242",title:"",date:"",publication:"",publisher:""};var L=I,V=function(e){var t=e.fontColor,n=e.organization,a=e.dates,i=e.title,o=e.events;return r.a.createElement("article",{style:{marginBottom:"1.4em"}},r.a.createElement("header",{style:{marginBottom:"0.5em"}},r.a.createElement("h3",{style:{marginBottom:"0.25em",fontSize:"16px",fontWeight:"600",color:t,textTransform:"uppercase"}},n," ∙ ",i),r.a.createElement("span",{style:{display:"block",fontSize:"13px",fontWeight:"300",lineHeight:"1.4em",color:"#80786d"}},a)),r.a.createElement("main",null,function(){if(o)return o.map((function(e){return r.a.createElement("section",{key:e.title},r.a.createElement("h4",{style:{marginBottom:"0.25em",fontSize:"15px",fontWeight:"400",color:t}},e.title,", ",e.date),r.a.createElement("ul",{style:{listStyle:"circle",marginBottom:"6px"}},function(n){if(n)return e.roles.map((function(n){return r.a.createElement("li",{style:{marginBottom:"0",fontSize:"14px",fontWeight:"300",lineHeight:"1.4em",color:t},key:e+"-"+n},n)}))}(e.roles)))}))}()))};V.defaultProps={fontColor:"#414242",organization:"",dates:"",title:"",events:[]};var k=V,N=function(e){var t=e.fontColor,n=e.date,a=e.host,i=e.title,o=e.subject;return r.a.createElement("article",{class:"education"},r.a.createElement("header",{style:{marginBottom:"0.2em"}},r.a.createElement("h3",{style:{marginBottom:"0.2em",fontSize:"16px",fontWeight:"600",lineHeight:"1.4em",color:t,textTransform:"uppercase"}},o),r.a.createElement("span",{style:{display:"block",fontSize:"13px",fontWeight:"300",lineHeight:"1.4em",color:"#80786d"}},n," ∙ ",i," / ",a)))};N.defaultProps={fontColor:"#414242",date:"",host:"",title:"",subject:""};var P=N,R=(n("V7fi"),function(){var e=Object(i.b)().t;return r.a.createElement("article",{id:"history"},r.a.createElement(p,{title:e("history.publication.title"),content:{type:"list",data:[r.a.createElement(L,{title:e("history.publication.content.0.title"),date:e("history.publication.content.0.date"),publication:e("history.publication.content.0.publication"),publisher:e("history.publication.content.0.publisher")}),r.a.createElement(L,{title:e("history.publication.content.1.title"),date:e("history.publication.content.1.date"),publication:e("history.publication.content.1.publication"),publisher:e("history.publication.content.1.publisher")})]}}),r.a.createElement(p,{title:e("history.organization.title"),content:{type:"list",data:[r.a.createElement(k,{organization:e("history.organization.content.0.organization"),dates:e("history.organization.content.0.dates"),title:e("history.organization.content.0.title"),events:e("history.organization.content.0.events")})]}}),r.a.createElement(p,{title:e("history.presentation.title"),content:{type:"list",data:[r.a.createElement(P,{date:e("history.presentation.content.0.date"),host:e("history.presentation.content.0.host"),title:e("history.presentation.content.0.title"),subject:e("history.presentation.content.0.subject")}),r.a.createElement(P,{date:e("history.presentation.content.1.date"),host:e("history.presentation.content.1.host"),title:e("history.presentation.content.1.title"),subject:e("history.presentation.content.1.subject")}),r.a.createElement(P,{date:e("history.presentation.content.2.date"),host:e("history.presentation.content.2.host"),title:e("history.presentation.content.2.title"),subject:e("history.presentation.content.2.subject")}),r.a.createElement(P,{date:e("history.presentation.content.3.date"),host:e("history.presentation.content.3.host"),title:e("history.presentation.content.3.title"),subject:e("history.presentation.content.3.subject")}),r.a.createElement(P,{date:e("history.presentation.content.4.date"),host:e("history.presentation.content.4.host"),title:e("history.presentation.content.4.title"),subject:e("history.presentation.content.4.subject")}),r.a.createElement(P,{date:e("history.presentation.content.5.date"),host:e("history.presentation.content.5.host"),title:e("history.presentation.content.5.title"),subject:e("history.presentation.content.5.subject")})]}}))});R.defaultProps={};var A=R,B=function(e){var t=e.isDefaultPage,n=Object(i.b)().t;return r.a.createElement("article",{id:"history"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{title:n("history.experience.title"),content:{type:"list",data:[r.a.createElement(j,{company:n("history.experience.content.0.company"),title:n("history.experience.content.0.title"),dates:n("history.experience.content.0.dates"),location:n("history.experience.content.0.location"),projects:[{title:n("history.experience.content.0.projects.0.title"),description:n("history.experience.content.0.projects.0.description"),roles:n("history.experience.content.0.projects.0.roles")},{title:n("history.experience.content.0.projects.1.title"),description:n("history.experience.content.0.projects.1.description")}]}),r.a.createElement(j,{company:n("history.experience.content.1.company"),title:n("history.experience.content.1.title"),dates:n("history.experience.content.1.dates"),location:n("history.experience.content.1.location"),projects:[{title:n("history.experience.content.1.projects.0.title"),description:n("history.experience.content.1.projects.0.description"),roles:n("history.experience.content.1.projects.0.roles")},{title:n("history.experience.content.1.projects.1.title"),description:n("history.experience.content.1.projects.1.description"),roles:n("history.experience.content.1.projects.1.roles")}]}),r.a.createElement(j,{company:n("history.experience.content.2.company"),title:n("history.experience.content.2.title"),dates:n("history.experience.content.2.dates"),location:n("history.experience.content.2.location"),projects:[{title:n("history.experience.content.2.projects.0.title"),description:n("history.experience.content.2.projects.0.description"),roles:n("history.experience.content.2.projects.0.roles")}]})]}}),r.a.createElement(p,{title:n("history.education.title"),content:{type:"list",data:[r.a.createElement(C,{school:n("history.education.content.0.school"),degree:n("history.education.content.0.degree"),department:n("history.education.content.0.department"),years:n("history.education.content.0.years"),description:n("history.education.content.0.description")}),r.a.createElement(C,{school:n("history.education.content.1.school"),degree:n("history.education.content.1.degree"),department:n("history.education.content.1.department"),years:n("history.education.content.1.years"),description:n("history.education.content.1.description")}),r.a.createElement(C,{school:n("history.education.content.2.school"),degree:n("history.education.content.2.degree"),department:n("history.education.content.2.department"),years:n("history.education.content.2.years"),description:n("history.education.content.2.description")})]}})):r.a.createElement(A,null))};B.defaultProps={isDefaultPage:!0};var W=B;n("EDuE"),t.default=function(){var e=Object(i.b)().t,t=Object(a.useState)(!0),n=t[0],o=t[1];return Object(a.useEffect)((function(){o(n)}),[n]),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{title:"Home"}),r.a.createElement("div",{class:"container"},r.a.createElement("aside",{id:"aside"},r.a.createElement(S,{image:r.a.createElement(c,null),name:e("profile.name"),title:e("profile.title"),email:e("profile.email")}),r.a.createElement(w,{summary:r.a.createElement(p,{fontColor:"#f0ecda",title:e("introduction.summary.title"),content:{type:"paragraph",data:e("introduction.summary.content")}}),skills:r.a.createElement(p,{fontColor:"#f0ecda",title:e("introduction.skills.title"),content:{type:"list",data:e("introduction.skills.content")}}),language:r.a.createElement(p,{fontColor:"#f0ecda",title:e("introduction.languages.title"),content:{type:"list",data:e("introduction.languages.content")}})})),r.a.createElement("main",{id:"main"},r.a.createElement(W,{isDefaultPage:n}),r.a.createElement("a",{id:"corner",onClick:function(){return o(!n)}}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-6415e7f4dd0d743e7022.js.map