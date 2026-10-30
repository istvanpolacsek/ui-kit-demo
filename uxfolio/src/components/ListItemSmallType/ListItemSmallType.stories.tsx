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
export const Default: Story = { args: { active: "False" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
