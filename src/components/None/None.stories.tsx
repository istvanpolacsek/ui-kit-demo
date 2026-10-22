import type { Meta, StoryObj } from "@storybook/react-vite";
import { None } from "./None";
const meta = {
  title: "Visual asset/None",
  component: None,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof None>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
