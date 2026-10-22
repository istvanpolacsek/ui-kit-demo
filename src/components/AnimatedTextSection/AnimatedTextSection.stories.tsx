import type { Meta, StoryObj } from "@storybook/react-vite";
import { AnimatedTextSection } from "./AnimatedTextSection";
const meta = {
  title: "Section/Animated text section",
  component: AnimatedTextSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AnimatedTextSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { overflowStyle: "Full width" } };
