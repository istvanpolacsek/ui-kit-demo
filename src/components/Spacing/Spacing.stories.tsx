import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spacing } from "./Spacing";
const meta = {
  title: "Visual asset/Spacing",
  component: Spacing,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Spacing>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
