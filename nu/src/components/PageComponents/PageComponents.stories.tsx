import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageComponents } from "./PageComponents";
const meta = {
  title: "DS Components/.Page Components",
  component: PageComponents,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PageComponents>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Footer" } };
