import type { Meta, StoryObj } from "@storybook/react-vite";
import { CenterAlignText } from "./CenterAlignText";
const meta = {
  title: "Visual asset/Center align text",
  component: CenterAlignText,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CenterAlignText>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
