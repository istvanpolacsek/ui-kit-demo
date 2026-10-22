import type { Meta, StoryObj } from "@storybook/react-vite";
import { LogoProduct } from "./LogoProduct";
const meta = {
  title: "Visual asset/Logo / Product",
  component: LogoProduct,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof LogoProduct>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { light: "Default", type: "Full" } };
