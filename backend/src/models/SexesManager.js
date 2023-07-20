const AbstractManager = require("./AbstractManager");

class SexesManager extends AbstractManager {
  constructor() {
    super({ table: "sexes" });
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }
}

module.exports = SexesManager;
