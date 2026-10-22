import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToolbarButtonDestructive } from "./ToolbarButtonDestructive";
const meta = {
  title: "Button/Toolbar button / Destructive",
  component: ToolbarButtonDestructive,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ToolbarButtonDestructive>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default", type: "Icon", dropdown: "False", mode: "Light" },
};
