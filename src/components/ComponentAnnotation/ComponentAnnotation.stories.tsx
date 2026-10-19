import type { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentAnnotation } from "./ComponentAnnotation";
const meta = {
  title: "Utilities/_Component Annotation",
  component: ComponentAnnotation,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ComponentAnnotation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { direction: "Right", type: "Group" } };
