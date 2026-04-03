import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  style?: React.CSSProperties
  className?: string
}

// Reusable scroll-triggered fade-up for sections
export function AnimatedSection({ children, delay = 0, style, className }: AnimatedSectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger container — children animate in sequence
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Individual staggered child
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

// Fade in only (no vertical movement)
export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}
