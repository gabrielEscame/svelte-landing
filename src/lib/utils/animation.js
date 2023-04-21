import { gsap } from 'gsap'

export const slideAnimation = (element, configs = {}) => {
  gsap.from(element, {
    [configs?.axis || 'x']: configs?.position || -280,
    rotate: configs?.rotate || '0deg',
    opacity: configs?.opacity || 0,
    duration: configs?.duration || 0.6,
    delay: configs?.delay || 0,
    scrollTrigger: configs?.scrollTrigger || ''
  })
}

export const scaleAnimation = (element, configs = {}) => {
  gsap.from(element, {
    height: configs?.height || '100%',
    width: configs?.width || '100%',
    duration: configs?.duration || 0.6,
    delay: configs?.delay || 0
  })
}
