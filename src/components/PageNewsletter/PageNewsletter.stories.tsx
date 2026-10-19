import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageNewsletter } from "./PageNewsletter";
const meta = {
  title: "Sections/Page Newsletter",
  component: PageNewsletter,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PageNewsletter>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
