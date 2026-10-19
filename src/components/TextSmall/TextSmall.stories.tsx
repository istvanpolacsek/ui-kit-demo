import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextSmall } from "./TextSmall";
const meta = {
  title: "Text/Text Small",
  component: TextSmall,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextSmall>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Small" } };
