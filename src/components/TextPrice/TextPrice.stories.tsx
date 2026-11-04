import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextPrice } from "./TextPrice";
import { expect, userEvent, within } from "storybook/test";

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

export const LargeSizeWithCustomCurrencyAndPrice: Story = {
  args: {
    ...Default.args,
    size: "Large",
    currency: "€",
    price: "99",
    label: "/ yr",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("€")[0]).toBeVisible();
    await expect(canvas.getAllByText("€")[0]).toHaveTextContent("€");
    await expect(canvas.getAllByText("99")[0]).toHaveTextContent("99");
    await expect(canvas.getAllByText("/ yr")[0]).toHaveTextContent("/ yr");
  },
};
export const WithoutLabel: Story = {
  args: { ...Default.args, hasLabel: false, price: "29", currency: "$" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("$")[0]).toBeVisible();
    await expect(canvas.getAllByText("$")[0]).toHaveTextContent("$");
    await expect(canvas.getAllByText("29")[0]).toHaveTextContent("29");
    {
      const hidden = canvas.queryAllByText("/ mo")[0];
      if (hidden) await expect(hidden).not.toBeVisible();
    }
  },
};
