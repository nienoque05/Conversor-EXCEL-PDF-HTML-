class Processor{
    static Process(data){
        var rows = data.split(" "); // divide string em partes
       var line = [];

     rows.forEach(row =>{

       var arr = row.split(",");
       line.push(arr);
      });
      return line;

    }
}
module.exports = Processor;