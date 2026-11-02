import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flag } from "./Flag";
const meta = {
  title: "  ↳ Icon/flag",
  component: Flag,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Flag>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { country: "AC" } };
