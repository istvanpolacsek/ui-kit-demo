import type { Meta, StoryObj } from "@storybook/react-vite";
import { MultiSelectAcknowledgement } from "./MultiSelectAcknowledgement";
const meta = {
  title: "Input/Multi select / Acknowledgement",
  component: MultiSelectAcknowledgement,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MultiSelectAcknowledgement>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Inactive", mode: "Light" } };
