import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemAddModule } from "./ListItemAddModule";
const meta = {
  title: "Panel/List item / Add module",
  component: ListItemAddModule,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemAddModule>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
