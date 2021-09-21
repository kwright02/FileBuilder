import Builder from "../lib/builder.js";

export default class CosmosPackager extends Builder {

    placeholderDict = {};

    constructor(){
        super((sections, name, extension, out) => {

            /*
            Perform any transforms or inserts on the sections as needed
            */

            for(let i in sections){
                for(let placeholder of Object.entries(this.placeholderDict))
                    sections[i] = sections[i].replace(placeholder[0], placeholder[1]);
                sections[i] = sections[i] + "\n";
            }

            /*
            Package sections into data string
            */

            var data = this.pack(sections);

            this.writeFileReturn((out + "/" + name + extension), data);
            return (out + "/" + name + extension);
        });
    }

}