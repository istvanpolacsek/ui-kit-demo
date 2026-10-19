import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExamplesWaitlist } from "./ExamplesWaitlist";
const meta = {
  title: "Examples/Examples/Waitlist",
  component: ExamplesWaitlist,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ExamplesWaitlist>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
