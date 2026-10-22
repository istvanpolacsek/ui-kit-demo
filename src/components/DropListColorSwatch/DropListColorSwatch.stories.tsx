import type { Meta, StoryObj } from "@storybook/react-vite";
import { DropListColorSwatch } from "./DropListColorSwatch";
const meta = {
  title: "Input/Drop list / Color swatch",
  component: DropListColorSwatch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DropListColorSwatch>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
