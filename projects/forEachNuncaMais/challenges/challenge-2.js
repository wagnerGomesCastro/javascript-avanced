require('./../extensions');
const { movieCategories } = require('./../concatAll/concatAllData');
const { log } = require('./../helpers');

// This is the resolution for concatAll exercises
// If you want to try it, check this link: jsbin.com/rijiju
// Resolution in this video: https://youtu.be/48xrrPF94Xs?list=PLhxF6V44XvXQzeZqn3Xd95RKm_Gr7JT7y

// ### OBJECTIVE

// [
//     {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
//     },
//     {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
//     }
// ]

// ### RULES

// filter, map, concatAll
// CANT USE: boxarts[0] .. boxarts.pop() .shift()

// ### IMPLEMENTING

// const selectedMovies = movieCategories
//     .map(category => category.videos)
//     .concatAll()
//     .map(movie => movie.boxarts
//         .filter(b => b.width === 150 && b.height === 200)
//         .map(b => ({
//             id: movie.id,
//             title: movie.title,
//             boxart: b.url
//         }))
//     )
//     .concatAll();

Array.prototype.concatMap = function (modifierFunction) {
    return this.map(modifierFunction).concatAll();
}

const toVideos = obj => obj.videos
const bySizeOf200x150 = obj => obj.width === 150 && obj.height === 200
const toIdTitleAndBoxart = movie => obj => ({
        id: movie.id,
        title: movie.title,
        boxart: obj.url
    })

const selectedMovies = movieCategories
    .concatMap(toVideos)
    .concatMap(movie => movie.boxarts
        .filter(bySizeOf200x150)
        .map(toIdTitleAndBoxart(movie))
    );

log(selectedMovies);
