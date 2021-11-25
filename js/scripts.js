
$(window).scroll(function () {
    var sticky = $('.header-global'),

        scroll = $(window).scrollTop();

    if (scroll >= 100) {
        sticky.addClass('fixed');
        document.getElementById("hero").style.marginTop = "70px";
        document.getElementById("mm").style.marginLeft = "50px";

    }
    else {
        sticky.removeClass('fixed');
        document.getElementById("hero").style.marginTop = "0px";
        document.getElementById("mm").style.marginLeft = "0px";



    }

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

function openEditingNav() {
    document.getElementById("mySidepanel").style.width = "350px";
    document.getElementById("mySidepanelBG").style.zIndex = "49";
    document.getElementById("mySidepanelBG").style.opacity = "0.5";

}

function closeEditingNav() {
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



})

/* When the user clicks on the button, 
   toggle between hiding and showing the dropdown content */
function myFunction1() {
    closeAll();
    document.getElementById("myDropdown1").classList.toggle("show");

}

function myFunction2() {
    closeAll();
    document.getElementById("myDropdown2").classList.toggle("show");

}

function closeAll() {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }

}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (event.target.matches('.dropbtn') || event.target.matches('.dropdown-content') || event.target.matches('.dropdown-content-in') || event.target.matches('i')) {

    }
    else {
        closeAll();
    }
}









