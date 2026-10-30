import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowLeft } from "./ArrowLeft";
const meta = {
  title: "Visual asset/Arrow left",
  component: ArrowLeft,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ArrowLeft>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
