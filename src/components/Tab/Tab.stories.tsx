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

export const CustomLabel: Story = {
  args: { ...Default.args, label: "Archived deals" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Archived deals" })[0],
    ).toHaveTextContent("Archived deals");
  },
};
export const SelectedStateWithCustomLabel: Story = {
  args: { ...Default.args, state: "Selected", label: "Open deals" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Open deals" })[0],
    ).toHaveTextContent("Open deals");
    canvas.getAllByRole("button", { name: "Open deals" })[0].focus();
    await expect(
      canvas.getAllByRole("button", { name: "Open deals" })[0],
    ).toHaveFocus();
  },
};
