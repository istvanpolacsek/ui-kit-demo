import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemSection2 } from "./ListItemSection2";
const meta = {
  title: "Panel/List item / Section 2",
  component: ListItemSection2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemSection2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Hero section" } };
