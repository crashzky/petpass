import { ComponentStory, ComponentMeta } from '@storybook/react';
import WhiteBlueLogoIcon from '@assets/logos/whiteBlueLogo.svg';

export default {
	title: 'assets/logos',
	component: WhiteBlueLogoIcon,
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
} as ComponentMeta<typeof WhiteBlueLogoIcon>;

const Template: ComponentStory<typeof WhiteBlueLogoIcon> = (args) => <WhiteBlueLogoIcon {...args} />;

export const WhiteBlueLogo = Template.bind({});

WhiteBlueLogo.args = {

};
