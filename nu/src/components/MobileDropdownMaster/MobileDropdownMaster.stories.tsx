import type { Meta, StoryObj } from "@storybook/react-vite";
import { MobileDropdownMaster } from "./MobileDropdownMaster";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Dropdown/.Mobile-dropdown/Master",
  component: MobileDropdownMaster,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MobileDropdownMaster>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { showOptions: true, showLabel: true, showHelperText: true },
};

export const OpensOnClick: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("combobox")[0]);
    await expect(canvas.getAllByRole("combobox")[0]).toBeVisible();
  },
};
export const OptionsVisibleByDefault: Story = {
  args: { ...Default.args, showOptions: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("combobox")[0]).toBeVisible();
    await userEvent.click(canvas.getAllByRole("combobox")[0]);
  },
};
