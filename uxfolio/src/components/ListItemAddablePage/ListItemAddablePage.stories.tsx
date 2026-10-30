import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemAddablePage } from "./ListItemAddablePage";
const meta = {
  title: "Panel/List item / Addable page",
  component: ListItemAddablePage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemAddablePage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
