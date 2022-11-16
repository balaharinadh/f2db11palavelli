var express = require('express');
const watch_controlers = require('../controllers/watch');
var router = express.Router();

/* GET home page. */
router.get('/', watch_controlers.watch_view_all_Page);
/* GET detail watch page */
router.get('/detail', watch_controlers.watch_view_one_Page);
/* GET create watch page */
router.get('/create', watch_controlers.watch_create_Page);
/* GET create update page */
router.get('/update', watch_controlers.watch_update_Page);

module.exports = router;


