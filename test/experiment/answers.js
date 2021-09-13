import { getAnswer } from "./getAnswer.js";

const myNameStr = getAnswer("../../exercises/experiment/01-my-name.js");
const fixErrorStr = getAnswer("../../exercises/experiment/02-fix-error.js");
const addStr = getAnswer("../../exercises/experiment/03-add.js");
const stringLengthStr = getAnswer(
  "../../exercises/experiment/08-string-length.js"
);
const getLastWordInPlaceNameStr = getAnswer(
  "../../exercises/experiment/11-get-last-word-in-place-name.js"
);

export const myName = eval(`() => {
  ${myNameStr}
  return myName;
}`);

export const fixError = eval(`() => {
  ${fixErrorStr}
  return numberOfLikes;
}`);

export const add = eval(`(a, b) => {
  ${addStr}
  return sum;
}`);

export const stringLength = eval(`(str) => {
  ${stringLengthStr}
  return strLength;
}`);

export const getLastWordInPlaceName = eval(`(place) => {
  ${getLastWordInPlaceNameStr}
  return newPlace;
}`);
