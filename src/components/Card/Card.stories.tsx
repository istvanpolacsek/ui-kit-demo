import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";
import { iconNameOptions } from "../Icon/Icon.options";
const meta = {
  title: "Cards/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    icon: { control: "select", options: iconNameOptions },
    name: { control: "select", options: iconNameOptions },
    size: { control: "select", options: [16, 20, 24, 32, 40, 48] },
  },
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    asset: true,
    button: true,
    heading: "Title",
    body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. ",
    icon: "Info",
    assetType: "Icon",
    variant: "Stroke",
    direction: "Horizontal",
    name: "Activity",
    size: 32,
  },
};
