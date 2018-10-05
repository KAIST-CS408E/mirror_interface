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
        var audio_player = document.getElementById('audio_player');  
        var source = document.getElementById('audioSource');
        source.src = music_files[current_music_index][0];
        set_music_title(music_files[current_music_index][1])
        $('#pause_button').css('display', 'none');
        loadTimeDate();


        
      };


      document.getElementById("volume_slider").oninput = function() {
        new_volume = document.getElementById("volume_slider").value / 100.0
        audio_player = document.getElementById('audio_player');  
        audio_player.volume = new_volume
      }


      $("#volume_off_button").click(function(){
        audio_player = document.getElementById('audio_player');  
        audio_player.volume = 0.0 
        document.getElementById("volume_slider").value = 1
      });



      $("#volume_up_button").click(function(){
        audio_player = document.getElementById('audio_player');  
        audio_player.volume = 1.0
        document.getElementById("volume_slider").value = 100
      });


      $("#play_button").click(function() {
        $('#pause_button').css('display', 'inline-block');
        $('#play_button').css('display', 'none');
        var audio_player = document.getElementById('audio_player');
        set_music_title(music_files[current_music_index][1])
        audio_player.play()
      });
      
      $( "#pause_button" ).click(function() {
        $('#pause_button').css('display', 'none');
        $('#play_button').css('display', 'inline-block');
        var audio_player = document.getElementById('audio_player');
        set_music_title(music_files[current_music_index][1])
        audio_player.pause()
      });


      $("#backward_button").click(function() {
        current_music_index = current_music_index - 1
        if (current_music_index < 0) {
          current_music_index = music_files.length - 1
        }
        var audio_player = document.getElementById('audio_player');
        var source = document.getElementById('audioSource');
        source.src = music_files[current_music_index][0];
        audio_player.load();
        audio_player.play();
        set_music_title(music_files[current_music_index][1])
      });
      
      $("#forward_button").click(function() {
        current_music_index = current_music_index + 1
        if (current_music_index >= music_files.length) {
          current_music_index = 0
        }
        var audio_player = document.getElementById('audio_player');
        var source = document.getElementById('audioSource');
        source.src = music_files[current_music_index][0];
        audio_player.load();
        audio_player.play();
        set_music_title(music_files[current_music_index][1])
      });



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

      //THE TITLE AND TIME






      //SWITCHING VIEWS//
      $("#weather_page_button").click(function() {
        $('#calendar_page').css('display', 'none');
        $('#player_page').css('display', 'none');
        $('#weather_page').css('display', 'block');
        $('#weather_page_button').addClass('active_state');
        $('#calendar_page_button').removeClass('active_state');
        $('#player_page_button').removeClass('active_state');
      });


      $("#calendar_page_button").click(function() {
        $('#calendar_page').css('opacity', '1.0');
        $('#calendar_page').css('height', '100%');
        if(!document.cp_instances) document.cp_instances = new Array(); document.cp_instances.push({'all_views':'custMonth', 'def_view':'custMonth', 'time_unit':1440, 'resources':[{"id":"Resource_1","title":"Resource 1","granulation":"1440","click_url":null}], 'resource_id': "Resource_1", 'jsonp_url':{url:"https://www.planyo.net/fetch-calendar.php?eh=1a9827cebd2a32d01f674c37ad063c9d1ff6d3f8&ih=02f773a016c280ea8acd21e0817c812ed1c39f65&callback=?", cache: false}, 'timezone':'site', 'tz_offset': 0, 'min_hour':'8:00:00', 'max_hour':'20:00:00', 'open_frame':"_top", 'element_id':'cpcal_planyonet', 'fetching_id':'cp_fetch_cpcal_planyonet', 'lng': 'en'}); document.cp_time_format='HH:mm'; document.cp_title_format='dddd, MMMM Do, YYYY'; document.cp_title_format_short='ddd, MMM Do'; document.cp_s_day="day"; document.cp_s_days="days"; document.cp_s_vert_day="vertical day"; document.cp_s_month="month"; document.cp_s_week="week"; document.cp_s_weeks="weeks"; document.cp_s_agenda="agenda";
        $('#calendar_page').css('display', 'block');
        $('#player_page').css('display', 'none');
        $('#weather_page').css('display', 'none');
        $('#calendar_page_button').addClass('active_state');
        $('#weather_page_button').removeClass('active_state');
        $('#player_page_button').removeClass('active_state');
      });


      $("#player_page_button").click(function() {
        $('#calendar_page').css('display', 'none');

        $('#player_page').css('display', 'block');
        $('#weather_page').css('display', 'none');
        $('#player_page_button').addClass('active_state');
        $('#calendar_page_button').removeClass('active_state');
        $('#weather_page_button').removeClass('active_state');
      });

      //SWITCHING VIEWS//
      
      //CALENDAR
      //CALENDAR

      
      
      $('#calendar_page').css('opacity', '0.0');

      $('#player_page').css('display', 'none');
      $('#weather_page').css('display', 'block');
      $('#weather_page_button').addClass('active_state');
      $('#player_page').css('opacity', '1.0');

    


