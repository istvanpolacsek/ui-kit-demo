import type { Meta, StoryObj } from "@storybook/react-vite";
import { MediaForSliders } from "./MediaForSliders";
const meta = {
  title: "  ↳ Media 🆕/Media for Sliders",
  component: MediaForSliders,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MediaForSliders>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
