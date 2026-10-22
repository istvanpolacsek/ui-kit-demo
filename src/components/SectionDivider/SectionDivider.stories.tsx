import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionDivider } from "./SectionDivider";
const meta = {
  title: "Input/Section divider",
  component: SectionDivider,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SectionDivider>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { mode: "Light" } };
