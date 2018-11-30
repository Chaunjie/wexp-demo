export default function sleep () {
  delay(1000)
}

function delay (n) {
  const start = new Date().getTime()
  console.log('休眠1s开始')
  while (true) {
    if (new Date().getTime() - start > n) {
      console.log('休眠结束')
      break
    }
  }
}
