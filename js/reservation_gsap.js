$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page01",
            start: "top",
            end: "150%",
            pin: true,
            scrub: 2,
        },
    })
        .to(
            ".reservs > li:nth-child(1)",
            {
                transform: " translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            ".reservs > li:nth-child(2)",
            {
                transform: " translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            ".p1_txt > h2",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            0.5
        )
        .to(
            " .p1_txt > p",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            1.0
        )
        .to(
            " .box",
            {
                top: "55%",
                opacity: "1",
                duration: 1,
            },
            1.5
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page02",
            start: "-40%",
            end: "50%",
            pin: false,
            scrub: 2,
        },
    })
        .to(
            ".page02 .back_bg",
            {
                left: "50%",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            ".pic_bg",
            {
                left: "50%",
                opacity: "1",
                duration: 1,
            },
            0.5
        )
        .to(
            ".cs_process > li:nth-child(1)",
            {
                transform: "translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            1.0
        )
        .to(
            ".cs_process > li:nth-child(2)",
            {
                transform: "translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            1.3
        )
        .to(
            ".cs_process > li:nth-child(3)",
            {
                transform: "translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            1.6
        )
        .to(
            ".cs_process > li:nth-child(4)",
            {
                transform: "translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            1.9
        )
        .to(
            ".cs_process > li:nth-child(5)",
            {
                transform: "translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            2.2
        )
        .to(
            ".cs_process > li:nth-child(6)",
            {
                transform: "translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            2.5
        )
        .to(
            ".cs_process > li:nth-child(7)",
            {
                transform: "translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            2.8
        )
        .to(
            ".cs_service li:nth-child(1)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            3.0
        )
        .to(
            ".cs_service li:nth-child(2)",
            {
                transform: "translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            3.4
        )
        .to(
            ".cs_service li:nth-child(3)",
            {
                transform: "translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            3.9
        )
        .to(
            ".cs_service li:nth-child(4)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            4.5
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page03",
            start: "-10%",
            end: "150%",
            pin: true,
            scrub: 2,
        },
    })
        .to(
            ".page03 .back_bg ",
            {
                left: "50%",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            ".pic_bg2",
            {
                left: "50%",
                opacity: "1",
                duration: 1,
            },
            0.5
        )
        .to(
            ".search_wrap",
            {
                top: "280px",
                opacity: "1",
                duration: 1,
            },
            1.3
        )
        .to(
            ".search_box h3",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            1.7
        )
        .to(
            ".q_and_a > li:nth-child(1)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            2.0
        )
        .to(
            ".q_and_a > li:nth-child(2)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            2.3
        )
        .to(
            ".q_and_a > li:nth-child(3)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            2.6
        )
        .to(
            ".q_and_a > li:nth-child(4)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            2.9
        )
        .to(
            ".q_and_a > li:nth-child(5)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            3.2
        )
        .to(
            ".box_navi",
            {
                bottom: "-100px",
                opacity: "1",
                duration: 1,
            },
            3.5
        );
});
