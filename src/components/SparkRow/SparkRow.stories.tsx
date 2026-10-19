import type { Meta, StoryObj } from "@storybook/react-vite";
import { SparkRow } from "./SparkRow";
const meta = {
  title: "Claude Components/Spark row",
  component: SparkRow,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SparkRow>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
