
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');
const allMovies = [
    ...films, 
    ...actionFilms, 
    ...humorousfilms, 
    ...TCfilms, 
    ...HDfilms, 
    ...PMfilms, 
    ...THfilms
];

const currentMovie = allMovies.find(m => m.id === movieId);

if (currentMovie) {
    document.title = "Đang xem: " + currentMovie.title;
    document.getElementById('movie-title').innerText = currentMovie.title;
    document.getElementById('movie-rating').innerText = "⭐ " + currentMovie.rating;
    document.getElementById('movie-year').innerText = currentMovie.year;
    document.getElementById('movie-description').innerText = currentMovie.desc;
    
    const iframe = document.getElementById('movie-iframe');

    iframe.src = currentMovie.link;

} else {
    document.querySelector('.container').innerHTML = "<h1>Rất tiếc, không tìm thấy phim này!</h1><a href='Anime.html'>Quay lại trang chủ</a>";
}
