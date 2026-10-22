import type { Meta, StoryObj } from "@storybook/react-vite";
import { RemoveImage } from "./RemoveImage";
const meta = {
  title: "Visual asset/Remove image",
  component: RemoveImage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RemoveImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
