import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoaderIcon from '@assets/loader.svg';

export default {
	title: 'assets',
	component: LoaderIcon,
} as ComponentMeta<typeof LoaderIcon>;

const Template: ComponentStory<typeof LoaderIcon> = (args) => <LoaderIcon {...args} />;

export const Loader = Template.bind({});

Loader.args = {

};
