$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page01",
            start: "top",
            end: "200%",
            pin: true,
            scrub: 2,
        },
    })
        .to(
            ".resort_img1",
            {
                transform: " translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            ".resort_img2",
            {
                transform: " translateX(0px)",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            ".p1_titl1",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            0.6
        )
        .to(
            ".p1_titl2",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            0.6
        )
        .to(
            ".p1_txt1",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            1.5
        )
        .to(
            ".p1_txt2",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            1.5
        );
    let list = gsap.utils.toArray(".room");
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page02",
            pin: true,
            scrub: 2,
            start: "top",
            end: "200%",
        },
    })
        .to(
            ".p2_title",
            {
                transform: " translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            0.1
        )
        .to(
            ".p2_txt",
            {
                transform: " translate(-50%)",
                opacity: "1",
                duration: 0.5,
            },
            0.5
        )
        .to(list, {
            xPercent: 100 * (list.length - 2.5),
        });
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page03",
            start: "top",
            end: "200%",
            pin: true,
            scrub: 2,
        },
    })
        .to(
            ".p3_title",
            {
                left: "150px",
                opacity: "1",
                duration: 0.3,
            },
            0.1
        )
        .to(
            ".p3_img",
            {
                left: "0px",
                opacity: "1",
                duration: 0.3,
            },
            0.2
        )
        .to(
            ".p3_txt",
            {
                transform: " translate(-50%)",
                opacity: "1",
                duration: 0.2,
            },
            0.6
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page04",
            start: "top",
            end: "200%",
            pin: true,
            scrub: 2,
        },
    })
        .to(
            ".p4_title",
            {
                transform: " translateY(0%)",
                opacity: "1",
                duration: 0.2,
            },
            0.1
        )
        .to(
            ".p4_txt",
            {
                transform: " translateY(0%)",
                opacity: "1",
                duration: 0.2,
            },
            0.3
        )
        .to(
            ".p4_img1",
            {
                transform: " translateY(0%) rotate(0deg)",
                opacity: "1",
                duration: 1,
            },
            0.5
        )
        .to(
            ".p4_img2",
            {
                transform: " translateY(0%) rotate(0deg)",
                opacity: "1",
                duration: 1,
            },
            0.9
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".reservation",
            start: "-80%",
            end: "-10",
            pin: false,
            scrub: 2,
        },
    }).to(
        ".imgBox",
        {
            transform: " translateY(-100%)",
            duration: 1,
        },
        0.5
    );
});
