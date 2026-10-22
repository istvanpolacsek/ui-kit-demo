import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleRadioBox } from "./ToggleRadioBox";
const meta = {
  title: "Button/Toggle / Radio box",
  component: ToggleRadioBox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ToggleRadioBox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "False", mode: "Light" } };
