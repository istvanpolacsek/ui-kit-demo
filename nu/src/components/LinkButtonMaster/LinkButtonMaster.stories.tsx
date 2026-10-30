import type { Meta, StoryObj } from "@storybook/react-vite";
import { LinkButtonMaster } from "./LinkButtonMaster";
const meta = {
  title: "  ↳ Button/.Link_Button_Master",
  component: LinkButtonMaster,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof LinkButtonMaster>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    leftIcon: true,
    rightIcon: true,
    linkValue: "Link",
    size: "Large",
    device: "Desktop",
  },
};
