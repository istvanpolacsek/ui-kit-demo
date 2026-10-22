import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalSidebarLogoColors } from "./ModalSidebarLogoColors";
const meta = {
  title: "Panel/Modal sidebar / Logo colors",
  component: ModalSidebarLogoColors,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalSidebarLogoColors>;
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
