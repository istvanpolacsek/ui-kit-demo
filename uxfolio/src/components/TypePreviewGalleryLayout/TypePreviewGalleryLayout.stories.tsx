import type { Meta, StoryObj } from "@storybook/react-vite";
import { TypePreviewGalleryLayout } from "./TypePreviewGalleryLayout";
const meta = {
  title: "Visual asset/Type preview / Gallery layout",
  component: TypePreviewGalleryLayout,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TypePreviewGalleryLayout>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Grid" } };
