import type { Meta, StoryObj } from "@storybook/react-vite";
import { GalleryLayout } from "./GalleryLayout";
const meta = {
  title: "Visual asset/Gallery layout",
  component: GalleryLayout,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof GalleryLayout>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
