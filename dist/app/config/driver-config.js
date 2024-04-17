import { Browser, Builder } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";
export const DriverConfig = async (url) => {
    let options = new chrome.Options();
    if (process.env.HEADLESS_MODE == "true") {
        options.addArguments("headless");
    }
    const driver = await new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(options)
        .build();
    await driver.get(url);
    await driver.manage().setTimeouts({ implicit: 10000 });
    return driver;
};
