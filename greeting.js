$(document).ready(function(){
    $.ajax({
        url:"http://rest-service.guides.spring.io/greeting"
    }).then(function(data){
    	console.log('data request succeeded'); 
    	console.log(data);
        $('.greeting-id').append(data.id);
        $('.greeting-content').append(data.content);
    });
 });