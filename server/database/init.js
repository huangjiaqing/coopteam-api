import mongoose from 'mongoose';
import glob from 'glob';
import { resolve } from 'path';

const db = 'mongodb://127.0.0.1:27017/coopteam';

mongoose.Promise = global.Promise;

export const initSchemas = () => {
  glob.sync(resolve(__dirname, './schemas', '**/*.js')).forEach(require);
};

export const initAdmin = async () => {
  const User = mongoose.model('User');
  let user = await User.findOne({
    username: '黄嘉庆'
  });

  if (!user) {
    const user = new User({
      username: '黄嘉庆',
      email: 'test@qq.com',
      password: '123456',
      role: 'admin',
    });

    await user.save();
  }
};

export const connect = () => {
  let maxConnectTimes = 0;

  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }

    mongoose.connect(db);

    mongoose.connection.on('disconnected', () => {
      maxConnectTimes++;

      if (maxConnectTimes < 5) {
        mongoose.connect(db);
      } else {
        throw new Error('[mongoose log] Error connecting to: ' + db);
      }
    });

    mongoose.connection.on('error', err => {
      maxConnectTimes++;

      if (maxConnectTimes < 5) {
        mongoose.connect(db);
      } else {
        throw new Error('[mongoose log] Error connecting to: ' + db + ' & error: ' + err);
      }
    });

    mongoose.connection.once('open', () => {
      console.log('MongoDB Connected successfully!')
      resolve();
    });
  });
};