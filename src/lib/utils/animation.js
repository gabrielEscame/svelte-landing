import { gsap } from 'gsap'

export const slideAnimation = (element, configs = {}) => {
  gsap.from(element, {
    x: configs?.x || -200,
    rotate: configs?.rotate || '5deg',
    opacity: configs?.opacity || 0,
    duration: configs?.duration || 0.6,
    delay: configs?.delay || 0
  })
}