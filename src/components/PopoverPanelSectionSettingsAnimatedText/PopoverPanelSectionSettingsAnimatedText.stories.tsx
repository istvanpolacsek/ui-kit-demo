import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelSectionSettingsAnimatedText } from "./PopoverPanelSectionSettingsAnimatedText";
const meta = {
  title: "Overlay/Popover panel / Section settings / Animated text",
  component: PopoverPanelSectionSettingsAnimatedText,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelSectionSettingsAnimatedText>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    lineColorSelector: false,
    selectPageDropList: false,
    addLinkInputField: false,
    tab: "Design",
  },
};
