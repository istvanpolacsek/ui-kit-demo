import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalSidebarAltText } from "./ModalSidebarAltText";
const meta = {
  title: "Panel/Modal sidebar / Alt text",
  component: ModalSidebarAltText,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalSidebarAltText>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Default" } };
