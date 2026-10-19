import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageProductResults } from "./PageProductResults";
const meta = {
  title: "Sections/Page Product Results",
  component: PageProductResults,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PageProductResults>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
