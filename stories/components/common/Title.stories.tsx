import { ComponentStory, ComponentMeta } from '@storybook/react';
import TitlteComponent from '@/components/common/Title';

export default {
	title: 'components/common',
	component: TitlteComponent,
} as ComponentMeta<typeof TitlteComponent>;

const Template: ComponentStory<typeof TitlteComponent> = (args) => <TitlteComponent {...args} />;

export const Title = Template.bind({});

Title.args = {
	backUrl: '#',
	label: 'PetPass storybook',
};
