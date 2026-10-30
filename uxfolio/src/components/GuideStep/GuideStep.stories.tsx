import type { Meta, StoryObj } from "@storybook/react-vite";
import { GuideStep } from "./GuideStep";
const meta = {
  title: "Panel/Guide / Step",
  component: GuideStep,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof GuideStep>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { hasInfo: true, type: "Text only" } };
