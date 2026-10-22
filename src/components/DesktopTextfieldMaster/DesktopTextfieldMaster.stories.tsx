import type { Meta, StoryObj } from "@storybook/react-vite";
import { DesktopTextfieldMaster } from "./DesktopTextfieldMaster";
const meta = {
  title: "  ↳ Input Field 🆕/.Desktop-Textfield/Master",
  component: DesktopTextfieldMaster,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    textState: { control: "select", options: ["Placeholder", "Secure"] },
  },
} satisfies Meta<typeof DesktopTextfieldMaster>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    showLeftIcon: true,
    showRightIcon: true,
    showLink: true,
    showHelperText: true,
    showCountryCode: true,
    instance: "642:6538",
    showDuration: false,
    textState: "Placeholder",
  },
};
