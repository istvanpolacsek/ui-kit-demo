import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextSubtitle } from "./TextSubtitle";
const meta = {
  title: "Text/Text Subtitle",
  component: TextSubtitle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextSubtitle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Subtitle" } };
