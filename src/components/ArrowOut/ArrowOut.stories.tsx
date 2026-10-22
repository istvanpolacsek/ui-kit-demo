import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowOut } from "./ArrowOut";
const meta = {
  title: "Visual asset/Arrow out",
  component: ArrowOut,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ArrowOut>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
