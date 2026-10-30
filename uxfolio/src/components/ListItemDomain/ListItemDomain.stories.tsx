import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemDomain } from "./ListItemDomain";
const meta = {
  title: "Panel/List item / Domain",
  component: ListItemDomain,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemDomain>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Recommended" } };
