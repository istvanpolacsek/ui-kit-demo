import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageFixed } from "./ImageFixed";
const meta = {
  title: "Visual asset/Image / Fixed",
  component: ImageFixed,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ImageFixed>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { snaps: false, aspectRatio: "1:1" } };
