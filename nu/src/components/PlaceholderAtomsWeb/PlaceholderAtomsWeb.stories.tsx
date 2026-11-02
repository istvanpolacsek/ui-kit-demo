import type { Meta, StoryObj } from "@storybook/react-vite";
import { PlaceholderAtomsWeb } from "./PlaceholderAtomsWeb";
const meta = {
  title: "  ↳ Input Field/Placeholder Atoms / Web",
  component: PlaceholderAtomsWeb,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PlaceholderAtomsWeb>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { textState: "Placeholder" } };
