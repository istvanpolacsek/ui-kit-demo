import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageManagerThumbnail } from "./ImageManagerThumbnail";
const meta = {
  title: "Panel/Image manager / Thumbnail",
  component: ImageManagerThumbnail,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ImageManagerThumbnail>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Default" } };
