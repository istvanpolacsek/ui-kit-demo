import type { Meta, StoryObj } from "@storybook/react-vite";
import { SparkMessage } from "./SparkMessage";
const meta = {
  title: "📱 Mobile components/spark message",
  component: SparkMessage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SparkMessage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Resting" } };
