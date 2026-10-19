import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductInfoCard } from "./ProductInfoCard";
const meta = {
  title: "Cards/Product Info Card",
  component: ProductInfoCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ProductInfoCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { showDescription: true } };
