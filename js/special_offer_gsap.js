$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page01",
            start: "-10%",
            end: "30%",
            pin: false,
            scrub: 2,
        },
    })
        .to(
            " .p1_txt h2",
            {
                transform: " translateY(0px) rotate(0deg)",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            " .p1_txt p",
            {
                transform: " translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            0.8
        )
        .to(
            ".promo_box > li:nth-child(1)",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            1.0
        )
        .to(
            ".promo_box > li:nth-child(2)",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            1.5
        )
        .to(
            ".promo_box > li:nth-child(3)",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            2.0
        )
        .to(
            ".promo_box > li:nth-child(4)",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            2.5
        )
        .to(
            ".promo_box > li:nth-child(5)",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            3.0
        )
        .to(
            ".promo_box > li:nth-child(6)",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            3.5
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page02",
            start: "-55%",
            end: "20%",
            pin: false,
            scrub: 2,
        },
    })
        .to(
            ".event_box > li:nth-child(1)",
            {
                transform: "rotateY(180deg)",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            ".event_box > li:nth-child(1) .event_bg",
            {
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            ".event_box > li:nth-child(1) .e_txt",
            {
                transform: "rotateY(180deg)",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            ".event_txt h2",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            0.3
        )
        .to(
            ".event_txt p",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            0.5
        )
        .to(
            ".event_box > li:nth-child(3)",
            {
                transform: "rotateY(180deg)",
                opacity: "1",
                duration: 1,
            },
            1.0
        )
        .to(
            ".event_box > li:nth-child(3) .event_bg",
            {
                opacity: "1",
                duration: 1,
            },
            1.0
        )
        .to(
            ".event_box > li:nth-child(3) .e_txt",
            {
                transform: "rotateY(180deg)",
                opacity: "1",
                duration: 1,
            },
            1.0
        )
        .to(
            ".event_box > li:nth-child(4)",
            {
                transform: "rotateY(180deg)",
                opacity: "1",
                duration: 1,
            },
            1.3
        )
        .to(
            ".event_box > li:nth-child(4) .event_bg",
            {
                opacity: "1",
                duration: 1,
            },
            1.3
        )
        .to(
            ".event_box > li:nth-child(4) .e_txt",
            {
                transform: "rotateY(180deg)",
                opacity: "1",
                duration: 1,
            },
            1.3
        )
        .to(
            ".event_box > li:nth-child(5)",
            {
                transform: "rotateY(180deg)",
                opacity: "1",
                duration: 1,
            },
            1.6
        )
        .to(
            ".event_box > li:nth-child(5) .event_bg",
            {
                opacity: "1",
                duration: 1,
            },
            1.6
        )
        .to(
            ".event_box > li:nth-child(5) .e_txt",
            {
                transform: "rotateY(180deg)",
                opacity: "1",
                duration: 1,
            },
            1.6
        )
        .to(
            ".event_box > li:nth-child(6)",
            {
                transform: "rotateY(180deg)",
                opacity: "1",
                duration: 1,
            },
            1.9
        )
        .to(
            ".event_box > li:nth-child(6) .event_bg",
            {
                opacity: "1",
                duration: 1,
            },
            1.9
        )
        .to(
            ".event_box > li:nth-child(6) .e_txt",
            {
                transform: "rotateY(180deg)",
                opacity: "1",
                duration: 1,
            },
            1.9
        )
        .to(
            ".event_box > li:nth-child(7)",
            {
                transform: "rotateY(180deg)",
                opacity: "1",
                duration: 1,
            },
            2.2
        )
        .to(
            ".event_box > li:nth-child(7) .event_bg",
            {
                opacity: "1",
                duration: 1,
            },
            2.2
        )
        .to(
            ".event_box > li:nth-child(7) .e_txt",
            {
                transform: "rotateY(180deg)",
                opacity: "1",
                duration: 1,
            },
            2.2
        )
        .to(
            ".event_box > li:nth-child(8)",
            {
                transform: "rotateY(180deg)",
                opacity: "1",
                duration: 1,
            },
            2.5
        )
        .to(
            ".event_box > li:nth-child(8) .event_bg",
            {
                opacity: "1",
                duration: 1,
            },
            2.5
        )
        .to(
            ".event_box > li:nth-child(8) .e_txt",
            {
                transform: "rotateY(180deg)",
                opacity: "1",
                duration: 1,
            },
            2.5
        );
});
