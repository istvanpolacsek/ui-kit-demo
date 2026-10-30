import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageFlexible } from "./ImageFlexible";
const meta = {
  title: "Visual asset/Image / Flexible",
  component: ImageFlexible,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ImageFlexible>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { snaps: false, defaultProp: "Free" } };
