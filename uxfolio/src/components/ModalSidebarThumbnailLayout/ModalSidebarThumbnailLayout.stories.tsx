import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalSidebarThumbnailLayout } from "./ModalSidebarThumbnailLayout";
const meta = {
  title: "Panel/Modal sidebar / Thumbnail layout",
  component: ModalSidebarThumbnailLayout,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalSidebarThumbnailLayout>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasColor: true,
    hasSecondColor: true,
    hasThirdColor: true,
    type: "Default",
  },
};
