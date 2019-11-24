$(function () {
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '#study_time',
        triggerHook: 'onEnter'
    })
        .setClassToggle("#study_time", "is-active")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#home_study',
        triggerHook: 'onEnter'
    })
        .setClassToggle("#home_study", "is-active")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#explain_details',
        triggerHook: 'onEnter'
    })
        .setClassToggle("#explain_details", "is-active")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#study_time',
        triggerHook: 'onEnter'
    })
        .setClassToggle("#study_time", "is-active")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#benefits',
        triggerHook: 'onEnter',
        offset: 10
    })
        .setClassToggle("#benefits", "is-active")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#study_time",
        duration: '100%'
    })
        .setTween("#study_time > img", {rotation: 10, ease: Linear.easeNone})
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#home_study",
        duration: '100%'
    })
        .setTween("#home_study > img", {rotation: 5, ease: Linear.easeNone})
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#explain_details",
        duration: '100%'
    })
        .setTween("#explain_details > img", {rotation: 0, ease: Linear.easeNone})
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#photos",
        triggerHook: 'onEnter'
    })
        .setClassToggle("#photos", "is-active")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#training_video",
        triggerHook: 'onEnter'
    })
        .setClassToggle("#training_video", "is-active")
        .addTo(controller);

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
