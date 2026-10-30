import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalLImageIdeas } from "./ModalLImageIdeas";
const meta = {
  title: "Overlay/Modal / L / Image ideas",
  component: ModalLImageIdeas,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalLImageIdeas>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Image", page: "Browse" } };
