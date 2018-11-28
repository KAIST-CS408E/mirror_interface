      window.onload = function() {
        loadTimeDate();
      };

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
        var elements = document.getElementsByClassName('hello_message');
        elements[0].innerHTML = hello_message;
        elements[1].innerHTML = hello_message;
        elements[2].innerHTML = hello_message;
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
      $("#2048_page_button").click(function() {
        $('#minesweeper_page').css('display', 'none');
        $('#checkers_page').css('display', 'none');
        $('#2048_page').css('display', 'block');
        $('#2048_page_button').addClass('active_state');
        $('#minesweeper_page_button').removeClass('active_state');
        $('#checkers_page_button').removeClass('active_state');
      });


      $("#minesweeper_page_button").click(function() {
        $('#minesweeper_page').css('opacity', '1.0');
        $('#minesweeper_page').css('height', '100%');
        if(!document.cp_instances) document.cp_instances = new Array(); document.cp_instances.push({'all_views':'custMonth', 'def_view':'custMonth', 'time_unit':1440, 'resources':[{"id":"Resource_1","title":"Resource 1","granulation":"1440","click_url":null}], 'resource_id': "Resource_1", 'jsonp_url':{url:"https://www.planyo.net/fetch-calendar.php?eh=1a9827cebd2a32d01f674c37ad063c9d1ff6d3f8&ih=02f773a016c280ea8acd21e0817c812ed1c39f65&callback=?", cache: false}, 'timezone':'site', 'tz_offset': 0, 'min_hour':'8:00:00', 'max_hour':'20:00:00', 'open_frame':"_top", 'element_id':'cpcal_planyonet', 'fetching_id':'cp_fetch_cpcal_planyonet', 'lng': 'en'}); document.cp_time_format='HH:mm'; document.cp_title_format='dddd, MMMM Do, YYYY'; document.cp_title_format_short='ddd, MMM Do'; document.cp_s_day="day"; document.cp_s_days="days"; document.cp_s_vert_day="vertical day"; document.cp_s_month="month"; document.cp_s_week="week"; document.cp_s_weeks="weeks"; document.cp_s_agenda="agenda";
        $('#minesweeper_page').css('display', 'block');
        $('#checkers_page').css('display', 'none');
        $('#2048_page').css('display', 'none');
        $('#minesweeper_page_button').addClass('active_state');
        $('#2048_page_button').removeClass('active_state');
        $('#checkers_page_button').removeClass('active_state');
      });


      $("#checkers_page_button").click(function() {
        $('#minesweeper_page').css('display', 'none');
        $('#checkers_page').css('display', 'block');
        $('#2048_page').css('display', 'none');
        $('#checkers_page_button').addClass('active_state');
        $('#minesweeper_page_button').removeClass('active_state');
        $('#2048_page_button').removeClass('active_state');
      });

      //SWITCHING VIEWS//
      
      //CALENDAR
      //CALENDAR


      $('#minesweeper_page').css('display', 'none');
      $('#minesweeper_page').css('opacity', '0.0');

      $('#checkers_page').css('display', 'none');
      $('#checkers_page').css('opacity', '1.0');

      $('#2048_page').css('display', 'block');
      $('#2048_page_button').addClass('active_state');
      

    


