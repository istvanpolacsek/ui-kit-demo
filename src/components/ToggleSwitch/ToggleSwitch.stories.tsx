import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleSwitch } from "./ToggleSwitch";
const meta = {
  title: "Claude Components/ToggleSwitch",
  component: ToggleSwitch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ToggleSwitch>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { size: "Default", checked: "No", disabled: "No", focused: "No" },
};
