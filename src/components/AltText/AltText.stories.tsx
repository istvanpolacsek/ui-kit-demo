import type { Meta, StoryObj } from "@storybook/react-vite";
import { AltText } from "./AltText";
const meta = {
  title: "Visual asset/Alt text",
  component: AltText,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AltText>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
