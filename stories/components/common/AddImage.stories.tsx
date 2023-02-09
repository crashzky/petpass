import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddImage from '@components/common/AddImage';

export default {
	title: 'components/common/AddImage',
	component: AddImage,
} as ComponentMeta<typeof AddImage>;

const Template: ComponentStory<typeof AddImage> = (args) => <AddImage {...args} />;

export const CameraVariant = Template.bind({});
export const ScanVariant = Template.bind({});

CameraVariant.args = {
	iconVariant: 'photo',
	label: 'Фото владельца',
	className: 'w-[166px] h-[166px]',
};

ScanVariant.args = {
	iconVariant: 'scan',
	label: 'Скан документа',
	className: 'w-[166px] h-[166px]',
};
