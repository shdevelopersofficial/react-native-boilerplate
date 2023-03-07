"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[937],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={description:"React native boilerplate introduction and features.",slug:"/"},i="Introduction",l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"React native boilerplate introduction and features.",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/react-native-boilerplate/docs/",draft:!1,editUrl:"https://github.com/shdevelopersofficial/react-native-boilerplate/edit/main/documentation/docs/introduction.mdx",tags:[],version:"current",lastUpdatedBy:"AHMED SALIH AC",lastUpdatedAt:1678175797,formattedLastUpdatedAt:"Mar 7, 2023",frontMatter:{description:"React native boilerplate introduction and features.",slug:"/"},sidebar:"docs",next:{title:"Getting Started",permalink:"/react-native-boilerplate/docs/category/getting-started"}},s={},u=[{value:"OS Support",id:"support",level:2},{value:"Features",id:"features",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Buy us a coffee for our hard work",id:"buy-us-a-coffee",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"\u26a1\ufe0f React native boilerplate is a boilerplate for React Native apps with batteries included. It is based on ",(0,n.kt)("a",{parentName:"p",href:"https://reactnative.dev/"},"React Native"),"."),(0,n.kt)("p",null,"\ud83d\udca5 Mainly we are focusing the boilerplate to easy to use , secure and scalable."),(0,n.kt)("p",null,"\ud83c\udf29\ufe0f We provide well documentation and easy to understand."),(0,n.kt)("p",null,"\ud83c\udfd7\ufe0f We are inviting you to contribute to this project and make it better for feature releases."),(0,n.kt)("h2",{id:"support"},"OS Support"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The minimum OS versions the app will run on are\n",(0,n.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/releases/platforms#5.0"},"Android 5.0 (SDK 21)"),"\nand\n",(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/ios-ipados-release-notes/ios-12_4-release-notes"},"iOS 12.4"),"."),(0,n.kt)("li",{parentName:"ul"},"The maximum OS versions the app will run on are\n",(0,n.kt)("a",{parentName:"li",href:"https://developer.android.com/about/versions/13"},"Android 13 (SDK 33)")," and\n",(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/ios/"},"iOS 16"),".")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("p",null,"This boilerplate comes with the following features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u269b\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Build app android, iOS and Web"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Android is customized configured."),(0,n.kt)("li",{parentName:"ul"},"Gain full control of your site's browsing experience by providing your own React components"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pluggable"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Bootstrap your site with a basic template, then use advanced features and plugins"),(0,n.kt)("li",{parentName:"ul"},"Open source your plugins to share with the community"))),(0,n.kt)("li",{parentName:"ul"},"\u2702\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Developer experience"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Start writing your docs right now"),(0,n.kt)("li",{parentName:"ul"},"Universal configuration entry point to make it more maintainable by contributors"),(0,n.kt)("li",{parentName:"ul"},"Hot reloading with lightning-fast incremental build on changes"),(0,n.kt)("li",{parentName:"ul"},"Route-based code and data splitting"),(0,n.kt)("li",{parentName:"ul"},"Publish to GitHub Pages, Netlify, Vercel, and other deployment services with ease")))),(0,n.kt)("p",null,"Our shared goal\u2014to help your users quickly find what they need and understand your products better. We share our best practices to help you build your docs site right and well."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83c\udfaf ",(0,n.kt)("strong",{parentName:"li"},"SEO friendly"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HTML files are statically generated for every possible path."),(0,n.kt)("li",{parentName:"ul"},"Page-specific SEO to help your users land on your official docs directly relating their problems at hand."))),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcdd ",(0,n.kt)("strong",{parentName:"li"},"Powered by MDX"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Write interactive components via JSX and React embedded in Markdown."),(0,n.kt)("li",{parentName:"ul"},"Share your code in live editors to get your users to love your products on the spot."))),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd0d ",(0,n.kt)("strong",{parentName:"li"},"Search"),": Your full site is searchable."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcbe ",(0,n.kt)("strong",{parentName:"li"},"Document Versioning"),": Helps you keep documentation in sync with project releases."),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf0d ",(0,n.kt)("strong",{parentName:"li"},"Internationalization (i18n)"),": Translate your site in multiple locales.")),(0,n.kt)("p",null,"Docusaurus 2 is born to be compassionately accessible to all your users, and lightning-fast."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u26a1\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Lightning-fast"),". Docusaurus 2 follows the ",(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/web/fundamentals/performance/prpl-pattern/"},"PRPL Pattern")," that makes sure your content loads blazing fast."),(0,n.kt)("li",{parentName:"ul"},"\ud83e\udd96 ",(0,n.kt)("strong",{parentName:"li"},"Accessible"),". Attention to accessibility, making your site equally accessible to all users.")),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("a",{href:"https://github.com/shdevelopersofficial/react-native-boilerplate/graphs/contributors"},(0,n.kt)("img",{src:"https://contrib.rocks/image?repo=shdevelopersofficial/react-native-boilerplate"})),(0,n.kt)("h2",{id:"buy-us-a-coffee"},"Buy us a coffee for our hard work"),(0,n.kt)("a",{href:"https://www.buymeacoffee.com/adsalihac"},(0,n.kt)("img",{src:"https://img.buymeacoffee.com/button-api/?text=Buy us a coffee&emoji=&slug=adsalihac&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"})))}d.isMDXComponent=!0}}]);