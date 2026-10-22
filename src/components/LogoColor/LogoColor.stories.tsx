import type { Meta, StoryObj } from "@storybook/react-vite";
import { LogoColor } from "./LogoColor";
const meta = {
  title: "  ↳ Logos 🆕/Logo-Color",
  component: LogoColor,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof LogoColor>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Default" } };
