import type { Meta, StoryObj } from "@storybook/react-vite";
import { SummaryItem } from "./SummaryItem";
import { iconIconNameOptions } from "../Icon/Icon.options";
const meta = {
  title: "Design System/Summary Item",
  component: SummaryItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { iconName: { control: "select", options: iconIconNameOptions } },
} satisfies Meta<typeof SummaryItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    label: "Deal Stage",
    value: "Call scheduled",
    iconName: "layout-dashboard",
  },
};
