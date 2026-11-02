import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardGeneral } from "./CardGeneral";
const meta = {
  title: "  ↳ Cards/Card General",
  component: CardGeneral,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardGeneral>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
