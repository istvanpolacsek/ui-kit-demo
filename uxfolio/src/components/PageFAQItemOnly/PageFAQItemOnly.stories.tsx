import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageFAQItemOnly } from "./PageFAQItemOnly";
const meta = {
  title: "Panel/Page FAQ / Item only",
  component: PageFAQItemOnly,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PageFAQItemOnly>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Closed" } };
