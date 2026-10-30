import type { Meta, StoryObj } from "@storybook/react-vite";
import { Presentation } from "./Presentation";
const meta = {
  title: "Visual asset/Presentation",
  component: Presentation,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Presentation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
