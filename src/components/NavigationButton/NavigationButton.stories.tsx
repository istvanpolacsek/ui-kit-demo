import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationButton } from "./NavigationButton";
import { iconNameOptions } from "../Icon/Icon.options";
const meta = {
  title: "Navigation/Navigation Button",
  component: NavigationButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { icon: { control: "select", options: iconNameOptions } },
} satisfies Meta<typeof NavigationButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    label: "Label",
    icon: "Star",
    hasIcon: true,
    hasLabel: true,
    direction: "Column",
    type: "Small",
  },
};
