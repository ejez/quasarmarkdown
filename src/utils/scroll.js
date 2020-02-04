import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

// function that scrolls a scrollable container to a given element inside it
// https://quasar.dev/quasar-utils/scrolling-utils#Scrolling-to-an-element
export function scrollToElement ({
  el,
  refEl = 'main.q-page',
  duration = 500
}) {
  // get element
  const element = document.querySelector(el)

  if (element) {
    // get the scrollable container containing our element
    const scrollableContainer = getScrollTarget(element)

    // The initial location of the 'reference element' (ie: when the scrollable
    // container is not scrolled yet) is used as the target location of the
    // given element, for example if the ref element is '.q-page', which is
    // usually located right below the header when the window is not scrolled,
    // then elements scrolled into view with this function will be placed right
    // under the header, this way we avoid having the element getting hidden by
    // the header.

    // get reference element
    // Note: the provided ref element should reside in the scrollable container.
    // if the provided 'reEl' does not exist we use '.q-page', if that also does
    // not exist we use 'body'
    const refElement = document.querySelector(refEl)
      ? document.querySelector(refEl)
      : document.querySelector('main.q-page')
        ? document.querySelector('main.q-page')
        : document.querySelector('body')

    // get position info
    const elRect = element.getBoundingClientRect()
    const refElRect = refElement.getBoundingClientRect()

    // 'targetScrollPosition' is how much we want the scrollable container to be
    // scrolled.
    const targetScrollPosition = elRect.y - refElRect.y

    // execute scroll
    setScrollPosition(scrollableContainer, targetScrollPosition, duration)
  }
}
