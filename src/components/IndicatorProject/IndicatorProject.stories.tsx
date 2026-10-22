import type { Meta, StoryObj } from "@storybook/react-vite";
import { IndicatorProject } from "./IndicatorProject";
const meta = {
  title: "Visual asset/Indicator / Project",
  component: IndicatorProject,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IndicatorProject>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Public" } };
