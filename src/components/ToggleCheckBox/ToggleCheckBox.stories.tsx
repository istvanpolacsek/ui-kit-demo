import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleCheckBox } from "./ToggleCheckBox";
const meta = {
  title: "Button/Toggle / Check box",
  component: ToggleCheckBox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ToggleCheckBox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "False", mode: "Light" } };
