import type { Meta, StoryObj } from "@storybook/react-vite";
import { Upload } from "./Upload";
const meta = {
  title: "Visual asset/Upload",
  component: Upload,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Upload>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
