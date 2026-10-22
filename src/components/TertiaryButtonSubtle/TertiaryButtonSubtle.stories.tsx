import type { Meta, StoryObj } from "@storybook/react-vite";
import { TertiaryButtonSubtle } from "./TertiaryButtonSubtle";
const meta = {
  title: "Button/Tertiary button / Subtle",
  component: TertiaryButtonSubtle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TertiaryButtonSubtle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { mode: "Light", hasIcon: "True", size: "Large" },
};
