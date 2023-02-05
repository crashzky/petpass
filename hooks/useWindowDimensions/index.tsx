import { useEffect, useState } from 'react';
import IReponse from './useWindowDimensions.props';

const useWindowDimensions = (): IReponse => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	}, []);

	return {
		width,
		height,
	};
};

export default useWindowDimensions;
