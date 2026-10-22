import type { Meta, StoryObj } from "@storybook/react-vite";
import { Subtract } from "./Subtract";
const meta = {
  title: "Visual asset/Subtract",
  component: Subtract,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Subtract>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
