__require=function t(e,i,s){function n(c,a){if(!i[c]){if(!e[c]){var r=c.split("/");if(r=r[r.length-1],!e[r]){var h="function"==typeof __require&&__require;if(!a&&h)return h(r,!0);if(o)return o(r,!0);throw new Error("Cannot find module '"+c+"'")}}var u=i[c]={exports:{}};e[c][0].call(u.exports,function(t){return n(e[c][1][t]||t)},u,u.exports,t,e,i,s)}return i[c].exports}for(var o="function"==typeof __require&&__require,c=0;c<s.length;c++)n(s[c]);return n}({GM:[function(t,e,i){"use strict";cc._RF.push(e,"1d3d0f3ftRJSqtRNdMA4OWD","GM"),cc.Class({extends:cc.Component,properties:{helpText:cc.Node,startText:cc.Node,powerText:cc.Node,exText:cc.Node,playerNode:cc.Node,ex_01_Node:cc.Node,ex_02_Node:cc.Node,enemys:cc.Node,gamerestart:cc.Node},onLoad:function(){this.line=this.powerText.getComponent(cc.ProgressBar),this.line.progress=0,this.time=0,this.iskillStart=!0,this.hide1=cc.hide(),this.show1=cc.show(),this.anim_play=this.playerNode.getComponent(cc.Animation),this.anim_ex1=this.ex_01_Node.getComponent(cc.Animation),this.anim_ex2=this.ex_02_Node.getComponent(cc.Animation),this.anim_enemy=this.enemys.getComponent(cc.Animation)},gameStart:function(){this.helpText.active=!1,this.startText.active=!1},killStart:function(){this.iskillStart=!1,this.exText.active=!0},attackStart:function(){cc.log(this.time),this.iskillStart=!0,this.time>.9&&this.time<1?this.player_attack_ex():(this.enemys_attack_ex(),this.gameover())},gameover:function(){cc.game.emit("gameover"),this.iskillStart=!0,this.gamerestart.active=!0,this.gameinit()},gamerstart:function(){this.gamerestart.active=!1},gameinit:function(){this.time=0,this.line.progress=this.time,this.exText.scale=1},player_attack_ex:function(){this.anim_play.play(),this.anim_ex1.play(),this.anim_enemy.play(),this.exText.scale=1,this.exText.active=!1,this.time=0,this.line.progress=this.time},enemys_attack_ex:function(){this.anim_ex2.play()},update:function(t){this.iskillStart||(this.time+=t,this.time>=1&&this.gameover(),this.line.progress=this.time,this.exText.scale+=.01*this.time)}}),cc._RF.pop()},{}],postouzi:[function(t,e,i){"use strict";cc._RF.push(e,"6d617P7/sVJ/rZqRaOF2Wp3","postouzi"),cc.Class({extends:cc.Component,properties:{num:4,num_display:cc.Label,start_node:cc.Node,zhongshai_node:cc.Node,dipan_node:cc.Node,restart_node:cc.Node,shake_node:cc.Node,numbers_node:cc.Node},start:function(){this.Disnumbers(),this.arr=[],this.touzi=this.node.children,cc.log(this.touzi.length)},getNumNoRepeat:function(){var t=20;do{var e=Math.floor(19*Math.random());if(-1==this.arr.indexOf(e))return this.arr.push(e),this.touzi[e].active=!0,cc.log(e),e;t--}while(t)},touzi_add:function(){this.num++,this.num>10?this.num=10:this.Disnumbers()},touzi_sub:function(){this.num--,this.num<1?this.num=1:this.Disnumbers()},Disnumbers:function(){this.num_display.string=this.num+""},getshaizi:function(){for(var t=0;t<this.num;t++)this.getNumNoRepeat()},openshaizi:function(){this.zhongshai_node.active=!1,this.dipan_node.active=!0,this.restart_node.active=!0,this.start_node.active=!1,this.getshaizi()},datareset:function(){for(var t=0;t<this.touzi.length;t++)this.touzi[t].active=!1;this.arr.length=0},restartshaizi:function(){this.datareset(),this.numbers_node.active=!0,this.zhongshai_node.active=!0,this.zhongshai_node.x=0,this.zhongshai_node.y=0,this.shake_node.active=!0,this.dipan_node.active=!1,this.restart_node.active=!1}}),cc._RF.pop()},{}],rndtouzi:[function(t,e,i){"use strict";cc._RF.push(e,"85a7fbdTa5NlrRi8LF9Lba1","rndtouzi"),cc.Class({extends:cc.Component,properties:{sprites:{type:cc.SpriteFrame,default:[]},speed:0},onEnable:function(){this.getComponent(cc.Animation).play()},start:function(){},Rndtouzi:function(){var t=6*cc.random0To1();t=Math.floor(t),this.node.getComponent(cc.Sprite).spriteFrame=this.sprites[t]}}),cc._RF.pop()},{}],zhongshai:[function(t,e,i){"use strict";cc._RF.push(e,"36dffaTb1ZMz7Km9SUcLi5W","zhongshai"),cc.Class({extends:cc.Component,properties:{shake_node:cc.Node,start_node:cc.Node,numbers_node:cc.Node},shake:function(){this.shake_node.active=!1,this.numbers_node.active=!1,this.start_node.active=!0;var t=cc.repeatForever(cc.sequence(cc.moveBy(.01,50,0),cc.moveBy(.01,-50,0)));this.node.runAction(t)},onDisable:function(){this.node.stopAllActions()}}),cc._RF.pop()},{}]},{},["GM","postouzi","rndtouzi","zhongshai"]);