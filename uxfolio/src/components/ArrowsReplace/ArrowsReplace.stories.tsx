import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowsReplace } from "./ArrowsReplace";
const meta = {
  title: "Visual asset/Arrows replace",
  component: ArrowsReplace,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ArrowsReplace>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
