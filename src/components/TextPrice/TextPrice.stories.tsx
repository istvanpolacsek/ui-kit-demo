import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextPrice } from "./TextPrice";
const meta = {
  title: "Text/Text Price",
  component: TextPrice,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextPrice>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    price: "50",
    label: "/ mo",
    currency: "$",
    hasLabel: true,
    size: "Large",
  },
};
