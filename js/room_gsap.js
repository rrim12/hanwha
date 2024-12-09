$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page01",
            start: "top",
            end: "100%",
            pin: true,
            scrub: 2,
        },
    })
        .to(
            ".p1_bg",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            ".bed > li:nth-child(1)",
            {
                transform: " translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            0.5
        )
        .to(
            ".bed > li:nth-child(3)",
            {
                transform: " translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            0.5
        )
        .to(
            ".cushion",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            1
        )
        .to(
            ".bedding",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            1.5
        )
        .to(
            ".p1txt_up",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            2.0
        )
        .to(
            ".p1txt_up2",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            2.5
        )
        .to(
            ".p1Up",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            3.0
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page02",
            start: "-40%",
            end: "center",
            pin: false,
            scrub: 2,
        },
    })
        .to(
            ".amenity > li:nth-child(1)",
            {
                transform: " translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            ".amenity > li:nth-child(2)",
            {
                transform: " translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            ".amenity > li:nth-child(3)",
            {
                transform: " translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            0.6
        )
        .to(
            ".amenity > li:nth-child(4)",
            {
                transform: " translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            0.6
        )
        .to(
            ".bf_bg",
            {
                bottom: "0px",
                opacity: "1",
                duration: 1,
            },
            1.5
        )
        .to(
            ".breakfast > img",
            {
                transform: " translateX(-50%) translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            2.3
        )
        .to(
            ".bf_up",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            3.0
        )
        .to(
            ".bf_txt1",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            3.0
        )
        .to(
            ".bf_txt2",
            {
                transform: "  translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            3.5
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page03",
            start: "top",
            end: "100%",
            pin: true,
            scrub: 2,
        },
    })
        .to(
            ".back_bg_up",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            ".back_bg_down",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            ".p3_wrap",
            {
                top: "50%",
                opacity: "1",
                duration: 1,
            },
            0.3
        );
});
