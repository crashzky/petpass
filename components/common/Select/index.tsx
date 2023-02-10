import ReactSelect from 'react-select';

import IProps from './Select.props';
import getStyles from './Select.styles';

const Select: React.FC<IProps> = ({ className = '', label, inputId, ...props }) => {
	return (
		<div className={`${className} relative`}>
			{label && (
				<label htmlFor={inputId} className='absolute -top-1.5 left-[22px] z-10 px-2.5 bg-white BodyText-12 text-primary'>
					{label}
				</label>
			)}
			<ReactSelect
				tabIndex={0}
				inputId={inputId}
				styles={getStyles()}
				{...props} />
		</div>
	);
};

export default Select;
