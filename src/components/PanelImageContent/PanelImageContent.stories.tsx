import type { Meta, StoryObj } from "@storybook/react-vite";
import { PanelImageContent } from "./PanelImageContent";
const meta = {
  title: "Sections/Panel Image Content",
  component: PanelImageContent,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PanelImageContent>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
