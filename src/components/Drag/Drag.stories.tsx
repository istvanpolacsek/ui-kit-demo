import type { Meta, StoryObj } from "@storybook/react-vite";
import { Drag } from "./Drag";
const meta = {
  title: "Visual asset/Drag",
  component: Drag,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Drag>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
