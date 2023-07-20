const AbstractManager = require("./AbstractManager");

class ChiensManager extends AbstractManager {
  constructor() {
    super({ table: "chiens" });
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.database.query(
      `select c.id, c.prenom, c.age, c.image, c.alternatif, c.description, c.castration, c.race_id, r.name, c.sexe_id, s.attribut, c.caractere_id, p.caractere
      FROM ${this.table} c
      INNER JOIN races r ON c.race_id = r.id
      INNER JOIN sexes s ON c.sexe_id = s.id
      INNER JOIN caracteres p ON c.caractere_id = p.id`
    );
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  insert(
    prenom,
    age,
    image,
    alternatif,
    description,
    castration,
    raceId,
    sexeId,
    caractereId
  ) {
    return this.database.query(
      `insert into ${this.table} (prenom, age, image, alternatif, description, castration, race_id, sexe_id, caractere_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        prenom,
        age,
        image,
        alternatif,
        description,
        castration,
        raceId,
        sexeId,
        caractereId,
      ]
    );
  }

  update(chiens) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      chiens,
      chiens.id,
    ]);
  }
}

module.exports = ChiensManager;
