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

let alice = new Visitor("Alice Cooper", 33, "22 Nov 2019", "09:06 AM", "The service was great", "Maria Ntsele");
alice.save();
let bob = new Visitor("Bob Marley", 58, "23 Nov 2019", "11:17 AM", "The Nurse was very friendly", "Busisiwe Nkosi");
let charley = new Visitor("Charley Barker", 23, "01 Dec 2019", "07:06 AM", "Got help quickly", "Dr. Jeff Maluleke");
charley.save();
bob.save();
