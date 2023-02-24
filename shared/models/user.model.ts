import IPassport from './passport.model';
import IPet from './pet.model';

interface IUser extends IUserInput {
    confirm: boolean;
    createDate: string;
    id: number;
    inn: number;
    title: string;
    type: string;
	passport: IPassport;
	pets: {
		list: IPet[]
	};
	social: string;
	email: string;
}

export interface IUserInput {
	fio: string;
	birthday: string;
	gender: string;
	image: string;
	telephone: string;
}

export default IUser;
