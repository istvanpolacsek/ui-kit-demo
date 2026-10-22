import type { Meta, StoryObj } from "@storybook/react-vite";
import { Separator } from "./Separator";
const meta = {
  title: "Visual asset/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Separator>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { angle: "Horizontal", mode: "Light" } };
