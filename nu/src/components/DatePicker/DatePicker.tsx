import React from "react";
import styled, { css } from "styled-components";
import { DesktopDropdown } from "../DesktopDropdown";
import { ChevronControl } from "../ChevronControl";
import { DatePickerBlocks } from "../DatePickerBlocks";
import { Button } from "../Button";
import { MobileDropdown } from "../MobileDropdown";

export interface DatePickerProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "state" | "device"
> {
  state?: "Closed" | "Open" | "Focused" | "Error";
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 360px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledDesktopDropdown = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledDatePicker = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    overflow: hidden;
    background-color: ${theme["background"]["bgDefult"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["border"]["borderGray"]};
    border-radius: 8px;
  `,
);

const StyledSelectionRow = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledControls = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledatomsDefault = styled.h2(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.005em;
  `,
);

const StyledCalendarGrid = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 12px;
    padding-bottom: 4px;
    padding-left: 12px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-end;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledDaysOfTheWeek = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSunday = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 100px;
  `,
);

const StyledDate = styled.div(
  () => css`
    color: #1d1b20;
  `,
);

const StyledMonday = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 100px;
  `,
);

const StyledDate2 = styled.div(
  () => css`
    color: #1d1b20;
  `,
);

const StyledTuesday = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 100px;
  `,
);

const StyledDate3 = styled.div(
  () => css`
    color: #1d1b20;
  `,
);

const StyledWednesday = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 100px;
  `,
);

const StyledDate4 = styled.div(
  () => css`
    color: #1d1b20;
  `,
);

const StyledThursday = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 100px;
  `,
);

const StyledDate5 = styled.div(
  () => css`
    color: #1d1b20;
  `,
);

const StyledFriday = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 100px;
  `,
);

const StyledDate6 = styled.div(
  () => css`
    color: #1d1b20;
  `,
);

