import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppComposer } from "./AppComposer";
const meta = {
  title: "📱 Mobile components/app composer",
  component: AppComposer,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AppComposer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
