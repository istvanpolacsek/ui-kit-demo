import type { Meta, StoryObj } from "@storybook/react-vite";
import { Serif } from "./Serif";
const meta = {
  title: "Visual asset/Serif",
  component: Serif,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Serif>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
