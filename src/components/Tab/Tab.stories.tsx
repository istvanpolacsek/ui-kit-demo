import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tab } from "./Tab";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Tabs/Tab",
  component: Tab,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tab>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { label: "Label" } };
export const Selected: Story = { args: { ...Default.args, selected: true } };

export const FocusViaKeyboard: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("tab", { name: "Label" })[0].focus();
    await expect(
      canvas.getAllByRole("tab", { name: "Label" })[0],
    ).toHaveFocus();
  },
};
export const CustomLabelText: Story = {
  args: { ...Default.args, label: "Settings" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("tab", { name: "Settings" })[0],
    ).toHaveTextContent("Settings");
  },
};
