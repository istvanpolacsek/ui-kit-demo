import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardProgram } from "./CardProgram";
const meta = {
  title: "  ↳ Cards/Card Program",
  component: CardProgram,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardProgram>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
