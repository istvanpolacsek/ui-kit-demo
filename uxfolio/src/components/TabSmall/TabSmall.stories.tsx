import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabSmall } from "./TabSmall";
const meta = {
  title: "Button/Tab / Small",
  component: TabSmall,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TabSmall>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { topIcon: false, sideIcon: false, mode: "Light" },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
