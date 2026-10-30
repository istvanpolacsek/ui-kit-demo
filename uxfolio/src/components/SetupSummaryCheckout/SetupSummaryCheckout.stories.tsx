import type { Meta, StoryObj } from "@storybook/react-vite";
import { SetupSummaryCheckout } from "./SetupSummaryCheckout";
const meta = {
  title: "Panel/Setup summary / Checkout",
  component: SetupSummaryCheckout,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SetupSummaryCheckout>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { type: "UXfolio yearly", studentDiscount: "False" },
};
