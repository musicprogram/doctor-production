import {atom} from "recoil";
import {dataRules} from "../data/dataRegletas";
import {randomNum} from "../components/utils.js";
import {dataShots} from "../data/dataShots.js";

export const categoryMain = atom({
  key: 'categoryMain', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});


export const videoMain = atom({
  key: 'videoMain', // unique ID (with respect to other atoms/selectors)
  default: randomNum(7,8)

});

export const arrayLiquors = atom({
  key: 'arrayLiquors', // unique ID (with respect to other atoms/selectors)
  default: dataShots
});

