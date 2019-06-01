module.exports = {
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "nodeuser",
    password: "",
    database: "knex_todolist_db",
    debug: ['ComQueryPacket', 'RowDataPacket']
  }
};