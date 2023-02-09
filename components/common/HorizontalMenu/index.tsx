import { useState } from 'react';
import Props from './HorizontalMenu.props';

const HorizontalMenu: React.FC<Props> = ({ className = '', tabs, onClickTab, defaultSelectedTab = 0, ariaControls,
	ariaTabPrefix, ...props }) => {
	const [selectedTab, setSelectedTab] = useState(defaultSelectedTab);

	return (
		<div className={`${className} flex items-center gap-7`} role='tablist' {...props}>
			{tabs.map((i, num) => (
				<button
					key={num}
					className={`heading-3 ${selectedTab === num ? 'text-primary' : 'text-grey'}`}
					id={`${ariaTabPrefix}-${num}`}
					role='tab'
					aria-controls={ariaControls}
					aria-selected={selectedTab === num}
					onClick={() => {
						setSelectedTab(num);
						onClickTab(num);
					}}
				> 
					{i}
				</button>
			))}
		</div>
	);
};

export default HorizontalMenu;
