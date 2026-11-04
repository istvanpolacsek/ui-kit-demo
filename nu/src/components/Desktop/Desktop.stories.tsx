import type { Meta, StoryObj } from "@storybook/react-vite";
import { Desktop } from "./Desktop";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Input Field/Desktop",
  component: Desktop,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    textState: { control: "select", options: ["Placeholder", "Secure"] },
  },
} satisfies Meta<typeof Desktop>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default", textState: "Placeholder" },
};

export const HoverState: Story = {
  args: { ...Default.args, state: "Hover" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("group")[0]);
    await expect(canvas.getAllByRole("group")[0]).toBeVisible();
  },
};
export const ErrorState: Story = {
  args: { ...Default.args, state: "Error" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("group")[0]).toBeVisible();
  },
};
