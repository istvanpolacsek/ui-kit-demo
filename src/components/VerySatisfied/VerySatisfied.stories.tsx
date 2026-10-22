import type { Meta, StoryObj } from "@storybook/react-vite";
import { VerySatisfied } from "./VerySatisfied";
const meta = {
  title: "Visual asset/Very satisfied",
  component: VerySatisfied,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof VerySatisfied>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
