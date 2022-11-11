const router = require("express").Router();
const { categories, books, reviews } = require("./mock");
const { reply } = require("./utils");

// router.get("/cinemas", (req, res, next) => {
//   reply(res, cinemas);
// });

// router.get("/films", (req, res, next) => {
//   const { cinemaId, filmId } = req.query;
//   let result = films;

//   if (cinemaId) {
//     const cinema = getById(cinemas)(cinemaId);
//     if (cinema) {
//       result = cinema.films.map(getById(result));
//     }
//   }

//   if (!cinemaId && filmId) {
//     result = getById(result)(filmId);
//   }
//   reply(res, result);
// });

// router.get("/reviews", (req, res, next) => {
//   const { id } = req.query;
//   let result = reviews;
//   if (id) {
//     const cinema = getById(cinemas)(id);
//     if (cinema) {
//       result = cinema.reviews.map(getById(result));
//     }
//   }
//   reply(res, result);
// });

// router.get("/users", (req, res, next) => {
//   reply(res, users);
// });

router.get("/categories", (req, res, next) => {
  reply(res, categories);
})

router.get("/books", (req, res, next) => {
  reply(res, books);
})

router.get("/reviews", (req, res, next) => {
  reply(res, reviews);
})

module.exports = router;
