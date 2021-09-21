import fs from 'fs';
import path from 'path';

export default class Builder {

    /*
    A Builder function should take in the following parameters:
    
    sections - Array: text content sections
    filename - String: name of file
    extentsion - String: file extension
    path - String: output path (Directory)

    The output will consist of a file named with the provided name and extension with the given sections inserted
    */

    build = () => {};  

    constructor(builder){
        if(typeof builder !== 'function'){
            builder = () => {
                console.log("Builder was not supplied a valid function to build");
            }
        }
        this.build = builder;
    }

    pack(sections){
        return sections.join('\n');
    }

    writeFileReturn(pth, content){
        fs.writeFileSync(path.resolve(pth), content)
        return pth;
    }

}