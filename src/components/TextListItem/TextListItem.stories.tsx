import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextListItem } from "./TextListItem";
const meta = {
  title: "Text/Text List Item",
  component: TextListItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextListItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "List item" } };
