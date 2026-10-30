import type { Meta, StoryObj } from "@storybook/react-vite";
import { GridRemove } from "./GridRemove";
const meta = {
  title: "Visual asset/Grid remove",
  component: GridRemove,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof GridRemove>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
