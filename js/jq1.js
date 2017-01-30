$(function () {

$('#btn').click(function(){
	var $name=$('#name').val();
	var $movies=$('#movies');
	var $mvs=$('#mv');
	var $id="";
	$movies.empty();
	$mvs.empty();
	$.ajax({
		type:"GET",
		url:"http://www.omdbapi.com/?s="+$name,
		success:function(data){
				console.log(data);
				$.each(data.Search,function(i,details){
				$movies.append('<tr><td><a id='+details.imdbID+' href="#">'+details.Title+'</a></td><td>'+details.Year+'</td></tr>');
		});
		$('a').click(function(){
			$movies.empty();
			$.ajax({
				type:"GET",
				url:"http://www.omdbapi.com/?i="+$(this).attr('id'),
				success:function(movie){
					console.log(movie);
					$mvs.append('<li><b>Movie Name :</b>'+movie.Title+'</li>');
					$mvs.append('<li><b>Year       :</b>'+movie.Year+'</li>');
					$mvs.append('<li><b>Release date       :</b>'+movie.Released+'</li>');
					$mvs.append('<li><b>Length       :</b>'+movie.Runtime+'</li>');
					$mvs.append('<li><b>Genre       :</b>'+movie.Genre+'</li>');
					$mvs.append('<li><b>Director       :</b>'+movie.Director+'</li>');
					$mvs.append('<li><b>Writer       :</b>'+movie.Writer+'</li>');
					$mvs.append('<li><b>Actors       :</b>'+movie.Actors+'</li>');
					$mvs.append('<li><b>Plot       :</b>'+movie.Plot+'</li>');
					$mvs.append('<li><b>Language       :</b>'+movie.Language+'</li>');
					$mvs.append('<li><b>Awards       :</b>'+movie.Awards+'</li>');
					$mvs.append('<li><b>imdbRating       :</b>'+movie.imdbRating+'</li>');
					$mvs.append('<center><li><img src='+movie.Poster+'></li></center>');
				}
			});
		});

	}
});
});


});
