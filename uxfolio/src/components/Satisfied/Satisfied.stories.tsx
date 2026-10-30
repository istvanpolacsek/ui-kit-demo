import type { Meta, StoryObj } from "@storybook/react-vite";
import { Satisfied } from "./Satisfied";
const meta = {
  title: "Visual asset/Satisfied",
  component: Satisfied,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Satisfied>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
