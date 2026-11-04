import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mobile } from "./Mobile";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Input Field/Mobile",
  component: Mobile,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    textState: { control: "select", options: ["Placeholder", "Secure"] },
  },
} satisfies Meta<typeof Mobile>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default", textState: "Placeholder" },
};

export const ErrorState: Story = {
  args: { ...Default.args, state: "Error" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("group")[0]).toBeVisible();
    await userEvent.hover(canvas.getAllByRole("group")[0]);
  },
};
export const SecureTextInput: Story = {
  args: { ...Default.args, textState: "Secure", state: "Default" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("group")[0]).toBeVisible();
    await userEvent.click(canvas.getAllByRole("group")[0]);
  },
};
