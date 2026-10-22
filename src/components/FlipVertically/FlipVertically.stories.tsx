import type { Meta, StoryObj } from "@storybook/react-vite";
import { FlipVertically } from "./FlipVertically";
const meta = {
  title: "Visual asset/Flip vertically",
  component: FlipVertically,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FlipVertically>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
