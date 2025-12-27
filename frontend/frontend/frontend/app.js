fetch("/movies")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("movie-list");
    data.forEach(movie => {
      const div = document.createElement("div");
      div.className = "movie-card";
      div.innerHTML = `
        <h3>${movie.title}</h3>
        <p>${movie.description}</p>
      `;
      container.appendChild(div);
    });
  });
