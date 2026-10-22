import type { Meta, StoryObj } from "@storybook/react-vite";
import { IllustrationEmpty } from "./IllustrationEmpty";
const meta = {
  title: "Visual asset/Illustration / Empty",
  component: IllustrationEmpty,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IllustrationEmpty>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "General", color: "Full" } };
