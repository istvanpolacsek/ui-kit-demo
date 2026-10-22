import type { Meta, StoryObj } from "@storybook/react-vite";
import { StudiesStatus } from "./StudiesStatus";
const meta = {
  title: "  ↳ Form 🆕/Studies Status",
  component: StudiesStatus,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof StudiesStatus>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Closed" } };
