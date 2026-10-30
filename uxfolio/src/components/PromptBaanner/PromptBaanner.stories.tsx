import type { Meta, StoryObj } from "@storybook/react-vite";
import { PromptBaanner } from "./PromptBaanner";
const meta = {
  title: "Visual asset/Prompt / Baanner",
  component: PromptBaanner,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PromptBaanner>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { property1: "Trial in progress" } };
