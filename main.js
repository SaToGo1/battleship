(()=>{var t={287:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"/*###############\n  # PLAY SCREEN # \n  ############### */\n  \n.main__playButton {\n    width: 140px;\n    font-size: 3em;\n\n    padding: 10px 20px;\n\n    background-color: #FFF;\n\tborder: 1px solid #FFF;\n\n    cursor: pointer;\n\n    font-weight: 800;\n\n}\n\n.main__playButton:hover {\n    border-bottom: 1px solid #000;\n}\n\n.main__playButton:active {\n    width: 120px;\n    font-size: 2.8em;\n}\n\n/*################ \n  # BOARD SCREEN # \n  ################ */\n.board{\n    width: 500px;\n    height: 500px;\n    outline: 1px solid black;\n    display: grid;\n\n    grid-template-columns: repeat(10, 50px)\n}\n\n.cell {\n    width: 50px;\n    height: 50px;\n\n    border: 0.5px solid black;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    font-size: 2.5em;\n}\n\n.gameUIdiv {\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    gap: 20px;\n    justify-content: space-around;\n}\n\n/*.divPlayer {\n\n}*/\n\n/*################ \n  # RETRY SCREEN # \n  ################*/\n.retrydiv {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n\n.main__retryButton{\n    width: 140px;\n\n    padding: 10px 20px;\n\n    background-color: #FFF;\n\tborder: 1px solid #FFF;\n\n    cursor: pointer;\n}\n\n.main__retryButton:hover {\n    border-bottom: 1px solid #000;\n}\n\n.main__retryButton:active {\n    width: 120px;\n    font-size: 2.8em;\n}\n\n.main__retryButton-IMG {\n    width: 100%;\n}\n\n.retrymessage {\n    margin: 0;\n    font-size: 2em;\n    text-align: center;\n\n    font-weight: 800;\n}",""]);const s=i},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);r&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var l=t[s],d=r.base?l[0]+r.base:l[0],c=a[d]||0,u="".concat(d," ").concat(c);a[d]=c+1;var p=n(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var m=o(h,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var l=r(t,o),d=0;d<a.length;d++){var c=n(a[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}a=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},734:t=>{t.exports=class{constructor(){}setButtonClickEvent(t,e){t&&t.addEventListener("click",e)}}},417:(t,e,n)=>{const r=n(507),o=n(498),a="player";t.exports=class{constructor(){this.player=r(),this.computer=r(),this.gameBoardPlayer=o(),this.gameBoardComputer=o(),this.gameBoardPlayer.placeShip(1,1,5,!1),this.gameBoardComputer.placeShip(1,1,5,!0),this.actualTurn=a,this.winner=null,console.log("this.gameBoardPlayer"),console.log(this.gameBoardPlayer),console.log("this.gameBoardComputer"),console.log(this.gameBoardComputer)}mainGameLoop(){this.actualTurn==a?(console.log("player Turn"),this.actualTurn="computer"):(console.log("computer Turn"),this.actualTurn=a)}getPlayerBoard(){return this.gameBoardPlayer}getComputerBoard(){return this.gameBoardComputer}}},498:(t,e,n)=>{const r=n(643);t.exports=()=>{_size=10,_ships=[],_hitsBoard=[];for(let t=0;t<10;t++)_hitsBoard.push([]),_hitsBoard[t].push(0,0,0,0,0,0,0,0,0,0);_shipsBoard=[];for(let t=0;t<10;t++)_shipsBoard.push([]),_shipsBoard[t].push(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1);return{getBoard:()=>_hitsBoard,getSize:()=>_size,getCellYX:(t,e)=>_hitsBoard[t][e],placeShip:(t,e,n,o=!0)=>{if(o){if(e+n<_size&&e>-1){let o=r(n);for(let r=e;r<e+n;r++)_hitsBoard[t][r]=1,_shipsBoard[t][r]=_ships.length;_ships.push(o)}}else if(t+n<_size&&t>-1){let o=r(n);for(let r=t;r<t+n;r++)_hitsBoard[r][e]=1,_shipsBoard[r][e]=_ships.length;_ships.push(o)}},receiveAttack:(t,e)=>{if(t>0&&e>0&&t<_size&&e<_size){if(1===_hitsBoard[t][e]){_hitsBoard[t][e]=3;let n=_shipsBoard[t][e];_ships[n].hit()}else{if(0!==_hitsBoard[t][e])return!1;_hitsBoard[t][e]=2}return!0}return!1},areAllSunk:()=>{let t=!0,e=!0;for(let n=0;n<_ships.length;n++)t=t&&e,e=_ships[n].isSunk();return t&&e},_hitsBoard}}},507:t=>{t.exports=()=>({attackBoard:(t,e,n)=>{t.receiveAttack(e,n)},computerPlays:t=>{let e=!1;for(;!e;){let n=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());e=t.receiveAttack(r,n)}}})},643:t=>{t.exports=(t,e=0)=>{let n=t,r=e;return{getLength:()=>n,getNumberHits:()=>r,hit:()=>{r++},isSunk:()=>r>=n}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),l=n.n(s),d=n(216),c=n.n(d),u=n(589),p=n.n(u),h=n(287),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=c(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const g=n(734),A=n(417);let y=new class{constructor(){this.mainContent=document.getElementById("main__content")}_buildPlayButton(){let t=document.createElement("button");return t.textContent="Play",t.classList.add("main__playButton"),t.id="playButton",t}_buildPlayerBoard(t){let e=t.getSize(),n=t.getSize(),r=document.createElement("div");r.classList.add("board");for(let o=0;o<n;o++)for(let n=0;n<e;n++){let e=t.getCellYX(o,n),a=document.createElement("div");a.classList.add("cell"),this._cellContent(e,a,!0),r.appendChild(a)}return r}_buildComputerBoard(t){let e=t.getSize(),n=t.getSize(),r=document.createElement("div");r.classList.add("board");for(let o=0;o<n;o++)for(let n=0;n<e;n++){let e=t.getCellYX(o,n),a=document.createElement("div");a.classList.add("cell"),this._cellContent(e,a,!1),r.appendChild(a)}return r}_cellContent(t,e,n=!1){e.textContent="",1==t&&n?e.textContent="#":2==t?e.textContent="•":3==t&&(e.textContent="X")}_buildRetryButton(){let t=document.createElement("button"),e=document.createElement("img");return e.classList.add("main__retryButton-IMG"),e.src="data:image/png;base64,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",t.classList.add("main__retryButton"),t.id="retryButton",t.appendChild(e),t}_RetryUI(t){let e=document.createElement("div");e.classList.add("retrydiv");let n=document.createElement("p");n.classList.add("retrymessage"),n.textContent=t;let r=this._buildRetryButton();return e.appendChild(n),e.appendChild(r),e}_GameUI(t,e){let n=document.createElement("div");n.classList.add("gameUIdiv");let r=document.createElement("div");r.classList.add("divPlayer");let o=document.createElement("div");o.classList.add("divPlayer");let a=document.createElement("h2");a.textContent="Player 1";let i=document.createElement("h2");i.textContent="Player 2";let s=this._buildPlayerBoard(t),l=this._buildPlayerBoard(e);return r.appendChild(a),r.appendChild(s),o.appendChild(i),o.appendChild(l),n.appendChild(r),n.appendChild(o),n}loadBoardScreen(t,e){this.mainContent.innerHTML="",this.mainContent.style["min-width"]="100%",this.mainContent.style["min-height"]="100%";let n=this._GameUI(t,e);this.mainContent.appendChild(n)}loadPlayScreen(){this.mainContent.innerHTML="",this.mainContent.style["min-width"]="0",this.mainContent.style["min-height"]="0";let t=this._buildPlayButton();this.mainContent.appendChild(t)}loadRetryScreen(t){this.mainContent.innerHTML="",this.mainContent.style["min-width"]="0",this.mainContent.style["min-height"]="0";let e=this._RetryUI(t);this.mainContent.appendChild(e)}getPlayButton(){return document.getElementById("playButton")}getRetryButton(){return document.getElementById("retryButton")}},f=new g,B=new A;y.loadPlayScreen();let C=y.getPlayButton();f.setButtonClickEvent(C,(function(){y.loadBoardScreen(B.getPlayerBoard(),B.getComputerBoard())}))})()})();