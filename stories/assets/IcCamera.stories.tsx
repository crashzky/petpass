import { ComponentStory, ComponentMeta } from '@storybook/react';
import IcCameraIcon from '@assets/IcCamera.svg';

export default {
	title: 'assets',
	component: IcCameraIcon,
} as ComponentMeta<typeof IcCameraIcon>;

const Template: ComponentStory<typeof IcCameraIcon> = (args) => <IcCameraIcon {...args} />;

export const IcCamera = Template.bind({});

IcCamera.args = {
	
};
