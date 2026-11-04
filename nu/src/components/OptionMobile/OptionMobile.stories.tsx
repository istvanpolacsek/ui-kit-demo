import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionMobile } from "./OptionMobile";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Dropdown/optionMobile",
  component: OptionMobile,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionMobile>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };

export const Pressed: Story = {
  args: { ...Default.args, state: "Pressed" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("option")[0]).toBeVisible();
    await userEvent.click(canvas.getAllByRole("option")[0]);
    await expect(canvas.getAllByRole("option")[0]).toHaveFocus();
  },
};
