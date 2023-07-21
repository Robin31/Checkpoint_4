const AbstractManager = require("./AbstractManager");

class AuthManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (email, password) values (?, ?)`,
      [user.email, user.password]
    );
  }

  findUser(email) {
    return this.database.query(
      `select p.firstname, p.lastname, p.src, u.email, u.password, u.role, u.id from ${this.table} u INNER JOIN profils as p on u.id = p.user_id where email = ?`,
      [email]
    );
  }
}

module.exports = AuthManager;
