(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(46)},25:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),c=a.n(r),o=a(8),l=a.n(o),s=a(16),m=a(2),u=a(3),d=a(5),v=a(4),p=a(6),f=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(v.a)(t).call(this))).onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e.state={term:""},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,i.a.createElement("h3",null,"Video Search")),i.a.createElement("input",{type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),t}(n.Component);a(25);var h=function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},i.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))};var b=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map(function(e){return i.a.createElement(h,{key:e.id.videoId,onVideoSelect:a,video:e})});return i.a.createElement("div",{className:"ui relaxed divided list"},n)};var E=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId,"?autoplay=1");return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:"video player",src:a,width:"560",height:"315",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},S=a(17),w=a.n(S).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyCao3qfznS1MxmF7cV0xdz2cNm1jF5j6zg"}}),N=(a(45),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(v.a)(t).call(this))).onTermSubmit=function(){var t=Object(s.a)(l.a.mark(function t(a){var n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("/search",{params:{q:a}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e.state={videos:[],selectedVideo:null},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onTermSubmit("chill beats")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(f,{onFormSubmit:this.onTermSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(E,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(b,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),t}(n.Component));c.a.render(i.a.createElement(N,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.21175fa7.chunk.js.map