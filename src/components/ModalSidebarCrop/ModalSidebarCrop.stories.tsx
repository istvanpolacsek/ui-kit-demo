import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalSidebarCrop } from "./ModalSidebarCrop";
const meta = {
  title: "Panel/Modal sidebar / Crop",
  component: ModalSidebarCrop,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalSidebarCrop>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Default" } };
