import React from 'react';
import { addButtonVariants } from './AddButton.props';

import IcDogIcon from '@assets/IcDog.svg';

interface IReponse {
	width: number;
	height: number;
	border: string;
	Icon: React.FC;
}

function getStyles(variant: addButtonVariants): IReponse {
	switch(variant) {
		case 'addPet':
			return {
				width: 369,
				height: 190,
				border: `
					url("data:image/svg+xml,%3csvg width='100%25' height='100%25'
					xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25'
					fill='none' rx='16' ry='16' stroke='%2365A2C2FF' stroke-width='4'
					stroke-dasharray='14' stroke-dashoffset='14' stroke-linecap='square'/%3e%3c/svg%3e")
				`,
				Icon: IcDogIcon,
			};
	}
}

export default getStyles;
