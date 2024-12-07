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

    //슬라이드
    let total = $(".main_imgs li").length;
    let i = 0;
    function start() {
        stop = setInterval(function () {
            if (i == total - 1) {
                i = 0;
            } else {
                i++;
            }
            fade();
        }, 3000);
    }
    function fade() {
        $(".main_imgs >li").stop().fadeOut();
        $(".main_imgs >li").eq(i).stop().fadeIn();
        $(".resort_txt >li").stop().fadeOut();
        $(".resort_txt >li").eq(i).stop().fadeIn();
        $(".resort_txt >li").children("h2").removeClass("up");
        $(".resort_txt >li").eq(i).children("h2").addClass("up");
        $(".resort_txt >li")
            .children("p")
            .css({ opacity: "0", transform: "translateY(100px)" });
        $(".resort_txt >li")
            .eq(i)
            .children("p")
            .delay(200)
            .animate({ opacity: "1", transform: "translateY(0)" }, 800);
        $(".resort_txt >li")
            .children("a")
            .css({ opacity: "0", transform: "translateY(100px)" });
        $(".resort_txt >li")
            .eq(i)
            .children("a")
            .delay(500)
            .animate({ opacity: "1", transform: "translateY(0)" }, 800);
        $(".back_imgs >li").removeClass("zoom");
        $(".back_imgs >li").eq(i).addClass("zoom");
        $(".navi >li").removeClass("colo_on");
        $(".navi >li").eq(i).addClass("colo_on");
    }
    start();
    $(".next").on("click", function () {
        clearInterval(stop);
        if (i == total - 1) {
            i = 0;
        } else {
            i++;
        }
        fade();
        start();
    });

    $(".prev").on("click", function () {
        clearInterval(stop);
        if (i == 0) {
            i = total - 1;
        } else {
            i--;
        }
        fade();
        start();
    });

    $(".navi li").on("click", function () {
        clearInterval(stop);
        i = $(this).index();
        fade();
        start();
    });

    //스크롤탑 이동버튼
    $(".top_butt").on("click", function () {
        $("html, body").stop().animate({ scrollTop: "0" });
    });
});
