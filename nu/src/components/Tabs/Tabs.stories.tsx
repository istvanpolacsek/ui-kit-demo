import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./Tabs";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Tabs /Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { designValue: "Tab", state: "Default", device: "Desktop" },
};

export const SelectedState: Story = {
  args: { ...Default.args, state: "Selected" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Tab" })[0],
    ).toBeVisible();
    await userEvent.click(canvas.getAllByRole("button", { name: "Tab" })[0]);
    await expect(
      canvas.getAllByRole("button", { name: "Tab" })[0],
    ).toHaveFocus();
  },
};
export const FocusedState: Story = {
  args: { ...Default.args, state: "Focused" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("button", { name: "Tab" })[0].focus();
    await expect(
      canvas.getAllByRole("button", { name: "Tab" })[0],
    ).toHaveFocus();
  },
};
export const MobileSelected: Story = {
  args: {
    ...Default.args,
    device: "Mobile",
    state: "Selected",
    designValue: "Overview",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Overview" })[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByRole("button", { name: "Overview" })[0],
    ).toHaveTextContent("Overview");
  },
};
