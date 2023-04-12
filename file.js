const fs = require('fs');
// const quote="No beauty shines brighter than that of a good heart";
// fs.writeFile("./awesome.html",quote,(err)=>{
//     console.log("Completed writing!!");
// });
// 10 fils in 1 folder
const quote2="No beauty shines brighter than that of a good heart";

// for(let i = 1;i <= 10 ;i++){
//     fs.writeFile("./backup/text-1.html",quote2,(err)=>{
//         console.log("Completed writing!!")
//     });   
// }
// fs.readFile("./cool.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("❌","err")
//     }
//     else{
//         console.log(data);
//     }
// })

// fs .appendFile("./fun.html","\n"+quote2,(err)=>{
//     console.log("Complete Appending");
// })
fs.unlink("./delete.css",(err)=>{
    console.log("complete deleting!!");
})