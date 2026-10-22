import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalMAssignStep } from "./ModalMAssignStep";
const meta = {
  title: "Overlay/Modal / M / Assign step",
  component: ModalMAssignStep,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalMAssignStep>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Default" } };
