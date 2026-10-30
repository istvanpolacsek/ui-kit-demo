import type { Meta, StoryObj } from "@storybook/react-vite";
import { GridAdd } from "./GridAdd";
const meta = {
  title: "Visual asset/Grid add",
  component: GridAdd,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof GridAdd>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
