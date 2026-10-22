import type { Meta, StoryObj } from "@storybook/react-vite";
import { GridReorder } from "./GridReorder";
const meta = {
  title: "Visual asset/Grid reorder",
  component: GridReorder,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof GridReorder>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
