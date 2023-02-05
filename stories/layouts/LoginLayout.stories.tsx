import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginLayoutComponent from '@layouts/LoginLayout';

export default {
	title: 'layouts/LoginLayout',
	component: LoginLayoutComponent,
} as ComponentMeta<typeof LoginLayoutComponent>;

const Template: ComponentStory<typeof LoginLayoutComponent> = (args) => <LoginLayoutComponent {...args} />;

export const LoginLayout = Template.bind({});

LoginLayout.args = {
	imageSrc: '/assets/dogs/1.webp',
};
