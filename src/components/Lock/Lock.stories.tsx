import type { Meta, StoryObj } from "@storybook/react-vite";
import { Lock } from "./Lock";
const meta = {
  title: "Visual asset/Lock",
  component: Lock,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Lock>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
