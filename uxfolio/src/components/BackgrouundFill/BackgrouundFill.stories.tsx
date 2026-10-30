import type { Meta, StoryObj } from "@storybook/react-vite";
import { BackgrouundFill } from "./BackgrouundFill";
const meta = {
  title: "Visual asset/Backgrouund fill",
  component: BackgrouundFill,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof BackgrouundFill>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
