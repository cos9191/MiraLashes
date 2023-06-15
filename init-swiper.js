const promoSwiperNode = document.querySelector('.promo__swiper');
const featuresSwiperNode = document.querySelector('.features__swiper');
const reviewsSwiperNode = document.querySelector('.reviews__swiper');
const staffSwiperNode = document.querySelector('.staff__swiper');

export const initSwiper = () => {
    if (promoSwiperNode) {
        const promoSwiper = new Swiper('.promo__swiper', { // eslint-disable-line

            loop: true,
            slidesPerView: 1,
            watchOverflow: true,
            // initialSlide: 0,
            // centeredSlides: true,

            breakpoints: {
                // when window width is >= 1199px
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },

            navigation: {
                nextEl: '.promo__swiper-button-next',
                prevEl: '.promo__swiper-button-prev',
            },
        });
    }

    if (featuresSwiperNode) {
        const featuresSwiper = new Swiper('.features__swiper', { // eslint-disable-line

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
        const reviewsSwiper = new Swiper('.reviews__swiper', { // eslint-disable-line

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
        const staffSwiper = new Swiper('.staff__swiper', { // eslint-disable-line

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
