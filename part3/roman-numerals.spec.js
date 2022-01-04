const RomanNumerals = require("./roman-numerals");

describe("Part 3 - Roman Numerals", () => {
  let instance;

  beforeEach(() => {
    instance = new RomanNumerals();
  });

  it("should return `I` when asked number is `1`", () => {
    expect(instance.convert(1)).toBe("I");
  });

  it("should return `II` when asked number is `2`", () => {
    expect(instance.convert(2)).toBe("II");
  });

  it("should return `IV` when asked number is `4`", () => {
    expect(instance.convert(4)).toBe("IV");
  });

  it("should return `V` when asked number is `5`", () => {
    expect(instance.convert(5)).toBe("V");
  });

  it("should return `VI` when asked number is `6`", () => {
    expect(instance.convert(6)).toBe("VI");
  });

  it("should return `IX` when asked number is `9`", () => {
    expect(instance.convert(9)).toBe("IX");
  });

  it("should return `XLIX` when asked number is `49`", () => {
    expect(instance.convert(49)).toBe("XLIX");
  });

  it("should return `LIII` when asked number is `53`", () => {
    expect(instance.convert(53)).toBe("LIII");
  });

  it("should return `XCIX` when asked number is `99`", () => {
    expect(instance.convert(99)).toBe("XCIX");
  });

  it("should return `CVII` when asked number is `107`", () => {
    expect(instance.convert(107)).toBe("CVII");
  });

  it("should return `CXLIX` when asked number is `149`", () => {
    expect(instance.convert(149)).toBe("CXLIX");
  });

  it("should return `CXCIX` when asked number is `199`", () => {
    expect(instance.convert(199)).toBe("CXCIX");
  });
});
