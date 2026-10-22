import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToolbarThumbnail2 } from "./ToolbarThumbnail2";
const meta = {
  title: "Overlay/Toolbar / Thumbnail 2",
  component: ToolbarThumbnail2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ToolbarThumbnail2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { isCustomImage: true, type: "Move", mode: "Light" },
};
