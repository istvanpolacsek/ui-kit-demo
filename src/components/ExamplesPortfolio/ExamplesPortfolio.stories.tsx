import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExamplesPortfolio } from "./ExamplesPortfolio";
const meta = {
  title: "Examples/Examples/Portfolio",
  component: ExamplesPortfolio,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ExamplesPortfolio>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
