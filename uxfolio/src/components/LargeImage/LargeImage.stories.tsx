import type { Meta, StoryObj } from "@storybook/react-vite";
import { LargeImage } from "./LargeImage";
const meta = {
  title: "Visual asset/Large image",
  component: LargeImage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof LargeImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
