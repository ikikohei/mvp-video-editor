(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[596],{8408:(e,t,r)=>{var a=Object.create,s=Object.defineProperty,i=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,p=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of n(t))l.call(e,o)||o===r||s(e,o,{get:()=>t[o],enumerable:!(a=i(t,o))||a.enumerable});return e},h=(e,t,r)=>(p(e,"symbol"!=typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(y,{default:()=>f}),e.exports=u(s({},"__esModule",{value:!0}),y);var c=((e,t,r)=>(r=null!=e?a(o(e)):{},u(!t&&e&&e.__esModule?r:s(r,"default",{value:e,enumerable:!0}),e)))(r(2364)),d=r(9199),m=r(4147);class f extends c.Component{constructor(){super(...arguments),h(this,"callPlayer",d.callPlayer),h(this,"onDurationChange",()=>{let e=this.getDuration();this.props.onDuration(e)}),h(this,"mute",()=>{this.callPlayer("setMuted",!0)}),h(this,"unmute",()=>{this.callPlayer("setMuted",!1)}),h(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){let{controls:t,config:r,onError:a,playing:s}=this.props,[,i]=e.match(m.MATCH_URL_DAILYMOTION);if(this.player){this.player.load(i,{start:(0,d.parseStartTime)(e),autoplay:s});return}(0,d.getSDK)("https://api.dmcdn.net/all.js","DM","dmAsyncInit",e=>e.player).then(s=>{if(!this.container)return;let n=s.player;this.player=new n(this.container,{width:"100%",height:"100%",video:i,params:{controls:t,autoplay:this.props.playing,mute:this.props.muted,start:(0,d.parseStartTime)(e),origin:window.location.origin,...r.params},events:{apiready:this.props.onReady,seeked:()=>this.props.onSeek(this.player.currentTime),video_end:this.props.onEnded,durationchange:this.onDurationChange,pause:this.props.onPause,playing:this.props.onPlay,waiting:this.props.onBuffer,error:e=>a(e)}})},a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.player.duration||null}getCurrentTime(){return this.player.currentTime}getSecondsLoaded(){return this.player.bufferedTime}render(){let{display:e}=this.props;return c.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},c.default.createElement("div",{ref:this.ref}))}}h(f,"displayName","DailyMotion"),h(f,"canPlay",m.canPlay.dailymotion),h(f,"loopOnEnded",!0)}}]);