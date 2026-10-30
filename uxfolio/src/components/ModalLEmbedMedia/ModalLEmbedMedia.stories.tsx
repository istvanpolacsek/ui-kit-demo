import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalLEmbedMedia } from "./ModalLEmbedMedia";
const meta = {
  title: "Overlay/Modal / L / Embed media",
  component: ModalLEmbedMedia,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalLEmbedMedia>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Original" } };
