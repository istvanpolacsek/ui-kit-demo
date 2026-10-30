import type { Meta, StoryObj } from "@storybook/react-vite";
import { GallerySectionCarousel } from "./GallerySectionCarousel";
const meta = {
  title: "Section/Gallery section / Carousel",
  component: GallerySectionCarousel,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof GallerySectionCarousel>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { showUI: true, property1: "Default" } };
