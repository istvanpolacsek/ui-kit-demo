import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorSwatch } from "./ColorSwatch";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Color/.Color Swatch",
  component: ColorSwatch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ColorSwatch>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { baseColorIndicator: false } };

export const BaseColorIndicatorVisible: Story = {
  args: { ...Default.args, baseColorIndicator: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("img")[0]).toBeVisible();
  },
};
