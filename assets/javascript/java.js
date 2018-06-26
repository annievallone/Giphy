//array for giphs
var giphy = ["happy", "party", "funny", "sad"];

function showbtns() {
  var btn = $(".btn")
  btn.empty();  
for (var i = 0; i < giphy.length; i++) {
var a = $("<button>");
  a.addClass("giph-btn");
  a.attr("data-name", giphy[i]);
  a.text(giphy[i]);
  btn.append(a);
}
}

$(document).on("click", ".giph-btn", function() {
  event.preventDefault();
  var thisGiph = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  thisGiph + "&api_key=CGW52nQLOT4fGclXAdJ84QtgK5ZzjYyO&limit=10";
  

      $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      for (var i = 0; i < response.data.length; i++){
        var rating = response.data[i].rating;
        var giphDiv = $("<div class='giph'>")
        var ratingDiv = $("<p>").text("Rating: " + rating);
        giphDiv.append(ratingDiv)
        var giphImage = $("<img class='gif'>")
        giphImage.attr("src", response.data[i].images.fixed_height_still.url)
        giphImage.attr("data-still", response.data[i].images.fixed_height_still.url)
        giphImage.attr("data-animate", response.data[i].images.fixed_height.url)
        giphImage.attr("data-state", "still")
        giphDiv.append(giphImage)
        $(".giphy").prepend(giphDiv);
      console.log(response);
      }
      
        
    });
});
  
  $("#add-giphy").on("click", function(event) {
        event.preventDefault();
        var newGiphy = $("#giphy-input").val().trim();
        giphy.push(newGiphy)
        showbtns();
        document.getElementById("giphy-input").value = "";

      });
      
      $(document).on("click", ".gif", function() {
        // event.preventDefault();
        
        var state = $(this).attr("data-state");
        console.log("state: " + state);
        
        if(state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
        
      });
      
      showbtns();

  