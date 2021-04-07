(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"ct+p":function(e,t,o){"use strict";o.r(t),o.d(t,"HomeModule",function(){return l});var n=o("tyNb"),i=o("bTqV"),a=o("NFeN"),b=o("f0Cb"),r=o("fXoL"),c=o("XiUz");let s=(()=>{class e{constructor(e){this.router=e}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(n.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["home"]],decls:244,vars:2,consts:[["id","home"],["id","home-form-wrapper","fxLayout","column","fxLayoutAlign","start start","fxFlex","100"],["id","home-form"],["fxLayout","row","fxLayout.sm","column","fxLayout.xs","column","fxLayoutAlign","start start"],["fxLayout","column","fxFlex","100",2,"padding-right","10px"],[3,"routerLink"],[2,"border-top-width","1px","border-top-color","#000"],["src","assets\\images\\ap-color-component.png",2,"width","390px","height","590px"],["src","assets\\images\\ap-fade-component.png",2,"width","390px","height","590px"],["src","assets\\images\\ap-move-component.png",2,"width","390px","height","590px"],["src","assets\\images\\ap-rotate-component.png",2,"width","390px","height","590px"],["src","assets\\images\\ap-scale-component.png",2,"width","390px","height","590px"],["src","assets\\images\\ap-squashstretch-component.png",2,"width","390px","height","590px"]],template:function(e,t){1&e&&(r.Ob(0,"div",0),r.Ob(1,"div",1),r.Ob(2,"div",2),r.Ob(3,"div",3),r.Ob(4,"div",4),r.Ob(5,"h1"),r.Ob(6,"a",5),r.fc(7,"Home"),r.Nb(),r.fc(8," | "),r.Ob(9,"a",5),r.fc(10,"Demo"),r.Nb(),r.Nb(),r.Ob(11,"h1"),r.fc(12,"Unity Effects Pack Documentation"),r.Nb(),r.Ob(13,"h2"),r.fc(14,"Overview"),r.Nb(),r.Ob(15,"p"),r.fc(16,"Unity Effects Pack is an asset (.unitypackage) for Unity 2020+. It contains a series of effects that are prepended by AP such as APMove, APColor, etc. You can add these components to game objects and use them to apply things such as"),r.Nb(),r.Ob(17,"ul"),r.Ob(18,"li"),r.fc(19,"Changing color of a game object over time using a curve to determine strength of movement."),r.Nb(),r.Ob(20,"li"),r.fc(21,"Moving objects on automated tracks (you can modify your inputs on the fly, the effects will apply the new modifications)"),r.Nb(),r.Ob(22,"li"),r.fc(23,"Changing the alpha of a game object over time using a curve to determine strength for how to adjust it."),r.Nb(),r.Nb(),r.Ob(24,"p"),r.fc(25,"See below for docs and visit the demo to see them in action."),r.Nb(),r.Mb(26,"mat-divider",6),r.Ob(27,"h2"),r.fc(28,"AP Effect Base"),r.Nb(),r.Mb(29,"img",7),r.Ob(30,"p"),r.fc(31,"These effects are components can be applied to 2D and 3D game objects for a variety of transformations. See below."),r.Nb(),r.Ob(32,"h3"),r.fc(33,"Base Properties (these are on all effects)"),r.Nb(),r.Ob(34,"ul"),r.Ob(35,"li"),r.Ob(36,"strong"),r.fc(37,"Target:"),r.Nb(),r.fc(38," This is which game object the component should select."),r.Nb(),r.Ob(39,"li"),r.Ob(40,"strong"),r.fc(41,"Use This Object:"),r.Nb(),r.fc(42," Whether to target the game object this component is on."),r.Nb(),r.Ob(43,"li"),r.Ob(44,"strong"),r.fc(45,"Random Start Delay:"),r.Nb(),r.fc(46," Whether to have a random start delay when the component plays on Start."),r.Nb(),r.Ob(47,"li"),r.Ob(48,"strong"),r.fc(49,"Random Length:"),r.Nb(),r.fc(50," Let the component pick a random length."),r.Nb(),r.Nb(),r.Ob(51,"h3"),r.fc(52,"On Start"),r.Nb(),r.Ob(53,"ul"),r.Ob(54,"li"),r.Ob(55,"strong"),r.fc(56,"Curve:"),r.Nb(),r.fc(57," The curve to use that will use it's normalized value to manipulate the effects (ease in / out of corners, straight, etc). Refer to tooltips for how they apply to each effect. NOTE: Curve will be normalized if it isn't between 0 and 1 inclusive. "),r.Nb(),r.Ob(58,"li"),r.Ob(59,"strong"),r.fc(60,"Length:"),r.Nb(),r.fc(61," How long the effect should be."),r.Nb(),r.Ob(62,"li"),r.Ob(63,"strong"),r.fc(64,"Affect Children:"),r.Nb(),r.fc(65," Whether the effect should apply to children of the game object (some effects don't support this, like Color)"),r.Nb(),r.Ob(66,"li"),r.Ob(67,"strong"),r.fc(68,"Continuous:"),r.Nb(),r.fc(69," Whether the effect should be continuous or not. This can be ping poing or loop."),r.Nb(),r.Nb(),r.Ob(70,"h3"),r.fc(71,"Events"),r.Nb(),r.Ob(72,"p"),r.fc(73,"Events can fire on either when the effect is running. You can have your custom event fire when a certain percentage changes, or when the effect finishes."),r.Nb(),r.Ob(74,"ul"),r.Ob(75,"li"),r.Ob(76,"strong"),r.fc(77,"Action:"),r.Nb(),r.fc(78," When to trigger the event. Options are Nothing, Play, and Reverse."),r.Nb(),r.Ob(79,"li"),r.Ob(80,"strong"),r.fc(81,"Event Type:"),r.Nb(),r.fc(82," What type of event. Options are On Change and On Finish."),r.Nb(),r.Ob(83,"li"),r.Ob(84,"strong"),r.fc(85,"Percentage:"),r.Nb(),r.fc(86," At what percentage to trigger the event."),r.Nb(),r.Ob(87,"li"),r.Ob(88,"strong"),r.fc(89,"E:"),r.Nb(),r.fc(90," The set of events."),r.Nb(),r.Nb(),r.Mb(91,"mat-divider",6),r.Ob(92,"h2"),r.fc(93,"APColor"),r.Nb(),r.Mb(94,"img",7),r.Ob(95,"p"),r.fc(96,"APColor can be applied to any game object that has a Graphic, SpriteRenderer or Renderer. It will then use the .color property or the shared materials color property. It can be used to gradient between multiple colors."),r.Nb(),r.Ob(97,"p"),r.fc(98,"Does not support AffectChildren."),r.Nb(),r.Ob(99,"ul"),r.Ob(100,"li"),r.Ob(101,"strong"),r.fc(102,"Colors:"),r.Nb(),r.fc(103," An array of colors to pick from"),r.Nb(),r.Ob(104,"li"),r.Ob(105,"strong"),r.fc(106,"Randomize Order:"),r.Nb(),r.fc(107," Whether to randomize the order each iteration."),r.Nb(),r.Nb(),r.Mb(108,"mat-divider",6),r.Ob(109,"h2"),r.fc(110,"APFade"),r.Nb(),r.Mb(111,"img",8),r.Ob(112,"p"),r.fc(113,"APFade can be applied to any game object that has a Graphic, SpriteRenderer or Renderer. It will then use the .color property or the shared materials color property. It can be used to fade the alpha on a game object."),r.Nb(),r.Ob(114,"ul"),r.Ob(115,"li"),r.Ob(116,"strong"),r.fc(117,"Curve:"),r.Nb(),r.fc(118," 0 is 0% alpha. 1 is 100% alpha."),r.Nb(),r.Nb(),r.Mb(119,"mat-divider",6),r.Ob(120,"h2"),r.fc(121,"APMove"),r.Nb(),r.Mb(122,"img",9),r.Ob(123,"p"),r.fc(124,"APMove can be applied to any game object. It can take any object, give it an end position, and have the object move there."),r.Nb(),r.Ob(125,"ul"),r.Ob(126,"li"),r.Ob(127,"strong"),r.fc(128,"Curve:"),r.Nb(),r.fc(129," Determines the strength as a percentage of the movement from 0 to 1."),r.Nb(),r.Ob(130,"li"),r.Ob(131,"strong"),r.fc(132,"Motion Type:"),r.Nb(),r.fc(133," Whether the movement should be absolute or relative."),r.Nb(),r.Ob(134,"li"),r.Ob(135,"strong"),r.fc(136,"End Position:"),r.Nb(),r.fc(137," The end position to move the target to."),r.Nb(),r.Ob(138,"li"),r.Ob(139,"strong"),r.fc(140,"Movement Type:"),r.Nb(),r.fc(141," The type of movement. Options are linear, circular, and sine. Linear means it will simply go there straight with the speed determined from the curve. Circular means it'll move in a circle towards it. Sine means it'll move like a sine curve towards it."),r.Nb(),r.Ob(142,"li"),r.Ob(143,"strong"),r.fc(144,"Movement Type Sine Oscillations:"),r.Nb(),r.fc(145," How many oscillations in the sine movement."),r.Nb(),r.Ob(146,"li"),r.Ob(147,"strong"),r.fc(148,"Movement Type Sine Amplitude:"),r.Nb(),r.fc(149," The amplitude of the sine movement."),r.Nb(),r.Ob(150,"li"),r.Ob(151,"strong"),r.fc(152,"Movement Type Sine Movement Direction:"),r.Nb(),r.fc(153," The direction the movement should be in. Options are positive and negative."),r.Nb(),r.Ob(154,"li"),r.Ob(155,"strong"),r.fc(156,"Movement Type Circular Starting Angle:"),r.Nb(),r.fc(157," At what angle should the movement be."),r.Nb(),r.Ob(158,"li"),r.Ob(159,"strong"),r.fc(160,"Movement Type Circular Radius:"),r.Nb(),r.fc(161," The radius for the circle."),r.Nb(),r.Ob(162,"li"),r.Ob(163,"strong"),r.fc(164,"Movement Type Circular Turns:"),r.Nb(),r.fc(165," How many turns for the circle."),r.Nb(),r.Ob(166,"li"),r.Ob(167,"strong"),r.fc(168,"Movement Type Sine|Circular Turns:"),r.Nb(),r.fc(169," How many turns for the circle."),r.Nb(),r.Nb(),r.Mb(170,"mat-divider",6),r.Ob(171,"h2"),r.fc(172,"APRotate"),r.Nb(),r.Mb(173,"img",10),r.Ob(174,"p"),r.fc(175,"APRotate can be applied to any game object. It will rotate it."),r.Nb(),r.Ob(176,"ul"),r.Ob(177,"li"),r.Ob(178,"strong"),r.fc(179,"Curve:"),r.Nb(),r.fc(180," 1 is a 360 positive rotation. -1 is a 360 negative rotation."),r.Nb(),r.Ob(181,"li"),r.Ob(182,"strong"),r.fc(183,"Pick Random Rotation:"),r.Nb(),r.fc(184," Rotate x, y, or z."),r.Nb(),r.Ob(185,"li"),r.Ob(186,"strong"),r.fc(187,"Pick Random Direction:"),r.Nb(),r.fc(188," Rotate forwards or backwards."),r.Nb(),r.Ob(189,"li"),r.Ob(190,"strong"),r.fc(191,"X:"),r.Nb(),r.fc(192," Rotate X."),r.Nb(),r.Ob(193,"li"),r.Ob(194,"strong"),r.fc(195,"Y:"),r.Nb(),r.fc(196," Rotate Y."),r.Nb(),r.Ob(197,"li"),r.Ob(198,"strong"),r.fc(199,"Z:"),r.Nb(),r.fc(200," Rotate Z."),r.Nb(),r.Nb(),r.Mb(201,"mat-divider",6),r.Ob(202,"h2"),r.fc(203,"APScale"),r.Nb(),r.Mb(204,"img",11),r.Ob(205,"p"),r.fc(206,"APScale can be applied to any game object. It will scale it."),r.Nb(),r.Ob(207,"ul"),r.Ob(208,"li"),r.Ob(209,"strong"),r.fc(210,"Pick Random Scale:"),r.Nb(),r.fc(211," Pick a random direction to scale in: x, y, z."),r.Nb(),r.Ob(212,"li"),r.Ob(213,"strong"),r.fc(214,"X:"),r.Nb(),r.fc(215," Scale X."),r.Nb(),r.Ob(216,"li"),r.Ob(217,"strong"),r.fc(218,"Y:"),r.Nb(),r.fc(219," Scale Y."),r.Nb(),r.Ob(220,"li"),r.Ob(221,"strong"),r.fc(222,"Z:"),r.Nb(),r.fc(223," Scale Z."),r.Nb(),r.Nb(),r.Mb(224,"mat-divider",6),r.Ob(225,"h2"),r.fc(226,"APSquashStretch"),r.Nb(),r.Mb(227,"img",12),r.Ob(228,"p"),r.fc(229,"APSquashStretch can be applied to any game object. It will apply the animation principle of squashing and stretching using factors of density and stretchiness."),r.Nb(),r.Ob(230,"ul"),r.Ob(231,"li"),r.Ob(232,"strong"),r.fc(233,"Curve:"),r.Nb(),r.fc(234," Positive determines the y squash. Negative determines the x squash."),r.Nb(),r.Ob(235,"li"),r.Ob(236,"strong"),r.fc(237,"Stretchiness:"),r.Nb(),r.fc(238," How much it get's pulled apart."),r.Nb(),r.Ob(239,"li"),r.Ob(240,"strong"),r.fc(241,"Denseness:"),r.Nb(),r.fc(242," How much remains after. The thickness of it."),r.Nb(),r.Nb(),r.Mb(243,"mat-divider",6),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&e&&(r.Bb(6),r.ac("routerLink","/home"),r.Bb(3),r.ac("routerLink","/demo"))},directives:[c.c,c.b,c.a,n.b,b.a],styles:["home #home{background-color:#fff;width:100%;background-size:cover}home #home #home-form-wrapper{flex:1 0 auto!important;-webkit-flex:1 0 auto!important;justify-content:flex-start!important}home #home #home-form-wrapper #home-form{background-color:#fff;max-width:100%;padding:12px}home #home #home-form-wrapper #home-form mat-icon{color:#8e7bff;display:none!important}home #home p{padding-top:6px}home .home-photo{max-width:512px}"],encapsulation:2}),e})();var f=o("YUcS");const h=[{path:"",component:s}];let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({imports:[[n.c.forChild(h),i.a,a.a,b.b,f.a]]}),e})()}}]);