import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemSmallType } from "./ListItemSmallType";
const meta = {
  title: "Panel/List item / Small type",
  component: ListItemSmallType,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemSmallType>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Selected: Story = { args: { ...Default.args, selected: true } };
