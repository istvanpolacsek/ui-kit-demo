import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChatNavBar } from "./ChatNavBar";
import { iconNameOptions } from "../Icon/Icon.options";
const meta = {
  title: "📱 Mobile components/chat nav bar",
  component: ChatNavBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { leftIcon: { control: "select", options: iconNameOptions } },
} satisfies Meta<typeof ChatNavBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    rightIcon: "448:4955",
    leftIcon: "Menu",
    title: "Tiny Fairy Story",
    state: "New Chat (Untitled)",
  },
};
