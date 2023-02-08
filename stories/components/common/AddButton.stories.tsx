import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddButtonComponent from '@components/common/AddButton';

export default {
	title: 'components/common',
	component: AddButtonComponent,
} as ComponentMeta<typeof AddButtonComponent>;

const Template: ComponentStory<typeof AddButtonComponent> = (args) => <AddButtonComponent {...args} />;

export const AddButton = Template.bind({});

AddButton.args = {
	variant: 'addPet',
	label: 'Добавить питомца',
};
