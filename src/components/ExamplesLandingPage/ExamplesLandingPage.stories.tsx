import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExamplesLandingPage } from "./ExamplesLandingPage";
const meta = {
  title: "Examples/Examples/Landing Page",
  component: ExamplesLandingPage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ExamplesLandingPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
