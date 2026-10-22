import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalPreview } from "./ModalPreview";
const meta = {
  title: "Panel/Modal preview",
  component: ModalPreview,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalPreview>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { crop: true, imageType: "199:7187", type: "Background" },
};
