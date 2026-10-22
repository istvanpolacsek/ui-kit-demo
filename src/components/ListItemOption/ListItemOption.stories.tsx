import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemOption } from "./ListItemOption";
const meta = {
  title: "Panel/List item / Option",
  component: ListItemOption,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemOption>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
