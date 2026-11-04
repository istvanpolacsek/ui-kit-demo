import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextLink } from "./TextLink";
const meta = {
  title: "Text/Text Link",
  component: TextLink,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextLink>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Link" } };
