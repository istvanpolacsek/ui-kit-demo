import type { Meta, StoryObj } from "@storybook/react-vite";
import { SecondaryButtonNeutral } from "./SecondaryButtonNeutral";
const meta = {
  title: "Button/Secondary button / Neutral",
  component: SecondaryButtonNeutral,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SecondaryButtonNeutral>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default", size: "Large", mode: "Light" },
};
