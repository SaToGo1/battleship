(()=>{var e={287:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([e.id,"/*###############\n  # PLAY SCREEN # \n  ############### */\n\n:root {\n    --color-legend: #3332;\n    --color-legend-title: #3334;\n}\n\n.main__playButton {\n    width: 140px;\n    font-size: 3em;\n\n    padding: 10px 20px;\n\n    background-color: var(--color-background);\n\tborder: none;\n\n    cursor: pointer;\n\n    font-weight: 800;\n\n}\n\n.main__playButton:hover {\n    border-bottom: 1px solid #000;\n}\n\n.main__playButton:active {\n    width: 120px;\n    font-size: 2.8em;\n}\n\n/*################ \n  # BOARD SCREEN # \n  ################ */\n.board{\n    width: 500px;\n    height: 500px;\n    outline: 1px solid black;\n    display: grid;\n\n    grid-template-columns: repeat(10, 50px)\n}\n\n.cell {\n    width: 50px;\n    height: 50px;\n\n    border: 0.5px solid black;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    font-size: 2.5em;\n}\n\n.computerCells:hover{\n    background-color: #CCC;\n}\n\n.cellClicked {\n    background-color: #AAA;\n}\n\n.gameUIdiv {\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    gap: 20px;\n    justify-content: space-around;\n}\n\n.gameScreen {\n    width: 100%;\n    height: 100%;\n\n    display: grid;\n    grid-template-rows: 5% 85% 10%;\n\n    /* Flex works*/\n    /* display: flex;\n    flex-direction: column;\n    gap: 20px; */\n}\n\n.phaseDiv {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.phaseTitle {\n    margin: 0;\n    height: 30;\n}\n\n.legendDiv {\n    margin-left: 40px;\n    margin-top: 10px;\n\n    width: 500px;\n\n    background-color: var(--color-legend);\n\n    display: flex;\n}\n\n.legendDiv h4{\n    margin: 0;\n    margin-bottom: 8px;\n    margin-right: 40px;\n    background-color: var(--color-legend-title);\n}\n\n.legendDiv p {\n    margin: 0;\n    margin-bottom: 4px;\n    margin-right: 20px;\n}\n/*.divPlayer {\n\n}*/\n\n/*################ \n  # RETRY SCREEN # \n  ################*/\n.retrydiv {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n\n.main__retryButton{\n    width: 140px;\n\n    padding: 10px 20px;\n\n    background-color: var(--color-background);\n\tborder: none;\n\n    cursor: pointer;\n}\n\n.main__retryButton:hover {\n    border-bottom: 1px solid #000;\n}\n\n.main__retryButton:active {\n    width: 120px;\n    font-size: 2.8em;\n}\n\n.main__retryButton-IMG {\n    width: 100%;\n}\n\n.retrymessage {\n    margin: 0;\n    font-size: 2em;\n    text-align: center;\n\n    font-weight: 800;\n}",""]);const l=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(o[s]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);r&&o[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],l=0;l<e.length;l++){var s=e[l],d=r.base?s[0]+r.base:s[0],c=i[d]||0,p="".concat(d," ").concat(c);i[d]=c+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=a(m,r);r.byIndex=l,t.splice(l,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var l=n(i[o]);t[l].references--}for(var s=r(e,a),d=0;d<i.length;d++){var c=n(i[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=s}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},734:e=>{e.exports=class{constructor(){}setButtonClickEvent(e,t){e&&e.addEventListener("click",t)}setCellsEvent(e,t,n){for(let r=0;r<e.length;r++){let a=r%t,i=Math.floor(r/t)*(t/10),o=e[r];o.addEventListener("click",(()=>{n(o,i,a)}))}}placeShipEvents(e,t,n,r,a){for(let n=0;n<e.length;n++){let r=n%t,i=Math.floor(n/t)*(t/10),o=e[n];o.addEventListener("mouseover",(e=>{})),o.addEventListener("click",(()=>{a(o,i,r)}))}}}},417:(e,t,n)=>{const r=n(507),a=n(498);e.exports=class{constructor(e,t){this.DomElements=e,this.DomEvents=t,this.gameStart=this.gameStart.bind(this),this.mainGameFlow=this.mainGameFlow.bind(this),this.player=r(),this.computer=r(),this.gameBoardPlayer=a(),this.gameBoardComputer=a(),this.gameBoardPlayer.placeShip(1,1,5,!1),this.gameBoardPlayer.placeShip(3,3,4,!0),this.gameBoardPlayer.placeShip(6,6,3,!1),this.gameBoardComputer.placeShip(1,1,5,!0),this.gameBoardComputer.placeShip(3,3,4,!1),this.gameBoardComputer.placeShip(6,6,3,!0),this.winner=null}playerTurn(e,t){this.player.attackBoard(this.gameBoardComputer,e,t)}computerTurn(){let[e,t]=this.computer.computerPlays(this.gameBoardPlayer);return[e,t]}winCondition(){return this.gameBoardPlayer.areAllSunk()?(this.winner="computer",!0):!!this.gameBoardComputer.areAllSunk()&&(this.winner="player",!0)}checkWin(){if(this.winCondition()){let e=this.getWinner();this.DomElements.loadRetryScreen(`${e} Win`);let t=this.DomElements.getRetryButton();return this.DomEvents.setButtonClickEvent(t,this.gameStart),this.resetGame(),!0}return!1}resetGame(){this.gameBoardPlayer=a(),this.gameBoardComputer=a(),this.gameBoardPlayer.placeShip(1,1,5,!1),this.gameBoardPlayer.placeShip(3,3,4,!0),this.gameBoardPlayer.placeShip(6,6,3,!1),this.gameBoardComputer.placeShip(1,1,5,!0),this.gameBoardComputer.placeShip(3,3,4,!1),this.gameBoardComputer.placeShip(6,6,3,!0),this.winner=null}getWinner(){return this.winner}gameStart(){this.DomElements.loadBoardScreen(this.gameBoardPlayer,this.gameBoardComputer),this.placeAllShips()}mainGameFlow(e,t,n){let r=this.gameBoardComputer.getCellYX(t,n);if(2==r||3==r)return;if(this.playerTurn(t,n),this.DomElements.printCell(e,t,n,this.gameBoardComputer),this.checkWin())return;let[a,i]=this.computerTurn(),o=this.DomElements.getCellPlayerBoard(a,i,this.gameBoardPlayer);this.DomElements.printCell(o,i,a,this.gameBoardPlayer),this.checkWin()}placeAllShips(){this.DomElements.changePhase("Place your ships"),this.DomElements.addRotateButton(),this.DomElements.deleteRotateButton()}placeOneShip(){for(;;);}}},498:(e,t,n)=>{const r=n(643);e.exports=()=>{let e=[],t=[];for(let e=0;e<10;e++)t.push([]),t[e].push(0,0,0,0,0,0,0,0,0,0);let n=[];for(let e=0;e<10;e++)n.push([]),n[e].push(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1);return{getBoard:()=>t,getSize:()=>10,getCellYX:(e,n)=>t[e][n],placeShip:(a,i,o,l=!0)=>{if(l){if(i+o<10&&i>-1){let l=r(o);for(let r=i;r<i+o;r++)t[a][r]=1,n[a][r]=e.length;return e.push(l),!0}}else if(a+o<10&&a>-1){let l=r(o);for(let r=a;r<a+o;r++)t[r][i]=1,n[r][i]=e.length;return e.push(l),!0}return!1},receiveAttack:(r,a)=>{if(r>=0&&a>=0&&r<=10&&a<=10){if(1===t[r][a]){t[r][a]=3;let i=n[r][a];e[i].hit()}else{if(0!==t[r][a])return!1;t[r][a]=2}return!0}return!1},areAllSunk:()=>{let t=!0,n=!0;for(let r=0;r<e.length;r++)t=t&&n,n=e[r].isSunk();return t&&n},_hitsBoard:t}}},507:e=>{e.exports=()=>({attackBoard:(e,t,n)=>{e.receiveAttack(t,n)},computerPlays:e=>{let t=0,n=0,r=!1;for(;!r;)t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random()),r=e.receiveAttack(n,t);return[t,n]}})},643:e=>{e.exports=(e,t=0)=>{let n=e,r=t;return{getLength:()=>n,getNumberHits:()=>r,hit:()=>{r++},isSunk:()=>r>=n}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),a=n.n(r),i=n(569),o=n.n(i),l=n(565),s=n.n(l),d=n(216),c=n.n(d),p=n(589),u=n.n(p),m=n(287),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=c(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const g=n(734),y=n(417),C=new class{constructor(){this.mainContent=document.getElementById("main__content")}_buildPlayButton(){let e=document.createElement("button");return e.textContent="Play",e.classList.add("main__playButton"),e.id="playButton",e}_buildPlayerBoard(e){let t=e.getSize(),n=e.getSize(),r=document.createElement("div");r.classList.add("board");for(let a=0;a<n;a++)for(let n=0;n<t;n++){let t=e.getCellYX(a,n),i=document.createElement("div");i.classList.add("cell"),i.classList.add("playerCells"),this._cellContent(t,i,!0),r.appendChild(i)}return r}_buildComputerBoard(e){let t=e.getSize(),n=e.getSize(),r=document.createElement("div");r.classList.add("board");for(let a=0;a<n;a++)for(let n=0;n<t;n++){let t=e.getCellYX(a,n),i=document.createElement("div");i.classList.add("cell"),i.classList.add("computerCells"),this._cellContent(t,i,!1),r.appendChild(i)}return r}_cellContent(e,t,n=!1){t.textContent="",1==e&&n?t.textContent="#":2==e?t.textContent="•":3==e&&(t.textContent="X")}_buildRetryButton(){let e=document.createElement("button"),t=document.createElement("img");return t.classList.add("main__retryButton-IMG"),t.src="data:image/png;base64,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",e.classList.add("main__retryButton"),e.id="retryButton",e.appendChild(t),e}_RetryUI(e){let t=document.createElement("div");t.classList.add("retrydiv");let n=document.createElement("p");n.classList.add("retrymessage"),n.textContent=e;let r=this._buildRetryButton();return t.appendChild(n),t.appendChild(r),t}_GameUI(e,t){let n=document.createElement("div");n.classList.add("gameUIdiv");let r=document.createElement("div");r.classList.add("divPlayer"),r.id="divPlayer";let a=document.createElement("div");a.classList.add("divComputer");let i=document.createElement("h2");i.textContent="Player";let o=document.createElement("h2");o.textContent="Computer";let l=this._buildPlayerBoard(e),s=this._buildComputerBoard(t);return r.appendChild(i),r.appendChild(l),a.appendChild(o),a.appendChild(s),n.appendChild(r),n.appendChild(a),n}_GameScreen(e,t){let n=document.createElement("div");n.classList.add("gameScreen"),n.id="gameScreen";let r=this._phaseDiv(),a=this._GameUI(e,t),i=this._LegendDiv();return n.appendChild(r),n.appendChild(a),n.appendChild(i),n}_phaseDiv(){let e=document.createElement("div");e.classList.add("phaseDiv");let t=document.createElement("h2");return t.classList.add("phaseTitle"),t.id="phaseTitle",t.textContent="your turn",e.appendChild(t),e}_LegendDiv(){let e=document.createElement("div");e.classList.add("legendDiv");let t=document.createElement("h4");t.textContent="Legend",e.appendChild(t);let n=document.createElement("p");n.textContent="[ # ]  ->  Your Ship";let r=document.createElement("p");r.textContent="[ • ]  ->  Water Hit";let a=document.createElement("p");return a.textContent="[ X ]  ->  Ship Hit",e.appendChild(n),e.appendChild(r),e.appendChild(a),e}loadBoardScreen(e,t){this.mainContent.innerHTML="",this.mainContent.style["min-width"]="100%",this.mainContent.style["min-height"]="100%";let n=this._GameScreen(e,t);this.mainContent.appendChild(n)}loadPlayScreen(){this.mainContent.innerHTML="",this.mainContent.style["min-width"]="0",this.mainContent.style["min-height"]="0";let e=this._buildPlayButton();this.mainContent.appendChild(e)}loadRetryScreen(e){this.mainContent.innerHTML="",this.mainContent.style["min-width"]="0",this.mainContent.style["min-height"]="0";let t=this._RetryUI(e);this.mainContent.appendChild(t)}printCell(e,t,n,r){let a=r.getCellYX(t,n);this._cellContent(a,e,!1),e.classList.add("cellClicked"),setTimeout((()=>{e.classList.remove("cellClicked")}),2e3)}getPlayButton(){return document.getElementById("playButton")}getRetryButton(){return document.getElementById("retryButton")}getCellArray(){return document.getElementsByClassName("computerCells")}getCellPlayerBoard(e,t,n){let r,a=document.getElementsByClassName("playerCells"),i=n.getSize();for(let n=0;n<a.length;n++){let o=n%i,l=Math.floor(n/i)*(i/10);o===e&&l===t&&(r=a[n])}return r}changePhase(e){document.getElementById("phaseTitle").textContent=e}addRotateButton(){let e=document.getElementById("divPlayer"),t=document.createElement("button");t.id="buttonRotate",t.textContent="Rotate",e.appendChild(t)}deleteRotateButton(){document.getElementById("buttonRotate").remove()}},A=new g,f=new y(C,A);C.loadPlayScreen();let B=C.getPlayButton();A.setButtonClickEvent(B,f.gameStart)})()})();