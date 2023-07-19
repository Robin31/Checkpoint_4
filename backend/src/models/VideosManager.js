const AbstractManager = require("./AbstractManager");

class VideosManager extends AbstractManager {
  constructor() {
    super({ table: "videos" });
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

module.exports = VideosManager;
