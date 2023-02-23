// Event pada saat link di click
$('.page-scroll').on('click', function() {

    // Ambil isi href
    var tujuan = $(this).attr('href');
    // Tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    // Pindahkan Scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();

});

// Parallax
// About
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/2.3 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/1.8 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.3 +'%)'
    });

    // Portfolio
    if( wScroll > $('.portfolio').offset().top -150) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 250 * i);
        });
    }

});