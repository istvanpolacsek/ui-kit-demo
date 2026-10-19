import type { Meta, StoryObj } from "@storybook/react-vite";
import { PanelImageDouble } from "./PanelImageDouble";
const meta = {
  title: "Sections/Panel Image Double",
  component: PanelImageDouble,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PanelImageDouble>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
