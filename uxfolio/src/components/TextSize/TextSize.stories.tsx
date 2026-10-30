import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextSize } from "./TextSize";
const meta = {
  title: "Visual asset/Text size",
  component: TextSize,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextSize>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
