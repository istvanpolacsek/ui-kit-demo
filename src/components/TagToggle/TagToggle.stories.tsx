import type { Meta, StoryObj } from "@storybook/react-vite";
import { TagToggle } from "./TagToggle";
import { iconNameOptions } from "../Icon/Icon.options";
const meta = {
  title: "Tags/Tag Toggle",
  component: TagToggle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { icon: { control: "select", options: iconNameOptions } },
} satisfies Meta<typeof TagToggle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { showIcon: true, icon: "Check", label: "Label", state: "On" },
};
