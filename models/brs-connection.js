const readline = require("readline");
const mongoose = require("mongoose");
const dataBaseUrl = "mongodb://127.0.0.1:27017/local";
const databaseName = "local";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const connectDB = mongoose.connect(
  dataBaseUrl,
  {
    useNewUrlParser: true,
  },
  (error, result) => {
    if (error) {
      console.log(
        "bir hata meydana geldi ve db ile bağlantı kurulamadı",
        error
      );
    } else {
      console.log("SERVER İLE BAĞLANTI KURULDU:", result);
    }
  }
);
const schema = mongoose.Schema;
let blogSchema = new schema({
  post_header: String,
  post_img: String,
  post_description: String,
  post_url: String,
});
let memberSchema = new schema({
  member_email: String,
  member_fullName: String,
});

const blog = mongoose.model("brs-blog-colls", blogSchema);
const addData = () => {
  blog.create(
    {
      post_header: "BU BİR POST BAŞLIĞI",
      post_img: "images/brs-bgi2",
      post_description: "BU BİR POST AÇIKLAMASIDIR",
      post_url: "sample-post",
    },
    (error, result) => {
      if (error) {
        console.log(
          "Veri eklerken bir hata meydana geldi ve veri eklenemedi",
          error
        );
      } else {
        console.log("veri başarıla eklendi :", result);
      }
    }
  );
};
module.exports.connectDB = connectDB;
