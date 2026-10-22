import type { Meta, StoryObj } from "@storybook/react-vite";
import { DropListLabelless } from "./DropListLabelless";
const meta = {
  title: "Input/Drop list / Labelless",
  component: DropListLabelless,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DropListLabelless>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { mode: "Light" } };
