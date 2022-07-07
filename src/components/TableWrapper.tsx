import styled from "styled-components"
interface TableWrapperProps {
  rotateButton?: boolean;
  openClickedRow?: boolean;
  dataType?: string;
}

const TableWrapper = styled.table<TableWrapperProps>`
	display: table;
	width: 100%;
	height: 100%;
	font-size: 14px;
	border: 2px solid #ff713a;
	border-radius: 4px;
	border-collapse: separate;
	margin: 10px;
	color: #0d6473;
	overflow: hidden;
	width: -webkit-fill-available;
  font-family: 'Roboto', sans-serif;
  min-width: 365px;

  @media (max-width: 768px) {
    margin: 5px;
  }

  .dashboard {
    &__head {
      border: none;
      height: 50px;
      
      &-row {
        height: 100%;
			  border: none;
			  display: flex;
			  flex-direction: row;
        
        &--cell {
          height: 100%;
          font-weight: bold;
          border: none;
          display: flex;
          align-items: center;
          width: 100%;
          padding: 10px;

          @media (max-width: 768px) {
            display: ${({ openClickedRow }) => openClickedRow ? 'flex' : 'none'};
  
            :nth-child(-n + 2) {
              display: flex;
            }
          }
          
          p {
            margin: 0 10px 0 0;
          }
          
          .arrow-button__name {
            transform: ${({ rotateButton, dataType }) => rotateButton && dataType === 'name' && 'rotate(180deg)'};
            position: relative;
            cursor: pointer;
          }

          .arrow-button__status {
            transform: ${({ rotateButton, dataType }) => rotateButton && dataType === 'status' && 'rotate(180deg)'};
            position: relative;
            cursor: pointer;
          }
        }
		  }
	  }
  }
`;
  
export default TableWrapper;