import { motion } from 'motion/react';
import { type MouseEvent, useRef, useState } from 'react';

export default function Magnet({ ...props }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: MouseEvent<HTMLDivElement>): void => {
        if (ref.current) {
            const { height, width, left, top } =
                ref.current.getBoundingClientRect();

            const middle = {
                x: e.clientX - (left + width / 2),
                y: e.clientY - (top + height / 2),
            };
            setPosition({ x: middle.x, y: middle.y });
        }
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{
                type: 'spring',
                stiffness: 150,
                damping: 15,
                mass: 0.1,
            }}
            className="relative"
            {...props}
        />
    );
}
