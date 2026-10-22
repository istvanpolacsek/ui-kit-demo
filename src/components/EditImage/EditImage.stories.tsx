import type { Meta, StoryObj } from "@storybook/react-vite";
import { EditImage } from "./EditImage";
const meta = {
  title: "Visual asset/Edit image",
  component: EditImage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof EditImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
