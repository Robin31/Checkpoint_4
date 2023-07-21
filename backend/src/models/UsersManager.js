const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  find(id) {
    return this.database.query(
      `select u.email, u.password, u.role from ${this.table} where id = ?`,
      [id]
    );
  }

  insert(users) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      users.title,
    ]);
  }

  update(email, id) {
    return this.database.query(
      `update ${this.table} set email = ? where id = ?`,
      [email, id]
    );
  }
}

module.exports = UsersManager;
