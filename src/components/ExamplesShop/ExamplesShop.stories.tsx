import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExamplesShop } from "./ExamplesShop";
const meta = {
  title: "Examples/Examples/Shop",
  component: ExamplesShop,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ExamplesShop>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
