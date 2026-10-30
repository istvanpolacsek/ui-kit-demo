import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserButtonTextPrimary } from "./UserButtonTextPrimary";
const meta = {
  title: "Module/User button / Text primary",
  component: UserButtonTextPrimary,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof UserButtonTextPrimary>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    reachingLimit: false,
    colorOverride: false,
    state: "Default",
    roundness: "Sharp",
    mode: "Light",
  },
};
