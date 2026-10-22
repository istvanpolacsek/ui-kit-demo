import type { Meta, StoryObj } from "@storybook/react-vite";
import { CareersWidget } from "./CareersWidget";
const meta = {
  title: "  ↳ Widgets 🆕/Careers Widget",
  component: CareersWidget,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CareersWidget>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
