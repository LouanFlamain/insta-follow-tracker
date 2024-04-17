import json from "../config/instructions.json" assert { type: "json" };
import jsonhl from "../config/instruction-hl.json" assert { type: "json" };
import { Click } from "./actions/click.js";
import { Redirect } from "./actions/redirect.js";
import { ScrollAndLoad } from "./actions/scroll-and-load.js";
import { Sleep } from "./actions/sleep.js";
import { Write } from "./actions/write.js";
export const Execute = async (driver, data) => {
    let list = {
        follow: [],
        followers: [],
    };
    let json_doc = json.instructions;
    if (process.env.HEADLESS_MODE == "true") {
        json_doc = jsonhl.instructions;
    }
    for (const element of json_doc) {
        console.log(element.name);
        /*const elementFound = await waitForClassWithTimeout(
          driver,
          element.identifiant,
          5000,
          element.type
        );
    
        if (!elementFound) {
          console.log("skip step : ", element.name);
          continue;
        }*/
        if (element.wait) {
            await Sleep(element.wait);
        }
        switch (element.type) {
            case "click":
                await Clicker(driver, element.identifiant);
                break;
            case "write":
                await Writer(driver, element.identifiant, data);
                break;
            case "redirect":
                await Redirection(driver, element.identifiant);
                break;
            case "scroll":
                await Scroller(driver, element.identifiant, element.name, list);
                break;
        }
    }
    if (list.follow.length === list.followers.length) {
        return "le nombre de follow et followers est identique";
    }
    else {
        let resultFollowers = list.follow.filter((item) => list.followers.indexOf(item) == -1);
        let resultFollow = list.followers.filter((item) => list.follow.indexOf(item) == -1);
        console.log("followers manquant : ", resultFollowers, "comptes non suivie en retour : ", resultFollow);
        return "finish";
        return `followers manquant : ${resultFollowers}, comptes non suivie en retour : ${resultFollow}`;
    }
};
const Clicker = async (driver, location) => {
    const response = await Click(driver, location);
    if (response !== null) {
        return response;
    }
};
const Writer = async (driver, location, data) => {
    let dataType = data[location]; // Utiliser directement les clés du type UserInfoType
    if (dataType != null) {
        const response = await Write(driver, dataType, location);
        if (response !== null) {
            console.log(response);
        }
    }
    else {
        console.log("No data available for:", location);
    }
};
const Redirection = async (driver, location) => {
    await Redirect(driver, location);
};
const Scroller = async (driver, location, name, list) => {
    const response = await ScrollAndLoad(driver, location);
    if (name === "scroll-follow") {
        list.follow = response;
    }
    if (name === "scroll-followers") {
        list.followers = response;
    }
};
