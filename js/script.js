var wrap = document.querySelector(".wrap"),
    header = document.querySelector(".header__inner"),
    headerLogo = header.querySelector(".js-header-logo"),
    btnPopup = document.querySelector(".js-open-popup"),
    modal = document.querySelector(".modal"),
    btnModalClose = modal.querySelector(".btn-modal-close"),
    modalDim = modal.querySelector(".modal__dim"),
    modalContent = modal.querySelector(".modal__content"),
    setModalHeight = function () {
        var e = window.innerHeight;
        modalContent.style.height = 80 * e / 100 + "px"
    },
    getScrollBarWidth = function () {
        document.body.style.overflow = "hidden";
        var e = document.body.clientWidth;
        return document.body.style.overflow = "scroll", (e -= document.body.clientWidth) || (e = document.body.offsetWidth - document.body.clientWidth), document.body.style.overflow = "", e
    },
    preventScroll = function (e) {
        var o = document.body,
            n = getScrollBarWidth();
        if (o.scrollHeight <= o.clientHeight) return !1;

        function t() {
            for (var e = 0; e < arguments.length; e++) arguments[e].style.paddingRight = n + "px"
        }
        document.body.classList.add("scroll-disabled"), t(wrap), t(header), wrap.style.backgroundColor = "#ffffff"
    },
    allowScroll = function () {
        wrap.style.paddingRight = 0, header.style.paddingRight = "0px", wrap.style.backgroundColor = "", document.body.classList.remove("scroll-disabled")
    },
    modalEvt = {
        open: function (e) {
            e.preventDefault(), preventScroll(), setModalHeight(), modal.classList.add("modal--opened")
        },
        close: function () {
            allowScroll(), modal.classList.remove("modal--opened")
        }
    },
    loadingDoneEvt = function () {
        this.setTimeout(function () {
            document.body.classList.remove("loading--ongoing"), document.body.classList.add("loading--hide")
        }, 800), controller.scrollTo(0)
    },
    initCommon = function () {
        loadingDoneEvt(), btnModalClose.addEventListener("click", modalEvt.close), modalDim.addEventListener("click", modalEvt.close), window.addEventListener("resize", setModalHeight), btnPopup.addEventListener("click", modalEvt.open), headerLogo.addEventListener("click", function (e) {
            e.preventDefault(), controller.scrollTo(0)
        })
    };
