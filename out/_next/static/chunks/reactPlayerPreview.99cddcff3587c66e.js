(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{7740:(e,t,r)=>{var a=Object.create,n=Object.defineProperty,l=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of i(t))o.call(e,s)||s===r||n(e,s,{get:()=>t[s],enumerable:!(a=l(t,s))||a.enumerable});return e},d=(e,t,r)=>(p(e,"symbol"!=typeof t?t+"":t,r),r),c={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(c,{default:()=>f}),e.exports=u(n({},"__esModule",{value:!0}),c);var h=((e,t,r)=>(r=null!=e?a(s(e)):{},u(!t&&e&&e.__esModule?r:n(r,"default",{value:e,enumerable:!0}),e)))(r(2364));let m="64px",b={};class f extends h.Component{constructor(){super(...arguments),d(this,"mounted",!1),d(this,"state",{image:null}),d(this,"handleKeyPress",e=>{("Enter"===e.key||" "===e.key)&&this.props.onClick()})}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){let{url:t,light:r}=this.props;(e.url!==t||e.light!==r)&&this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage({url:e,light:t,oEmbedUrl:r}){if(!h.default.isValidElement(t)){if("string"==typeof t){this.setState({image:t});return}if(b[e]){this.setState({image:b[e]});return}return this.setState({image:null}),window.fetch(r.replace("{url}",e)).then(e=>e.json()).then(t=>{if(t.thumbnail_url&&this.mounted){let r=t.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:r}),b[e]=r}})}}render(){let{light:e,onClick:t,playIcon:r,previewTabIndex:a,previewAriaLabel:n}=this.props,{image:l}=this.state,i=h.default.isValidElement(e),s={display:"flex",alignItems:"center",justifyContent:"center"},o={preview:{width:"100%",height:"100%",backgroundImage:l&&!i?`url(${l})`:void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...s},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:m,width:m,height:m,position:i?"absolute":void 0,...s},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},p=h.default.createElement("div",{style:o.shadow,className:"react-player__shadow"},h.default.createElement("div",{style:o.playIcon,className:"react-player__play-icon"}));return h.default.createElement("div",{style:o.preview,className:"react-player__preview",onClick:t,tabIndex:a,onKeyPress:this.handleKeyPress,...n?{"aria-label":n}:{}},i?e:null,r||p)}}}}]);