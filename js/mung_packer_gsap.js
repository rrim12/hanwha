$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page01",
            start: "top",
            end: "50%",
            pin: true,
            scrub: 2,
        },
    })
        .to(
            ".park",
            {
                transform: " translateX(0px) rotate(0deg)",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            ".picnic",
            {
                transform: " translateX(0px) rotate(0deg)",
                opacity: "1",
                duration: 1,
            },
            0.5
        )
        .to(
            ".txtslid1",
            {
                transform: " translateY(0px) rotate(0deg)",
                opacity: "1",
                duration: 1,
            },
            1.0
        )
        .to(
            ".txtslid2",
            {
                transform: " translateY(0px) rotate(0deg)",
                opacity: "1",
                duration: 1,
            },
            1.5
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page02",
            start: "-70%",
            end: "30%",
            pin: false,
            scrub: 2,
        },
    })
        .to(
            ".p2_txt > h2",
            {
                "letter-spacing": "0px",
                transform: "scale(1.0)",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            ".p2_txt > a",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            0.3
        )
        .to(
            ".sleepPet",
            {
                transform: " translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            0.8
        )
        .to(
            ".lookupPet",
            {
                transform: " translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            0.8
        )
        .to(
            ".puppy h2",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            1.2
        )
        .to(
            ".puppy p",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            1.6
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page03",
            start: "top",
            end: "60%",
            pin: true,
            scrub: 2,
        },
    })
        .to(
            ".service > li:nth-child(1)",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            ".service > li:nth-child(1)",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            0.2
        )
        .to(
            ".service > li:nth-child(1) .p3_bg",
            {
                transform: " translateY(0px)",
                duration: 1,
            },
            0.5
        )
        .to(
            ".service > li:nth-child(2)",
            {
                transform: " translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            0.3
        )
        .to(
            ".service > li:nth-child(2) .p3_bg",
            {
                transform: " translateX(0px)",
                duration: 1,
            },
            0.8
        )
        .to(
            ".service > li:nth-child(3)",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            1.0
        )
        .to(
            ".service > li:nth-child(3) .p3_bg",
            {
                transform: " translateY(0px)",
                duration: 1,
            },
            1.5
        );
});
