import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "./Tag";
const meta = {
  title: "Tags/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tag>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { removable: true, label: "Tag", scheme: "Brand", variant: "Primary" },
};
