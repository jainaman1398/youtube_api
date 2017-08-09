function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

$(function() {
    $("form").on("submit", function(e) {
        e.preventDefault();
        console.log("aj");
        var t=$("#search").val();
        $.get(
            "https://www.googleapis.com/youtube/v3/channels",{
                forUsername:'TechGuyWeb',
                type:"video",
                q:encodeURIComponent(t).replace(/%20/g, "+"),
                key:'AIzaSyB4WgN7193wE4bIkQ0rDdZf-60QyF8ys1s',
                part:'snippet'
            },
            function (data) {
                console.log(data.items);
                $.each(data.items,function (i,item) {
                  //  console.log("b");
                    console.log(item.id);
                   // pid=item.contentDetails.relatedPlaylists.uploads;
                    $.get("./item.html", function(data) {
                        $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id}]));
                    });
                  //  getvids(pid);
                })
            }


        )

        function getvids(pid) {
          $.get(
              "https://www.googleapis.com/youtube/v3/playlistItems",{
                  part:'snippet',
                  maxResults:3,
                  playlistId:pid,
                  key:'AIzaSyB4WgN7193wE4bIkQ0rDdZf-60QyF8ys1s'
              },
              function (data) {
                  $.each(data.items,function (i,item) {
                      console.log(item);
                      videoTitle:item.snippet.title;
                      videoId:item.snippet.resouceId.videoId;

                      output=`<li><iframe  src=\"//www.youtube.com/embed/'+videoId+'\ "></li>`;
                          $("#list").append(output);
                  })
              }
          )

        }
    });
});