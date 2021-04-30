import styled from 'styled-components'

export const Styles = styled.div`
    table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid #e8eaed;
    overflow: auto;
    font-size: 0.9rem;
    thead{
        
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
      /* :nth-child(3),
      :nth-child(5) {
        font-style: italic;
      } */
     
    }
  
    td {
      :nth-child(2) {
        white-space: normal;
      }
     
    }
    th {
        position: sticky;
        white-space: normal;
        :nth-child(2) {
            text-align: left;
            padding-left: 0;
        }
    }
  }
`;

