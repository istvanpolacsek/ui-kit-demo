import type { Meta, StoryObj } from "@storybook/react-vite";
import { UploadCalcel } from "./UploadCalcel";
const meta = {
  title: "Visual asset/Upload calcel",
  component: UploadCalcel,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof UploadCalcel>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
