import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageManagerSingle } from "./ImageManagerSingle";
const meta = {
  title: "Panel/Image manager / Single",
  component: ImageManagerSingle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ImageManagerSingle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasLabel: true, hasDescription: true, state: "Image" },
};
