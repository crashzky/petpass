import { ComponentStory, ComponentMeta } from '@storybook/react';
import OwnerInfoFormComponent from '@components/other/OwnerInfoForm';

export default {
	title: 'components/other',
	component: OwnerInfoFormComponent,
} as ComponentMeta<typeof OwnerInfoFormComponent>;

const Template: ComponentStory<typeof OwnerInfoFormComponent> = (args) => <OwnerInfoFormComponent {...args} />;

export const OwnerInfoForm = Template.bind({});

OwnerInfoForm.args = {
	
};
