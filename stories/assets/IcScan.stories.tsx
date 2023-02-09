import { ComponentStory, ComponentMeta } from '@storybook/react';
import IcScanIcon from '@assets/IcScan.svg';

export default {
	title: 'assets',
	component: IcScanIcon,
} as ComponentMeta<typeof IcScanIcon>;

const Template: ComponentStory<typeof IcScanIcon> = (args) => <IcScanIcon {...args} />;

export const IcScan = Template.bind({});

IcScan.args = {
	
};
