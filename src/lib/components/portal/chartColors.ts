const colors = ['#b7e4f8', '#6ec9f2', '#26aeeb', '#0ea5e9', '#0b84ba', '#06425d', '#043146'];

export const getColors = (labels: string[]) => {
	const obj: any = {};
	labels.forEach((e, i) => {
		obj[e] = colors[Math.floor(Math.random() * colors.length)];
	});
	return obj;
};
