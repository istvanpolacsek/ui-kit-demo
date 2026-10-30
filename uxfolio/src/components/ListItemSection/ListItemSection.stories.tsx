import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemSection } from "./ListItemSection";
const meta = {
  title: "Panel/List item/Section",
  component: ListItemSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
