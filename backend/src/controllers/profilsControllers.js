const models = require("../models");

const findUser = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.profils
    .findUserById(id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.profils
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browse = (req, res) => {
  models.profils
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserinfo = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.profils
    .getUserAllinfo(id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const editUserbyId = (req, res) => {
  const profilUpdate = req.body[0];
  models.profils
    .EditUserById(profilUpdate)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const profil = req.body;

  profil.id = parseInt(req.params.id, 10);

  models.profils
    .update(profil.firstname, profil.lastname, profil.src, profil.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.send("Bien joué mec !");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const AdmineditUserbyId = (req, res) => {
  const profilUpdate = req.body[0];
  const id = parseInt(req.params.id, 10);

  models.profils
    .AdminEditUserById(profilUpdate, id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  findUser,
  read,
  edit,
  editUserbyId,
  browse,
  getUserinfo,
  AdmineditUserbyId,
};
