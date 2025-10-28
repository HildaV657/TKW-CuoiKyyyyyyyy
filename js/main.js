$(document).ready(function(){
    // 1. Khởi tạo Slider Banner
    $('.slide__banner').owlCarousel({
        loop: false,
        margin: 0,
        dots: false,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        rewind: true,
        animateOut: "fadeOut",
        smartSpeed: 1000,
        responsive:{ 0:{ items: 1 }, 820:{ items: 1 }, 1300:{ items: 1 } }
    });

    // 2. Khởi tạo Slider Tour (Quan trọng)
    $('.slide__tour').owlCarousel({
        loop: true,
        margin: 25,
        dots: false,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 5000,
        slideTransition: 'linear',
        autoplayHoverPause: true,
        smartSpeed: 1000,
        responsive:{ 0:{ items: 1 }, 820:{ items: 2 }, 1300:{ items: 3 } }
    });
    
    // Khối điều chỉnh autoplay trên mobile (Giữ lại để tối ưu UX)
    if ($(window).width() < 768) {
        $('.slide__tour').trigger('stop.owl.autoplay');
    } else {
        $('.slide__tour').trigger('play.owl.autoplay');
    }
});

// Xử lý menu ngôn ngữ (Giả định có sử dụng)
$('.language p').click(function(){
    $(this).next('.main__lg').toggleClass('active');
    $(this).toggleClass('rotate-icon');
});
$(document).mouseup(function (e) {
    if ($(e.target).closest(".language p").length === 0 && $(e.target).closest(".main__lg").length === 0) {
        $(".main__lg").removeClass("active");
        $(".language p").removeClass('rotate-icon'); 
    }
});

// Header cố định khi cuộn
$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('header').addClass('active');
    }else{
        $('header').removeClass('active');
    }
});

// Xử lý Menu Mobile (Rất quan trọng cho mobile)
$('.menu__bar').click(function(){
    $('.menu__mobile').addClass('active');
    $('.overlay').addClass('active');
});
$('.dropdown__menu__mobile').hide();
$('.show__menu').click(function(){
    $(this).parent('.menu__title__mobile').next('.dropdown__menu__mobile').slideToggle(300);
    $(this).parents('.sub__menu__mobile').toggleClass('rotate__icons');
});
$('.overlay').click(function(){
    $(this).removeClass('active');
    $('.search__tour').removeClass('show');
    $('.menu__mobile').removeClass('active');
});
$('.close-menu').click(function(){
    $('.overlay').removeClass('active');
    $('.menu__mobile').removeClass('active');
});

// Back-to-Top (Nút cuộn lên đầu trang)
$(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
        $('.back-to-top').addClass('animate');
    }
    else {
        $('.back-to-top').removeClass('animate');
    }
});
$('.back-to-top').click(function () {
    $('html').animate({
        scrollTop: 0
    }, 1000);
});

// Chức năng cuộn mượt đến anchor
$(".goto").click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - $(this).outerHeight() - 40
    }, 1000);
});