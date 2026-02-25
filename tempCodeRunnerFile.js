const content="Hello world";
fs.writeFile("example.txt", content, (err)=>{  // here there is no need to read the data because, u're not reading anything but u're writing..
    if(err){
        console.log("Error writing to a file", err);
        return;
    }
    console.log("File written successfully")

});