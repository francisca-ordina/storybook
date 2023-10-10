import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ButtonModule } from './button.module';



const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule]
    })
  ],
  argTypes: {
    kind: {
      options: ["primary", "secondary"],
      defaultValue: "primary",
      control: { type: "select" },
      name: "ypenburg-button"
    },
    size: {
      options: ["sm", "md", "lg"],
      defaultValue: "md",
      control: { type: "select" }
    },
    label: {
      control: 'text',
    }
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;


export const Buttons: Story = {
  args: {
    size: "md",
    label: 'Button',
    kind: "primary",
  },
}



