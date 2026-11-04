import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "./Accordion";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Accordion/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Closed", device: "Desktop" } };

export const OpensOnClick: Story = {
  args: { ...Default.args, state: "Closed" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("button")[0]);
    await expect(canvas.getAllByRole("button")[0]).toBeVisible();
  },
};
export const FocusedState: Story = {
  args: { ...Default.args, state: "Focused" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("button")[0].focus();
    await expect(canvas.getAllByRole("button")[0]).toHaveFocus();
  },
};
export const MobileOpen: Story = {
  args: { ...Default.args, device: "Mobile", state: "Open" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("button")[0]);
    await expect(canvas.getAllByRole("button")[0]).toBeVisible();
  },
};
