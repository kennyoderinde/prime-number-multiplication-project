import React from "react";
import { render } from "@testing-library/react";
import MultiplicationTable from "./MultiplicationTable";

test("generates the correct list of primes", () => {
  const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  const primes = MultiplicationTable.generatePrimes(10);
  expect(primes).toEqual(expected);
});

test("generates the correct multiplication table", () => {
  const expected = [
    [4, 6, 10, 14, 22, 26, 34, 38, 46, 58],
    [6, 9, 15, 21, 33, 39, 51, 57, 69, 87],
    [10, 15, 25, 35, 55, 65, 85, 95, 115, 145],
    [14, 21, 35, 49, 77, 91, 119, 133, 161, 203],
    [22, 33, 55, 77, 121, 143, 187, 209, 253, 319],
    [26, 39, 65, 91, 143, 169, 221, 247, 299, 377],
    [34, 51, 85, 119, 187, 221, 289, 323, 391, 493],
    [38, 57, 95, 133, 209, 247, 323, 361, 437, 551],
    [46, 69, 115, 161, 253, 299, 391, 437, 529, 667],
    [58, 87, 145, 203, 319, 377, 493, 551, 667, 841],
  ];
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  const table = MultiplicationTable.generateTable(primes);
  expect(table).toEqual(expected);
});

test("renders the multiplication table", () => {
  const { getByText } = render(<MultiplicationTable />);
  const headers = ["", "2", "3", "5", "7", "11", "13", "17", "19", "23", "29"];
  const cells = [
    ["2", "4", "6", "10", "14", "22", "26", "34", "38", "46", "58"],
    ["3", "6", "9", "15", "21", "33", "39", "51", "57", "69", "87"],
    ["5", "10", "15", "25", "35", "55", "65", "85", "95", "115", "145"],
    ["7", "14", "21", "35", "49", "77", "91", "119", "133", "161", "203"],
    ["11", "22", "33", "55", "77", "121", "143", "187", "209", "253", "319"],
    ["13", "26", "39", "65", "91", "143", "169"],

  ]
})
//Regenerate response
