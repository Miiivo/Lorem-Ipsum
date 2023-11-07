$('.advantages__arrow').on('click', function () {
    // Скрыть все другие открытые элементы
    $('.advantages__subtitle.open').not($(this).parent().parent().find('.advantages__subtitle')).removeClass('open');
    $('.advantages__arrow.rotate').not($(this)).removeClass('rotate');
    $('.advantages__title.another-color').not($(this).parent().find('.advantages__title')).removeClass('another-color');
  
    // Показать или скрыть текущий элемент
    $(this).toggleClass('rotate');
    $(this).parent().parent().find('.advantages__subtitle').toggleClass("open");
    $(this).parent().find('.advantages__title').toggleClass("another-color");
  });
  
  $('.advantages__title').on('click', function () {
    // Скрыть все другие открытые элементы
    $('.advantages__subtitle.open').not($(this).parent().parent().find('.advantages__subtitle')).removeClass('open');
    $('.advantages__arrow.rotate').not($(this).parent().find('.advantages__arrow')).removeClass('rotate');
    $('.advantages__title.another-color').not($(this).parent().find('.advantages__title')).removeClass('another-color');
  
    // Показать или скрыть текущий элемент
    $(this).parent().find('.advantages__arrow').toggleClass('rotate');
    $(this).parent().parent().find('.advantages__subtitle').toggleClass("open");
    $(this).parent().find('.advantages__title').toggleClass("another-color");
  });

$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: true,
        appendDots: $(".slide-m-dots"),
        prevArrow: $(".slide-m-prev"),
        nextArrow: $(".slide-m-next")
    });
});

$(window).on('scroll', function() {
  let scrollPosition = $(window).scrollTop();
  $('.parallax').css('transform', `translateY(-${scrollPosition * 0.3}px)`);
  $('.parallaxx').css('transform', `translateY(-${scrollPosition * 0.3}px)`);

});