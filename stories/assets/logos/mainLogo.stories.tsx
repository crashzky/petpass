import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainLogoIcon from '@assets/logos/mainLogo.svg';

export default {
	title: 'assets/logos',
	component: MainLogoIcon,
} as ComponentMeta<typeof MainLogoIcon>;

const Template: ComponentStory<typeof MainLogoIcon> = (args) => <MainLogoIcon {...args} />;

export const MainLogo = Template.bind({});

MainLogo.args = {
	
};
