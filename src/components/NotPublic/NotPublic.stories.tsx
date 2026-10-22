import type { Meta, StoryObj } from "@storybook/react-vite";
import { NotPublic } from "./NotPublic";
const meta = {
  title: "Visual asset/Not public",
  component: NotPublic,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NotPublic>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
