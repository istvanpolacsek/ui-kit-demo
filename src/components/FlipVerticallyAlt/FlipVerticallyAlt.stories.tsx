import type { Meta, StoryObj } from "@storybook/react-vite";
import { FlipVerticallyAlt } from "./FlipVerticallyAlt";
const meta = {
  title: "Visual asset/Flip vertically alt",
  component: FlipVerticallyAlt,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FlipVerticallyAlt>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
