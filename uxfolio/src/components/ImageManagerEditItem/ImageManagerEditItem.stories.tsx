import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageManagerEditItem } from "./ImageManagerEditItem";
const meta = {
  title: "Panel/Image manager / Edit item",
  component: ImageManagerEditItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ImageManagerEditItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
