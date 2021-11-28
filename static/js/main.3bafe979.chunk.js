(this["webpackJsonpkeplr-chain-tool"]=this["webpackJsonpkeplr-chain-tool"]||[]).push([[0],{122:function(e,c,r){},123:function(e,c,r){},124:function(e,c,r){},128:function(e,c,r){},196:function(e,c,r){"use strict";r.r(c);var n=r(0),a=r.n(n),t=r(25),i=r.n(t),s=(r(122),r(200)),o=r(96),l=r(204),b=r(205),u=(r(123),r(38)),m=r.n(u),h=r(45),d=r(115),j=r(57),p=(r(124),function(){var e=Object(h.a)(m.a.mark((function e(c){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.getOfflineSigner&&window.keplr){e.next=4;break}throw new Error("Keplr is not installed");case 4:if(!window.keplr.experimentalSuggestChain){e.next=15;break}return e.prev=5,e.next=8,window.keplr.experimentalSuggestChain(c);case 8:e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(5),new Error("Failed to suggest network to Keplr: ".concat(e.t0.toString()));case 13:e.next=16;break;case 15:throw new Error("Keplr does not support adding custom network. Please update to the latest version.");case 16:return e.abrupt("return",!0);case 17:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(c){return e.apply(this,arguments)}}()),x=r(5);var C=function(e){var c,r,n=function(){var c=Object(h.a)(m.a.mark((function c(){return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,p(e.network);case 3:c.next=8;break;case 5:c.prev=5,c.t0=c.catch(0),d.b.error(c.t0.toString());case 8:case"end":return c.stop()}}),c,null,[[0,5]])})));return function(){return c.apply(this,arguments)}}();return Object(x.jsxs)(j.a,{className:"Button",onClick:n,children:[null===(c=e.network)||void 0===c?void 0:c.chainName," (",null===(r=e.network)||void 0===r?void 0:r.chainId,")"]})},O={chainId:"cronostestnet_338-2",chainName:"Cronos Testnet 2",rpc:"https://cronos-testnet.crypto.org:26657",rest:"https://cronos-testnet.crypto.org:1317",stakeCurrency:{coinDenom:"TCRO",coinMinimalDenom:"basetcro",coinDecimals:18},bip44:{coinType:60},bech32Config:{bech32PrefixAccAddr:"tcrc",bech32PrefixAccPub:"tcrcpub",bech32PrefixValAddr:"tcrcvaloper",bech32PrefixValPub:"tcrcvaloperpub",bech32PrefixConsAddr:"tcrcvalcons",bech32PrefixConsPub:"tcrcvalconspub"},currencies:[{coinDenom:"TCRO",coinMinimalDenom:"basetcro",coinDecimals:18}],feeCurrencies:[{coinDenom:"TCRO",coinMinimalDenom:"basetcro",coinDecimals:18}],coinType:60,gasPriceStep:{low:5e12,average:5e12,high:5e12},features:["stargate","ibc-transfer"]},f={chainId:"cronosmainnet_25-1",chainName:"Cronos",rpc:"https://rpc-cronos.crypto.org",rest:"https://rest-cronos.crypto.org",stakeCurrency:{coinDenom:"CRO",coinMinimalDenom:"basecro",coinDecimals:18,coinGeckoId:"crypto-com-chain"},bip44:{coinType:60},bech32Config:{bech32PrefixAccAddr:"crc",bech32PrefixAccPub:"crcpub",bech32PrefixValAddr:"crcvaloper",bech32PrefixValPub:"crcvaloperpub",bech32PrefixConsAddr:"crcvalcons",bech32PrefixConsPub:"crcvalconspub"},currencies:[{coinDenom:"CRO",coinMinimalDenom:"basecro",coinDecimals:18,coinGeckoId:"crypto-com-chain"}],feeCurrencies:[{coinDenom:"CRO",coinMinimalDenom:"basecro",coinDecimals:18,coinGeckoId:"crypto-com-chain"}],coinType:60,gasPriceStep:{low:5e12,average:5e12,high:5e12},features:["stargate","ibc-transfer"]},g={chainId:"cronostestnet_338-3",chainName:"Cronos Testnet 3",rpc:"https://cronos-testnet-3.crypto.org:26657",rest:"https://cronos-testnet-3.crypto.org:1317",stakeCurrency:{coinDenom:"TCRO",coinMinimalDenom:"basetcro",coinDecimals:18},bip44:{coinType:60},bech32Config:{bech32PrefixAccAddr:"tcrc",bech32PrefixAccPub:"tcrcpub",bech32PrefixValAddr:"tcrcvaloper",bech32PrefixValPub:"tcrcvaloperpub",bech32PrefixConsAddr:"tcrcvalcons",bech32PrefixConsPub:"tcrcvalconspub"},currencies:[{coinDenom:"TCRO",coinMinimalDenom:"basetcro",coinDecimals:18}],feeCurrencies:[{coinDenom:"TCRO",coinMinimalDenom:"basetcro",coinDecimals:18}],coinType:60,gasPriceStep:{low:5e12,average:5e12,high:5e12},features:["stargate","ibc-transfer"]},P={chainId:"testnet-croeseid-4",chainName:"Crypto.org Chain Croeseid-4",rpc:"https://testnet-croeseid-4.crypto.org:26657",rest:"https://testnet-croeseid-4.crypto.org:1317",stakeCurrency:{coinDenom:"TCRO",coinMinimalDenom:"basetcro",coinDecimals:8},bip44:{coinType:1},bech32Config:{bech32PrefixAccAddr:"tcro",bech32PrefixAccPub:"tcropub",bech32PrefixValAddr:"tcrocncl",bech32PrefixValPub:"tcrocnclpub",bech32PrefixConsAddr:"tcrocnclcons",bech32PrefixConsPub:"tcrocnclconspub"},currencies:[{coinDenom:"TCRO",coinMinimalDenom:"basetcro",coinDecimals:8}],feeCurrencies:[{coinDenom:"TCRO",coinMinimalDenom:"basetcro",coinDecimals:8}],coinType:1,gasPriceStep:{low:.025,average:.025,high:.025},features:["stargate","ibc-transfer"]},D=r(62),k=r(199),I=r(201),v=r(202),y=r(203);r(128);function A(e,c){var r=[];return c.featuresStargate&&r.push("stargate"),c.featuresIBC&&r.push("ibc-transfer"),c.featuresCosmWasm&&r.push("cosmwasm"),c.featuresSecretWasm&&r.push("secretwasm"),{chainId:e.chainId,chainName:e.chainName,rpc:e.rpc,rest:e.rest,stakeCurrency:{coinDenom:e.stakeCurrencyCoinDenom,coinMinimalDenom:e.stakeCurrencyCoinMinimalDenom,coinDecimals:e.stakeCurrencyCoinDecimals},bip44:{coinType:e.coinType},bech32Config:{bech32PrefixAccAddr:e.bech32AccAddr,bech32PrefixAccPub:e.bech32AccPub,bech32PrefixValAddr:e.bech32ValPub,bech32PrefixValPub:e.bech32ValPub,bech32PrefixConsAddr:e.bech32ConsPub,bech32PrefixConsPub:e.bech32ConsPub},currencies:[{coinDenom:e.currenciesCoinDenom,coinMinimalDenom:e.currenciesCoinMinimalDenom,coinDecimals:e.currenciesCoinDecimals}],feeCurrencies:[{coinDenom:e.feeCurrenciesCoinDenom,coinMinimalDenom:e.feeCurrenciesCoinMinimalDenom,coinDecimals:e.feeCurrenciesCoinDecimals}],coinType:e.coinType,gasPriceStep:{low:e.gasPriceStepLow,average:e.gasPriceStepAverage,high:e.gasPriceStepHigh},features:r}}var w=function(){var e=a.a.useState(!0),c=Object(D.a)(e,2),r=c[0],n=c[1],t=a.a.useState(!0),i=Object(D.a)(t,2),s=i[0],o=i[1],l=a.a.useState(!1),b=Object(D.a)(l,2),u=b[0],C=b[1],O=a.a.useState(!1),f=Object(D.a)(O,2),g=f[0],P=f[1],w=function(){var e=Object(h.a)(m.a.mark((function e(c){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(c),n=A(c,{featuresStargate:r,featuresIBC:s,featuresCosmWasm:u,featuresSecretWasm:g}),console.log(n),e.prev=3,e.next=6,p(n);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),d.b.error(e.t0.toString());case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(c){return e.apply(this,arguments)}}();return Object(x.jsxs)(k.a,{name:"basic",labelCol:{span:6},wrapperCol:{span:18},initialValues:{remember:!0},onFinish:w,children:[Object(x.jsx)(k.a.Item,{label:"Chain ID",name:"chainId",rules:[{required:!0}],children:Object(x.jsx)(I.a,{})}),Object(x.jsx)(k.a.Item,{label:"Chain Name",name:"chainName",rules:[{required:!0,max:30}],children:Object(x.jsx)(I.a,{})}),Object(x.jsx)(k.a.Item,{label:"Tendermint RPC",name:"rpc",rules:[{required:!0}],children:Object(x.jsx)(I.a,{})}),Object(x.jsx)(k.a.Item,{label:"Cosmos REST",name:"rest",rules:[{required:!0}],children:Object(x.jsx)(I.a,{})}),Object(x.jsxs)(k.a.Item,{label:"Stake Currency",children:[Object(x.jsx)(k.a.Item,{label:"Denom",name:"stakeCurrencyCoinDenom",rules:[{required:!0}],children:Object(x.jsx)(I.a,{})}),Object(x.jsx)(k.a.Item,{label:"Minimal Denom",name:"stakeCurrencyCoinMinimalDenom",rules:[{required:!0}],children:Object(x.jsx)(I.a,{})}),Object(x.jsx)(k.a.Item,{label:"Decimals",name:"stakeCurrencyCoinDecimals",rules:[{required:!0}],children:Object(x.jsx)(v.a,{})})]}),Object(x.jsxs)(k.a.Item,{label:"Currency",children:[Object(x.jsx)(k.a.Item,{label:"Denom",name:"currenciesCoinDenom",rules:[{required:!0}],children:Object(x.jsx)(I.a,{})}),Object(x.jsx)(k.a.Item,{label:"Minimal Denom",name:"currenciesCoinMinimalDenom",rules:[{required:!0}],children:Object(x.jsx)(I.a,{})}),Object(x.jsx)(k.a.Item,{label:"Decimals",name:"currenciesCoinDecimals",rules:[{required:!0}],children:Object(x.jsx)(v.a,{})})]}),Object(x.jsxs)(k.a.Item,{label:"Fee Currency",children:[Object(x.jsx)(k.a.Item,{label:"Denom",name:"feeCurrenciesCoinDenom",rules:[{required:!0}],children:Object(x.jsx)(I.a,{})}),Object(x.jsx)(k.a.Item,{label:"Minimal Denom",name:"feeCurrenciesCoinMinimalDenom",rules:[{required:!0}],children:Object(x.jsx)(I.a,{})}),Object(x.jsx)(k.a.Item,{label:"Decimals",name:"feeCurrenciesCoinDecimals",rules:[{required:!0}],children:Object(x.jsx)(v.a,{})})]}),Object(x.jsxs)(k.a.Item,{label:"Bech32 Prefix",children:[Object(x.jsx)(k.a.Item,{label:"Account Address",name:"bech32AccAddr",rules:[{required:!0}],children:Object(x.jsx)(I.a,{})}),Object(x.jsx)(k.a.Item,{label:"Account PubKey",name:"bech32AccPub",rules:[{required:!0}],children:Object(x.jsx)(I.a,{})}),Object(x.jsx)(k.a.Item,{label:"Validator Address",name:"bech32ValAddr",rules:[{required:!0}],children:Object(x.jsx)(I.a,{})}),Object(x.jsx)(k.a.Item,{label:"Validator PubKey",name:"bech32ValPub",rules:[{required:!0}],children:Object(x.jsx)(I.a,{})}),Object(x.jsx)(k.a.Item,{label:"Consensus Address",name:"bech32ConsAddr",rules:[{required:!0}],children:Object(x.jsx)(I.a,{})}),Object(x.jsx)(k.a.Item,{label:"Consensus PubKey",name:"bech32ConsPub",rules:[{required:!0}],children:Object(x.jsx)(I.a,{})})]}),Object(x.jsx)(k.a.Item,{label:"Coin Type",name:"coinType",rules:[{required:!0}],children:Object(x.jsx)(v.a,{})}),Object(x.jsxs)(k.a.Item,{label:"Gas Price Step",children:[Object(x.jsx)(k.a.Item,{label:"Low",name:"gasPriceStepLow",rules:[{required:!0}],children:Object(x.jsx)(v.a,{defaultValue:.01})}),Object(x.jsx)(k.a.Item,{label:"Average",name:"gasPriceStepAverage",rules:[{required:!0}],children:Object(x.jsx)(v.a,{defaultValue:.025})}),Object(x.jsx)(k.a.Item,{label:"High",name:"gasPriceStepHigh",rules:[{required:!0}],children:Object(x.jsx)(v.a,{defaultValue:.04})})]}),Object(x.jsxs)(k.a.Item,{label:"Features",children:[Object(x.jsx)(k.a.Item,{label:"Stargate",name:"featuresStargate",valuePropName:"checked",children:Object(x.jsx)(y.a,{checked:r,onChange:function(e){return n(e)}})}),Object(x.jsx)(k.a.Item,{label:"IBC",name:"featuresIBC",valuePropName:"checked",children:Object(x.jsx)(y.a,{checked:s,onChange:function(e){return o(e)}})}),Object(x.jsx)(k.a.Item,{label:"CosmWasm",name:"featuresCosmWasm",children:Object(x.jsx)(y.a,{checked:u,onChange:function(e){return C(e)}})}),Object(x.jsx)(k.a.Item,{label:"Secret NETWORK Wasm",name:"featuresSecretWasm",valuePropName:"checked",children:Object(x.jsx)(y.a,{checked:g,onChange:function(e){return P(e)}})})]}),Object(x.jsx)(k.a.Item,{children:Object(x.jsx)(j.a,{type:"primary",htmlType:"submit",children:"Add Chain"})})]})};var S=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(s.a,{backIcon:!1,title:"Keplr Chain Tool",subTitle:"Add chain to Keplr at ease"}),Object(x.jsx)("a",{className:"GitHubLink",href:"https://github.com/calvinaco/keplr-chain-tool",children:"https://github.com/calvinaco/keplr-chain-tool"}),Object(x.jsxs)(o.a,{mode:"horizontal",children:[Object(x.jsx)(o.a.Item,{icon:Object(x.jsx)(l.a,{}),children:Object(x.jsx)("a",{href:"#QuickAdd",children:"Quick Add Chains"})},"quickAdd"),Object(x.jsx)(o.a.Item,{icon:Object(x.jsx)(b.a,{}),children:Object(x.jsx)("a",{href:"#CustomChain",children:"Custom Chain"})},"customChain")]}),Object(x.jsxs)("section",{id:"QuickAdd",children:[Object(x.jsx)(s.a,{backIcon:!1,title:"Quick Add Chains"}),Object(x.jsxs)("ul",{className:"ChainList",children:[Object(x.jsx)("li",{children:Object(x.jsx)(C,{network:f})}),Object(x.jsx)("li",{children:Object(x.jsx)(C,{network:g})}),Object(x.jsx)("li",{children:Object(x.jsx)(C,{network:O})}),Object(x.jsx)("li",{children:Object(x.jsx)(C,{network:P})})]})]}),Object(x.jsxs)("section",{id:"CustomChain",children:[Object(x.jsx)(s.a,{backIcon:!1,title:"Custom Chain"}),Object(x.jsx)(w,{})]})]})},T=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,206)).then((function(c){var r=c.getCLS,n=c.getFID,a=c.getFCP,t=c.getLCP,i=c.getTTFB;r(e),n(e),a(e),t(e),i(e)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root")),T()}},[[196,1,2]]]);
//# sourceMappingURL=main.3bafe979.chunk.js.map