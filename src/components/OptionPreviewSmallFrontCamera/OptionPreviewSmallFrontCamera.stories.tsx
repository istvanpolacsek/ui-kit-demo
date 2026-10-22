import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewSmallFrontCamera } from "./OptionPreviewSmallFrontCamera";
const meta = {
  title: "Visual asset/Option preview / Small / Front camera",
  component: OptionPreviewSmallFrontCamera,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewSmallFrontCamera>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Simple" } };
