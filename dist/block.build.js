!function(n){var l={};function o(e){if(l[e])return l[e].exports;var t=l[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=l,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)o.d(n,l,function(e){return t[e]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,n){"use strict";n.r(t);var l=wp.element.createElement,o=function(){return l("svg",{width:20,height:20,viewBox:"0 0 241.95 283.46"},l("path",{d:"M41.51,41.51,61.56,61.56a113.38,113.38,0,0,1,160.35,0l20-20.05A141.73,141.73,0,0,0,41.51,41.51 M41.51,41.51,61.56,61.56a113.38,113.38,0,0,0,0,160.35L41.51,242A141.73,141.73,0,0,1,41.51,41.51Z M242,242l-20-20a113.38,113.38,0,0,1-160.35,0L41.51,242A141.73,141.73,0,0,0,242,242Z",fill:"#303030"}))},r=wp.editor,a=r.InspectorControls,u=r.InnerBlocks,c=r.ColorPalette,i=wp.components.PanelBody,s=((0,wp.blocks.registerBlockType)("chrisf/column-block",{title:"Single Column Block",parent:"chrisf/columns-block",icon:o,category:"common",attributes:{bgColor:{type:"string"}},edit:function(e){var t=e.attributes,n=e.setAttributes,l={};return t.bgColor&&(l.backgroundColor=t.bgColor),[wp.element.createElement(a,null,wp.element.createElement(i,null,wp.element.createElement("strong",null,"Select a background color:"),wp.element.createElement(c,{value:t.bgColor,onChange:function(e){return n({bgColor:e})}}))),wp.element.createElement("div",{className:"column",style:l},wp.element.createElement(u,{templateLock:!1}))]},save:function(e){var t=e.attributes,n={};return t.bgColor&&(n.backgroundColor=t.bgColor),wp.element.createElement("div",{className:"column",style:n},wp.element.createElement(u.Content,null))}}),n(1),n(3),wp.blockEditor),m=(s.PlainText,s.InspectorControls),p=s.InnerBlocks,b=wp.components,f=b.PanelBody,g=b.TextControl,w=b.SelectControl,d=wp.blocks.registerBlockType,v=wp.element,y=(v.Fragment,v.createElement,wp.i18n.__,["chrisf/column-block"]);d("chrisf/columns-block",{title:"Columns Block",icon:o,category:"layout",attributes:{numCols:{type:"integer",default:2},sizing:{type:"string",default:"even"},horizontalGap:{type:"integer",default:0},verticalGap:{type:"integer",default:0},collapse:{type:"string",default:"center"}},supports:{align:["wide","full"],html:!1},edit:function(e){var t=e.attributes,n=(e.className,e.setAttributes),l=t.numCols,o="columns-wrapper-editor columns-"+l+" sizing-"+t.sizing+" horizontal-gap-"+t.horizontalGap+" collapse-"+t.collapse;return[wp.element.createElement(m,null,wp.element.createElement(f,null,wp.element.createElement("div",null,wp.element.createElement(g,{type:"number",label:"Select number of columns:",value:t.numCols,onChange:function(e){n({numCols:parseInt(e,10)})},min:"2",max:"6"}))),wp.element.createElement(f,null,wp.element.createElement(w,{onChange:function(e){return n({sizing:e})},value:t.sizing,label:"How would you like your columns to size?:",options:function(e){var t=[{value:"even",label:"Evenly"},{value:"content",label:"By content size"}];return 2==e&&t.push({value:"two-one",label:"2:1"},{value:"one-two",label:"1:2"}),t}(t.numCols)}),wp.element.createElement(w,{onChange:function(e){return n({collapse:e})},value:t.collapse,label:"How should your columns break when the screen is not big enough?:",options:(t.sizing,[{value:"center",label:"Centre"},{value:"grow",label:"Grow to fill row"},{value:"left",label:"To left"},{value:"right",label:"To right"}])})),wp.element.createElement(f,null,wp.element.createElement(g,{type:"number",label:"Gap size between columns:",value:t.horizontalGap,onChange:function(e){n({horizontalGap:parseInt(e,10)})},min:"0",max:"3"}))),wp.element.createElement("section",{className:o},wp.element.createElement(p,{template:function(e){for(var t=[],n=0;n<e;n++)t.push(["chrisf/column-block"]);return t}(l),templateLock:"all",allowedBlocks:y}))]},save:function(e){var t=e.attributes,n="columns-wrapper columns-"+t.numCols+" sizing-"+t.sizing+" horizontal-gap-"+t.horizontalGap+" collapse-"+t.collapse;return wp.element.createElement("section",{className:n},wp.element.createElement(p.Content,null))}})},function(e,t){},,function(e,t){}]);
//# sourceMappingURL=block.build.js.map