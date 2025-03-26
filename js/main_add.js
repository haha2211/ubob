const el = $('.number_animate');
let i = 0;
let numStart = el.position().top - 1000;
var $window = $(window);
var timer;
var isStatus = 0;
let winWidth = $(window).width();

$(window).scroll(function(event) {
    let scroll = $window.scrollTop() + ($window.height());
    clearTimeout(timer);
    if (i == 0 && $(window).scrollTop() > numStart) {
        $('.number_animate').each(function () {
            let size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length-1 : 0;
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1000,
                step: function (func) {
                    $(this).text(parseFloat(func).toFixed(size));
                }
            });
            i = 1;
        });
        $('.number_animate2').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 1000,
                step: function (func) {
                    $(this).text(Math.ceil(func).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                }
            });
            i = 1;
        });
    }
    timer = setTimeout(function() {
        if(winWidth > 768) {
            pcScrollEvent();
        }
    }, 10);
});

function pcScrollEvent() {
    let documentHeight = $(document).scrollTop();
    let imgTriggerOne = $('.rolling_1').offset().top;
    let imgTriggerOneHeight = $('.rolling_1').outerHeight() / 2;
    let imgTriggerOneVal = imgTriggerOne - imgTriggerOneHeight;

    let imgTriggerTwo = $('.rolling_2').offset().top;
    let imgTriggerTwoHeight = $('.rolling_2').outerHeight() / 2;
    let imgTriggerTwoVal = imgTriggerTwo - imgTriggerTwoHeight;

    let imgTriggerThree = $('.rolling_3').offset().top;
    let imgTriggerThreeHeight = $('.rolling_3').outerHeight() / 2;
    let imgTriggerThreeVal = imgTriggerThree - imgTriggerThreeHeight;

    let imgTriggerFour = $('.rolling_4').offset().top;
    let imgTriggerFourHeight = $('.rolling_4').outerHeight() / 2;
    let imgTriggerFourVal = imgTriggerFour - imgTriggerFourHeight;

    let imgFixedDom = $('.split_img_box');

    let imgActiveDom = $('.split_img');
    let imgActiveDomOne = $('.split_img.one');
    let imgActiveDomTwo = $('.split_img.two');
    let imgActiveDomThree = $('.split_img.three');
    let imgActiveDomFour = $('.split_img.four');


    if (documentHeight >= imgTriggerOneVal && documentHeight < imgTriggerOne) {
        if(isStatus !== 1) {
            imgFixedDom.removeClass('active');
            imgFixedDom.removeClass('finish');
            imgFixedDom.addClass('remove');
            imgActiveDomOne.addClass('on');
            isStatus = 1;
        }
    } else if (documentHeight >= imgTriggerOne && documentHeight < imgTriggerTwoVal) {
        if(isStatus !== 7) {
            imgFixedDom.removeClass('finish');
            imgFixedDom.addClass('active');
            imgActiveDom.removeClass('on');
            imgActiveDomOne.addClass('on');
            isStatus = 7;
        }
    } else if (documentHeight >= imgTriggerTwoVal && documentHeight < imgTriggerThreeVal) {
        if(isStatus !== 2) {
            imgFixedDom.removeClass('finish');
            imgFixedDom.addClass('active');
            imgActiveDom.removeClass('on');
            imgActiveDomTwo.addClass('on');
            isStatus = 2;
        }
    } else if (documentHeight >= imgTriggerThreeVal && documentHeight < imgTriggerFourVal) {
        if(isStatus !== 3) {
            imgFixedDom.removeClass('finish');
            imgFixedDom.addClass('active');
            imgActiveDom.removeClass('on');
            imgActiveDomThree.addClass('on');
            isStatus = 3;
        }
    } else if (documentHeight >= imgTriggerFourVal && documentHeight < imgTriggerFour) {
        if(isStatus !== 4) {
            imgActiveDom.removeClass('on');
            imgActiveDomFour.addClass('on');
            imgFixedDom.removeClass('finish');
            isStatus = 4;
        }
    } else if (documentHeight >= imgTriggerFour) {
        if(isStatus != 5) {
            imgFixedDom.addClass('finish');
            isStatus = 5;
        }
    }
    else {
        if(isStatus !== 6) {
            imgFixedDom.removeClass('active');
            imgActiveDom.removeClass('on');
            imgActiveDomOne.addClass('on');
            isStatus = 6;
        }
    }
};

new Swiper(".review_swiper", {
    width: 340,
    slidesPerView: 'auto',
    spaceBetween: 30,
    initialSlide: 1,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        350: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 10,
        }
    }
});
new Swiper(".edu_swiper", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// bottom_floating
$(function () {
    let fixScroll = 0;
    const contH = document.querySelector('#container').offsetHeight;
    const contOff = contH - 1000;
    function bottomFloating (event) {
        let scroll = $(this).scrollTop();
        if (scroll > 300 && scroll < contOff) {
            $('.bottom_floating').addClass('show');
        } else {
            $('.bottom_floating').removeClass('show');
        }
        fixScroll = scroll;
    }
    $(window).scroll(bottomFloating);
    $(window).resize(bottomFloating);
});

$('.split_btn span').each(function () {
    $(this).click(function () {
        $('.split_btn span').removeClass('on');
        $(this).addClass('on');
    });
})
const itemTab = document.querySelector('.split_btn');
const item = document.querySelectorAll('.item');
itemTab?.addEventListener('click', (e) => {
    console.log(item);
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    item.forEach((item) => {
        if (filter === '*' || filter === item.dataset.type) {
            item.style.display = 'block'
        } else {
        item.style.display = 'none'
        }
    });
});