import { motion, useMotionValue, useSpring } from 'motion/react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export default function Cursor() {
    const [isHovered, setIsHovered] = useState(false)
    const cursorSize = useMemo(() => (isHovered ? 60 : 15), [isHovered])

    const cursor = useRef<HTMLDivElement | null>(null)

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions),
    }

    const updateMousePosition = useCallback(
        (e: MouseEvent) => {
            requestAnimationFrame(() => {
                mouse.x.set(e.clientX - cursorSize / 2)
                mouse.y.set(e.clientY - cursorSize / 2)
            })
        },
        [cursorSize, mouse.x, mouse.y],
    )

    const handleMouseEnter = useCallback(() => setIsHovered(true), [])
    const handleMouseLeave = useCallback(() => setIsHovered(false), [])

    const clickableElements = useRef<NodeListOf<Element>>()

    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition)

        if (!clickableElements.current) {
            clickableElements.current = document.querySelectorAll(
                'a, button, [role="button"]',
            )
        }

        clickableElements.current.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter)
            el.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
            clickableElements.current?.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter)
                el.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [updateMousePosition, handleMouseEnter, handleMouseLeave])

    return (
        <motion.div
            style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
            }}
            animate={{
                width: cursorSize,
                height: cursorSize,
            }}
            transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
            className="pointer-events-none fixed z-[999] rounded-full bg-background mix-blend-difference"
            ref={cursor}
        ></motion.div>
    )
}
