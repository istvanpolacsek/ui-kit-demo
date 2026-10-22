import type { Meta, StoryObj } from "@storybook/react-vite";
import { TagFilled } from "./TagFilled";
const meta = {
  title: "Visual asset/Tag / Filled",
  component: TagFilled,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TagFilled>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Emphasized" } };
