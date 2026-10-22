import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageCaption } from "./ImageCaption";
const meta = {
  title: "Module/Image caption",
  component: ImageCaption,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ImageCaption>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { colorOverride: false, mode: "Light" } };
