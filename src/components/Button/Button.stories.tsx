import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { iconNameOptions } from "../Icon/Icon.options";
const meta = {
  title: "Claude Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    startIcon: { control: "select", options: iconNameOptions },
    endIcon: { control: "select", options: iconNameOptions },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    showStartIcon: false,
    startIcon: "Add",
    endIcon: "Caret Down Small",
    showEndIcon: false,
    variant: "Default",
    size: "Default",
    state: "Default",
  },
};
