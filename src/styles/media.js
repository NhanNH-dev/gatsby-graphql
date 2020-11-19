import { css } from "styled-components"

const screenSizes = {
  mobileS: 0,
  mobile: 425,
  tablet: 768,
  laptop: 1024,
  laptopM: 1366,
  laptopL: 1440,
  desktop: 1920,
}

const media = Object.keys(screenSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${screenSizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default media
