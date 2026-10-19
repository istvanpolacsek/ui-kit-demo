import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExamplesAbout } from "./ExamplesAbout";
const meta = {
  title: "Examples/Examples/About",
  component: ExamplesAbout,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ExamplesAbout>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
