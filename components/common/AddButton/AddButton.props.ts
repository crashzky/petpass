import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type addButtonVariants = 'addPet';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	variant: addButtonVariants;
	label: string;
};

export default Props;
