$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page01",
            start: "top",
            end: "100%",
            pin: true,
            scrub: 2,
        },
    }).to(
        ".page01",
        {
            transform: " translateX(0px)",
            opacity: "1",
            duration: 1,
        },
        0.1
    );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page02",
            start: "top",
            end: "100%",
            pin: true,
            scrub: 2,
        },
    })

        .to(
            ".experience",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            0.5
        )
        .to(
            ".p2_titl",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            1
        )
        .to(
            ".p2_txt",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            1.5
        )
        .to(
            ".turtle",
            {
                transform: " translateY(0px) rotate(0deg)",
                opacity: "1",
                duration: 1,
            },
            1.5
        )
        .to(
            ".fish",
            {
                transform: " translateY(0px) rotate(0deg)",
                opacity: "1",
                duration: 1,
            },
            1.8
        )
        .to(
            ".kids",
            {
                transform: " translateY(0px) rotate(0deg)",
                opacity: "1",
                duration: 1,
            },
            2.5
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
            " .golf li:nth-child(1)",
            {
                transform: " translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            " .golf li:nth-child(2)",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            0.5
        )
        .to(
            " .golf li:nth-child(4)",
            {
                transform: " translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            0.9
        )
        .to(
            " .golf li:nth-child(3)",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            1.3
        );
});
