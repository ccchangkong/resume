$(function() {
    $(window).bind('scroll', function() {

        if ($(window).scrollTop() > 50) {
            $('.naver').addClass('docs-naver-fixed');
        } else {
            $('.naver').removeClass('docs-naver-fixed');
        }
    });
    $('#btnDown').click(function() {
        open("http://www.vastskycc.com/resume.doc");
    });
    $('#page3 .info_text_2').hover(function () {
    	$(this).children().removeClass('hidden')
    },function () {
    	$(this).children().addClass('hidden')
    });

});