const colors = [
	'#00b3f7',
	'#47c1f5',
	'#65c8f3',
	'#98d4ee',
	'#98b9ee',
	'#679bf1',
	'#4984e6',
	'#6472ea',
	'#5161ec',
	'#3b4dec',
	'#1e33ee',
	'#3806f1',
	'#5227f3'
];

export const getColors = (labels: string[]) => {
	const obj: any = {};
	labels.forEach((e, i) => {
		obj[e] = colors[i] ? colors[i] : colors[Math.floor(Math.random() * colors.length)];
	});
	return obj;
};
