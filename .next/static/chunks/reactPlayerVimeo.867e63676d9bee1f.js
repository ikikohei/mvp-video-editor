(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[743],{8678:(e,t,r)=>{var s=Object.create,o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,i=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of l(t))n.call(e,i)||i===r||o(e,i,{get:()=>t[i],enumerable:!(s=a(t,i))||s.enumerable});return e},u=(e,t,r)=>(p(e,"symbol"!=typeof t?t+"":t,r),r),c={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(c,{default:()=>b}),e.exports=h(o({},"__esModule",{value:!0}),c);var y=((e,t,r)=>(r=null!=e?s(i(e)):{},h(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(2364)),d=r(9199),f=r(4147);let m=e=>e.replace("/manage/videos","");class b extends y.Component{constructor(){super(...arguments),u(this,"callPlayer",d.callPlayer),u(this,"duration",null),u(this,"currentTime",null),u(this,"secondsLoaded",null),u(this,"mute",()=>{this.setMuted(!0)}),u(this,"unmute",()=>{this.setMuted(!1)}),u(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){this.duration=null,(0,d.getSDK)("https://player.vimeo.com/api/player.js","Vimeo").then(t=>{if(!this.container)return;let{playerOptions:r,title:s}=this.props.config;this.player=new t.Player(this.container,{url:m(e),autoplay:this.props.playing,muted:this.props.muted,loop:this.props.loop,playsinline:this.props.playsinline,controls:this.props.controls,...r}),this.player.ready().then(()=>{let e=this.container.querySelector("iframe");e.style.width="100%",e.style.height="100%",s&&(e.title=s)}).catch(this.props.onError),this.player.on("loaded",()=>{this.props.onReady(),this.refreshDuration()}),this.player.on("play",()=>{this.props.onPlay(),this.refreshDuration()}),this.player.on("pause",this.props.onPause),this.player.on("seeked",e=>this.props.onSeek(e.seconds)),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",({seconds:e})=>{this.currentTime=e}),this.player.on("progress",({seconds:e})=>{this.secondsLoaded=e}),this.player.on("bufferstart",this.props.onBuffer),this.player.on("bufferend",this.props.onBufferEnd),this.player.on("playbackratechange",e=>this.props.onPlaybackRateChange(e.playbackRate))},this.props.onError)}refreshDuration(){this.player.getDuration().then(e=>{this.duration=e})}play(){let e=this.callPlayer("play");e&&e.catch(this.props.onError)}pause(){this.callPlayer("pause")}stop(){this.callPlayer("unload")}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setMuted(e){this.callPlayer("setMuted",e)}setLoop(e){this.callPlayer("setLoop",e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){let{display:e}=this.props;return y.default.createElement("div",{key:this.props.url,ref:this.ref,style:{width:"100%",height:"100%",overflow:"hidden",display:e}})}}u(b,"displayName","Vimeo"),u(b,"canPlay",f.canPlay.vimeo),u(b,"forceLoad",!0)}}]);