import React from "react";
import styled, { css } from "styled-components";
import { TableCell } from "../TableCell";

export interface TableProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "column" | "row"
> {
  column?: 2 | 3 | 4 | 5;
  row?: 2 | 3 | 4 | 5;
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: 480px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #d1d1d1;
    border-radius: 8px;
  `,
);

const StyledColumn = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledTableCell = styled.li(
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

const StyledTableCell2 = styled.li(
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

const StyledTableCell3 = styled.li(
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

const StyledTableCell4 = styled.li(
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

const StyledTableCell5 = styled.li(
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

const StyledColumn2 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledTableCell6 = styled.li(
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

const StyledTableCell22 = styled.li(
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

const StyledTableCell32 = styled.li(
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

const StyledTableCell42 = styled.li(
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

const StyledTableCell52 = styled.li(
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

const StyledColumn3 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledTableCell7 = styled.li(
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

const StyledTableCell23 = styled.li(
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

const StyledTableCell33 = styled.li(
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

const StyledTableCell43 = styled.li(
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

const StyledTableCell53 = styled.li(
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

const StyledColumn4 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledTableCell8 = styled.li(
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

const StyledTableCell24 = styled.li(
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

const StyledTableCell34 = styled.li(
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

const StyledTableCell44 = styled.li(
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

const StyledTableCell54 = styled.li(
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

const StyledColumn5 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledTableCell9 = styled.li(
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

const StyledTableCell25 = styled.li(
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

const StyledTableCell35 = styled.li(
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

const StyledTableCell45 = styled.li(
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

const StyledTableCell55 = styled.li(
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

/** A configurable data table component with a variable number of columns (2–5) and rows (2–5), composed of Table/Cell instances arranged in vertical column containers. */
export const Table = React.forwardRef<HTMLDivElement, TableProps>(
  function Table({ column = 2, row = 2, ...rest }, ref) {
    return (
      <StyledRoot role="table" aria-label="Data table" {...rest} ref={ref}>
        <StyledColumn>
          <StyledTableCell>
            <TableCell hasCopy={false} type={"Header"} state={"Default"} />
          </StyledTableCell>
          <StyledTableCell2>
            <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
          </StyledTableCell2>
          {[3, 4, 5].includes(row) && (
            <StyledTableCell3>
              <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
            </StyledTableCell3>
          )}
          {[4, 5].includes(row) && (
            <StyledTableCell4>
              <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
            </StyledTableCell4>
          )}
          {row === 5 && (
            <StyledTableCell5>
              <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
            </StyledTableCell5>
          )}
        </StyledColumn>
        <StyledColumn2>
          <StyledTableCell6>
            <TableCell hasCopy={false} type={"Header"} state={"Default"} />
          </StyledTableCell6>
          <StyledTableCell22>
            <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
          </StyledTableCell22>
          {[3, 4, 5].includes(row) && (
            <StyledTableCell32>
              <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
            </StyledTableCell32>
          )}
          {[4, 5].includes(row) && (
            <StyledTableCell42>
              <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
            </StyledTableCell42>
          )}
          {row === 5 && (
            <StyledTableCell52>
              <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
            </StyledTableCell52>
          )}
        </StyledColumn2>
        {[3, 4, 5].includes(column) && (
          <StyledColumn3>
            {[3, 4, 5].includes(column) && (
              <StyledTableCell7>
                <TableCell hasCopy={false} type={"Header"} state={"Default"} />
              </StyledTableCell7>
            )}
            {[3, 4, 5].includes(column) && (
              <StyledTableCell23>
                <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
              </StyledTableCell23>
            )}
            {((column === 3 && row === 3) ||
              (column === 4 && row === 3) ||
              (column === 5 && row === 3) ||
              (column === 3 && row === 4) ||
              (column === 4 && row === 4) ||
              (column === 5 && row === 4) ||
              (column === 3 && row === 5) ||
              (column === 4 && row === 5) ||
              (column === 5 && row === 5)) && (
              <StyledTableCell33>
                <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
              </StyledTableCell33>
            )}
            {((column === 3 && row === 4) ||
              (column === 4 && row === 4) ||
              (column === 5 && row === 4) ||
              (column === 3 && row === 5) ||
              (column === 4 && row === 5) ||
              (column === 5 && row === 5)) && (
              <StyledTableCell43>
                <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
              </StyledTableCell43>
            )}
            {((column === 3 && row === 5) ||
              (column === 4 && row === 5) ||
              (column === 5 && row === 5)) && (
              <StyledTableCell53>
                <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
              </StyledTableCell53>
            )}
          </StyledColumn3>
        )}
        {[4, 5].includes(column) && (
          <StyledColumn4>
            {[4, 5].includes(column) && (
              <StyledTableCell8>
                <TableCell hasCopy={false} type={"Header"} state={"Default"} />
              </StyledTableCell8>
            )}
            {[4, 5].includes(column) && (
              <StyledTableCell24>
                <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
              </StyledTableCell24>
            )}
            {((column === 4 && row === 3) ||
              (column === 5 && row === 3) ||
              (column === 4 && row === 4) ||
              (column === 5 && row === 4) ||
              (column === 4 && row === 5) ||
              (column === 5 && row === 5)) && (
              <StyledTableCell34>
                <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
              </StyledTableCell34>
            )}
            {((column === 4 && row === 4) ||
              (column === 5 && row === 4) ||
              (column === 4 && row === 5) ||
              (column === 5 && row === 5)) && (
              <StyledTableCell44>
                <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
              </StyledTableCell44>
            )}
            {((column === 4 && row === 5) || (column === 5 && row === 5)) && (
              <StyledTableCell54>
                <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
              </StyledTableCell54>
            )}
          </StyledColumn4>
        )}
        {column === 5 && (
          <StyledColumn5>
            {column === 5 && (
              <StyledTableCell9>
                <TableCell hasCopy={false} type={"Header"} state={"Default"} />
              </StyledTableCell9>
            )}
            {column === 5 && (
              <StyledTableCell25>
                <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
              </StyledTableCell25>
            )}
            {((column === 5 && row === 3) ||
              (column === 5 && row === 4) ||
              (column === 5 && row === 5)) && (
              <StyledTableCell35>
                <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
              </StyledTableCell35>
            )}
            {((column === 5 && row === 4) || (column === 5 && row === 5)) && (
              <StyledTableCell45>
                <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
              </StyledTableCell45>
            )}
            {column === 5 && row === 5 && (
              <StyledTableCell55>
                <TableCell hasCopy={false} type={"Normal"} state={"Default"} />
              </StyledTableCell55>
            )}
          </StyledColumn5>
        )}
      </StyledRoot>
    );
  },
);
