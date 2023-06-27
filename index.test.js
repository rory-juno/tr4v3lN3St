const scrapeAirBnb = require("./index.js");

describe("ScrapeAirBnb:", () => {
  const mockError = "https://www.airbnb.co.uk/rooms/33571268";
  const mockPoppyPad = "https://www.airbnb.co.uk/rooms/33571268";
  const mockNorfolk = "https://www.airbnb.co.uk/rooms/50633275";

  it("scrapes airbnb and returns a body", () => {
    const data = scrapeAirBnb(mockError);

    expect(data).toEqual({});
  });
});
