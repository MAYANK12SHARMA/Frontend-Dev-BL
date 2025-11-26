$(document).ready(function() {
    $(".member.manager").click(function() {
        const teamMembers = $(this).parent().children(".member[data-report-to='manager']");
        $(".member").removeClass("highlighted");
        teamMembers.addClass("highlighted");
    });

    $(".member").hover(
        function() {
            $(this).find(".contact-info").slideDown();
        },
        function() {
            $(this).find(".contact-info").slideUp();
        }
    );

    $(".department-name").click(function() {
        const dept = $(this).parent();
        $(".member").css("background", "");
        dept.find(".member").not(".manager").css("background", "#d1ecf1");
    });

    $("#randomEmployee").click(function() {
        const allMembers = $(".member").not(".manager");
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const selectedMember = $(allMembers[randomIndex]);
        
        $(".member").removeClass("sibling-highlight");
        selectedMember.siblings(".member").addClass("sibling-highlight");
    });

    $("#toggleTeams").click(function() {
        $(".department").each(function() {
            const members = $(this).find(".team-members");
            if (members.is(":visible")) {
                members.slideUp();
            } else {
                members.slideDown();
            }
        });
    });
});
