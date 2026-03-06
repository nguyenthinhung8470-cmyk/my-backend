const express = require("express");
const app = express();

app.use(express.json());

// dữ liệu giả
let songs = [
    {id:1,name:"Song A",artist:"Artist A"},
    {id:2,name:"Song B",artist:"Artist B"},
    {id:3,name:"Song C",artist:"Artist C"}
];

// lấy danh sách bài hát
app.get("/songs",(req,res)=>{
    res.json(songs);
});

// thêm bài hát
app.post("/songs",(req,res)=>{
    const song = req.body;
    songs.push(song);
    res.json({message:"Song added"});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("Server running on " + PORT);
});