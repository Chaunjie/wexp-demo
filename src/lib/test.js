// define("reducers/visibilityFilter.js", function(require, module){var window={Math:Math}/*兼容babel*/,location,document,navigator,self,localStorage,history,Caches;

// /********************/
// /******你写的代码******/
// /********************/
//   console.log('in test')
//   console.log(666666)
// })
let val = 'aaaa'
export default function connect (states, actions) {
  console.log(states, actions)
  val = 'bbbbb'
  console.log(val)
}

export function test (states, actions) {
  console.log(val)
}

console.log(val)
// export default {
//   test () {
//     console.log(66666)
//   },
//   main () {}
// }
