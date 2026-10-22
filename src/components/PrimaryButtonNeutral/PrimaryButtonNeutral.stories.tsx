import type { Meta, StoryObj } from "@storybook/react-vite";
import { PrimaryButtonNeutral } from "./PrimaryButtonNeutral";
const meta = {
  title: "Button/Primary button / Neutral",
  component: PrimaryButtonNeutral,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PrimaryButtonNeutral>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default", size: "Large", mode: "Light" },
};
