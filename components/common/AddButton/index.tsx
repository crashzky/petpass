import Props from './AddButton.props';
import getStyles from './AddButton.styles';

const AddButton: React.FC<Props> = ({ className = '', variant, style = {}, label, ...props }) => {
	const { border, width, height, Icon } = getStyles(variant);

	return (
		<button
			className={className + ' rounded-2xl flex flex-col items-center justify-center gap-1'}
			style={{
				...style,
				background: border.replaceAll('\n', ' '),
				width,
				height,
			}}
			{...props}
		>
			<Icon />
			<span className='BoldBodyText-18 text-primary'>
				{label}
			</span>
		</button>
	);
};

export default AddButton;
