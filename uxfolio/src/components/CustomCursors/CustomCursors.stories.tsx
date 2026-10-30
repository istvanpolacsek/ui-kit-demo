import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomCursors } from "./CustomCursors";
const meta = {
  title: "Visual asset/Custom cursors",
  component: CustomCursors,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CustomCursors>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Default", state: "Default" } };
