var watch = require('../models/watch');
// List of all watches
exports.watch_list = function(req, res) {
res.send('NOT IMPLEMENTED: watch list');
};
// for a specific watch.
exports.watch_detail = function(req, res) {
res.send('NOT IMPLEMENTED: watch detail: ' + req.params.id);
};
// Handle watch create on POST.
exports.watch_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: watch create POST');
};
// Handle watch delete form on DELETE.
exports.watch_delete = function(req, res) {
res.send('NOT IMPLEMENTED: watch delete DELETE ' + req.params.id);
};
// Handle watch update form on PUT.
exports.watch_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: watch update PUT' + req.params.id);
};