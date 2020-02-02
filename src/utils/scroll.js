import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export function scrollToElement ({ el, duration = 500 }) {
  // check if a quasar header component exists and get its height
  const layoutHeader = document.querySelector('header.q-header')
  const layoutHeaderHeight = layoutHeader ? layoutHeader.offsetHeight : 0

  // when scrolling to an element, it might be hidden by the header, to avoid
  // this we adjust the scroll position
  const scrollPosition = el.offsetTop - layoutHeaderHeight

  setScrollPosition(getScrollTarget(el), scrollPosition, duration)
}
