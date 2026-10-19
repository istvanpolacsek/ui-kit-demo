import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "./IconButton";
import { iconNameOptions } from "../Icon/Icon.options";
const meta = {
  title: "Buttons/Icon Button",
  component: IconButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { icon: { control: "select", options: iconNameOptions } },
} satisfies Meta<typeof IconButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { icon: "Star", variant: "Primary", size: "Medium" },
};
