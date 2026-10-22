import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalSidebarFile } from "./ModalSidebarFile";
const meta = {
  title: "Panel/Modal sidebar / File",
  component: ModalSidebarFile,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalSidebarFile>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Default" } };
