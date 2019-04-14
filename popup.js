//Variables that you can tweek
streamer = "https://mixer.com/api/v1/channels/your_streamer_channel_name"
//Online Notification messages
online_text = "online_text";
//Offline Notification messages
offline_text = "offline_text";

//Stop editing beyond this point
$.getJSON(streamer, function(data) {
    var check = `${data.online}`
    if (check == "true"){
        text = online_text;
    }
    else if (check == "false") {
        text = offline_text;
    }
    else {
        text = "API Error";
    } 
    $(".mypanel").html(text);
});