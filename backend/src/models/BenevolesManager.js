const AbstractManager = require("./AbstractManager");

class BenevolesManager extends AbstractManager {
  constructor() {
    super({ table: "benevoles" });
  }

  find(id) {
    return this.database.query(`select * from ${this.table}  where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.database.query(`select * from ${this.table}`);
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  insert(prenom, nom, age, motivation) {
    return this.database.query(
      `insert into ${this.table} (prenom, nom, age, motivation) values (?, ?, ?, ?)`,
      [prenom, nom, age, motivation]
    );
  }
}

module.exports = BenevolesManager;
