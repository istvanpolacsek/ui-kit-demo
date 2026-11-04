import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContactData } from "./ContactData";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Form/Contact Data",
  component: ContactData,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ContactData>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Closed" } };

export const OpenState: Story = {
  args: { ...Default.args, state: "Open" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("group")[0]).toBeVisible();
  },
};
export const ClosedState: Story = {
  args: { ...Default.args, state: "Closed" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("group")[0]).toBeVisible();
  },
};
