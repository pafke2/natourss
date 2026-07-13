const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');
const Review = require('../../models/reviewModel');
const User = require('../../models/userModel');

dotenv.config({
  path: './config.env',
});

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// READ JSON FILE
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'));
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));
const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8'),
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    // await Tour.create(tours);
    // for (const tour of tours) {
    //   await Tour.create(tour);
    //   await delay(50); // 50ms pause between each record
    // }
    // for (const user of users) {
    //   const newUser = new User(user);
    //   await newUser.save({ validateBeforeSave: false });
    //   await delay(50); // 50ms pause between each record
    // }
    // for (const review of reviews) {
    //   await Review.create(review);
    //   await delay(50); // 50ms pause between each record
    // }
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    // await Tour.deleteMany();
    await User.deleteMany();
    // await Review.deleteMany();
    console.log('Data deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  // deleteData();
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
