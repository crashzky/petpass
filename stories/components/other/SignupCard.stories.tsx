import { ComponentStory, ComponentMeta } from '@storybook/react';
import SignupCardComponent from '@components/other/SignupCard';

export default {
	title: 'components/other',
	component: SignupCardComponent,
	parameters: {
		nextRouter: {
			path: '#',
			asPath: '#',
		},	
	},
} as ComponentMeta<typeof SignupCardComponent>;

const Template: ComponentStory<typeof SignupCardComponent> = (args) => <SignupCardComponent {...args} />;

export const SignupCard = Template.bind({});

SignupCard.args = {
	link: '#',
	imageSrc: '/assets/dogs/2.webp',
	label: 'Для владельцев',
	className: 'w-[582px] h-[684px]',
};
