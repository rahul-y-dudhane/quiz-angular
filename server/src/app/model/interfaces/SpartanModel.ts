import mongoose = require('mongoose');

interface SpartanModel extends mongoose.Document {
  _id?: string;
  folk: string;
  amountPeopleKilled: number;
  name: string;
}

export = SpartanModel;