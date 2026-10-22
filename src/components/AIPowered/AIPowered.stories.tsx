import type { Meta, StoryObj } from "@storybook/react-vite";
import { AIPowered } from "./AIPowered";
const meta = {
  title: "Visual asset/AI-powered",
  component: AIPowered,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AIPowered>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
