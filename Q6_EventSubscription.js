$(document).ready(function() {
    function showMessage(text) {
        $("#message").text(text).addClass("success").fadeIn().delay(3000).fadeOut();
    }

    $(".subscription-panel").on("click", ".subscribe-btn", function() {
        const topic = $(this).closest(".topic");
        const topicName = topic.find("span").text();
        
        topic.removeClass("unsubscribed").addClass("subscribed");
        showMessage(`Successfully subscribed to ${topicName}`);
    });

    $(".subscription-panel").on("click", ".unsubscribe-btn", function() {
        const topic = $(this).closest(".topic");
        const topicName = topic.find("span").text();
        
        topic.removeClass("subscribed").addClass("unsubscribed");
        showMessage(`Successfully unsubscribed from ${topicName}`);
    });

    $(".subscription-panel").on("click", ".remove-btn", function() {
        const topic = $(this).closest(".topic");
        const topicName = topic.find("span").text();
        
        topic.fadeOut(function() {
            $(this).off().remove();
        });
        showMessage(`Removed ${topicName} from your subscription list`);
    });

    $("#addTopicBtn").click(function() {
        const newTopicName = $("#newTopic").val().trim();
        
        if (newTopicName === "") {
            alert("Please enter a topic name");
            return;
        }

        const newTopic = $(`
            <div class="topic" data-topic="${newTopicName.toLowerCase().replace(/\s+/g, '-')}">
                <span>${newTopicName}</span>
                <div>
                    <button class="subscribe-btn">Subscribe</button>
                    <button class="unsubscribe-btn">Unsubscribe</button>
                    <button class="remove-btn">Remove</button>
                </div>
            </div>
        `);

        $(".subscription-panel").append(newTopic);
        newTopic.hide().fadeIn();
        
        $("#newTopic").val("");
        showMessage(`Added new topic: ${newTopicName}`);
    });

    $("#newTopic").keypress(function(e) {
        if (e.key === "Enter") {
            $("#addTopicBtn").click();
        }
    });
});
