import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageManagerMultiple } from "./ImageManagerMultiple";
const meta = {
  title: "Panel/Image manager / Multiple",
  component: ImageManagerMultiple,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ImageManagerMultiple>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { reorder: "False" } };
