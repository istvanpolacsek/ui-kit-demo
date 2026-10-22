import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToolbarButtonColor } from "./ToolbarButtonColor";
const meta = {
  title: "Button/Toolbar button / Color",
  component: ToolbarButtonColor,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ToolbarButtonColor>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default", mode: "Light", type: "Color" },
};
