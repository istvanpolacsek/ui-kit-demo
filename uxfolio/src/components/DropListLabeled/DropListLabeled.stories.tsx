import type { Meta, StoryObj } from "@storybook/react-vite";
import { DropListLabeled } from "./DropListLabeled";
const meta = {
  title: "Input/Drop list / Labeled",
  component: DropListLabeled,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DropListLabeled>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { mode: "Light" } };
