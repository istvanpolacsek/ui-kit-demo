import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomImage } from "./CustomImage";
const meta = {
  title: "Visual asset/Custom image",
  component: CustomImage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CustomImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
