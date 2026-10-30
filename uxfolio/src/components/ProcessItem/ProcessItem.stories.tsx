import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProcessItem } from "./ProcessItem";
const meta = {
  title: "Module/Process item",
  component: ProcessItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ProcessItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasNext: true, hasPrevious: true, state: "Default", mode: "Light" },
};
