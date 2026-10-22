import type { Meta, StoryObj } from "@storybook/react-vite";
import { Arrow } from "./Arrow";
const meta = {
  title: "Visual asset/Arrow",
  component: Arrow,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Arrow>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { style: "Plus sign", open: "No" } };
