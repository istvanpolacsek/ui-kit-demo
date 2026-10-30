import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelSectionSettingsPortfolio } from "./PopoverPanelSectionSettingsPortfolio";
const meta = {
  title: "Overlay/Popover panel / Section settings / Portfolio",
  component: PopoverPanelSectionSettingsPortfolio,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelSectionSettingsPortfolio>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    horizontalVertical: false,
    horizontalOnly: true,
    hoverBackground: false,
    colors: "Layout grid",
  },
};
