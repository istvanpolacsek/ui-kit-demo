import type { Meta, StoryObj } from "@storybook/react-vite";
import { Info } from "./Info";
const meta = {
  title: "Visual asset/Info",
  component: Info,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Info>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
