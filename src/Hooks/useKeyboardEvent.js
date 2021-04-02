import React, { useEffect } from "react"

export default function useKeyboardEvent(key, callback) {
  useEffect(() => {
    const handler = event => {
      if (event.key !== key) return
      callback()
    }
    window.addEventListener("keydown", handler)
    return () => {
      window.removeEventListener("keydown", handler)
    }
  }, [callback, key])
}
