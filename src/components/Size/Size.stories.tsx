import type { Meta, StoryObj } from "@storybook/react-vite";
import { Size } from "./Size";
const meta = {
  title: "Visual asset/Size",
  component: Size,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Size>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
