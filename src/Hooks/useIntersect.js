import React, { useEffect, useRef, useState } from "react"

export default ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, updateEntry] = useState({})
  const [node, setNode] = useState(null)
  const intersectionObserver =
    typeof window !== `undefined`
      ? new window.IntersectionObserver(([entry]) => updateEntry(entry), {
          root,
          rootMargin,
          threshold,
        })
      : null
  const observer = useRef(intersectionObserver)

  useEffect(() => {
    const { current: currentObserver } = observer
    currentObserver.disconnect()

    if (node) currentObserver.observe(node)

    return () => currentObserver.disconnect()
  }, [node])

  return [setNode, entry]
}
