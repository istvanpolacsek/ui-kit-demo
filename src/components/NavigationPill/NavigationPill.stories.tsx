import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationPill } from "./NavigationPill";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Navigation/Navigation Pill",
  component: NavigationPill,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationPill>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { label: "Link" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const KeyboardFocusAndActivation: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("button", { name: "Link" })[0].focus();
    await expect(
      canvas.getAllByRole("button", { name: "Link" })[0],
    ).toHaveFocus();
    await userEvent.keyboard("{Enter}");
  },
};
export const CustomLabel: Story = {
  args: { ...Default.args, label: "Dashboard" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Dashboard" })[0],
    ).toHaveTextContent("Dashboard");
    await userEvent.click(
      canvas.getAllByRole("button", { name: "Dashboard" })[0],
    );
  },
};
