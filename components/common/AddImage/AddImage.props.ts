import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type iconVariants = 'photo' | 'scan';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	iconVariant: iconVariants;
	label: string;
	onImageChanged: (file: File | undefined) => void;
}

export default Props;
