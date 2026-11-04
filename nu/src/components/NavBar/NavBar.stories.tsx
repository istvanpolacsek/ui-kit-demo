import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavBar } from "./NavBar";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Navigation/Nav Bar",
  component: NavBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop", state: "Closed" } };

export const DesktopClosedState: Story = {
  args: { ...Default.args, device: "Desktop", state: "Closed" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("navigation")[0]).toBeVisible();
    await userEvent.click(canvas.getAllByRole("navigation")[0]);
    await expect(canvas.getAllByRole("navigation")[0]).toBeVisible();
  },
};
