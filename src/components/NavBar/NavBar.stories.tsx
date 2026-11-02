import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavBar } from "./NavBar";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Design System/Nav Bar",
  component: NavBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    type: "Default",
    items: [
      { label: "Pipeline overview", state: "Selected" },
      { label: "Leads", state: "Default" },
      { label: "Analytics", state: "Default" },
      { label: "Contracts", state: "Default" },
    ],
  },
};

export const DetailTypeVisible: Story = {
  args: { ...Default.args, type: "Detail" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("menu")[0]).toBeVisible();
  },
};
export const HoverRevealsMenu: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("menu")[0]);
    await expect(canvas.getAllByRole("menu")[0]).toBeVisible();
  },
};
