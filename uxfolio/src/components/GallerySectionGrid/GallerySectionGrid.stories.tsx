import type { Meta, StoryObj } from "@storybook/react-vite";
import { GallerySectionGrid } from "./GallerySectionGrid";
const meta = {
  title: "Section/Gallery section / Grid",
  component: GallerySectionGrid,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof GallerySectionGrid>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { showUI: true, columns: 4 } };
