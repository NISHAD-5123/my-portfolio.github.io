const express=require("express");
const path = require("path");
const hbs=require("hbs");
const console=require("console");
const Contactform = require("./models/contacts.js");
const app=express();
require("./db/conn.js");
const port=process.env.PORT || 3000;
static_path=path.join(__dirname,"../public");
templates_path=path.join(__dirname,"../templates/views");
partials_path=path.join(__dirname,"../templates/partials");
app.use(express.json());
app.use(express.static(static_path));
app.use(express.urlencoded({extended:false}));
app.set("view engine", "hbs");
app.set("views",templates_path);
hbs.registerPartials(partials_path);

app.use("/images",express.static('images'));

// making API's
app.get("/",(req, res)=>{
    res.render("index");
});
app.listen(port,()=>{
console.log(`server is running on ${port}`);
});
app.get("/contact",(req,res)=>{
    res.render("contact");
});
app.get("/submit",(req,res)=>{
    res.render("contacted");
});
app.get("/services",(req,res)=>{
    res.render("services");
});
app.get("/myproject",(req,res)=>{
    res.render("myproject");
});
app.get("/project1",(req,res)=>{
    res.render("cricket");
});
app.get("/project2",(req,res)=>{
    res.render("stationary");
});
app.get("/project3",(req,res)=>{
    res.render("index");
});
app.post("/submit", async(req,res)=>{
     const contactRegister= new Contactform({
    comment:req.body.comment,
    email:req.body.email,
    password:req.body.password,
  });
  const contacted= await contactRegister.save();
  res.status(201).render("contacted");
});

