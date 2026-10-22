import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageManagerReorderItem } from "./ImageManagerReorderItem";
const meta = {
  title: "Panel/Image manager / Reorder item",
  component: ImageManagerReorderItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ImageManagerReorderItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
