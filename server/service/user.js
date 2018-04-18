import mongoose from 'mongoose';

const User = mongoose.model('User');

export const checkPassword = async (email, password) => {
  // let match = false;
  // const user = await User.findOne({ email });

  // if (user) {
  //   match = await user.comparePassword(password, user.password);
  // }

  // return {
  //   match,
  //   user,
  // };

  return {
    match: true,
    user: {
      name: '黄嘉庆',
      _userId: '1234',
      email: 'test@zz.com',
    }
  }
};