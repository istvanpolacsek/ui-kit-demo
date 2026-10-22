import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleSwitch } from "./ToggleSwitch";
const meta = {
  title: "Button/Toggle / Switch",
  component: ToggleSwitch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ToggleSwitch>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "False", mode: "Light" } };
