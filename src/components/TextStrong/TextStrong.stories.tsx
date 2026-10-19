import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextStrong } from "./TextStrong";
const meta = {
  title: "Text/Text Strong",
  component: TextStrong,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextStrong>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Strong" } };
