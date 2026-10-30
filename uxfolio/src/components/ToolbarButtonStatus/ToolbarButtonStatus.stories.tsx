import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToolbarButtonStatus } from "./ToolbarButtonStatus";
const meta = {
  title: "Button/Toolbar button / Status",
  component: ToolbarButtonStatus,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ToolbarButtonStatus>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasIcon: false, type: "Text", dropdown: "False", mode: "Light" },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
