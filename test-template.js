$(document).ajaxStart(function(){
        $("#user-image").attr("src","progress.gif");
      }).ajaxStop(function(){
        console.log("Ajax Stopped.")
      }).ajaxSuccess(function(){
        console.log("Ajax Success")
      }).ajaxComplete(function(){
        console.log("Ajax Completed")
      })

      $("#get-data").on("click",function(){
        $.ajax({
          url:"https://public-api.wordpress.com/rest/v1/sites/dotnetask.wordpress.com",
          success: function(data){
            console.log(data)
              $("#user-id").text("User id is : "+data.ID);
              $("#user-description").text("Description is: "+data.description)
              $("#user-url").text("URL is : "+data.URL)
              $("#user-jetpack").text("Jetpack: "+data.jetpack)
              $("#user-subscribers-count").text("Subscribers-Count is: "+data.subscribers_count)
              //$("#lang").text("Lang is: "+data.lang)
          },
          error: function(){
            $("#user-image").attr("src","no-user.png");
            $("#user-name").text("User not found");
          }
        })
      })