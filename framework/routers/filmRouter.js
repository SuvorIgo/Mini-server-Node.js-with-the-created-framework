const Router = require('../Router');
const filmController = require('../controllers/filmController');

const router = new Router();

arrRoutes = Router.arrayRoutes;

router.get('/api/films', filmController.getFilm);
router.post('/api/films', filmController.createFilm);
router.put('/api/films', filmController.updateFilm);
router.delete('/api/films', filmController.deleteFilm);
router.get('/errors/error404', filmController.getPage404);

module.exports = router;