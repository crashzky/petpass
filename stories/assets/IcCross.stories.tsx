import { ComponentStory, ComponentMeta } from '@storybook/react';
import IcCrossIcon from '@assets/IcCross.svg';

export default {
	title: 'assets',
	component: IcCrossIcon,
} as ComponentMeta<typeof IcCrossIcon>;

const Template: ComponentStory<typeof IcCrossIcon> = (args) => <IcCrossIcon {...args} />;

export const IcCross = Template.bind({});

IcCross.args = {
	
};
