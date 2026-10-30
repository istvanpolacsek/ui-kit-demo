import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer2 } from "./Footer2";
const meta = {
  title: "  ↳ Navigation/Footer 2",
  component: Footer2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Footer2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
