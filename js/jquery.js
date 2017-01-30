$(function () {


$('#btn').click(function(){

	var $name=$('#name').val();
	var $movies=$('#movies');
	$movies.empty();
	$.ajax({
		type:"GET",
		url:"http://www.omdbapi.com/?t="+$name,
		success:function(data){

			if(data.Title)
			{

				$movies.append('<li><b>Movie Name :</b>'+data.Title+'</li>');
				$movies.append('<li><b>Year       :</b>'+data.Year+'</li>');
				$movies.append('<li><b>Rating     :</b>'+data.imdbRating+'</li>');
				$movies.append('<li><b>Type       :</b>'+data.Type+'</li>');
				$movies.append('<li><b>Release    :</b>'+data.Released+'</li>');
				$movies.append('<li><b>Length     :</b>'+data.Runtime+'</li>');
				$movies.append('<li><b>Genre      :</b>'+data.Genre+'</li>');
				$movies.append('<li><b>Writer     :</b>'+data.Writer+'</li>');
				$movies.append('<li><b>Actors     :</b>'+data.Actors+'</li>');
				$movies.append('<li><b>Plot       :</b>'+data.Plot+'</li>');
				$movies.append('<li><b>Language   :</b>'+data.Language+'</li>');
				$movies.append('<li><b>Awards     :</b>'+data.Awards+'</li>');
				$movies.append('<li><b>Country    :</b>'+data.Country+'</li>');
				$movies.append('<center><li><img src='+data.Poster+'>'+'</li></center>');

			}
			else
			{
				$movies.append('<center><li><b>OOPS!!!No such movies available</b></li><center>');
			}

		}
	});

});

});












var $mvs=$('#mv');
$.ajax({
	type:"GET",
	url:"http://www.omdbapi.com/?i="+details.imdbID,
	success:function(movie){
		console.log(movie);
		$mvs.append('<li><b>Movie Name :</b>'+movie.Title+'</li>');
		$mvs.append('<li><b>Year       :</b>'+movie.Year+'</li>');
	}
});
$movies.append('<center><li><img src='+details.Poster+'></li></center>');
