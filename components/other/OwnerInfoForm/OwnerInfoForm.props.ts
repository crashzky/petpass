import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { IUserInput } from '@shared/models/user.model';
import IPassport from '@shared/models/passport.model';

export interface IOwnerFormValues {
	user: Omit<IUserInput, 'image'>;
	passport: Omit<IPassport, 'image'>;
}

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	defaultValues?: Record<string, string>;
	onValuesChanged: (newValues: Record<string, string>) => void;
};

export default Props;
