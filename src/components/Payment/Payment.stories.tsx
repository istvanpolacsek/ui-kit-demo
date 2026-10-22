import type { Meta, StoryObj } from "@storybook/react-vite";
import { Payment } from "./Payment";
const meta = {
  title: "Visual asset/Payment",
  component: Payment,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Payment>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
