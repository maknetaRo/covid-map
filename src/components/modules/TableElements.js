import styled from 'styled-components';

export const Styles = styled.div`
  table {
    width: 100%;
    border-spacing: 0;
    /* border: 1px solid #e8eaed; */
    overflow: auto;
    font-size: 0.9rem;
    thead {
    }
    tr {
      :first-child {
        display: none;
      }
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid #e8eaed;
      border-right: 0;
      white-space: nowrap;
      :last-child {
        border-right: 0;
      }
    }

    td {
      :nth-child(1) {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
      :nth-child(2) {
        white-space: normal;
        padding-right: 0.5rem;
      }
    }
    th {
      font-family: 'Noto Sans JP', sans-serif;
      font-weight: 300;
      font-size: 0.9rem;
      text-align: left;
      padding-left: 0;
      white-space: normal;
      :nth-child(1) {
        padding-right: 0;
      }
      :nth-child(n + 3) {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
      }
    }
    .sort-desc {
      :nth-child(n + 3) {
        box-shadow: none !important;
        &:after {
          content: '↓';
          float: right;
          padding-left: 2px;
        }
      }
    }

    .sort-asc {
      :nth-child(n + 3) {
        box-shadow: none !important;

        &:after {
          content: '↑';
          float: right;
          padding-left: 2px;
        }
      }
    }
  }
`;
