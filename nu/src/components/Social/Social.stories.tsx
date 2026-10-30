import type { Meta, StoryObj } from "@storybook/react-vite";
import { Social } from "./Social";
const meta = {
  title: "  ↳ Icon/Social",
  component: Social,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Social>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { property1: "facebook" } };
