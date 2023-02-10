import { ComponentStory, ComponentMeta } from '@storybook/react';
import SelectComponet from '@/components/common/Select';

export default {
	title: 'components/common',
	component: SelectComponet,
} as ComponentMeta<typeof SelectComponet>;

const Template: ComponentStory<typeof SelectComponet> = (args) => <SelectComponet {...args} />;

export const Select = Template.bind({});

Select.args = {
	options: [
		{
			label: 'Item 1',
			value: 'Item 1',
		},
		{
			label: 'Item 2',
			value: 'Item 2',
		},
		{
			label: 'Item 3',
			value: 'Item 3',
		},
	],
	placeholder: 'Select item',
	label: 'Items',
};
