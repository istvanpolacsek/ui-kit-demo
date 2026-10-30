import type { Meta, StoryObj } from "@storybook/react-vite";
import { IllustrationLegacyIcon } from "./IllustrationLegacyIcon";
const meta = {
  title: "Visual asset/Illustration / Legacy icon",
  component: IllustrationLegacyIcon,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IllustrationLegacyIcon>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Lookandfeel" } };
