$(document).ready(function() {
    $(".question").click(function() {
        $(this).next(".answer").slideToggle();
    });

    $(".question").hover(
        function() {
            $(this).css("background", "#e74c3c");
        },
        function() {
            $(this).css("background", "#3498db");
        }
    );

    $(".question").dblclick(function() {
        $(".answer").slideUp();
    });

    $(".answer input").focus(function() {
        $(this).parent().prev(".question").addClass("highlighted");
    });

    $(".answer input").blur(function() {
        $(this).parent().prev(".question").removeClass("highlighted");
    });
});
