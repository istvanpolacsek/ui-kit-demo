import type { Meta, StoryObj } from "@storybook/react-vite";
import { TertiaryButtonNeutral } from "./TertiaryButtonNeutral";
const meta = {
  title: "Button/Tertiary button / Neutral",
  component: TertiaryButtonNeutral,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TertiaryButtonNeutral>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { mode: "Light", hasIcon: "True", size: "Large" },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
