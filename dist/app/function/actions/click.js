import { By } from "selenium-webdriver";
export const Click = async (driver, location) => {
    try {
        let clickerLocation = await driver.findElement(By.className(location));
        await clickerLocation.click();
        return null;
    }
    catch (error) {
        console.error("Error in Click function:", error);
        throw error;
    }
};
