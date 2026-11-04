import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductInfoCard } from "./ProductInfoCard";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Cards/Product Info Card",
  component: ProductInfoCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ProductInfoCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { showDescription: true } };

export const WithoutDescription: Story = {
  args: { ...Default.args, showDescription: false },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("article")[0]).toBeVisible();
  },
};
