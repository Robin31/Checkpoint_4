const AbstractManager = require("./AbstractManager");

class ProfilsManager extends AbstractManager {
  constructor() {
    super({ table: "profils" });
  }

  findAll() {
    return this.database.query(
      `select p.id, p.prenom, p.nom, p.age, p.benevole, p.motivation, p.image, u.email from ${this.table} p INNER JOIN users u ON u.id = p.user_id`
    );
  }

  found(id) {
    return this.database.query(`select * from ${this.table} where id = ?`, [
      id,
    ]);
  }

  find(id) {
    return this.database.query(
      `select p.id, p.firstname, p.lastname, p.src, u.email from ${this.table} p INNER JOIN users u ON u.id = p.user_id where p.id = ?`,
      [id]
    );
  }

  insertProfils(userId) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, src, user_id) values ("riri", "fifi", "loulou", ?)`,
      [userId]
    );
  }

  update(firstname, lastname, src, id) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, src = ? where id = ?`,
      [firstname, lastname, src, id]
    );
  }
}

module.exports = ProfilsManager;
