import { useMotionValue, useSpring, useTransform } from 'framer-motion'

// Tilt 3D leve que segue o mouse — spread o retorno num motion.div/motion.a.
export function useTilt(max = 7) {
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 300, damping: 25 })
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 300, damping: 25 })

  const onMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }
  const onMouseLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return {
    style: { rotateX, rotateY, transformPerspective: 800 },
    onMouseMove,
    onMouseLeave,
  }
}
