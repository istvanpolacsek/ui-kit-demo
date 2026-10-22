import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToolbarThumbnail } from "./ToolbarThumbnail";
const meta = {
  title: "Overlay/Toolbar / Thumbnail",
  component: ToolbarThumbnail,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ToolbarThumbnail>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    flipHorizontally: false,
    addMedia: false,
    addSocialLink: false,
    addText: false,
    addNavigation: false,
    type: "General",
    mode: "Light",
  },
};
