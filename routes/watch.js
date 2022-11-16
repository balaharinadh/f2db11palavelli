var express = require('express');
const watch_controlers = require('../controllers/watch');
var router = express.Router();

/* GET home page. */
router.get('/', watch_controlers.watch_view_all_Page);
/* GET detail watch page */
router.get('/detail', watch_controlers.watch_view_one_Page);

module.exports = router;


