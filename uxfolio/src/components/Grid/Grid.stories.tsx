import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid } from "./Grid";
const meta = {
  title: "Visual asset/Grid",
  component: Grid,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Grid>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
