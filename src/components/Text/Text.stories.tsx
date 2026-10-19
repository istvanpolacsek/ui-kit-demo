import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";
const meta = {
  title: "Text/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Text>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text" } };
