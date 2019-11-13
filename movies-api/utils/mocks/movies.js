const moviesMock = [
  { "id": "a9a728ea-ee6d-405b-a83c-cd0e81e48dec", "title": "Good bye, Lenin!", "year": 2012, "cover": "http://dummyimage.com/157x193.bmp/5fa2dd/ffffff", "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.", "duration": 79, "contenRating": null, "source": "http://phoca.cz/purus/eu/magna/vulputate/luctus.aspx", "tags": ["Comedy"] },
  { "id": "8dc16b87-43a7-44a7-9ae8-6aed491308ab", "title": "Devil Hides in Doubt (Sollbruchstelle)", "year": 2001, "cover": "http://dummyimage.com/184x124.bmp/5fa2dd/ffffff", "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.", "duration": 87, "contenRating": null, "source": "https://addtoany.com/at/velit/eu/est/congue/elementum/in.js", "tags": ["Comedy|Drama", "Drama|Thriller"] },
  { "id": "0ae9f145-cac4-4fc7-bef3-88625aa39580", "title": "Wild Heritage", "year": 2009, "cover": "http://dummyimage.com/204x207.jpg/dddddd/000000", "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.", "duration": 48, "contenRating": null, "source": "https://tinyurl.com/nam/ultrices/libero/non/mattis.json", "tags": ["Action|Adventure|Animation|Sci-Fi"] },
  { "id": "74134ec3-5d0f-4fd5-a6f0-6c0b07e4c47f", "title": "Jagged Edge", "year": 2003, "cover": "http://dummyimage.com/112x195.jpg/dddddd/000000", "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", "duration": 28, "contenRating": null, "source": "http://dot.gov/potenti/nullam/porttitor.jpg", "tags": ["Comedy|Drama|Romance", "Adventure|Animation|Comedy"] },
  { "id": "51e8d79a-d647-4960-a4d3-81067302671a", "title": "Hood of Horror", "year": 1997, "cover": "http://dummyimage.com/142x143.jpg/dddddd/000000", "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.", "duration": 44, "contenRating": null, "source": "https://t.co/nam/nulla/integer.aspx", "tags": ["Action|Adventure|Sci-Fi", "Drama", "Drama"] },
  { "id": "96a95898-a9c1-40d6-b5d2-ec8e66cf522f", "title": "Skeletons", "year": 2011, "cover": "http://dummyimage.com/141x157.png/cc0000/ffffff", "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.", "duration": 82, "contenRating": null, "source": "http://moonfruit.com/sapien/in/sapien.html", "tags": ["Children|Drama", "Comedy|Romance"] },
  { "id": "4eafb29e-9bae-4c47-80b5-78a21ee1a2f8", "title": "I Stand Alone (Seul contre tous)", "year": 1992, "cover": "http://dummyimage.com/166x247.png/dddddd/000000", "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.", "duration": 99, "contenRating": null, "source": "https://pcworld.com/vel/pede.json", "tags": ["(no genres listed)", "Action|Animation|Fantasy|IMAX", "Crime|Drama"] },
  { "id": "6541ec15-f6df-44a3-a64f-3579f0c2c2be", "title": "Batman", "year": 2001, "cover": "http://dummyimage.com/196x147.jpg/dddddd/000000", "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.", "duration": 61, "contenRating": null, "source": "http://bravesites.com/rhoncus/mauris.jsp", "tags": ["Drama|Romance|War", "Animation|Comedy|Drama", "Drama", "Drama", "Comedy|Drama|Romance"] },
  { "id": "d3acb212-ce27-4033-b913-d022ab58d0df", "title": "Devil and Miss Jones, The", "year": 1996, "cover": "http://dummyimage.com/245x153.bmp/ff4444/ffffff", "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.", "duration": 31, "contenRating": null, "source": "https://nydailynews.com/vel/dapibus/at.png", "tags": ["Action|Thriller", "Horror|Mystery|Thriller", "Documentary"] },
  { "id": "dbd0adf7-662f-490b-8019-6c86c6bd6022", "title": "Grant Morrison: Talking with Gods", "year": 2000, "cover": "http://dummyimage.com/143x249.jpg/cc0000/ffffff", "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.", "duration": 85, "contenRating": null, "source": "http://hhs.gov/nisi/at/nibh/in/hac/habitasse/platea.xml", "tags": ["Drama", "Action|Thriller", "Drama"] }
];

function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
}