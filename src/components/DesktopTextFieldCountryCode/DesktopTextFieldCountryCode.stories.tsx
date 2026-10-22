import type { Meta, StoryObj } from "@storybook/react-vite";
import { DesktopTextFieldCountryCode } from "./DesktopTextFieldCountryCode";
const meta = {
  title: "  ↳ Input Field 🆕/Desktop / Text Field / Country Code",
  component: DesktopTextFieldCountryCode,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DesktopTextFieldCountryCode>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    state: "Default",
    showLeftIcon: false,
    showRightIcon: true,
    showLink: true,
    showHelperText: true,
    showCountryCode: true,
    instance: "642:6538",
    showDuration: false,
  },
};
