import { ComponentStory, ComponentMeta } from '@storybook/react';
import PetInfoFormComponent from '@components/other/PetInfoForm';

export default {
	title: 'components/other',
	component: PetInfoFormComponent,
} as ComponentMeta<typeof PetInfoFormComponent>;

const Template: ComponentStory<typeof PetInfoFormComponent> = (args) => <PetInfoFormComponent {...args} />;

export const PetInfoForm = Template.bind({});

PetInfoForm.args = {
	
};
