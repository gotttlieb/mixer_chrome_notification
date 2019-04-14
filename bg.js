//Variables that you can tweek
streamer = "https://mixer.com/api/v1/channels/your_streamer_channel_name";
stream_link = "https://mixer.com/your_streamer_channel_name";

//Online Notification messages
online_text = "online_text";
online_title = "online_title";
online_message = "online_message";
online_icon_image = "icon.png";

//Offline Notification messages
offline_text = "offline_text";
offline_title = "offline_title";
offline_message = "offline_message";
offline_icon_image = "icon.png";

//Stop editing beyond this point
var now = "false";
var counter = 0;
var counter2 = 0;
var id = 1; 

setInterval(function(){   
    $.getJSON(streamer, function(data) {
        var check = `${data.online}`
        if (check == "true"){
          text = online_text;
            now = "true";
            if ( now == "true" && counter == 0) { 
                var options = {
                  type: "basic",
                  title: online_title,
                  message: online_message,
                  iconUrl: online_icon_image
                };
              chrome.notifications.create(options);
              // create a on Click listener for notifications
              chrome.notifications.onClicked.addListener(function(notificationId) {
                chrome.tabs.create({url: stream_link});
                });
             counter = 1; //this means already notified succesfully on online
             counter2 = 1;
             id = id + 1;
            }
        }
        else if (check == "false") {
          text = offline_text;
            now = "false";
            if ( now == "false" && counter2 == 0) { 
                var options = {
                  type: "basic",
                  title: offline_title,
                  message: offline_message,
                  iconUrl: offline_icon_image
                };
                chrome.notifications.create(options);
                counter2 = 1; //this means already notified succesfully on offline
                counter1 = 0;
                id = id + 1;
            }
        }
        else {
          text = "API Error";
        } 
        $(".mypanel").html(text);
    });
}, 6000);