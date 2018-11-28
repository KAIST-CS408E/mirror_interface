      //PLAYER_MUSIC


      function set_music_title(title) {
        document.getElementById("music_title").innerHTML = title
      }

      var music_files = [
        ["music/lalaland.mp3", "City of Stars (Duet ft. Ryan Gosling Emma Stone)"],
        ["music/photograph.mp3", "Photograph (Ed Sheeran)"],
        ["music/ninetyone.mp3", "NINETY ONE - Айыптама"]
      ]

      var current_music_index = 0


      window.onload = function() {
        loadTimeDate();        
      };


      



      //PLAYER_MUSIC





      // THE WEATHER
      !function(d,s,id){ 
        var js,fjs = d.getElementsByTagName(s)[0];

        if(!d.getElementById(id)){
          js = d.createElement(s);
          js.id =id;
          js.src='https://weatherwidget.io/js/widget.min.js';
          fjs.parentNode.insertBefore(js,fjs);
        }
      }(document,'script','weatherwidget-io-js');


      // THE TITLE AND TIME
      var idx_to_month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      var idx_to_day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

      function loadTimeDate() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        
        m = checkTime(m);
        hour = get_ampm_hour(h);
        day_part = "AM";
        if (h >= 12) {
          day_part = "PM";
        }
        var hello_message = get_hello_message(h);

        document.getElementById('display_time').innerHTML = hour + ":" + m + "   " + day_part;
        var d = today.getDate();
        var day = idx_to_day[today.getDay()];
        var month = idx_to_month[today.getMonth()];
        document.getElementById('display_date').innerHTML = day + ", " + month + " " + d  ;
        document.getElementById('hello_message').innerHTML = hello_message;
        var t = setTimeout(loadTimeDate, 500);
      }

      function get_ampm_hour(h) {
        if (h == 0 || h == 12) {
          return 12
        }
        return h%12
      }

      function get_hello_message(h) {
        if (h <= 4 && h >= 22) {
          return "Good Night!"
        }
        
        if (h > 4 && h <= 11) {
          return "Good Morning!"
        }
        
        if (h > 11 && h < 16) {
          return "Good Afternoon!"
        }
        return "Good Evening!"
      }

      function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      } 

      
      $('#calendar_page').css('opacity', '0.0');

    


