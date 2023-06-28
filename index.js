const puppeteer = require("puppeteer");

const scrapeAirBnB = async (room) => {
  const startURL = "https://www.airbnb.co.uk/rooms/" + room;
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(startURL);

  try {
    const title = await page.waitForSelector("h1");
    const type = await page.waitForSelector("h2");
    const propertyStatsLine = await page.waitForSelector("ol");

    const amenitiesButton = await page.waitForSelector(
      "div[data-section-id='AMENITIES_DEFAULT'] > section > div:nth-of-type(4) > button"
    );

    // reading original page state
    const propertyName = await title?.evaluate((el) => el.textContent);
    const propertyTypeLine = await type?.evaluate((el) => el.textContent);
    const propertyStats = await propertyStatsLine?.evaluate(
      (el) => el.textContent
    );

    const propertyType = propertyTypeLine
      .split("hosted")[0]
      .replace("Entire", "")
      .trim();
    const bedrooms = propertyStats.split(" ·  · ")[1].split(" ")[0];
    const bathrooms = propertyStats.split(" ·  · ")[3].split(" ")[0];

    // interactions
    // amenitiesButton.click();
    // const amenitiesModalSelector = await page.waitForSelector(
    //   'div[aria-label="What this place offers"]'
    // );

    await browser.close();

    return {
      propertyName,
      propertyType,
      propertyStats: { bedrooms, bathrooms },
    };
  } catch {
    console.log("Property no longer listed");
    await browser.close();

    return { error: "property no longer listed" };
  }
};

module.exports = scrapeAirBnB;
