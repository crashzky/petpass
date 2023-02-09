import { ComponentStory, ComponentMeta } from '@storybook/react';
import PetCardComponent from '@components/dashboard/PetCard';

export default {
	title: 'components/dashboard',
	component: PetCardComponent,
} as ComponentMeta<typeof PetCardComponent>;

const Template: ComponentStory<typeof PetCardComponent> = (args) => <PetCardComponent {...args} />;

export const PetCard = Template.bind({});

PetCard.args = {
	imageSrc: '/assets/dogs/6.webp',
	label: 'Мухтарчик',
	description: 'Гарафийская овчарка', 
	link: '#',
};
