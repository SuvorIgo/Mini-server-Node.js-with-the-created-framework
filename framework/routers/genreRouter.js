const Router = require('../Router');
const genreController = require('../controllers/genreController');

const router = new Router();

router.get('/api/genres', genreController.getGenre);
router.post('/api/genres', genreController.createGenre);
router.put('/api/genres', genreController.updateGenre);
router.delete('/api/genres', genreController.deleteGenre);

module.exports = router;