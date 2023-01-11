import * as express from 'express';
import User from '../models/user';
import * as bcrypt from 'bcrypt';
import { ROUNDS_OF_SALT } from '../config/constants';

const registerUser = async (req: express.Request, res: express.Response) => {
  const { name, email, password } = req.body;

  //check if the email is already used
  const checkUser = await User.findOne({ email: email });
  if (checkUser) {
    return res.status(409).json('Email already used');
  }

  // Hash the password using bcrypt
  bcrypt.hash(password, ROUNDS_OF_SALT, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    // Store the new user in the database
    const user = new User({ name, email, password: hash });
    console.log(user);
    user.save((err) => {
      if (err) {
        return res.status(500).json({ error: err });
      }

      return res.json({ message: 'Successfully registered new user!' });
    });
  });
};

const loginUser = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const hashedPassword = user.password;
  bcrypt.compare(password, hashedPassword, function (err, result) {
    if (result) {
      return res.status(200).send({ message: 'Succesffully loged in' });
    }
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(500).send({ message: 'Invalid credentials' });
  });
};

export { registerUser, loginUser };
