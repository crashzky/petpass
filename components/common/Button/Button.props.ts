import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type buttonVariant = 'primary' | 'outlined';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	variant?: buttonVariant;
}

export default Props;
