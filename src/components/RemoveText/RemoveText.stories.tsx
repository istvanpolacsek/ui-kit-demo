import type { Meta, StoryObj } from "@storybook/react-vite";
import { RemoveText } from "./RemoveText";
const meta = {
  title: "Visual asset/Remove text",
  component: RemoveText,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RemoveText>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
