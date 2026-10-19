import type { Meta, StoryObj } from "@storybook/react-vite";
import { PanelImage } from "./PanelImage";
const meta = {
  title: "Sections/Panel Image",
  component: PanelImage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PanelImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
