import { ComponentStory, ComponentMeta } from '@storybook/react';
import BannerCardComponent from '@components/dashboard/BannerCard';

export default {
	title: 'components/dashboard',
	component: BannerCardComponent,
} as ComponentMeta<typeof BannerCardComponent>;

const Template: ComponentStory<typeof BannerCardComponent> = (args) => <BannerCardComponent {...args} />;

export const BannerCard = Template.bind({});

BannerCard.args = {
	imageSrc: '/assets/dogs/5.webp',
	label: 'Обезопасьте своего питомца',
	description: 'Чипирование по минимальной цене', 
};
