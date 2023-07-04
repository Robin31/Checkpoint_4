const models = require("../models");

const browse = (req, res) => {
  models.chiens
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.chiens
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

const edit = (req, res) => {
  const chiens = req.body;

  chiens.id = parseInt(req.params.id, 10);

  models.chiens
    .update(chiens)
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

const add = (req, res) => {
  const chiens = req.body;
  const { prenom, age, image, alternatif, description, castration } = chiens;
  const raceId = parseInt(req.body.race_id, 10);
  const sexeId = parseInt(req.body.sexe_id, 10);
  const caractereId = parseInt(req.body.caractere_id, 10);

  models.chiens
    .insert(
      prenom,
      age,
      image,
      alternatif,
      description,
      castration,
      raceId,
      sexeId,
      caractereId
    )
    .then(([result]) => {
      res.location(`/chiens/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.chiens
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.send("Ce n'est qu'un au revoir !");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
