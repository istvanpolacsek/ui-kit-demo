import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeaderAuth } from "./HeaderAuth";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Sections/Header Auth",
  component: HeaderAuth,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HeaderAuth>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Logged Out" } };

export const LoggedInHover: Story = {
  args: { ...Default.args, state: "Logged In - Hover" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("banner")[0]);
    await expect(canvas.getAllByRole("banner")[0]).toBeVisible();
  },
};
