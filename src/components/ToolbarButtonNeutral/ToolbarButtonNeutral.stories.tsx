import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToolbarButtonNeutral } from "./ToolbarButtonNeutral";
const meta = {
  title: "Button/Toolbar button / Neutral",
  component: ToolbarButtonNeutral,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ToolbarButtonNeutral>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasIcon: false, state: "Default", type: "Text", mode: "Light" },
};
export const Selected: Story = { args: { ...Default.args, selected: true } };
