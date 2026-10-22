import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalSidebarDeviceStyle } from "./ModalSidebarDeviceStyle";
const meta = {
  title: "Panel/Modal sidebar / Device style",
  component: ModalSidebarDeviceStyle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalSidebarDeviceStyle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { deviceStyle: "None", settings: "Image" },
};
