
$(window).scroll(function () {
    var sticky = $('.header-global'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

function openNav() {
    document.getElementById("mySidepanel").style.width = "350px";
    document.getElementById("mySidepanelBG").style.zIndex = "49";
    document.getElementById("mySidepanelBG").style.opacity = "0.5";

}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanelBG").style.zIndex = "-10";
    document.getElementById("mySidepanelBG").style.opacity = "0";
}

$(document).ready(function () {
    function close_accordion_section() { //akordiyon bölümlerini kapat
        $('.accordion .accordion-section-title').removeClass('active'); //active class sil
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open'); //sayfayi yukari dogru kapa yavasca kapat, open class sil
    }
    $('.accordion-section-title').click(function (e) {
        if ($(e.target).is('.active')) { //tiklanilan akordiyon sayfasi acik ise
            close_accordion_section(); //kapat sayfayi
        } else {
            close_accordion_section(); //kapat sayfayi
            $(this).addClass('active'); //tiklanilan akordiyonu aktif et
            $(this).next().slideDown(300).addClass('open'); //tiklanan akordiyon icerigini asagi dogru yavasca ac ve open class ata
        }
        e.preventDefault(); //a href sayfa yonlendirme kapat
    });
});