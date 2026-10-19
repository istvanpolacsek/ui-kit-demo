import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextLinkListItem } from "./TextLinkListItem";
const meta = {
  title: "Text/Text Link List Item",
  component: TextLinkListItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextLinkListItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "List item" } };
