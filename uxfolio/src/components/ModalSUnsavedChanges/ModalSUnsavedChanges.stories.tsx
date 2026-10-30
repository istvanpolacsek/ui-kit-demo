import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalSUnsavedChanges } from "./ModalSUnsavedChanges";
const meta = {
  title: "Overlay/Modal / S / Unsaved changes",
  component: ModalSUnsavedChanges,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalSUnsavedChanges>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { defaultProp: "General" } };
