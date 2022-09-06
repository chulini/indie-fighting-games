function SetWrapperMargin(){
    let filtersHeight = $('#filters').outerHeight();
    let footerHeight = $('footer').outerHeight();
    console.log("footerHeight "+footerHeight);
    $('.wrapper').css('padding-top', filtersHeight);
    $('.wrapper').css('padding-bottom', footerHeight);
}
$(window).on('resize', function(){
    SetWrapperMargin();
});

$('document').ready(function(){
    $('.game-box').hover(function() { 
        $(this).children('.hover-info').fadeIn(150); 
    }, function() { 
        $(this).children('.hover-info').fadeOut(150); 
    });

    SetWrapperMargin()
}); 

