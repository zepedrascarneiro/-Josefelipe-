import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

// Conta de 0 até `end` quando o elemento entra na viewport — usa os mesmos
// números que já existiam nos cards, só anima a entrada deles.
export default function CountUp({ end, duration = 1.6, decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, end, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: v => setValue(v),
    })
    return () => controls.stop()
  }, [inView, end, duration])

  return <span ref={ref}>{value.toFixed(decimals)}</span>
}
