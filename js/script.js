


// アイコンからのスクロール
$(function() {
    $(".main-visual-scroll").click(function() {
        var $scroll = $($(this).attr("href")).offset().top;
        $("html, body").stop().animate({"scrollTop": $scroll}, 300);
        return false;
    });
});
