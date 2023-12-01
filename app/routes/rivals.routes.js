module.exports = app => {
    const rivals = require("../controllers/rivals.controller")
    const r = require("express").Router();

    r.get("/", rivals.findAll);
    r.get("/:id", rivals.show);
    r.post("/", rivals.create);
    r.put("/:id", rivals.update);
    r.delete("/:id", rivals.delete);

    app.use("/rivals", r);
}