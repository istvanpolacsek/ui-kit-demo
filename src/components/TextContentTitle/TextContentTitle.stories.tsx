import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextContentTitle } from "./TextContentTitle";
const meta = {
  title: "Text/Text Content Title",
  component: TextContentTitle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextContentTitle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    subtitle: "Subtitle",
    hasSubtitle: true,
    title: "Title",
    align: "Start",
  },
};
