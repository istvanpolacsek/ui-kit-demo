import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddImage } from "./AddImage";
const meta = {
  title: "Visual asset/Add image",
  component: AddImage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AddImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
