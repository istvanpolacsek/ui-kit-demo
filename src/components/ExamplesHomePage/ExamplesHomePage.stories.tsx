import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExamplesHomePage } from "./ExamplesHomePage";
const meta = {
  title: "Examples/Examples / Home Page",
  component: ExamplesHomePage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ExamplesHomePage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
