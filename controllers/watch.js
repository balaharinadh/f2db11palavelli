var watch = require('../models/watch');
// List of all watches
exports.watch_list = async function (req, res) {
    try {
        thewatches = await watch.find();
        res.send(thewatches);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific watch.
//exports.watch_detail = function (req, res) {
//   res.send('NOT IMPLEMENTED: watch detail: ' + req.params.id);
//};
// Handle watch create on POST.
//exports.watch_create_post = function (req, res) {
// res.send('NOT IMPLEMENTED: watch create POST');
//};
// Handle watch delete form on DELETE.
//exports.watch_delete = function (req, res) {
// res.send('NOT IMPLEMENTED: watch delete DELETE ' + req.params.id);
//};
// Handle watch update form on PUT.
//exports.watch_update_put = function (req, res) {
//  res.send('NOT IMPLEMENTED: watch update PUT' + req.params.id);
//};
// VIEWS
// Handle a show all view
exports.watch_view_all_Page = async function (req, res) {
    try {
        thewatches = await watch.find();
        res.render('watch', { title: 'watch Search Results', results: thewatches });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle watch create on POST.
exports.watch_create_post = async function (req, res) {
    console.log(req.body)
    let document = new watch();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"watch_type":"goat", "cost":12, "size":"large"}
    document.watch_brand = req.body.watch_brand;
    document.watch_color = req.body.watch_color;
    document.watch_cost = req.body.watch_cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific watch.
exports.watch_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await watch.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
//Handle watch update form on PUT.
exports.watch_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await watch.findById(req.params.id)
        // Do updates of properties
        if (req.body.watch_brand)
            toUpdate.watch_brand = req.body.watch_brand;
        if (req.body.watch_cost) toUpdate.watch_cost = req.body.watch_cost;
        if (req.body.watch_color) toUpdate.watch_color = req.body.watch_color;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// Handle watch delete on DELETE.
exports.watch_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await watch.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.watch_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await watch.findById(req.query.id)
        res.render('watchdetail',
            { title: 'Watch Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a watch.
// No body, no in path parameter, no query.
// Does not need to be async
exports.watch_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('watchcreate', { title: 'Watch Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a watch.
// query provides the id
exports.watch_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await watch.findById(req.query.id)
        res.render('watchupdate', { title: 'watch Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.watch_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await watch.findById(req.query.id)
        res.render('watchdelete', {
            title: 'Watch Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};