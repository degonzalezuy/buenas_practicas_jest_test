import * as app from "../App";
import * as math from "./math";
//See all module functions to jest.fn
jest.mock("./math.js");
test("calls math.add", () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.substract", () => {
    app.doSubstract(1, 2);
    expect(math.substract).toHaveBeenCalledWith(1,2);
});