const StyledSaturday = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 100px;
  `,
);

const StyledDate7 = styled.div(
  () => css`
    color: #1d1b20;
  `,
);

const StyledWeek1 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledDatePickerBlocks = styled.li(() => css``);

const StyledDatePickerBlocks2 = styled.li(() => css``);

const StyledDatePickerBlocks3 = styled.li(() => css``);

const StyledDatePickerBlocks4 = styled.li(() => css``);

const StyledDatePickerBlocks5 = styled.li(() => css``);

const StyledDatePickerBlocks6 = styled.li(() => css``);

const StyledDatePickerBlocks7 = styled.li(() => css``);

const StyledWeek6 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledDatePickerBlocks8 = styled.li(() => css``);

const StyledDatePickerBlocks22 = styled.li(() => css``);

const StyledDatePickerBlocks32 = styled.li(() => css``);

const StyledDatePickerBlocks42 = styled.li(() => css``);

const StyledDatePickerBlocks52 = styled.li(() => css``);

const StyledDatePickerBlocks62 = styled.li(() => css``);

const StyledDatePickerBlocks72 = styled.li(() => css``);

const StyledWeek7 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledDatePickerBlocks9 = styled.li(() => css``);

const StyledDatePickerBlocks23 = styled.li(() => css``);

const StyledDatePickerBlocks33 = styled.li(() => css``);

const StyledDatePickerBlocks43 = styled.li(() => css``);

const StyledDatePickerBlocks53 = styled.li(() => css``);

const StyledDatePickerBlocks63 = styled.li(() => css``);

const StyledDatePickerBlocks73 = styled.li(() => css``);

const StyledWeek8 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledDatePickerBlocks10 = styled.li(() => css``);

const StyledDatePickerBlocks24 = styled.li(() => css``);

const StyledDatePickerBlocks34 = styled.li(() => css``);

const StyledDatePickerBlocks44 = styled.li(() => css``);

const StyledDatePickerBlocks54 = styled.li(() => css``);

const StyledDatePickerBlocks64 = styled.li(() => css``);

const StyledDatePickerBlocks74 = styled.li(() => css``);

const StyledWeek9 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledDatePickerBlocks11 = styled.li(() => css``);

const StyledDatePickerBlocks25 = styled.li(() => css``);

const StyledDatePickerBlocks35 = styled.li(() => css``);

const StyledDatePickerBlocks45 = styled.li(() => css``);

const StyledDatePickerBlocks55 = styled.li(() => css``);

const StyledDatePickerBlocks65 = styled.li(() => css``);

const StyledDatePickerBlocks75 = styled.li(() => css``);

const StyledWeek10 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledDatePickerBlocks12 = styled.li(() => css``);

const StyledDatePickerBlocks26 = styled.li(() => css``);

const StyledDatePickerBlocks36 = styled.li(() => css``);

const StyledDatePickerBlocks46 = styled.li(() => css``);

const StyledDatePickerBlocks56 = styled.li(() => css``);

const StyledDatePickerBlocks66 = styled.li(() => css``);

const StyledDatePickerBlocks76 = styled.li(() => css``);

const StyledLocalActions = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledButtonContainer = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledButton = styled.li(() => css``);

const StyledButton2 = styled.li(() => css``);

const StyledMobileDropdown = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** A date picker component that allows users to select a date from a calendar interface. Supports open/closed/focused/error states and adapts to mobile and desktop layouts. When open, displays a month navigation header, a calendar grid with day-of-week labels and date blocks, and action buttons. */
export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  function DatePicker({ state = "Closed", device = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        role="dialog"
        aria-label="Date Picker"
        aria-haspopup
        {...rest}
        ref={ref}
      >
        {device === "Desktop" && (
          <StyledDesktopDropdown>
            <DesktopDropdown state={"Default"} />
          </StyledDesktopDropdown>
        )}
        {state === "Open" && (
          <StyledDatePicker>
            {state === "Open" && (
              <StyledSelectionRow>
                {state === "Open" && (
                  <StyledControls>
                    {state === "Open" && <ChevronControl direction={"Left"} />}
                    {state === "Open" && (
                      <StyledatomsDefault>
                        {
                          (
                            {
                              '["Desktop"]': "October 2026",
                              '["Mobile"]': "October 2025",
                            } as Record<string, string>
                          )[JSON.stringify([device])]
                        }
                      </StyledatomsDefault>
                    )}
                    {state === "Open" && <ChevronControl direction={"Right"} />}
                  </StyledControls>
                )}
              </StyledSelectionRow>
            )}
            {state === "Open" && (
              <StyledCalendarGrid>
                {state === "Open" && (
                  <StyledDaysOfTheWeek>
                    {state === "Open" && (
                      <StyledSunday>
                        {state === "Open" && <StyledDate>{"S"}</StyledDate>}
                      </StyledSunday>
                    )}
                    {state === "Open" && (
                      <StyledMonday>
                        {state === "Open" && <StyledDate2>{"M"}</StyledDate2>}
                      </StyledMonday>
                    )}
                    {state === "Open" && (
                      <StyledTuesday>
                        {state === "Open" && <StyledDate3>{"T"}</StyledDate3>}
                      </StyledTuesday>
                    )}
                    {state === "Open" && (
                      <StyledWednesday>
                        {state === "Open" && <StyledDate4>{"W"}</StyledDate4>}
                      </StyledWednesday>
                    )}
                    {state === "Open" && (
                      <StyledThursday>
                        {state === "Open" && <StyledDate5>{"T"}</StyledDate5>}
                      </StyledThursday>
                    )}
                    {state === "Open" && (
                      <StyledFriday>
                        {state === "Open" && <StyledDate6>{"F"}</StyledDate6>}
                      </StyledFriday>
                    )}
                    {state === "Open" && (
                      <StyledSaturday>
                        {state === "Open" && <StyledDate7>{"S"}</StyledDate7>}
                      </StyledSaturday>
                    )}
                  </StyledDaysOfTheWeek>
                )}
                {state === "Open" && (
                  <StyledWeek1>
                    {state === "Open" && (
                      <StyledDatePickerBlocks>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"26"}
                          type={"Prev/Next"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks2>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"27"}
                          type={"Prev/Next"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks2>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks3>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"28"}
                          type={"Prev/Next"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks3>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks4>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"29"}
                          type={"Prev/Next"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks4>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks5>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"30"}
                          type={"Prev/Next"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks5>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks6>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"31"}
                          type={"Prev/Next"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks6>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks7>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"1"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks7>
                    )}
                  </StyledWeek1>
                )}
                {state === "Open" && (
                  <StyledWeek6>
                    {state === "Open" && (
                      <StyledDatePickerBlocks8>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"2"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks8>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks22>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"3"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks22>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks32>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"4"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks32>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks42>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"5"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks42>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks52>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"6"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks52>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks62>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"7"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks62>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks72>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"8"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks72>
                    )}
                  </StyledWeek6>
                )}
                {state === "Open" && (
                  <StyledWeek7>
                    {state === "Open" && (
                      <StyledDatePickerBlocks9>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"9"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks9>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks23>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"10"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks23>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks33>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"11"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks33>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks43>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"12"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks43>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks53>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"13"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks53>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks63>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"14"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks63>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks73>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"15"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks73>
                    )}
                  </StyledWeek7>
                )}
                {state === "Open" && (
                  <StyledWeek8>
                    {state === "Open" && (
                      <StyledDatePickerBlocks10>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"16"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks10>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks24>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"17"}
                          type={"Selected"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks24>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks34>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"18"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks34>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks44>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"19"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks44>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks54>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"20"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks54>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks64>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"21"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks64>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks74>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"22"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks74>
                    )}
                  </StyledWeek8>
                )}
                {state === "Open" && (
                  <StyledWeek9>
                    {state === "Open" && (
                      <StyledDatePickerBlocks11>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"23"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks11>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks25>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"24"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks25>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks35>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"25"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks35>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks45>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"26"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks45>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks55>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"27"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks55>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks65>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"28"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks65>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks75>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"29"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks75>
                    )}
                  </StyledWeek9>
                )}
                {state === "Open" && (
                  <StyledWeek10>
                    {state === "Open" && (
                      <StyledDatePickerBlocks12>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"30"}
                          type={"Default"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks12>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks26>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"1"}
                          type={"Prev/Next"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks26>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks36>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"2"}
                          type={"Prev/Next"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks36>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks46>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"3"}
                          type={"Prev/Next"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks46>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks56>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"4"}
                          type={"Prev/Next"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks56>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks66>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"5"}
                          type={"Prev/Next"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks66>
                    )}
                    {state === "Open" && (
                      <StyledDatePickerBlocks76>
                        <DatePickerBlocks
                          showFocusIndicator={true}
                          date={"6"}
                          type={"Prev/Next"}
                          state={"Enabled"}
                        />
                      </StyledDatePickerBlocks76>
                    )}
                  </StyledWeek10>
                )}
              </StyledCalendarGrid>
            )}
            {state === "Open" && (
              <StyledLocalActions>
                {state === "Open" && (
                  <StyledButtonContainer>
                    {state === "Open" && (
                      <StyledButton>
                        <Button
                          label={true}
                          bTNValue={"Cancel"}
                          rightIcon={false}
                          leftIcon={false}
                          iconOnly={"False"}
                          device={"Desktop"}
                          size={"Small"}
                          hierarchy={"Tertiary"}
                          type={"Default"}
                        />
                      </StyledButton>
                    )}
                    {state === "Open" && (
                      <StyledButton2>
                        <Button
                          label={true}
                          bTNValue={"Save"}
                          rightIcon={false}
                          leftIcon={false}
                          iconOnly={"False"}
                          device={"Desktop"}
                          size={"Small"}
                          hierarchy={"Primary"}
                          type={"Default"}
                        />
                      </StyledButton2>
                    )}
                  </StyledButtonContainer>
                )}
              </StyledLocalActions>
            )}
          </StyledDatePicker>
        )}
        {device === "Mobile" && (
          <StyledMobileDropdown>
            <MobileDropdown state={"Default"} />
          </StyledMobileDropdown>
        )}
      </StyledRoot>
    );
  },
);
