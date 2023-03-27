export default function getElementScrollCoefficient(scrollY, innerHeight, el) {
  if (el) {
    const { top, bottom, height } = el.getBoundingClientRect()
    const elementScrollCoefficient =
      (innerHeight - top) / (innerHeight + height)

    switch (true) {
      case elementScrollCoefficient < 0:
        // Element is above the screen
        return 0
      case elementScrollCoefficient > 1:
        // Element is below the screen
        return 1
      case top + scrollY < innerHeight:
        // Element starts above the fold
        return scrollY / (bottom + innerHeight)
      default:
        // Element starts below the fold
        return elementScrollCoefficient
    }
  }
  // Element doesn't exist
  return 0
}
