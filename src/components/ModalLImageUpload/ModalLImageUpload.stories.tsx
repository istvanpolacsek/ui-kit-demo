import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalLImageUpload } from "./ModalLImageUpload";
const meta = {
  title: "Overlay/Modal / L / Image upload",
  component: ModalLImageUpload,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalLImageUpload>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { defaultProp: 1 } };
