require('dotenv').config();
const express = require('express');
const sequelize = require('./data/db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');
const bcrypt = require('bcrypt');

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);


app.use(errorHandler);


const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    const password = '20042008asdA';
    const hashPassword = await bcrypt.hash(password, 5);
    await models.Admin.findOrCreate({
      where: {role: 'ADMIN'},
      defaults: {
        login: 'adminIlia',
        role: 'ADMIN',
        password: hashPassword,
      }
    });
    app.listen(PORT, () => {
      console.log("server ok!");
    });
  } catch(event) {
    console.log(event);
  }
};

start();


