import type { Meta, StoryObj } from "@storybook/react-vite";
import { PlaceholderAtomsMobile } from "./PlaceholderAtomsMobile";
const meta = {
  title: "  ↳ Input Field/Placeholder Atoms / Mobile",
  component: PlaceholderAtomsMobile,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PlaceholderAtomsMobile>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { textState: "Placeholder" } };
