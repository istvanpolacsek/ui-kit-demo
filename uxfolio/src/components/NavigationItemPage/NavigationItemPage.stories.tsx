import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationItemPage } from "./NavigationItemPage";
const meta = {
  title: "Module/Navigation item / Page",
  component: NavigationItemPage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationItemPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Regular" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
