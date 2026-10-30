import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToolbarSpacer } from "./ToolbarSpacer";
const meta = {
  title: "Overlay/Toolbar / Spacer",
  component: ToolbarSpacer,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ToolbarSpacer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { mode: "Light" } };
