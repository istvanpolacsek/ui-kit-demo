import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalLImageEdit } from "./ModalLImageEdit";
const meta = {
  title: "Overlay/Modal / L / Image edit",
  component: ModalLImageEdit,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalLImageEdit>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { tab: "File" } };
