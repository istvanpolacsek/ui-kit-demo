import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextLinkList } from "./TextLinkList";
const meta = {
  title: "Text/Text Link List",
  component: TextLinkList,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextLinkList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { hasTitle: true, density: "Default" } };
