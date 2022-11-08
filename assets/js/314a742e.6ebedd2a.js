"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[278],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),c=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(r),p=n,f=u["".concat(d,".").concat(p)]||u[p]||s[p]||i;return r?a.createElement(f,o(o({ref:t},m),{},{components:r})):a.createElement(f,o({ref:t},m))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={},o="Trusted Platform Module 2.0 (TPM)",l={unversionedId:"tpm",id:"tpm",title:"Trusted Platform Module 2.0 (TPM)",description:"Trusted Platform Module (TPM, also known as ISO/IEC 11889) is an international standard for a secure cryptoprocessor, a dedicated microcontroller designed to secure hardware through integrated cryptographic keys. The term can also refer to a chip conforming to the standard.",source:"@site/docs/tpm.md",sourceDirName:".",slug:"/tpm",permalink:"/elemental/tpm",draft:!1,tags:[],version:"current",frontMatter:{}},d={},c=[{value:"Add TPM module to virtual machine",id:"add-tpm-module-to-virtual-machine",level:2},{value:"Create Virtual Machine",id:"create-virtual-machine",level:3},{value:"Verify and edit hardware module list",id:"verify-and-edit-hardware-module-list",level:3},{value:"Add TPM module to VM",id:"add-tpm-module-to-vm",level:3},{value:"Finish VM configuration",id:"finish-vm-configuration",level:3},{value:"Add TPM emulation to bare metal machine",id:"add-tpm-emulation-to-bare-metal-machine",level:2}],m={toc:c};function s(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"trusted-platform-module-20-tpm"},"Trusted Platform Module 2.0 (TPM)"),(0,n.kt)("p",null,"Trusted Platform Module (TPM, also known as ISO/IEC 11889) is an international standard for a secure cryptoprocessor, a dedicated microcontroller designed to secure hardware through integrated cryptographic keys. The term can also refer to a chip conforming to the standard."),(0,n.kt)("h2",{id:"add-tpm-module-to-virtual-machine"},"Add TPM module to virtual machine"),(0,n.kt)("p",null,"Easy way to add TPM to virtual machine is to use Libvirt with Virt-manager"),(0,n.kt)("h3",{id:"create-virtual-machine"},"Create Virtual Machine"),(0,n.kt)("p",null,"After starting virt-manager create new virtual machine"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create new VM",src:r(6533).Z,width:"786",height:"831"})),(0,n.kt)("h3",{id:"verify-and-edit-hardware-module-list"},"Verify and edit hardware module list"),(0,n.kt)("p",null,"On the hardware configuration screen, verify list of modules and click ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Add Hardware"))," button"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Devices list",src:r(983).Z,width:"1019",height:"845"})),(0,n.kt)("h3",{id:"add-tpm-module-to-vm"},"Add TPM module to VM"),(0,n.kt)("p",null,"From the list of emulated devices choose TPM module and add it to VM"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add TPM module",src:r(7656).Z,width:"1017",height:"842"})),(0,n.kt)("h3",{id:"finish-vm-configuration"},"Finish VM configuration"),(0,n.kt)("p",null,"On the last screen verify once again if TPM module was added properly"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Verify TPM",src:r(2752).Z,width:"1018",height:"845"})),(0,n.kt)("h2",{id:"add-tpm-emulation-to-bare-metal-machine"},"Add TPM emulation to bare metal machine"),(0,n.kt)("p",null,"During applying ",(0,n.kt)("inlineCode",{parentName:"p"},"#!yaml MachineRegistration")," add following key to the yaml ",(0,n.kt)("inlineCode",{parentName:"p"},"config:elemental:registration:emulate-tpm: true")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="registration-tpm.yaml" showLineNumbers',title:'"registration-tpm.yaml"',showLineNumbers:!0},'--8<-- "examples/quickstart/registration-tpm.yaml"\n')))}s.isMDXComponent=!0},6533:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/tpm1-7a68f095e057c5834efe61309decb43a.png"},983:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/tpm2-480a00b132fddce83ba3e85ac5c5969a.png"},7656:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/tpm3-0a66311610b78cb9ad5c1e0a9506f18f.png"},2752:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/tpm4-142e726b37fba5f4f9abb93cc957fb4a.png"}}]);