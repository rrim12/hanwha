$(function () {
    //헤더 햄버거바 애니메이션, 메뉴옆에서 나옴
    $(".bars").on("click", function () {
        $(".bar").toggleClass("wh_on");
        $(".up").toggleClass("on");
        $(".midd").toggleClass("on-m");
        $(".down").toggleClass("on-d");
        $(".ham_menu").toggleClass("side_on");
    });
    $(".bars").on("mouseenter", function () {
        $(".bar").addClass("bar_on");
    });
    $(".bars").on("mouseleave", function () {
        $(".bar").removeClass("bar_on");
    });

    //헤더 호버시 밑줄
    $(".main_menu li a").on("mouseenter", function () {
        $(this).children(".under_bar").addClass("under_on");
    });
    $(".main_menu li a").on("mouseleave", function () {
        $(this).children(".under_bar").removeClass("under_on");
    });
    $(".go_wrap a").on("mouseenter", function () {
        $(this).children(".under_bar").addClass("under_on");
    });
    $(".go_wrap a").on("mouseleave", function () {
        $(this).children(".under_bar").removeClass("under_on");
    });

    //헤더 예약 호버시 차오르는 색
    $(".reserv > a").on("mouseenter", function () {
        $(this).children(".circle").addClass("fill_up");
    });
    $(".reserv > a").on("mouseleave", function () {
        $(this).children(".circle").removeClass("fill_up");
    });
    $(".more_box").on("mouseenter", function () {
        $(this).children(".circle").addClass("fill_up");
    });
    $(".more_box").on("mouseleave", function () {
        $(this).children(".circle").removeClass("fill_up");
    });

    //타이틀 제목
    setTimeout(function () {
        $(".t_titl").addClass("come_in");
        $(".t_down").addClass("Rcome_in");
    });
    setTimeout(function () {
        $(".t_txt").addClass("come_up");
    }, 600);
    //슬라이드 호버시
    $(".main_imgs li").on("mouseenter", function () {
        $(this).children(".image_bg").stop().animate({ opacity: "1" });
        $(this).children(".more_box").stop().animate({ opacity: "1" });
    });
    $(".main_imgs li").on("mouseleave", function () {
        $(this).children(".image_bg").stop().animate({ opacity: "0" });
        $(this).children(".more_box").stop().animate({ opacity: "0" });
    });
    //슬라이드
    let total = $(".main_imgs li").length;
    let i = 0;

    function start() {
        timer = setInterval(function () {
            i++;
            if (i == total - 1) {
                $(".main_imgs")
                    .stop()
                    .animate({ "margin-left": "-500%" }, 1000, function () {
                        $(".main_imgs").css({ "margin-left": 0 });
                    });
                i = 0;
            } else {
                slid();
            }
            navi();
            fadeText();
        }, 3000);
    }
    function slid() {
        $(".main_imgs")
            .stop()
            .animate({ "margin-left": -i * 900 }, 1000);
    }
    function navi() {
        $(".navibar li").removeClass("colo_on");
        $(".navibar li").eq(i).addClass("colo_on");
    }
    function fadeText() {
        $(".resort_txt li").removeClass("showup");
        $(".resort_txt li").eq(i).addClass("showup");
    }

    start();
    //////////////////////////////////////////////////////////

    $(".next").on("click", function () {
        clearInterval(timer);
        i++;
        if (i == total - 1) {
            $(".main_imgs")
                .stop()
                .animate({ "margin-left": "-500%" }, 1000, function () {
                    $(".main_imgs").css({ "margin-left": 0 });
                });
            i = 0;
        } else {
            slid();
        }
        navi();
        fadeText();
        start();
    });

    ///////////////////////////////////////////////////////////

    $(".prev").on("click", function () {
        clearInterval(timer);
        i--;
        if (i < 0) {
            $(".main_imgs").css({ "margin-left": "-500%" });
            $(".main_imgs").stop().animate({ "margin-left": "-400%" }, 1000);
            i = 4;
        } else {
            slid();
        }
        navi();
        fadeText();
        start();
    });

    $(".navibar li").on("click", function () {
        clearInterval(timer);
        i = $(this).index();
        $(".main_imgs")
            .stop()
            .animate({ "margin-left": -i * 900 }, 1000);
        navi();
        fadeText();
        start();
    });

    //스크롤탑 이동버튼
    $(".top_butt").on("click", function () {
        $("html, body").stop().animate({ scrollTop: "0" });
    });
});
