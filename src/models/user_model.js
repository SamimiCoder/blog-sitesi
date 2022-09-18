const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    ad: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 30,
    },
    soyad: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    emailAktif: {
      type: Boolean,
      default: false,
    },
    sifre: {
      type: String,
      required: true,
      trim: true,
      unique: false,
    },
  },
  { collection: "kullanicilar", timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
