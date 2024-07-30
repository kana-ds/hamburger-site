jQuery(function($) {
    $(".js-hamburger").on("click",function(){
        $(this).toggleClass("is-open");
        $(".p-menu-button__text").toggleClass("is-open");
        $(".l-sidebar").toggleClass("is-open");
        $("body").toggleClass("is-open");
    });
});