// var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
//
// // build scenes
// new ScrollMagic.Scene({triggerElement: "#first"})
//     .setTween("#first > video", {y: "80%", ease: Linear.easeNone})
//     .addIndicators()
//     .addTo(controller);
//
// new ScrollMagic.Scene({triggerElement: "#second"})
//     .setTween("#second > div", {y: "80%", ease: Linear.easeNone})
//     .addIndicators()
//     .addTo(controller);


$(function () { // wait for document ready
    // init
    // var controller = new ScrollMagic.Controller({
    //     globalSceneOptions: {
    //         triggerHook: 'onLeave',
    //         duration: 0 // this works just fine with duration 0 as well
    //         // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
    //         // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
    //     }
    // });

    // get all slides
    // var slides = document.querySelectorAll(".section");

    // create scene for every slide

    // for (var i=0; i<slides.length; i++) {
    //     new ScrollMagic.Scene({
    //         triggerElement: slides[i]
    //     })
    //         .setPin(slides[i], {pushFollowers: false})
    //         .addIndicators()
    //         .addTo(controller);
    // }

    var controller = new ScrollMagic.Controller();

    // new ScrollMagic.Scene({
    //     triggerElement: '#video',
    //     triggerHook: 'onLeave',
    //     duration: 0
    // })
    //     .setPin('#video', {pushFollowers: false})
    //     .addIndicators()
    //     .addTo(controller);

    //
    // new ScrollMagic.Scene({
    //     triggerElement: '#benefits',
    //     triggerHook: 'onLeave',
    //     duration: 1
    // })
    //     .setPin('#benefits', {})
    //     .addIndicators()
    //     .addTo(controller);

    // new ScrollMagic.Scene({
    //     triggerElement: '#benefits',
    //     triggerHook: 'onEnter',
    //     duration: 0
    // })
    //     .setPin('#video', {})
    //     .addIndicators()
    //     .addTo(controller);


    // var studyTimeScene = new ScrollMagic.Scene({
    //     triggerElement: '#study_time',
    //     triggerHook: 'onEnter'
    // })
    //     .setClassToggle("#study_time", "is-active")
    //     .addIndicators()
    //     .addTo(controller);
    //
    // var homeStudyScene = new ScrollMagic.Scene({
    //     triggerElement: '#home_study',
    //     triggerHook: 'onEnter'
    // })
    //     .setClassToggle("#home_study", "is-active")
    //     .addIndicators()
    //     .addTo(controller);
    //
    // var explainDetailsScene = new ScrollMagic.Scene({
    //     triggerElement: '#explain_details',
    //     triggerHook: 'onEnter'
    // })
    //     .setClassToggle("#explain_details", "is-active")
    //     .addIndicators()
    //     .addTo(controller);
    //
    // var studyScene = new ScrollMagic.Scene({
    //     triggerElement: '#study_time',
    //     triggerHook: 'onEnter'
    // })
    //     .setClassToggle("#study_time", "is-active")
    //     .addIndicators()
    //     .addTo(controller);
    //
    // var benefitsScene = new ScrollMagic.Scene({
    //     triggerElement: '#benefits',
    //     triggerHook: 'onEnter',
    //     offset: 10
    // })
    //     .setClassToggle("#benefits", "is-active")
    //     .addIndicators()
    //     .addTo(controller);
    //
    // var scene = new ScrollMagic.Scene({
    //     triggerElement: "#study_time",
    //     duration: '100%'
    // })
    //     .setTween("#study_time > img", {rotation: 10, ease: Linear.easeNone})
    //     .addIndicators()
    //     .addTo(controller);
    //
    // var scene = new ScrollMagic.Scene({
    //     triggerElement: "#home_study",
    //     duration: '100%'
    // })
    //     .setTween("#home_study > img", {rotation: 5, ease: Linear.easeNone})
    //     .addIndicators()
    //     .addTo(controller);
    //
    // var scene = new ScrollMagic.Scene({
    //     triggerElement: "#explain_details",
    //     duration: '100%'
    // })
    //     .setTween("#explain_details > img", {rotation: 0, ease: Linear.easeNone})
    //     .addIndicators()
    //     .addTo(controller);
    //
    // var scene = new ScrollMagic.Scene({
    //     triggerElement: "#photos",
    //     triggerHook: 'onEnter'
    // })
    //     .setClassToggle("#photos", "is-active")
    //     .addIndicators()
    //     .addTo(controller);
    //
    // var scene = new ScrollMagic.Scene({
    //     triggerElement: "#training_video",
    //     triggerHook: 'onEnter'
    // })
    //     .setClassToggle("#training_video", "is-active")
    //     .addIndicators()
    //     .addTo(controller);

    controller.scrollTo(function (newScrollPos) {
        $("html, body").animate({scrollTop: newScrollPos});
    });

    $('#scrollDown').click(function () {
        controller.scrollTo("#benefits");
    });

    lightGallery(document.getElementById('lightgallery'), {
        thumbnail: true
    });
});
