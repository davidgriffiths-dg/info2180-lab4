/*var search = document.getElementsByClassName("btn");
    search.addEventListener('click', function(a) {
        a.preventDefault();
        var httpRequest = new  XMLHttpRequest();
        var  url = "superheroes.php";
        httpRequest.onreadystatechange = getHeroes;
        httpRequest.open('GET', url);
        httpRequest.send();

        function getHeroes() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
              if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                var result = document.getElementsByClassName("results");
                results.innerHTML = response;
                alert(response);
            } 
            else {
            alert('There was a problem with the request.');
            }
            }
            }
    }); */

   /* $(document).ready(function(){
      const search = document.querySelector('.btn');
      var result = document.querySelector('#results');

      $(".btn").click(function(){
        $.ajax('superheroes.php', 'post', {
          success: function(response)
          {results.innerHTML = response;}
       
          });

      });
    
    }); */

    $(document).ready(function(){
       const search = document.querySelector('.btn');
      var result = document.querySelector('.results');
      $.ajax({
       url: 'superheroes.php',
       type: 'post',
       success: function(response) 
       {result.innerHTML=response;}
  
    }); 

    search.addEventListener('click', function(event) {
      event.preventDefault();
      var search = document.getElementById("search").value;
      $.ajax({
        url: 'superheroes.php',
        type: 'post',
        data: { "query": search},
        success: function(response) 
        {result.innerHTML=response;}
    
      });         
  });

  });
