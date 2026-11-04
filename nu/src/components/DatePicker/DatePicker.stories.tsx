import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePicker } from "./DatePicker";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Date Picker/Date Picker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DatePicker>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Closed", device: "Desktop" } };

export const OpenStateShowsDialog: Story = {
  args: { ...Default.args, state: "Open" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("dialog")[0]).toBeVisible();
  },
};
export const ErrorStateDialogInteraction: Story = {
  args: { ...Default.args, state: "Error", device: "Desktop" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("dialog")[0]);
    await expect(canvas.getAllByRole("dialog")[0]).toBeVisible();
  },
};
export const MobileOpenDialog: Story = {
  args: { ...Default.args, state: "Open", device: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("dialog")[0]).toBeVisible();
    await userEvent.click(canvas.getAllByRole("dialog")[0]);
  },
};
