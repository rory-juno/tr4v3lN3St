const scrapeAirBnb = require("./index.js");

describe("ScrapeAirBnb:", () => {
  const mockError = "https://www.airbnb.co.uk/rooms/33571268";
  const mockPoppyPad = "https://www.airbnb.co.uk/rooms/33571268"; // expired
  const mockNorfolk = "https://www.airbnb.co.uk/rooms/50633275";

  it("scrapes airbnb and returns a property name", async () => {
    const {propertyName} = await scrapeAirBnb(mockNorfolk);

    expect(propertyName).toEqual({
      "Lovely loft on the beautiful North Norfolk Coast",
    });
  });
});
