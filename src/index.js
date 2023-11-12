import a from "./a";
import b from "./b";

const c = a + b

export {a, b, c}

export const testFn = () => {
    debugger
    console.log('a', a)
    console.log('b', b)
    console.log('c', c)
}