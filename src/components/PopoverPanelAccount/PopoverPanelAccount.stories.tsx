import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelAccount } from "./PopoverPanelAccount";
const meta = {
  title: "Overlay/Popover panel / Account",
  component: PopoverPanelAccount,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelAccount>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { accountType: "Free", mode: "Dark" } };
