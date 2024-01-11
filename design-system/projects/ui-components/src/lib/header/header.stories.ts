import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { HeaderComponent } from './header.component';

const meta: Meta<typeof HeaderComponent> = {
    title: 'Components/Header',
    tags: ['autodocs'],
    component: HeaderComponent,
    decorators: [
        moduleMetadata({
            declarations: [HeaderComponent]
        }),
    ],
}

export default meta;
type Story = StoryObj<HeaderComponent>;



export const Default: Story = {

    args: {
        heading: 'Header text',
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/bMJexHu6oasplchBtykBAQ/Ypenburg---Design-System?type=design&node-id=42%3A786&mode=design&t=L9vZkeZJLDBIEFWA-1',
        },
    },
};

