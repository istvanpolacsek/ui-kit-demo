import type { Meta, StoryObj } from "@storybook/react-vite";
import { PanelImageContentReverse } from "./PanelImageContentReverse";
const meta = {
  title: "Sections/Panel Image Content Reverse",
  component: PanelImageContentReverse,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PanelImageContentReverse>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
