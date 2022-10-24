

$(document).ready(function() { 
        var randomQuote = '' + "If you want to succeed in life earlier, just use the proven method." + '';
        
        $("#new-quote").click(function() {      
              $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en", function(responseText) { 
                
                $("#quoteText").html('"' + responseText.quoteText + '"');
                $("#author").html("- " + responseText.quoteAuthor);
                
                randomQuote = responseText.quoteText;
                
                var randomColor = function getRandomColor() {
                    var letters = '012345';
                    var color = '#';
                    for (var i = 0; i < 6; i++ ) {
                        color += letters[Math.floor(Math.random() * 6)];
                    }
                    return color;
                }
                
                $("body").css("color",randomColor); 
            });                    
        });
        
        
        $("#tweetButton").click(function() {
            window.open("https://twitter.com/intent/tweet?text="+'"'+randomQuote+'"');
        });
  
  $(".dropdown-menu").click(function() {
 
       $(".navbar-collapse").collapse("hide");
   
});

$(".homeLink").click(function() {
 
       $(".navbar-collapse").collapse("hide");
   
});
        
    });
