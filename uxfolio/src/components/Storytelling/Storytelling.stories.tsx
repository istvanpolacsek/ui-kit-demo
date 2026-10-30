import type { Meta, StoryObj } from "@storybook/react-vite";
import { Storytelling } from "./Storytelling";
const meta = {
  title: "Visual asset/Storytelling",
  component: Storytelling,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Storytelling>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
