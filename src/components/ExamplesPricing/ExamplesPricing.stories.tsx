import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExamplesPricing } from "./ExamplesPricing";
const meta = {
  title: "Examples/Examples/Pricing",
  component: ExamplesPricing,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ExamplesPricing>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
