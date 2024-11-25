$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page01",
            start: "top",
            end: "200%",
            pin: true,
            scrub: 2,
            markers: true,
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
    gsap.to(list, {
        xPercent: 100 * (list.length - 2.1),
        scrollTrigger: {
            trigger: ".page02",
            pin: true,
            scrub: 2,
            start: "top",
            end: "200%",
            markers: true,
        },
    });
    // .to(
    //     ".p2_title",
    //     {
    //         transform: " translateY(0px)",
    //         opacity: "1",
    //         duration: 1,
    //     },
    //     1
    // );
});
