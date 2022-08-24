module.exports.index = function (req, res, next) {
  let projects = [
    {
      project_header: "project",
      project_details: "lorem ipsum dolor sit amet consecetur sit onat.....",
      project_url: "github.com/BerkaySarac-Hub",
    },
    {
      project_header: "project 2",
      project_details: "lorem ipsum dolor sit amet consecetur sit onat.....",
      project_url: "github.com/BerkaySarac-Hub",
    },
    {
      project_header: "project 3",
      project_details: "lorem ipsum dolor sit amet consecetur sit onat.....",
      project_url: "github.com/BerkaySarac-Hub",
    },
  ];
  res.render("projects", { projects: projects });
};
