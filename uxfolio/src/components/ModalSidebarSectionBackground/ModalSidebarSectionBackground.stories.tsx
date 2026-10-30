import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalSidebarSectionBackground } from "./ModalSidebarSectionBackground";
const meta = {
  title: "Panel/Modal sidebar / Section background",
  component: ModalSidebarSectionBackground,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalSidebarSectionBackground>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasColor: true,
    hasSecondColor: true,
    hasThirdColor: true,
    type: "Transparent",
  },
};
