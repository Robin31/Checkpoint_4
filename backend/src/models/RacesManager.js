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

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  insert(races) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      races.name,
    ]);
  }

  update(races) {
    return this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [races.name, races.id]
    );
  }
}

module.exports = RacesManager;
