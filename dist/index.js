import { DriverConfig } from "./app/config/driver-config.js";
import { GetLoggerInformation } from "./app/function/get-logger-information.js";
import { Execute } from "./app/function/execute.js";
const main = async () => {
    const userData = await GetLoggerInformation();
    const driver = await DriverConfig("https://www.instagram.com/accounts/login");
    await driver.getTitle();
    console.log(await Execute(driver, userData));
    driver.quit();
};
main();
