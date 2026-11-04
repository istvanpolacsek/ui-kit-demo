import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "./Toast";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Toast/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Toast>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Error", device: "Desktop" } };

export const ErrorAlertIsVisible: Story = {
  args: { ...Default.args, type: "Error" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("alert")[0]).toBeVisible();
    await expect(canvas.getAllByRole("alert")[0]).toHaveTextContent("Error");
  },
};
export const MobileInfoAlert: Story = {
  args: { ...Default.args, type: "Info", device: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("alert")[0]).toBeVisible();
    await expect(canvas.getAllByRole("alert")[0]).toHaveTextContent("Info");
  },
};
export const WarningOnDesktop: Story = {
  args: { ...Default.args, type: "Warning", device: "Desktop" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("alert")[0]).toBeVisible();
    await expect(canvas.getAllByRole("alert")[0]).toHaveTextContent("Warning");
  },
};
