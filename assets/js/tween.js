app.directive('animacion', function() {



    // tl = new TimelineLite();
    // var spaceship = '.spaceship';

    // tl
    //     .fromTo(spaceship, .05 , {autoAlpha: 0, y: -300 , ease:Power4.easeIn})
    //     .to(spaceship, .1 , {autoAlpha: 0, x: 40, ease:Power4.easeOut})
    //     .set({}, {}, .2)
    //     .to(spaceship, .1 , {autoAlpha: 0, ease:Power4.easeOut});

    // var tween = TweenMax.to(spaceship, 0.5, {scale: 5, repeat: 5, yoyo: true});
    //
    // var scene = new ScrollMagic.Scene({
    //     triggerElement: '#nivel',
    //     triggerHook: .5,
    //     duration: '400%'/* How many pixels to scroll / animate */
    // })
    //
    // .setTween(tween)
    // .setPin(spaceship)
    // .addTo(scrollMagicController);
    //
    var scrollMagicController = new ScrollMagic.Controller();


    var tweenCirculo = TweenMax.from('.descripcion-content', 0.5, {opacity:0});

    var scene1 = new ScrollMagic.Scene({
        triggerElement: '.descripcion',
        triggerHook: .5,
        duration: '200px'
    })
    .setTween(tweenCirculo)
    // .addIndicators()
    .addTo(scrollMagicController);

    // var formulario = TweenMax.from('.formulario', 0.5, {opacity:0});
    //
    // var scene2 = new ScrollMagic.Scene({
    //     triggerElement: '.info-content',
    //     triggerHook: 0,
    //     duration: '200px'
    // })
    // .setTween(formulario)
    // .addIndicators()
    // .addTo(scrollMagicController);
    //
    //
    //
    // var paneles = TweenMax.from('.panel', 0.5, {opacity:0});
    //
    // var scene3 = new ScrollMagic.Scene({
    //     triggerElement: '.info-content',
    //     triggerHook: 0,
    //     duration: '200px'
    // })
    // .setTween(paneles)
    // .addIndicators()
    // .addTo(scrollMagicController);


    //
    // $('md-expansion-panel').each(function(){
    //
    //
    //     // tl
    //     //     .from(grupo1, .5, {opacity:0, repeat: 5})
    //     //     .from(grupo2, 1, {opacity:0, repeat: 5})
    //     //     .from(grupo3, 1.5, {opacity:0, repeat: 5});
    //
    //     var scene2 = new ScrollMagic.Scene({
    //         triggerElement: this.children[0],
    //         triggerHook: .5
    //     })
    //     .setClassToggle(this, 'fade-in')
    //     .addIndicators()
    //     .addTo(scrollMagicController);
    //
    // })

    // var controller = new ScrollMagic.Controller();
    //
    // var scene = new ScrollMagic.Scene({
	// 						triggerElement: "#trigger1"
	// 					})
	// 					.setTween("#animate1", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
	// 					.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
	// 					.addTo(controller);

    // var scrollMagicController = new ScrollMagic.Controller();
    //
    // $('md-expansion-panel').each(function(){
    //
    //     var scene2 = new ScrollMagic.Scene({
    //         triggerElement: this.children[0],
    //         triggerHook: .5
    //     })
    //     .setClassToggle(this, 'fade-in')
    //     .addIndicators()
    //     .addTo(scrollMagicController);
    //
    //

    // var scrollMagicController = new ScrollMagic.Controller();
    //
    // $('#panel').each(function(){
    //
    // var scene = new ScrollMagic
    //     .Scene({triggerElement: this.children[0], duration: 100%, triggerHook: .5})
	// 	.setTween("md-expansion-panel", {borderTop: "30px solid white", backgroundColor: "blue", scale: 0.7})
	// 	.addIndicators({name: "2 (duration: 300)"})
	// 	.addTo(scrollMagicController);
    //
    // }


});
