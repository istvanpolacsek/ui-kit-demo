import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomPrompt } from "./CustomPrompt";
const meta = {
  title: "Visual asset/Custom prompt",
  component: CustomPrompt,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CustomPrompt>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
