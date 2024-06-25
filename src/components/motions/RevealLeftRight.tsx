import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const RevealLeftRight = ({ children }: { children: JSX.Element }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();

	useEffect(() => {
		mainControls.start("visible");
	}, [isInView]);

	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, x: -10 },
				visible: { opacity: 1 },
			}}
			initial="hidden"
			animate={mainControls}
			transition={{ duration: 1, delay: 0.25 }}
		>
			<div
				ref={ref}
				style={{ position: "relative", width: "fit-content" }}
			>
				{children}
			</div>
		</motion.div>
	);
};
