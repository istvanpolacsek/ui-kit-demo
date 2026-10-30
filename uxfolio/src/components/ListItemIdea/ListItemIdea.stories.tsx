import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemIdea } from "./ListItemIdea";
const meta = {
  title: "Panel/List item / Idea",
  component: ListItemIdea,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemIdea>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
