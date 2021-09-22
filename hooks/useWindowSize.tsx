import { useEffect, useState } from 'react'

interface WindowSize {
  width: any
  height: any
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined
  })

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handler = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }

      // Set size at the first client-side load
      handler()

      window.addEventListener('resize', handler)

      // Remove event listener on cleanup
      return () => {
        window.removeEventListener('resize', handler)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return windowSize
}

export default useWindowSize
