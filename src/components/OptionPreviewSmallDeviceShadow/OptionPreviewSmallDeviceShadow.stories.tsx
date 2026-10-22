import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewSmallDeviceShadow } from "./OptionPreviewSmallDeviceShadow";
const meta = {
  title: "Visual asset/Option preview / Small / Device shadow",
  component: OptionPreviewSmallDeviceShadow,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewSmallDeviceShadow>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "None" } };
