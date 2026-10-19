import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "./Radio";
const meta = {
  title: "🖥️ Desktop web components/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Radio>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { size: "Large", focused: "No" } };
export const Checked: Story = {
  args: { ...Default.args, defaultChecked: true },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
