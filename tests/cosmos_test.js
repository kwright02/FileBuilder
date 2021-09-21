import CosmosPackager from '../packager/cosmos_packager.js';
import fs from 'fs';

const pckgr = new CosmosPackager();
const packagedComponents = new Map();

pckgr.placeholderDict["%cwd%"] = process.cwd();

const fileComponents = ["test", "toolbar"]

for(let component in fileComponents){
    const sections = [];
    sections[0] = "<script>\n" + fs.readFileSync(`./${fileComponents[component]}/${fileComponents[component]}.component.js`) + "\n\n</script>";
    sections[1] = "<style>\n" + fs.readFileSync(`./${fileComponents[component]}/${fileComponents[component]}.component.css`) + "\n\n</style>";
    sections[2] = fs.readFileSync(`./${fileComponents[component]}/${fileComponents[component]}.component.html`) + "";

    const componentProperName = fileComponents[component].charAt(0).toUpperCase() + fileComponents[component].substring(1);

    packagedComponents.set(fileComponents[component], pckgr.build(sections, componentProperName, ".cosmos", "./"));
}


console.log("Component Packaged");