import { ComponentStory, ComponentMeta } from '@storybook/react';
import IcArrowLeftIcon from '@assets/IcArrowLeft.svg';

export default {
	title: 'assets',
	component: IcArrowLeftIcon,
} as ComponentMeta<typeof IcArrowLeftIcon>;

const Template: ComponentStory<typeof IcArrowLeftIcon> = (args) => <IcArrowLeftIcon {...args} />;

export const IcArrowLeft = Template.bind({});

IcArrowLeft.args = {
	
};
