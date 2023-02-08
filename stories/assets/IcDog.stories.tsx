import { ComponentStory, ComponentMeta } from '@storybook/react';
import IcDogIcon from '@assets/IcDog.svg';

export default {
	title: 'assets',
	component: IcDogIcon,
} as ComponentMeta<typeof IcDogIcon>;

const Template: ComponentStory<typeof IcDogIcon> = (args) => <IcDogIcon {...args} />;

export const IcDog = Template.bind({});

IcDog.args = {

};
