const staffSwiperNode = document.querySelector('.staff__swiper');
const reviewsSwiperNode = document.querySelector('.reviews__swiper');

export const initSwiper = () => {
    if (staffSwiperNode) {
        const staffSwiper = new Swiper('.staff__swiper', { // eslint-disable-line

            direction: 'horizontal',
            loop: true,
            slidesPerView: 1,

            navigation: {
                nextEl: '.staff__swiper-button-next',
                prevEl: '.staff__swiper-button-prev',
            },
        });
    }

    if (reviewsSwiperNode) {
        const reviewsSwiper = new Swiper('.reviews__swiper', { // eslint-disable-line

            direction: 'horizontal',
            loop: false,
            autoHeight: true,
            slidesPerView: 1,

            navigation: {
                nextEl: '.reviews__swiper-button-next',
                prevEl: '.reviews__swiper-button-prev',
            },
        });
    }
};
