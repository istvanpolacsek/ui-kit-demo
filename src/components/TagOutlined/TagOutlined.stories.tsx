import type { Meta, StoryObj } from "@storybook/react-vite";
import { TagOutlined } from "./TagOutlined";
const meta = {
  title: "Visual asset/Tag / Outlined",
  component: TagOutlined,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TagOutlined>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Emphasized" } };
