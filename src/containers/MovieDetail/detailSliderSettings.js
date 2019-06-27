const settings = {
    infinite: false,
    speed: 700,
    slidesToScroll: 8,
    slidesToShow: 8,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1900,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 8,
            }
        },
        {
            breakpoint: 1770,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 7,
            }
        },
        {
            breakpoint: 1542,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
            }
        },
        {
            breakpoint: 1350,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 1142,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,

            }
        },
        {
            breakpoint: 922,
            settings: {
                className: "slider variable-width",
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: true

            }
        }     
    ]
};

export default settings;