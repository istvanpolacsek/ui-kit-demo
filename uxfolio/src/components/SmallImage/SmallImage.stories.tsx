import type { Meta, StoryObj } from "@storybook/react-vite";
import { SmallImage } from "./SmallImage";
const meta = {
  title: "Visual asset/Small image",
  component: SmallImage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SmallImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
