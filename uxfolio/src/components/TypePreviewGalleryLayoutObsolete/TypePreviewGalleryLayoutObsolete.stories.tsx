import type { Meta, StoryObj } from "@storybook/react-vite";
import { TypePreviewGalleryLayoutObsolete } from "./TypePreviewGalleryLayoutObsolete";
const meta = {
  title: "Visual asset/Type preview / Gallery layout (obsolete)",
  component: TypePreviewGalleryLayoutObsolete,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TypePreviewGalleryLayoutObsolete>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Grid" } };
