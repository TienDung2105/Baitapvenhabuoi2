function renderMovieApp() {
    const appContainer = document.getElementById('movie-app');

    let htmlContent = "";

    movieData.forEach(section => {
        htmlContent += `
            <div class="movie-section">
                <div class="section-header">
                    <span class="movie-header">${section.title}</span>
                    <button class="icon"><i class="fas fa-chevron-right"></i></button>
                </div>

                <div class="movie-grid">
                    ${section.movies.map(m => `
                        <div class="movie-card">
                            <div class="card">
                                <img src="${m.img}" 
                                     alt="${m.name}" 
                                     onerror="this.src='https://via.placeholder.com/200x300?text=Anh+Loi'" class="poster">
                                <p class="title-label">${m.name}</p>
                            </div>
                            <div class="hover-card">
                                <img src="${m.img}" class="hover-banner">
                                <div class="hover-content">
                                    <div class="actions">
                                        <button class="play-btn"><i class="fas fa-play"></i> Xem ngay</button>
                                        <span class="circle-icon"><i class="far fa-heart"></i></span>
                                    </div>
                                    <h3>${m.name}</h3>
                                    <div class="meta">
                                    <span class="rating"><i class="fas fa-star"></i> ${m.rating}</span>
                                    <span>${m.year}</span>
                                    <span>${m.duration}</span>
                                    </div>
                                    <p class="desc">${m.desc}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    appContainer.innerHTML = htmlContent;
}

document.addEventListener('DOMContentLoaded', renderMovieApp);