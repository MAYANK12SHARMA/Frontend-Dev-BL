$(document).ready(function() {
    let rotateInterval;

    $("#hideBtn").click(function() {
        $(".banner").hide();
    });

    $("#showBtn").click(function() {
        $(".banner").show();
    });

    $("#slideToggle").click(function() {
        $(".banner").slideToggle();
    });

    $("#fadeToggle").click(function() {
        $(".banner").fadeToggle();
    });

    $("#autoRotate").click(function() {
        if (rotateInterval) {
            clearInterval(rotateInterval);
            rotateInterval = null;
            $(this).text("Auto Rotate");
            $(".banner").fadeIn();
        } else {
            $(this).text("Stop Rotation");
            let currentIndex = 0;
            const banners = $(".banner");
            
            banners.hide();
            $(banners[0]).fadeIn();

            rotateInterval = setInterval(function() {
                $(banners[currentIndex]).fadeOut(500, function() {
                    currentIndex = (currentIndex + 1) % banners.length;
                    $(banners[currentIndex]).fadeIn(500);
                });
            }, 5000);
        }
    });
});
