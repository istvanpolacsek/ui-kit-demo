import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExamplesContactUs } from "./ExamplesContactUs";
const meta = {
  title: "Examples/Examples/Contact Us",
  component: ExamplesContactUs,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ExamplesContactUs>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
