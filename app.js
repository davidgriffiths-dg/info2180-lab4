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
