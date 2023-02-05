import Props from './Button.props';
import getClassName from './Button.styles';

const Button: React.FC<Props> = ({ className = '', children, variant = 'primary', ...props }) => {
	return (
		<button className={`${className} ${getClassName(variant)}`} {...props}>
			{children}
		</button>
	);
};

export default Button;
