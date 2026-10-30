import type { Meta, StoryObj } from "@storybook/react-vite";
import { PrimaryButtonWithIconNeutral } from "./PrimaryButtonWithIconNeutral";
const meta = {
  title: "Button/Primary button with icon / Neutral",
  component: PrimaryButtonWithIconNeutral,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PrimaryButtonWithIconNeutral>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default", size: "Large", mode: "Light" },
};
