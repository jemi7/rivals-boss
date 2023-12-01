const db = require("../models")
const rivals = db.rivals

exports.create = (req, res) => {
    req.body.date_of_birth = new Date(req.body.date_of_birth)

    rivals.create(req.body)
        .then(() => res.send({message: "Data berhasil disimpan."}))
        .catch(err => res.status(500).send({message: err.message}));
}

exports.findAll = (req, res) => {
    rivals.find()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message: err.message}));
}

exports.show = (req, res) => {
    const id = req.params.id;

    rivals.findById(id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message: err.message}));
}

exports.update = (req, res) => {
    const id = req.params.id;

    req.body.date_of_birth = new Date(req.body.date_of_birth)

    rivals.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({message: "Gagal memperbaharui data"})
            }
            res.send({message: "Berhasil memperbaharui data."})
        })
        .catch(err => res.status(500).send({message: err.message}));
}

exports.delete = (req, res) => {
    const id = req.params.id;

    rivals.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({message: "Gagal menghapus data."})
            }
            res.send({message: "Berhasil menghapus data."})
        })
        .catch(err => res.status(500).send({message: err.message}));
}