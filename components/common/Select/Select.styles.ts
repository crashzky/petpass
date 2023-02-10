import { StylesConfig } from 'react-select';
import { ISelectOption } from './Select.props';

function getStyles(): StylesConfig {
	function getBorder(menuIsOpen: boolean) {
		if(menuIsOpen)
			return '2px solid #65A2C2';
		else
			return '1px solid #CCCCCC';
	}

	return {
		control: (provided, state) => ({
			...provided,
			height: '58px',
			cursor: 'pointer',
			borderRadius: '16px',
			border: getBorder(state.menuIsOpen),
			borderColor: 'none',
			boxShadow: 'none',
			'&:hover': {
				borderColor: 'none',
			},
		}),
		input: (provided) => ({
			...provided,
			fontSize: '14px',
			padding: '16px 10px',
			margin: '0',
		}),
		placeholder: (provided) => ({
			...provided,
			padding: '0 10px',
			fontSize: '14px',
			fontWeight: 600,
			color: '#CCCCCC',
		}),
		indicatorSeparator: () => ({
			display: 'none',
		}),
		loadingIndicator: () => ({
			display: 'none',
		}),
		menu: (provided) => ({
			...provided,
			borderRadius: '15px',
			marginTop: '10px',
			boxShadow: 'none',
			padding: '0 15px',
			border: '1px solid #CCCCCC',
		}),
		menuList: (provided) => ({
			...provided,
			borderRadius: '12px',
		}),
		option: (provided) => ({
			...provided,
			cursor: 'pointer',
			backgroundColor: 'transparent',
			color: 'black',
			padding: 8,
			borderRadius: 10,
			'&:hover': {
				backgroundColor: '#F9F9F9',
			},
		}),
		singleValue: (provided) => ({
			...provided,
			padding: '0 16px',
		}),
	};
}

export default getStyles;
