export const useScroll = () => {
	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	const scrollTo = (alvo: string) => {
		const content = document.getElementById(alvo);
		if (!content) return;
		setTimeout(() => {
			window.scrollTo({
				top: content.offsetTop - 100,
				left: 0,
				behavior: "smooth",
			});
		}, 30);
	};
	return {
		scrollTop,
		scrollTo,
	};
};
