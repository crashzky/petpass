import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonComponent from '@components/common/Button';

export default {
	title: 'components/common/Button',
	component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
export const Outlined = Template.bind({});

Primary.args = {
	children: 'Click me!',
	variant: 'primary',
	className: 'w-[200px]',
};

Outlined.args = {
	children: 'Click me!',
	variant: 'outlined',
	className: 'w-[200px]',
};

Outlined.parameters = {
	backgrounds: {
		default: 'dark',
	},
};
