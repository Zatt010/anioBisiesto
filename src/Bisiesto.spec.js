import bisiesto from "./Bisiesto.js";

describe("Es bisiesto", () => {
  it("Es bisiesto si son divisibles por 4 pero no por 100", () => {
    expect(bisiesto(2008)).toEqual(true);
  });
  it("No es bisiesto", () => {
    expect(bisiesto(1800 )).toEqual(false);
  });
});
