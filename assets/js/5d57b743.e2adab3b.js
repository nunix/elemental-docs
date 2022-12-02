"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[13],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_label:"Cloud-config reference",title:""},i="Cloud-config Reference",l={unversionedId:"cloud-config-reference",id:"cloud-config-reference",title:"",description:"All custom configuration applied on top of a fresh deployment should come",source:"@site/docs/cloud-config-reference.md",sourceDirName:".",slug:"/cloud-config-reference",permalink:"/elemental/cloud-config-reference",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Cloud-config reference",title:""},sidebar:"elemental",previous:{title:"Elemental plans",permalink:"/elemental/elemental-plans"},next:{title:"Machineregistration reference",permalink:"/elemental/machineregistration-reference"}},c={},s=[],p={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cloud-config-reference"},"Cloud-config Reference"),(0,o.kt)("p",null,"All custom configuration applied on top of a fresh deployment should come\nfrom the ",(0,o.kt)("inlineCode",{parentName:"p"},"cloud-config")," section in a ",(0,o.kt)("inlineCode",{parentName:"p"},"MachineRegistration"),"."),(0,o.kt)("p",null,"This will get run by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/elemental-cli/blob/main/docs/elemental_run-stage.md"},(0,o.kt)("inlineCode",{parentName:"a"},"elemental-cli run-stage"))," during the ",(0,o.kt)("inlineCode",{parentName:"p"},"boot")," stage, and\nit will be stored in the node under the ",(0,o.kt)("inlineCode",{parentName:"p"},"/oem")," dir."),(0,o.kt)("p",null,"Elemental uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mudler/yip"},"yip")," to run these cloud-config files, so we support the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mudler/yip#compatibility-with-cloud-init-format"},"yip subset cloud-config implementation"),"."),(0,o.kt)("p",null,"Below is an example of the supported configuration on a ",(0,o.kt)("inlineCode",{parentName:"p"},"MachineRegistration")," resource."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: "bar"\n        passwd: "foo"\n        groups: "users"\n        homedir: "/home/foo"\n        shell: "/bin/bash"\n        ssh_authorized_keys:\n          - faaapploo\n      # Assigns these keys to the first user in users or root if there\n      # is none\n      ssh_authorized_keys:\n        - asdd\n      # Run these commands once the system has fully booted\n      runcmd:\n        - foo\n      # Write arbitrary files\n      write_files:\n        - encoding: b64\n          content: CiMgVGhpcyBmaWxlIGNvbnRyb2xzIHRoZSBzdGF0ZSBvZiBTRUxpbnV4\n          path: /foo/bar\n          permissions: "0644"\n          owner: "bar"\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n  machineName: my-machine\n  machineInventoryLabels:\n    location: "europe"\n'))))}u.isMDXComponent=!0}}]);