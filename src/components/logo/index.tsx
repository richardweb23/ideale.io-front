"use client";

import { motion } from "framer-motion";
import { LogoSyled } from "./styled";

export const Logo = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				delay: 0.25,
				duration: 0.5,
			}}
			viewport={{ once: true }}
		>
			<LogoSyled>
				ideale<span>.io</span>
			</LogoSyled>
		</motion.div>
	);
};
