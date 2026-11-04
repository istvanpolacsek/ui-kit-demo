import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Avatars/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { initials: "F", type: "Image", size: "Large", shape: "Circle" },
};

export const LargeCircleWithInitials: Story = {
  args: {
    ...Default.args,
    initials: "F",
    type: "Initial",
    size: "Large",
    shape: "Circle",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("F")[0]).toBeVisible();
    await expect(canvas.getAllByText("F")[0]).toHaveTextContent("F");
  },
};
export const SmallSquareInitial: Story = {
  args: {
    ...Default.args,
    initials: "F",
    type: "Initial",
    size: "Small",
    shape: "Square",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("F")[0]).toBeVisible();
    await expect(canvas.getAllByText("F")[0]).toHaveTextContent("F");
  },
};
export const HoverOnMediumAvatar: Story = {
  args: {
    ...Default.args,
    initials: "F",
    type: "Initial",
    size: "Medium",
    shape: "Circle",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("F")[0]).toHaveTextContent("F");
    await userEvent.hover(canvas.getAllByText("F")[0]);
    await expect(canvas.getAllByText("F")[0]).toBeVisible();
  },
};
