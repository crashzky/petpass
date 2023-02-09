import Props from './Input.props';

const Input: React.FC<Props> = ({ className = '', label, id, inputClassName, ...props }) => {
	return ( 
		<div className={`${className} relative`}>
			{label && (
				<label htmlFor={id} className='absolute -top-1.5 left-[22px] px-2.5 bg-white BodyText-12 text-primary'>
					{label}
				</label>
			)}
			<input
				id={id}
				className={`${inputClassName} px-5 py-4 rounded-2xl border-grey border-[1px] outline-primary w-full
						placeholder:text-grey placeholder:font-semibold placeholder:text-sm`}
				{...props} />
		</div>
	);
};

export default Input;
