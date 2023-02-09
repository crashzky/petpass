import { ComponentStory, ComponentMeta } from '@storybook/react';
import HorizontalMenuComponent from '@components/common/HorizontalMenu';

export default {
	title: 'components/common',
	component: HorizontalMenuComponent,
} as ComponentMeta<typeof HorizontalMenuComponent>;

const Template: ComponentStory<typeof HorizontalMenuComponent> = (args) => <HorizontalMenuComponent {...args} />;

export const HorizontalMenu = Template.bind({});

HorizontalMenu.args = {
	tabs: ['Вкладка 1', 'Вкладка 2'],
	onClickTab: () => undefined,
};
