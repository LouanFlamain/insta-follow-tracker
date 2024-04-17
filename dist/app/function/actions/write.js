import { By } from "selenium-webdriver";
export const Write = async (driver, value, identifiant) => {
    try {
        let input = await driver.findElement(By.name(identifiant));
        if (value !== null) {
            await input.sendKeys(value);
        }
        return null;
    }
    catch (error) {
        console.error("Error in Write function:", error);
        throw error;
    }
};
