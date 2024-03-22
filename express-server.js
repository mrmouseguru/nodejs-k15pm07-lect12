import express from "express"

let app = express();

app.get("/", (req, res) =>{
    res.send("Hello from express server!!!");
})

//GET: /text
//server: read content from myfile.txt
//response to client

app.use("/files", express.static("public"));

app.get("/api/students/:id", (req, res) => {
    let studentId = req.params.id;
    console.log("student id: ", studentId);
    let na = req.query.name;
    let ad = req.query.address;

    console.log("name :" , na);

    console.log("address :" , ad);

    res.json({
        id : studentId,
        name: na,
        address : ad
    });

});


app.listen("7777", () =>{
    console.log("Now listening on port 7777");
})