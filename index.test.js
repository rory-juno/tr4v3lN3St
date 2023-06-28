const scrapeAirBnb = require("./index.js");

describe("ScrapeAirBnb:", () => {
  const expired = "33571268";
  // const poppyRoom = "33571268"; // expired
  const randomRoom = "16129596";
  const norfolkRoom = "50633275";

  jest.setTimeout(60000);

  it("scrapes Norfolk exampple and returns a property name and type", async () => {
    const { propertyName, propertyType, propertyStats } = await scrapeAirBnb(
      norfolkRoom
    );

    expect(propertyName).toEqual(
      "Lovely loft on the beautiful North Norfolk Coast"
    );

    expect(propertyType).toEqual("guest house");

    expect(propertyStats.bedrooms).toEqual("1");
    expect(propertyStats.bathrooms).toEqual("1");
  });

  it("scrapes random example returns a property name and type", async () => {
    const { propertyName, propertyType, propertyStats } = await scrapeAirBnb(
      randomRoom
    );

    expect(propertyName).toEqual(
      "Plymouth, Devon. Bovisand. Quiet, Sea Views. WIFI"
    );

    expect(propertyType).toEqual("chalet");

    expect(propertyStats.bedrooms).toEqual("1");
    expect(propertyStats.bathrooms).toEqual("1");
  });

  it("errors when property is no longer listed", async () => {
    const { error } = await scrapeAirBnb(expired);

    expect(error).toEqual("property no longer listed");
  });
});
