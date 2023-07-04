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
    return this.database.query(`select * from  ${this.table}`);
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
