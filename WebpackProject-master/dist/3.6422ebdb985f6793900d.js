(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1229:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),l=n(11),c=n(17),i=n(39);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(o,e);var t,n,r,l,i=(t=o,function(){var e,n=E(t);if(f()){var r=E(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return p(this,e)});function o(){return s(this,o),i.apply(this,arguments)}return n=o,(r=[{key:"componentWillMount",value:function(){this.props.findArtist(this.props.params.id)}},{key:"componentWillReceiveProps",value:function(e){e.params.id!==this.props.params.id&&this.props.findArtist(e.params.id)}},{key:"componentWillUnmount",value:function(){this.props.resetArtist()}},{key:"onDeleteClick",value:function(){this.props.deleteArtist(this.props.params.id)}},{key:"renderAlbums",value:function(){var e=this.props.artist.albums;if(e&&e.map)return e.map((function(e){return a.a.createElement("div",{className:"card album",key:e.title},a.a.createElement("div",{className:"card-image"},a.a.createElement("img",{src:e.image}),a.a.createElement("span",{className:"card-title"},a.a.createElement("h4",null,e.title))),a.a.createElement("div",{className:"card-content"},a.a.createElement("div",null,a.a.createElement("h5",null,e.copiesSold),a.a.createElement("i",null,"copies sold")),a.a.createElement("div",null,a.a.createElement("h5",null,e.numberTracks),a.a.createElement("i",null,"tracks"))))}))}},{key:"render",value:function(){if(!this.props.artist)return a.a.createElement("div",null,'Todo: implement "FindArtist" query');var e=this.props.artist,t=e.name,n=e.age,r=e.genre,l=e.image,i=e.yearsActive,o=e.netWorth,s=e.labelName,u=e._id;return a.a.createElement("div",null,a.a.createElement("div",{className:"spacer"},a.a.createElement(c.a,{to:"/"},"Back"),a.a.createElement(c.a,{to:"/artists/".concat(u,"/edit")},"Edit"),a.a.createElement("a",{onClick:this.onDeleteClick.bind(this)},"Delete")),a.a.createElement("ul",{className:"collection artist-detail"},a.a.createElement("li",{className:"collection-item header"},a.a.createElement("div",null,a.a.createElement("h3",null,t),a.a.createElement("h5",null,"Master of ",r)),a.a.createElement("image",{src:l,className:"right"})),a.a.createElement("li",{className:"collection-item"},a.a.createElement("h5",null,i),a.a.createElement("p",null,a.a.createElement("i",null,"Years Active"))),a.a.createElement("li",{className:"collection-item"},a.a.createElement("h5",null,n),a.a.createElement("p",null,a.a.createElement("i",null,"Years Old"))),a.a.createElement("li",{className:"collection-item"},a.a.createElement("h5",null,"$",o),a.a.createElement("p",null,a.a.createElement("i",null,"Net Worth"))),a.a.createElement("li",{className:"collection-item"},a.a.createElement("h5",null,s),a.a.createElement("p",null,a.a.createElement("i",null,"Label"))),a.a.createElement("li",{className:"flex wrap"},this.renderAlbums())))}}])&&u(n.prototype,r),l&&u(n,l),o}(r.Component);t.default=Object(l.connect)((function(e){return{artist:e.artists.artist}}),i)(d)}}]);