const readline = require("readline");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { findById } = require("./user_model");
const dotenv = require("dotenv").config();
const dataBaseUrl =
  process.env.MONGODB_CONNECTİON_STRİNG || "mongodb+srv://IcanDieForJS:iU_J8NGZ2-.Rzt5@cluster0.j3ani6o.mongodb.net/?retryWrites=true&w=majority";
const databaseName = "local";

const connectDB = mongoose.connect(
  dataBaseUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error, result) => {
    if (error) {
      console.log(
        "bir hata meydana geldi ve db ile bağlantı kurulamadı",
        error
      );
    } else {
      console.log("SERVER İLE BAĞLANTI KURULDU:");
    }
  }
);
let schema = mongoose.Schema;
let blogSchema = new schema({
  post_header: { type: String, required: true, unique: true },
  post_img: {
    type: String,
    required: true,
    unique: true,
  },
  post_description: { type: String, required: true, unique: true },
});



let projectSchema = mongoose.Schema({
  projectHeader : {type:String,required:true,unique:false},
  projectDescription : {type:String,required:true,unique:false},
  projectUrl : {type : String,required:true,unique:true}
})
const project = mongoose.model("brs-project-colls",projectSchema);
const addProjectData = (project_header, project_description,project_url) => {
  project.create(
    {
      projectHeader: project_header,
      projectDescription: project_description,
      projectUrl : project_url
    },
    (error, result) => {
      if (error) {
        console.log(
          "Veri eklerken bir hata meydana geldi ve veri eklenemedi",
          error
        );
      } else {
        console.log("proje başarıyla eklendi :", result);
      }
    }
  );
};


const post = mongoose.model("brs-blog-colls", blogSchema);
const addPostData = (post_header, post_img, post_description) => {
  post.create(
    {
      post_header: post_header,
      post_img: post_img,
      post_description: post_description,
    },
    (error, result) => {
      if (error) {
        console.log(
          "Veri eklerken bir hata meydana geldi ve veri eklenemedi",
          error
        );
      } else {
        console.log("post başarıyla eklendi :", result);
      }
    }
  );
};



module.exports = {
  connectDB,
  addPostData,
  post,
  blogSchema,
  addProjectData,
  project
};