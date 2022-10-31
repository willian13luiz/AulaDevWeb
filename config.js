const dotenv = require("dotenv");
dotenv.config();
const { PORT, pgConnect } = process.env;
module.exports = {
  port: PORT,
  urlConnection: pgConnect,
};
