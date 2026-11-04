import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatsCard } from "./StatsCard";
import { iconNameOptions } from "../Icon/Icon.options";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Cards/Stats Card",
  component: StatsCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    icon: { control: "select", options: iconNameOptions },
    name: { control: "select", options: iconNameOptions },
    size: { control: "select", options: [16, 20, 24, 32, 40, 48] },
  },
} satisfies Meta<typeof StatsCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { icon: "Clock", name: "Activity", size: 48 },
};

export const SmallSize: Story = {
  args: { ...Default.args, size: 16 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
  },
};
export const LargeSize: Story = {
  args: { ...Default.args, size: 48 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
  },
};
