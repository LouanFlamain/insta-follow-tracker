import { By } from "selenium-webdriver";
import { Sleep } from "./sleep.js";

export const waitForClassWithTimeout = async (
  driver: any,
  className: string,
  timeout: number,
  type: string
) => {
  let startTime = new Date().getTime();
  let endTime = startTime + timeout;

  while (new Date().getTime() < endTime) {
    try {
      // Tente de trouver l'élément par sa classe
      let elementFound = null;
      switch (type) {
        case "click":
          elementFound = await driver.findElement(By.className(className));
          break;
        case "write":
          elementFound = await driver.findElement(By.name(className));
          break;
        default:
          return false;
      }
      elementFound = await driver.findElement(By.className(className));
      if (elementFound) {
        console.log("Element found, exiting...");
        return true; // Retourne true immédiatement si l'élément est trouvé
      }
    } catch (error) {
      // Affiche un message d'erreur et continue de réessayer jusqu'à l'expiration du timeout
      console.log("Element not found, retrying...");
    }
    // Attente avant de réessayer
    await Sleep(1000);
  }

  // Retourne false si l'élément n'est pas trouvé avant la fin du timeout
  return false;
};
