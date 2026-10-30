import type { Meta, StoryObj } from "@storybook/react-vite";
import { Success } from "./Success";
const meta = {
  title: "Visual asset/Success",
  component: Success,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Success>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