window.addEventListener("load", initCommon);
var isMobile = function (e) {
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
    }(navigator.userAgent || navigator.vendor || window.opera),
    prCont = document.querySelector(".pr__container"),
    controller = new ScrollMagic.Controller,
    header_tween_mail = TweenMax.to(".js-mail-address", .5, {
        scale: .9,
        rotation: 90,
        y: 102,
        alpha: .7
    }),
    header_tween_title = TweenMax.to(".js-header-title", .5, {
        x: "-100%",
        alpha: 0
    }),
    header_tween_logo = TweenMax.from(".js-header-logo", .5, {
        x: "-100%",
        alpha: 0
    }),
    visaul_tween_scroll = TweenMax.to(".js-scroll-down", .5, {
        alpha: 0
    }),
    visual_tween_bg = TweenMax.to(".js-visual-back", .8, {
        alpha: 0
    }),
    visual_tween_main = (new TimelineMax).to(".js-visual-content", 1, {
        alpha: 0,
        delay: .4,
        scale: .7
    }).to(".js-visual-hello", .8, {
        y: -120,
        alpha: 1
    }).to(".js-visual-hello", 1, {
        alpha: 0,
        delay: 1
    }),
    about_tween_profile = TweenMax.fromTo(".profile", 1, {
        y: "50%"
    }, {
        y: "0%"
    }),
    about_tween_connect = TweenMax.from(".section-connect-1 .section-connect__word", 1, {
        y: "-100%",
        alpha: 0,
        ease: Linear.easeNone
    }),
    project_tween_words = (new TimelineMax).from(".js-proWord-1", .8, {
        x: "70px"
    }).from(".js-proWord-2", .8, {
        x: "90px"
    }).from(".js-proWord-3", .8, {
        x: "110px"
    }),
    work_tween_connect = TweenMax.from(".section-connect-2 .section-connect__word", 1, {
        y: "-100%",
        alpha: 0,
        ease: Linear.easeNone
    }),
    pr_tween_connect = (new TimelineMax).from(".section-connect-3 .section-connect__word", 1, {
        y: "-100%",
        alpha: 0,
        ease: Linear.easeNone
    }).from(".section-connect-4 .section-connect__word", 1, {
        y: "-100%",
        alpha: 0,
        ease: Linear.easeNone
    }),
    pr_tween_scroll = TweenMax.to(".pr__container", 2, {
        x: "-80%",
        ease: Linear.easeNone
    }),
    headerScene = new ScrollMagic.Scene({
        triggerHook: 0,
        duration: "30%"
    }).setTween([header_tween_mail, header_tween_title, header_tween_logo, visaul_tween_scroll]),
    visualScene = new ScrollMagic.Scene({
        triggerHook: 0,
        duration: "115%"
    }).setTween([visual_tween_bg, visual_tween_main]),
    visualCont = document.querySelector("#visual"),
    visualPinScene = new ScrollMagic.Scene({
        triggerHook: 0,
        duration: "80%"
    }).setPin(visualCont).on("end", function (e) {
        visualCont.classList.add("fixed")
    }),
    aboutProfileScene = new ScrollMagic.Scene({
        triggerElement: "#trigger-2",
        duration: "70%",
        offset: "-200%"
    }).setTween([about_tween_profile]),
    aboutWordScene = new ScrollMagic.Scene({
        triggerElement: ".work",
        duration: "30%",
        offset: "-150%"
    }).setTween(about_tween_connect),
    recentWords = document.querySelectorAll(".recent__background-word"),
    recentScene = new ScrollMagic.Scene({
        triggerElement: ".recent",
        offset: 50,
        reverse: !1
    }).setClassToggle(".recent__background", "ani-recent-show"),
    workWordScene = new ScrollMagic.Scene({
        triggerElement: ".blog",
        duration: "30%",
        offset: "-100"
    }).setTween(work_tween_connect),
    prWordScene = new ScrollMagic.Scene({
        triggerElement: ".pr",
        duration: "25%",
        offset: "-250%"
    }).setTween(pr_tween_connect),
    prScrollScene = new ScrollMagic.Scene({
        triggerElement: ".pr",
        duration: "60%",
        offset: 120
    }).setTween(pr_tween_scroll);
headerLogo = document.querySelector(".js-header-logo");
controller.scrollTo(function (e) {
    TweenMax.to(window, .5, {
        scrollTo: {
            y: e
        }
    })
}), headerLogo.addEventListener("click", function (e) {
    e.preventDefault(), controller.scrollTo(0)
});
var isMobileSize = function () {
    return window.innerWidth < 980
};
if (isMobile) controller.addScene([headerScene, visualScene, visualPinScene, aboutProfileScene, aboutWordScene, workWordScene, prWordScene]), prCont.classList.add("isMobile");
else {
    var project_tween_up = TweenMax.staggerFromTo(".project-list__item", 1, {
            y: "100px"
        }, {
            y: 0
        }, .3),
        projectScene = new ScrollMagic.Scene({
            triggerElement: ".project",
            duration: "80%",
            offset: "-10%"
        }).setTween([project_tween_up, project_tween_words]);
    controller.addScene([headerScene, visualScene, visualPinScene, aboutProfileScene, aboutWordScene, projectScene, recentScene, workWordScene, prWordScene, prScrollScene])
}
var windowLoadEvt = function () {
        isMobileSize(), isMobileSize() ? (prScrollScene.enabled(!1), prCont.style.transform = "translateX(0%)") : prScrollScene.enabled(!0), isMobile && (prCont.style.transform = "translateX(50%)")
    },
    initScroll = function () {
        windowLoadEvt()
    },
    resizeEvt = function () {
        windowLoadEvt()
    };
window.addEventListener("load", initScroll), window.addEventListener("resize", resizeEvt);