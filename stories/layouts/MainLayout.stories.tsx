import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainLayoutComponent from '@layouts/MainLayout';

export default {
	title: 'layouts/MainLayout',
	component: MainLayoutComponent,
} as ComponentMeta<typeof MainLayoutComponent>;

const Template: ComponentStory<typeof MainLayoutComponent> = (args) => <MainLayoutComponent {...args} />;

export const MainLayout = Template.bind({});

MainLayout.args = {
	
};
