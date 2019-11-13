const fs = require('fs');

class Visitor{
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, assistorName){
        this.fullName = fullName;
        this.age = age;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments;
        this.assistorName;
    }

    save(){
        this.count = 0;
        let jsonString = JSON.stringify(this, null, 3);
        jsonString = jsonString.replace(" ", "_");

        let name = this.fullName.replace(" ", "_");
        name = name.toLowerCase();

        fs.writeFile(`visitor_${name}.json`, jsonString, (err) => {

            if (!err)
                console.info("Data written to file" + `${jsonString}`);
            else
                console.info(err);
        })
    }

   load(fullname){

        let str = fullname.replace(" ", "_");
        str = str.toLowerCase();
       let content = fs.readFileSync(`visitor_${str}.json`, 'utf-8');
       console.info(content);
}


}