const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27018/Reuseable_Product_Manager",{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

