import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stepper } from "./Stepper";
const meta = {
  title: "Module/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Stepper>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { mode: "Light" } };
