const AbstractManager = require("./AbstractManager");

class CaracteresManager extends AbstractManager {
  constructor() {
    super({ table: "caracteres" });
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

  insert(caracteres) {
    return this.database.query(
      `insert into ${this.table} (caractere) values (?)`,
      [caracteres.caractere]
    );
  }

  update(caracteres) {
    return this.database.query(
      `update ${this.table} set caractere = ? where id = ?`,
      [caracteres.caractere, caracteres.id]
    );
  }
}

module.exports = CaracteresManager;
