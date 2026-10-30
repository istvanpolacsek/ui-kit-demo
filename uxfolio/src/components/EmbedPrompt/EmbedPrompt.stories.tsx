import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmbedPrompt } from "./EmbedPrompt";
const meta = {
  title: "Panel/Embed Prompt",
  component: EmbedPrompt,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof EmbedPrompt>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
