import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileZone } from "./FileZone";
const meta = {
  title: "Input/File zone",
  component: FileZone,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FileZone>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { figmaBanner: "False", empty: "False" },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
