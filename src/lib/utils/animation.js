import { gsap } from 'gsap'

export const slideAnimation = (element, configs = {}) => {
  gsap.from(element, {
    x: configs?.x || -280,
    rotate: configs?.rotate || '0deg',
    opacity: configs?.opacity || 0,
    duration: configs?.duration || 0.6,
    delay: configs?.delay || 0
  })
}

export const scaleAnimation = (element, configs = {}) => {
  gsap.from(element, {
    height: configs?.height || '100%',
    width: configs?.width || '100%',
    duration: configs?.duration || 0.625,
    delay: configs?.delay || 0.125
  })
}
