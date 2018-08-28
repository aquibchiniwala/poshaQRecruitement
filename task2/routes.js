const express = require('express');
const router = express();
const Label = require('../task2/models/label');
const Task = require('../task2/models/task');

router.get('/api/get_tasks', function (req, res) {
    Label.find({}, function (err, docs) {
        if (err) res.json(err);
        else res.json({ labels: docs });
    });
});

router.post('/api/create_label', (req, res, next) => {
    Label.create(req.body).then(function (label) {
        res.send({status:"Label Created Successfully",Value: label});
    }).catch(next);
});

router.delete('/api/delete_label/:id', (req, res, next) => {
    Label.findByIdAndRemove({ _id: req.params.id }).then(function (label) {
        res.send({status:"Label Deleted Successfully",Value: label});
    }).catch(next);
});

router.put('/api/update_label/:id', (req, res, next) => {
    Label.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Label.findOne({ _id: req.params.id }).then(function (label) {
            res.send({status:"Label Updated Successfully",newValue: label});
        });
    }).catch(next);
});


router.post('/api/create_task/:id', (req, res, next) => {
    req.body = {
        task: req.body.task,
        labelID: req.params.id
    }
    console.log(req.body);
    Task.create(req.body).then(function (task) {
        Label.findById({ _id: req.params.id }).then(function (label) {
            var x = label.tasks;
            x.push(task._id);
            Label.findByIdAndUpdate({ _id: req.params.id }, { tasks: x }).then(function () {
                ;
            }).catch(next);
        });
        res.send({status:"Task Created Successfully",Value: task});
    }).catch(next);
});



router.delete('/api/delete_task/:id', (req, res, next) => {
    Task.findById({ _id: req.params.id }).then(function (tasks) {
        res.send({status:"Task Deleted Successfully",Value: tasks});
        Label.findById({ _id: tasks.labelID }).then(function (label) {
            var x = label.tasks;
            var pos = x.indexOf(req.params.id);
            x.splice(pos, 1);
            Label.findByIdAndUpdate({ _id: tasks.labelID }, { tasks: x }).then(function () {
                Task.findByIdAndRemove({ _id: req.params.id }).then(function () {
                }).catch(next);
            }).catch(next);
        }).catch(next);
    }).catch(next);
});



router.put('/api/update_task/:id', (req, res, next) => {
    Task.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Task.findOne({ _id: req.params.id }).then(function (task) {
            res.send({status:"Task Updated Successfully",newValue: task});
        });
    }).catch(next);
});

router.put('/api/move_task/:id', (req, res, next) => {
    Task.findById({ _id: req.params.id }).then(function (tasks) {
        Label.findById({ _id: tasks.labelID }).then(function (label) {
            var x = label.tasks;
            var pos = x.indexOf(req.params.id);
            x.splice(pos, 1);
            Label.findByIdAndUpdate({ _id: tasks.labelID }, { tasks: x }).then(function () {
                Label.findById({ _id: req.body.labelID }).then(function (label) {
                    var y = label.tasks;
                    y.push(req.params.id);
                     Label.findByIdAndUpdate({ _id: req.body.labelID }, { tasks: y }).then(function () {
                        Task.findByIdAndUpdate({ _id: req.params.id }, { labelID: req.body.labelID }).then(function () {
                            Task.findOne({ _id: req.params.id }).then(function (task) {
                                res.send({status:"Task Moved Successfully",newValue: task});
                            });
                        });
                     });
                }).catch(next);
            }).catch(next);
        }).catch(next);
    }).catch(next);
});

module.exports = router;