import type { Meta, StoryObj } from "@storybook/react-vite";
import { TypePreviewCustomCursors } from "./TypePreviewCustomCursors";
const meta = {
  title: "Visual asset/Type preview / Custom cursors",
  component: TypePreviewCustomCursors,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TypePreviewCustomCursors>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Default" } };
