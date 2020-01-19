// 170 movie database exercise

var movies = [{
        name: "Scrubbs butt",
        hasWatched: true,
        rating: 3.5
    },
    {
        name: "The Big Lebowski",
        hasWatched: true,
        rating: 5
    }, {
        name: "Bond",
        hasWatched: false,
        rating: 4
    }
];

movies.forEach(function (movie) {
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not watched ";
    }
    result += "\"" + movie.name + "\" – ";
    result += movie.rating + " stars";
    console.log(result);
})