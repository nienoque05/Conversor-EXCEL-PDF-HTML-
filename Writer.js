
const fs = require("fs");
const util = require("util");

class Writer{
    constructor(){
        this.writer = util.promisify(fs.writeFile);
    }

   async Write(filname, data){
       try{
        return await this.writer(filname,data);
        return true;
       }catch(err){
           return false;

       }

        
    }

}

module.exports = Writer;