import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputComponent from '@components/common/Input';

export default {
	title: 'components/common',
	component: InputComponent,
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args} />;

export const Input = Template.bind({});

Input.args = {
	placeholder: 'example@example.ru',
	type: 'email',
	label: 'Email',	
	className: 'w-[300px]',
};
