import type { Meta, StoryObj } from "@storybook/react-vite";
import { MessageFeatureCTA } from "./MessageFeatureCTA";
const meta = {
  title: "Panel/Message / Feature CTA",
  component: MessageFeatureCTA,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MessageFeatureCTA>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Example", mode: "Light" } };
