import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	tabs: string[];
	onClickTab: (tab: number) => void;
	defaultSelectedTab?: number;
	
	ariaTabPrefix?: string;
	ariaControls?: string;
}

export default Props;
