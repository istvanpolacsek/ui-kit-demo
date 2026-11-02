import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tab } from "./Tab";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Design System/Tab",
  component: Tab,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tab>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { label: "Deals", state: "Selected" } };

export const SelectedState: Story = {
  args: { ...Default.args, state: "Selected" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Deals" })[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByRole("button", { name: "Deals" })[0],
    ).toHaveTextContent("Deals");
  },
};
export const ClickToFocus: Story = {
  args: { ...Default.args, label: "Deals" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("button", { name: "Deals" })[0]);
    await expect(
      canvas.getAllByRole("button", { name: "Deals" })[0],
    ).toHaveFocus();
  },
};
