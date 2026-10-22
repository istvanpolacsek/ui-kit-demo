import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemPage } from "./ListItemPage";
const meta = {
  title: "Panel/List item / Page",
  component: ListItemPage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    indicatorProjectType: { control: "select", options: ["Public", "Draft"] },
  },
} satisfies Meta<typeof ListItemPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    isHome: true,
    state: "Default",
    active: "False",
    type: "Page",
    indicatorProjectType: "Public",
  },
};
