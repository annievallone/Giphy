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

$(".giph-btn").on("click", function(event) {
  event.preventDefault();
  var thisGiph = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  thisGiph + "&api_key=CGW52nQLOT4fGclXAdJ84QtgK5ZzjYyO&limit=5";
  

      $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        var rating = response.rating;
        var giphDiv = $("<div class='giph'>")
        var ratingDiv = $("<p>").text("Rating: " + rating);
        giphDiv.append(ratingDiv)
        $(".giphy").prepend(giphDiv);
      console.log(response);
    });
});
  
 
  $("#add-giphy").on("click", function(event) {
        event.preventDefault();
        var newGiphy = $(".btn").val().trim();
        giphy.push(newGiphy)
        showbtns();
      });
      
      showbtns();

  