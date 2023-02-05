import { buttonVariant } from './Button.props';

function getClassName(variant: buttonVariant): string {
	const COMMON_STYLES = 'rounded-2xl py-[18px] BodyText-14 text-white ';

	switch(variant) {
		case 'primary':
			return COMMON_STYLES + 'bg-primary border-none';
		case 'outlined':
			return COMMON_STYLES + 'bg-transparent border-2 border-white';
	} 
}

export default getClassName;
