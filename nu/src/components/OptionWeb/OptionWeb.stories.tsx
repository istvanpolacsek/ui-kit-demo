import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionWeb } from "./OptionWeb";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Dropdown/optionWeb",
  component: OptionWeb,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionWeb>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const HoverHighlightsOption: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("option")[0]);
    await expect(canvas.getAllByRole("option")[0]).toBeVisible();
  },
};
export const ClickSelectsOption: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("option")[0]);
    await expect(canvas.getAllByRole("option")[0]).toBeVisible();
  },
};
export const FocusOnOption: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("option")[0].focus();
    await expect(canvas.getAllByRole("option")[0]).toHaveFocus();
  },
};
