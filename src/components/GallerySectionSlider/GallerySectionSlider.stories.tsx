import type { Meta, StoryObj } from "@storybook/react-vite";
import { GallerySectionSlider } from "./GallerySectionSlider";
const meta = {
  title: "Section/Gallery section / Slider",
  component: GallerySectionSlider,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof GallerySectionSlider>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { showUI: true, property1: "Default" } };
