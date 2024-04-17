import { By } from "selenium-webdriver";

export const ScrollAndLoad = async (driver: any, locator: string) => {
  let response = [];
  let oldArrayLength = 0;

  while (true) {
    const array = await driver.findElements(By.className(locator));
    let newArrayLength = array.length;
    if (newArrayLength === oldArrayLength) {
      break;
    }
    await driver.executeScript(
      "const container = document.querySelector('._aano');" +
        "container.scrollTo(0, container.scrollHeight);"
    );
    await driver.sleep(1500);
    oldArrayLength = newArrayLength;
    //console.log({ oldArrayLength, newArrayLength });
  }

  const finalArray = await driver.findElements(By.className(locator));
  for (let element of finalArray) {
    const text = await element.getText();
    response.push(text);
  }

  return response;
};
