import type { Meta, StoryObj } from "@storybook/react-vite";
import { Add } from "./Add";
const meta = {
  title: "Visual asset/Add",
  component: Add,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Add>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
