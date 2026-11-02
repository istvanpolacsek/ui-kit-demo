import type { Meta, StoryObj } from "@storybook/react-vite";
import { MediaSliderSection } from "./MediaSliderSection";
const meta = {
  title: "  ↳ Section/Media Slider Section",
  component: MediaSliderSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MediaSliderSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
