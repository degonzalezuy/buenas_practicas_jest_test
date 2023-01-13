/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
import * as app from "./App";
import * as math from "./js/math";

math.add = jest.fn();
math.substract = jest.fn();

test("calls math.add", ()=>{
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math subctract", () => {
  app.doSubstract(1, 2);
  expect(math.substract).toHaveBeenCalledWith(1, 2);
});


