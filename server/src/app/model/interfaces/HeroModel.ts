import mongoose = require('mongoose');

interface HeroModel extends mongoose.Document {
  _id?:string;
  power: string;
  amountPeopleSaved: number;
  name: string;
}

export = HeroModel;