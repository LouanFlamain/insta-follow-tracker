import { By } from "selenium-webdriver";

export const Click = async (driver: any, location: string) => {
  try {
    let clickerLocation = await driver.findElement(By.className(location));
    await clickerLocation.click();
    return null;
  } catch (error) {
    console.error("Error in Click function:", error);
    throw error;
  }
};
