import type { Meta, StoryObj } from "@storybook/react-vite";
import { IllustrationIcon } from "./IllustrationIcon";
const meta = {
  title: "Visual asset/Illustration / Icon",
  component: IllustrationIcon,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IllustrationIcon>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Text", mode: "Dark" } };
