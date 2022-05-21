import { add, multiply } from "./math.js"
import dayjs  from "dayjs"
// ctr + space  to see exported functions from math.js
console.log(add(10,32));
console.log(multiply(3,6));
// you see the function automatically imported to the head

console.log(dayjs().format('{YYYY} MM-DDTHH:mm:ss :SSS [Z] A'));
