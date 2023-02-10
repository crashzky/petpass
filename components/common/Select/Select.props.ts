import { Props } from 'react-select';

interface IProps extends Props {
	label?: string;
	isLazyLoad?: boolean;
}

export interface ISelectOption {
	value: string;
	label: string;
}

export default IProps;
