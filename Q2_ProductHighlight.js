$(document).ready(function() {
    $(".product").click(function(e) {
        if (!$(e.target).hasClass("favorite")) {
            $(this).toggleClass("highlighted");
            
            if ($(this).attr("data-stock") === "false") {
                alert("This product is out of stock!");
            }
        }
    });

    $(".product").hover(
        function() {
            $(this).find(".product-details").slideDown();
        },
        function() {
            $(this).find(".product-details").slideUp();
        }
    );

    $(".favorite").click(function(e) {
        e.stopPropagation();
        $(this).toggleClass("active");
        $(this).closest(".product").toggleClass("selected");
        
        if ($(this).hasClass("active")) {
            $(this).text("♥");
        } else {
            $(this).text("♡");
        }
    });

    $(".product[data-discount='true']").css({
        "position": "relative"
    }).prepend("<span style='position:absolute;top:10px;right:10px;background:#ff6b6b;color:white;padding:5px 10px;border-radius:5px;font-size:12px;'>SALE</span>");
});
