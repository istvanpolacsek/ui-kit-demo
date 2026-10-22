import type { Meta, StoryObj } from "@storybook/react-vite";
import { PortoflioThumbnail } from "./PortoflioThumbnail";
const meta = {
  title: "Panel/Portoflio thumbnail",
  component: PortoflioThumbnail,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PortoflioThumbnail>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
