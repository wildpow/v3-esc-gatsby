const React,
  { useEffect } = require("react")

const getMobileDetect = userAgent => {
  let isAndroid = () => null
  let isIos = () => null
  let isOpera = () => null
  let isWindows = () => null
  let isMobile = () => null
  let isDesktop = () => null
  if (userAgent === null) {
    return {
      isMobile,
      isDesktop,
      isAndroid,
      isIos,
    }
  }
  isAndroid = () => Boolean(userAgent.match(/Android/i))
  isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
  isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
  isWindows = () => Boolean(userAgent.match(/IEMobile/i))

  isMobile = () => Boolean(isAndroid() || isIos() || isOpera() || isWindows())
  isDesktop = () => !isMobile()
  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIos,
  }
}
const useMobileDetect = () => {
  useEffect(() => {}, [])
  const userAgent =
    typeof window !== "undefined" ? window.navigator.userAgent : null
  return getMobileDetect(userAgent)
}

module.exports = useMobileDetect
