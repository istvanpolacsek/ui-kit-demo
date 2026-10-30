import type { Meta, StoryObj } from "@storybook/react-vite";
import { MicroButton } from "./MicroButton";
const meta = {
  title: "Button/Micro button",
  component: MicroButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MicroButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
