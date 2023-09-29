var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.objectCreate=$jscomp.ASSUME_ES5||"function"==typeof Object.create?Object.create:function(b){var c=function(){};c.prototype=b;return new c};$jscomp.underscoreProtoCanBeSet=function(){var b={a:!0},c={};try{return c.__proto__=b,c.a}catch(g){}return!1};
$jscomp.setPrototypeOf="function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(b,c){b.__proto__=c;if(b.__proto__!==c)throw new TypeError(b+" is not extensible");return b}:null;
$jscomp.inherits=function(b,c){b.prototype=$jscomp.objectCreate(c.prototype);b.prototype.constructor=b;if($jscomp.setPrototypeOf){var g=$jscomp.setPrototypeOf;g(b,c)}else for(g in c)if("prototype"!=g)if(Object.defineProperties){var n=Object.getOwnPropertyDescriptor(c,g);n&&Object.defineProperty(b,g,n)}else b[g]=c[g];b.superClass_=c.prototype};var castling,Boot=function(){return Phaser.Scene.call(this,"boot")||this};$jscomp.inherits(Boot,Phaser.Scene);
Boot.prototype.preload=function(){this.load.image("game_title","img/game_title.png");this.load.image("background","img/background.png");this.load.image("btn_start","img/btn_start.png");this.load.image("win_end","img/win_end.png")};Boot.prototype.create=function(){this.scene.start("loader")};var Load=function(){var b=Phaser.Scene.call(this,"loader")||this;b.group;return b};$jscomp.inherits(Load,Phaser.Scene);
Load.prototype.preload=function(){this.add.sprite(360,540,"background");this.add.rectangle(360,540,720,1080,0).alpha=.5;this.add.sprite(360,540,"win_end");this.add.sprite(360,330,"game_title");this.group=this.add.group();var b=this.add.rectangle(360,580,356,30),c=this.add.rectangle(187,580,346,20,16777215).setOrigin(0,.5);b.setStrokeStyle(5,15847086);this.group.addMultiple([b,c]);this.load.on("progress",function(b){c.width=346*b});this.load.spritesheet("pieces","img/pieces.png",{frameWidth:57,frameHeight:57});
this.load.spritesheet("grid","img/grid.png",{frameWidth:57,frameHeight:57});this.load.image("board","img/board.png");this.load.image("shadow_board","img/shadow_board.png");this.load.image("header","img/header.png");this.load.image("btn_sound","img/btn_sound.png");this.load.image("btn_sound_off","img/btn_sound_off.png");this.load.image("btn_pause","img/btn_pause.png");this.load.spritesheet("highlight","img/highlight.png",{frameWidth:58,frameHeight:58});this.load.image("btn_exit","img/btn_exit.png");
this.load.image("btn_resume","img/btn_resume.png");this.load.image("btn_restart","img/btn_restart.png");this.load.image("btn_single","img/btn_single.png");this.load.image("btn_multi","img/btn_multi.png");this.load.image("btn_about","img/btn_about.png");this.load.image("btn_close","img/btn_close.png");this.load.image("about","img/about.png");this.load.image("win_paused","img/win_paused.png");this.load.image("win_menu","img/win_menu.png");this.load.image("check","img/check.png");this.load.image("checkmate",
"img/checkmate.png");this.load.image("win_promotion","img/win_promotion.png");this.load.image("checkmate","img/checkmate.png");this.load.image("end_lose","img/end_lose.png");this.load.image("end_win","img/end_win.png");this.load.image("end_p1","img/end_p1.png");this.load.image("end_p2","img/end_p2.png");this.load.spritesheet("promo","img/promo.png",{frameWidth:188,frameHeight:193});this.load.audio("completed","audio/completed.mp3");this.load.audio("gameover","audio/gameover.mp3");this.load.audio("click",
"audio/click.mp3");this.load.audio("eat","audio/swap.mp3");this.load.audio("placed1","audio/placed1.mp3");this.load.audio("placed2","audio/placed2.mp3");this.load.audio("check","audio/check.mp3")};Load.prototype.create=function(){this.group.destroy(!0,!0);var b=this.add.sprite(360,570,"btn_start").setInteractive();this.tweens.add({targets:b,scaleX:.95,scaleY:.95,ease:"Linear",duration:600,yoyo:!0,loop:-1});this.input.on("gameobjectdown",function(){this.scene.start("menu")},this)};
var Menu=function(){return Phaser.Scene.call(this,"menu")||this};$jscomp.inherits(Menu,Phaser.Scene);
Menu.prototype.create=function(){this.add.sprite(360,540,"background");this.add.rectangle(360,540,720,1080,0).alpha=.5;this.add.sprite(360,544,"win_menu");this.add.sprite(360,224,"game_title");var b=this.add.sprite(360,488,"btn_single").setInteractive();b.name="single";var c=this.add.sprite(360,608,"btn_multi").setInteractive();c.name="multi";var g=this.add.sprite(360,728,"btn_about").setInteractive();g.name="about";var n=this.add.sprite(360,728,"btn_close").setInteractive();n.name="close";n.setVisible(!1);
var v=this.add.sprite(360,530,"about");v.setVisible(!1);this.input.on("gameobjectdown",function(C,q){play_sound("click",this);var x=this;this.tweens.add({targets:q,scaleX:.9,scaleY:.9,ease:"Linear",duration:100,yoyo:!0,onComplete:function(){"single"===q.name?(_data.game_mode="bot",x.scene.start("game")):"multi"===q.name?(_data.game_mode="local",x.scene.start("game")):"about"===q.name?(v.setVisible(!0),n.setVisible(!0),b.setVisible(!1),c.setVisible(!1),g.setVisible(!1)):"close"===q.name&&(v.setVisible(!1),
n.setVisible(!1),b.setVisible(!0),c.setVisible(!0),g.setVisible(!0))}})},this)};var Game=function(){return Phaser.Scene.call(this,"game")||this};$jscomp.inherits(Game,Phaser.Scene);
Game.prototype.create=function(){function b(a){if(0<a.length)for(var l=w.getLength(),k=w.getChildren(),e=0;e<a.length;e++)for(var f=0;f<l;f++){var d=k[f];if(d.pos.x===a[e].x&&d.pos.y===a[e].y){d.alpha=.5;a[e].eat&&(d.setFrame(1),D.push(a[e]));a[e].castling&&(d.castling=a[e].castling);break}}}function c(a){A("check");if(0<a.length)for(var l=w.getLength(),k=w.getChildren(),e=0;e<a.length;e++)for(var f=0;f<l;f++){var d=k[f];if(d.pos.x===a[e].x&&d.pos.y===a[e].y){d.alpha=.5;d.setFrame(2);break}}}function g(){for(var a=
w.getLength(),l=w.getChildren(),f=0;f<a;f++){var e=l[f];e.setFrame(0);e.alpha=0;e.castling&&(e.castling=!1)}}function n(a){g();b(a);y=a.ori;v(a)}function v(a,l){g();for(var k=t.getLength(),e=t.getChildren(),b=0;b<k;b++){var d=e[b];if(d.pos.x===y.x&&d.pos.y===y.y){k=[];var E=0!=p[a.y][a.x]?!0:!1;k.push(p[a.y][a.x]);k.push(p[d.pos.y][d.pos.x]);p[a.y][a.x]=p[d.pos.y][d.pos.x];p[d.pos.y][d.pos.x]=0;e=void 0;l?(e=JSON.parse(JSON.stringify(p)),"rook_right"===l?(e[d.pos.y][5]=e[d.pos.y][7],e[d.pos.y][7]=
0):(e[d.pos.y][3]=e[d.pos.y][0],e[d.pos.y][0]=0),e=r.check(h,!1,e)):e=r.check(h);E&&play_sound("eat",f);0<e.length?(p[a.y][a.x]=k[0],p[d.pos.y][d.pos.x]=k[1],"local"===_data.game_mode?c(e):1===h?(k=F.find_backup(h))?n(k):A("checkmate"):c(e)):(l?C(d,l):q(d),f.tweens.add({targets:d,scaleX:1.5,scaleY:1.5,ease:"Linear",duration:150,yoyo:!0}),f.tweens.add({targets:d,x:_data.board.x+_data.size*a.x,y:_data.board.y+_data.size*a.y,ease:"Linear",duration:300,onComplete:function(){play_sound("placed"+h,f);if(E)for(var e=
t.getLength(),l=t.getChildren(),b=0;b<e;b++){var k=l[b];if(k.pos.x===a.x&&k.pos.y===a.y){k.destroy(!0,!0);break}}d.pos=a;e=!0;1===h?"p1"===d.key&&7===d.pos.y&&("local"===_data.game_mode?(e=!1,G(d.pos)):H(d,"q1")):"p2"===d.key&&0===d.pos.y&&(e=!1,G(d.pos));e&&x()}}));y=0;D.length=0;break}}}function C(a,l){"k2"===a.key?castling.white.king=!1:"k1"===a.key&&(castling.black.king=!1);var b=0,e=0,c={x:0,y:0};"rook_right"===l?(b=7,e=a.pos.y,c={x:5,y:a.pos.y}):"rook_left"===l&&(b=0,e=a.pos.y,c={x:3,y:a.pos.y});
for(var d=t.getLength(),h=t.getChildren(),g=0;g<d;g++){var m=h[g];if(m.pos.x===b&&m.pos.y===e){p[c.y][c.x]=p[e][b];p[e][b]=0;m.pos.x=c.x;b=c;f.tweens.add({targets:m,scaleX:1.5,scaleY:1.5,ease:"Linear",duration:150,yoyo:!0});f.tweens.add({targets:m,x:_data.board.x+_data.size*b.x,y:_data.board.y+_data.size*b.y,ease:"Linear",duration:300});break}}}function q(a){"k2"===a.key&&castling.white.king&&(castling.white.king=!1);"r2"===a.key&&castling.white.king&&(castling.white.rook_right&&7===a.pos.x&&7===
a.pos.y&&(castling.white.rook_right=!1),castling.white.rook_left&&0===a.pos.x&&7===a.pos.y&&(castling.white.rook_left=!1));"k1"===a.key&&castling.black.king&&(castling.black.king=!1);"r1"===a.key&&castling.black.king&&(castling.black.rook_right&&7===a.pos.x&&0===a.pos.y&&(castling.black.rook_right=!1),castling.black.rook_left&&0===a.pos.x&&0===a.pos.y&&(castling.black.rook_left=!1))}function x(){var a=!1;"local"===_data.game_mode?h=1===h?2:1:1===h?h=2:(h=1,(a=r.check_no_moves(h))?A("checkmate"):(a=
F.move_piece(),n(a)),a=!0);a||((a=r.check_no_moves(h))?A("checkmate"):(a=r.check(h),0<a.length&&c(a)))}function H(a,b){a.setFrame({p1:5,r1:4,n1:3,b1:2,q1:1,k1:0,p2:11,r2:10,n2:9,b2:8,q2:7,k2:6}[b]);a.key=b;p[a.pos.y][a.pos.x]=b}function A(a){play_sound("check",f);m="info";var b=500;"checkmate"===a&&(b=2E3);var c=f.add.sprite(360,1380,a);f.tweens.add({targets:c,y:540,ease:"Sine.easeOut",duration:300,onComplete:function(){setTimeout(function(){f.tweens.add({targets:c,y:0,ease:"Sine.easeIn",duration:300,
onComplete:function(){c.destroy(!0,!0);"checkmate"===a?"local"===_data.game_mode?1===h?B("p2"):B("p1"):1===h?B("win"):B("lose"):m="play"}})},b)}})}function G(a){m="promotion";u=f.add.group();var b=f.add.rectangle(360,540,720,1080,0);b.alpha=0;f.tweens.add({targets:b,alpha:.5,duration:200});var c=f.add.sprite(360,552,"win_promotion"),e=f.add.sprite(266,474,"promo").setInteractive();e.promotion=!0;e.name="q";e.pos=a;var g=f.add.sprite(458,474,"promo").setInteractive();g.promotion=!0;g.name="b";g.setFrame(1);
g.pos=a;var d=f.add.sprite(266,674,"promo").setInteractive();d.promotion=!0;d.name="r";d.setFrame(2);d.pos=a;var h=f.add.sprite(458,674,"promo").setInteractive();h.promotion=!0;h.name="k";h.setFrame(3);h.pos=a;u.addMultiple([b,c,e,g,h,d])}function B(a){"lose"===a?play_sound("gameover",f):play_sound("completed",f);m="end";var b=f.add.rectangle(360,540,720,1080,0);b.alpha=0;f.tweens.add({targets:b,alpha:.5,duration:200});var c=f.add.sprite(360,1380,"end_"+a);f.tweens.add({targets:c,y:540,ease:"Sine.easeOut",
duration:300});setTimeout(function(){c.destroy(!0,!0);m="end";u=f.add.group();var a=f.add.sprite(360,552,"win_end"),b=f.add.sprite(360,482,"btn_restart").setInteractive();b.button=!0;b.name="restart";var d=f.add.sprite(360,602,"btn_exit").setInteractive();d.button=!0;d.name="exit";u.addMultiple([a,b,d])},3E3)}this.add.sprite(360,540,"background");this.add.sprite(360,52,"header");this.add.sprite(379,561,"shadow_board");this.add.sprite(360,540,"board");var f=this,h=2,r=new Board(this),F=new ChessAI(r),
w=r.get("grid"),t=r.get("pieces"),p=r.get("board"),y,D=[],m="play",u;castling={black:{rook_left:!0,rook_right:!0,king:!0},white:{rook_left:!0,rook_right:!0,king:!0}};var z=this.add.sprite(170,85,"btn_sound").setInteractive();z.button=!0;z.name="sound";_data.sound||z.setTexture("btn_sound_off");var I=this.add.sprite(550,85,"btn_pause").setInteractive();I.button=!0;I.name="pause";this.input.on("gameobjectdown",function(a,c){if(c.board&&"play"===m){g();var k=p[c.pos.y][c.pos.x];Number(k[k.length-1])===
h&&(k=r.get_moves(c.pos),0<k.length&&(y=c.pos),b(k))}else if(c.grid&&"play"===m)v(c.pos,c.castling);else if(c.button)play_sound("click",this),this.tweens.add({targets:c,scaleX:.9,scaleY:.9,ease:"Linear",duration:100,yoyo:!0,onComplete:function(){if("play"===m)if("pause"===c.name){m="paused";u=f.add.group();var a=f.add.rectangle(360,540,720,1080,0);a.alpha=0;f.tweens.add({targets:a,alpha:.5,duration:200});var b=f.add.sprite(360,552,"win_paused"),d=f.add.sprite(360,472,"btn_resume").setInteractive();
d.button=!0;d.name="resume";var e=f.add.sprite(360,592,"btn_restart").setInteractive();e.button=!0;e.name="restart";var g=f.add.sprite(360,712,"btn_exit").setInteractive();g.button=!0;g.name="exit";u.addMultiple([a,b,d,e,g])}else"sound"===c.name&&(_data.sound?(_data.sound=!1,z.setTexture("btn_sound_off")):(_data.sound=!0,z.setTexture("btn_sound")));else"resume"===c.name?(u.destroy(!0,!0),m="play"):"restart"===c.name?f.scene.start("game"):"exit"===c.name&&f.scene.start("menu")}});else if(c.promotion){k=
t.getLength();for(var e=t.getChildren(),l,d,n=0;n<k;n++){var q=e[n];if(q.pos.x===c.pos.x&&q.pos.y===c.pos.y){d=q.type;l=q;break}}this.tweens.add({targets:c,scaleX:.9,scaleY:.9,ease:"Linear",duration:100,yoyo:!0,onComplete:function(){u.destroy(!0,!0);m="play";H(l,c.name+d);x()}})}},this);this.input.keyboard.on("keydown",function(a){});this.input.keyboard.on("keyup",function(a){})};function play_sound(b,c){_data.sound&&c.sound.play(b)}
var config={type:Phaser.AUTO,width:720,height:1080,scale:{mode:Phaser.Scale.FIT,parent:"phaser-example",autoCenter:Phaser.Scale.CENTER_BOTH},scene:[Boot,Load,Menu,Game]},game=new Phaser.Game(config);