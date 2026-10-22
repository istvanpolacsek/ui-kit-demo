import type { Meta, StoryObj } from "@storybook/react-vite";
import { LinkButton } from "./LinkButton";
const meta = {
  title: "  ↳ Button 🆕/Link_Button",
  component: LinkButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["Large", "Small"] },
    device: { control: "select", options: ["Desktop", "Mobile"] },
  },
} satisfies Meta<typeof LinkButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    state: "Default",
    hierarchy: "Primary",
    type: "Default",
    leftIcon: true,
    rightIcon: true,
    linkValue: "Link",
    size: "Large",
    device: "Desktop",
  },
};
