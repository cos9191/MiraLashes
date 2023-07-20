const catalogSwiperNodes = document.querySelectorAll('.catalog__swiper-container');
const featuresSwiperNode = document.querySelector('.features__swiper');
const reviewsSwiperNode = document.querySelector('.reviews__swiper');
const staffSwiperNode = document.querySelector('.staff__swiper');

export const initSwiper = () => {

    if (catalogSwiperNodes) {

        catalogSwiperNodes.forEach(function (swiperNode) {
            const galleryTop = swiperNode.querySelector('.catalog__swiper');
            const galleryThumbs = swiperNode.querySelector('.catalog-thumbs__swiper');


            if (galleryTop && galleryThumbs) {
                const mainSwiper = new Swiper(galleryTop, { // eslint-disable-line
                    loop: true,
                    initialSlide: 1,

                    zoom: {
                        // toggle: true,
                        // maxRatio: 2,
                        minRatio: 1,
                    },

                    thumbs: {
                        swiper: {
                            el: galleryThumbs,
                            // loop: true,
                            // loopedSlides: 2,
                            initialSlide: 1,
                            centeredSlides: true,
                            spaceBetween: 10,
                            slideToClickedSlide: true,
                            slidesPerView: 3,
                            watchSlidesProgress: true,
                            watchSlidesVisibility: true,

                            breakpoints: {
                                // when window width is >= 768px
                                768: {
                                    centeredSlides: false,
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                            },
                        }
                    }
                });
            }
        });
    }


    if (featuresSwiperNode) {
        const featuresSwiper = new Swiper(featuresSwiperNode, { // eslint-disable-line

            loop: true,
            slidesPerView: 1,

            navigation: {
                nextEl: '.features__swiper-button-next',
                prevEl: '.features__swiper-button-prev',
            },

            thumbs: {
                swiper: {
                    el: '.features-thumbs__swiper',
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }
        });
    }

    if (reviewsSwiperNode) {
        const reviewsSwiper = new Swiper(reviewsSwiperNode, { // eslint-disable-line

            loop: true,
            autoHeight: true,
            slidesPerView: 1,
            watchOverflow: true,

            breakpoints: {
                // when window width is >= 1199px
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },

            navigation: {
                nextEl: '.reviews__swiper-button-next',
                prevEl: '.reviews__swiper-button-prev',
            },
        });
    }

    if (staffSwiperNode) {
        const staffSwiper = new Swiper(staffSwiperNode, { // eslint-disable-line

            loop: true,
            autoHeight: true,
            slidesPerView: 1,

            navigation: {
                nextEl: '.staff__swiper-button-next',
                prevEl: '.staff__swiper-button-prev',
            },
        });
    }
};
