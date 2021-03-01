$.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    data: {
      zipcode: 97201
    },
    success: function( result ) {
        $( "#best-btn" ).click(function(result) {
            let parseResult = result.json();
            $( "#weather-temp" ).html( "<strong>" + parseResult + "</strong> degrees" );
          });
      
    }
  });