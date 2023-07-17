const AbstractManager = require("./AbstractManager");

class RacesManager extends AbstractManager {
  constructor() {
    super({ table: "races" });
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

module.exports = RacesManager;
